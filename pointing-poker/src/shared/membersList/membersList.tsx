import React, { useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { LobbyMemberCard } from '../memberCard/LobbyMemberCard';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/hooks';

interface IGame {
  gameID: number;
  users: IUser[];
}

export interface IUser{
  id: string;
  avatar: string;
  name: string;
  lastName: string;
  position: string;
  isBlocked: boolean;
  isObserver: boolean;
}

export const MembersList: React.FC =()=> {
    const [memberList, setMemberList] = useState<IUser[]>([]);    
    const dispatch = useDispatch();
    const gameURL = useTypedSelector(state => state.gameURL.gameURL);
    useEffect(()=> {
        getCurrentUsers();
        subscribeMembers(); 
    }, [gameURL]);

    const getCurrentUsers = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-all-users?gameID=${gameURL}`); //gameId from redux change then
          const members: IGame[] = await response.json(); 
          setMemberList(members[0].users);                   
        } catch (e) {
          getCurrentUsers();
        }
    }

    const subscribeMembers = async () => {
        console.log(gameURL);
        try {             
            const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-users?gameID=${gameURL}`);
            const members: IGame[] = await response.json();
            console.log(members[0].users);
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