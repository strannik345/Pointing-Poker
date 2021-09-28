import React, { useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { LobbyMemberCard } from '../memberCard/LobbyMemberCard';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/hooks';
import { useParams } from 'react-router';

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
  isScrumMaster: boolean;
}

export const MembersList: React.FC =()=> {
    const [memberList, setMemberList] = useState<IUser[]>([]); 
    const player = useTypedSelector(state => state.player);
    const {gameURL} = useTypedSelector(state => state.gameURL);
    const params = useParams<any>();

    useEffect(() => {
      console.log('in member list', params.id);
      connectToServer();
    }, [])

    const connectToServer = () => {
      const socket = new WebSocket(`ws://${process.env.REACT_APP_SERVER}`);
      socket.onopen = () => {
        if(player.isScrumMaster) {
          console.log('start-server', player); 
          socket.send(JSON.stringify({
            id: params.id,
            method: 'start-server',
            msg: {...player}
          }))       
        } else {
          socket.send(JSON.stringify({
            id: params.id,
            method: 'connection',
            msg: {...player}
          }))
        }
      }
      socket.onmessage = (event) => {
        const type = JSON.parse(event.data).type;
        console.log(type);
        if(type === 'connection'){
          const users: IUser[] = JSON.parse(event.data).msg[0].players;   
          console.log(users);     
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