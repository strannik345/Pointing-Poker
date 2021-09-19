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
  isObserver: boolean;
}

export const MembersList: React.FC =()=> {
    const [memberList, setMemberList] = useState<IUser[]>([]); 


    useEffect(() => {
      connectToServer();
    }, [])

    const connectToServer = () => {
      const socket = new WebSocket('ws://shielded-plains-14826.herokuapp.com/');
      socket.onopen = () => {
        console.log('connected'); 
        socket.send(JSON.stringify({
          method: 'first-connection',
        }))       
      }
      socket.onmessage = (event) => {
        const type = JSON.parse(event.data).type;
        console.log(type);
        if(type === 'connection'){
          const users: IUser[] = JSON.parse(event.data).msg;        
          setMemberList(users);
          console.log(users);
          console.log(memberList);
        }
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