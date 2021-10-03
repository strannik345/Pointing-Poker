import React, { useCallback, useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container, Modal } from '@material-ui/core';
import { LobbyMemberCard } from '../memberCard/LobbyMemberCard';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/hooks';
import { useParams } from 'react-router';
import { NoMatchPage } from '../../pages/404page/NoMatchPage';

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

export interface MemberListProps {
  scramMaster: boolean;
}

export const MembersList: React.FC<MemberListProps> = ({scramMaster})=> {
    const [openModal, setOpenModal] = useState<boolean>(true);
    const [memberList, setMemberList] = useState<IUser[]>([]); 
    const player = useTypedSelector(state => state.player);
    const {gameURL} = useTypedSelector(state => state.gameURL);
    const {socket} = useTypedSelector(state=> state.socket)
    const params = useParams<any>();
    
    
    useEffect(() => {
      console.log('in member list', params.id);      
      connectToServer();
    }, [])

    const connectToServer = () => {  
      console.log(socket.OPEN);
      if(socket.OPEN) {
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
      socket.onmessage = (event: any) => {
        const type = JSON.parse(event.data).type;
        console.log(type);
        if(type === 'connection'){
          const users: IUser[] = JSON.parse(event.data).msg[0].players;   
          setMemberList(users);
        } else if(type === 'update-players') {
          const users: IUser[] = JSON.parse(event.data).msg[0].players;   
          setMemberList(users);
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
          memberList.some(member=> member.id === player.id) || scramMaster ?
            <>
              {
                memberList.map(member=>             
                      !member.isScrumMaster || !scramMaster ?
                      <LobbyMemberCard size={{isSmall:false}} userInfo={member} />
                      :
                      <></>           
                )
              }
            </>            
            :
            <Modal open={openModal} onClose={() => setOpenModal(prev => !prev)} disableBackdropClick  >
              <div>You have been kicked from the server</div>
            </Modal>
        }        
      </Container>
    </>
    );
}