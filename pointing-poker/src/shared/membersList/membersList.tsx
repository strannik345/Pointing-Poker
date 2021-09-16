import React, { useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { MemberCard } from '../memberCard/memberCard';
import { Player } from '../../interfaces/player';
import { LobbyMemberCard } from '../memberCard/LobbyMemberCard';

interface IGame {
  gameID: number;
  users: IUser[];
}

export interface IUser{
  id: number;
  avatar: string;
  name: string;
  position: string;
  isBlocked: boolean;
  isObserver: boolean;
}

export const MembersList: React.FC =()=> {
    const [memberList, setMemberList] = useState<IUser[]>([])
    useEffect(()=> {
        getCurrentUsers();
        subscribeMembers();
    }, []);

    const getCurrentUsers = async () => {
        console.log('1');
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-all-users?gameID=3`); //gameId from redux change then
        const members: IGame[] = await response.json();     
        console.log(members[0].users);
        setMemberList(prev => members[0].users);
        console.log(memberList);
    }

    const subscribeMembers = async () => {
        console.log('2');
        try {             
            const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-users?gameID=3`);
            const members = await response.json();
            setMemberList(members[0].users);
            await subscribeMembers()
        } catch(e) {
            setTimeout(() => {
                subscribeMembers();
            }, 500);
        }
    } 

    return(
    <>
      <Container style={{width: '1000px', paddingTop: "100px"}}>
          <Typography className = "lobby--title lobby--title__primary">Members:</Typography>
      </Container>
      <Container className = "team-members">
        {
          memberList.map(member=> <LobbyMemberCard size={{isSmall:false}} userInfo={member}/>)
        }        
      </Container>
    </>
    );
}