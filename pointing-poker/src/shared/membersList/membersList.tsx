import React, { useCallback, useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container, Modal, Paper, Button, Box } from '@material-ui/core';
import { LobbyMemberCard } from '../memberCard/LobbyMemberCard';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/hooks/hooks';
import { Redirect, useHistory, useParams } from 'react-router';
import { NoMatchPage } from '../../pages/404page/NoMatchPage';
import { isConstructorDeclaration } from 'typescript';
import { useTheme } from '@material-ui/styles';

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
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [memberList, setMemberList] = useState<IUser[]>([]); 
    const [deleteUser, setDeleteUser] = useState<IUser>();
    const player = useTypedSelector(state => state.player);
    const {gameURL} = useTypedSelector(state => state.gameURL);
    const {socketUser} = useTypedSelector(state=> state.socket)
    const history = useHistory()
    const params = useParams<any>();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
      console.log('in member list', params.id);      
      connectToServer();
    }, [])

    const clearServerInfo = () => {
      sessionStorage.clear()
      history.replace('/')
    }

    const connectToServer = () => {  
      if(socketUser.readyState === 1) {
        console.log('ready');
        if(!player.isScrumMaster) {          
          socketUser.send(JSON.stringify({
            id: params.id,
            method: 'connection',
            msg: {...player}
          }))
        }
      } else {
        console.log('not ready');
        socketUser.onopen = () => {
          console.log('sending fir not ready')
          socketUser.send(JSON.stringify({
            id: params.id,
            method: 'connection',
            msg: {...player},
          }))
        }
      }
      socketUser.onmessage = (event: any) => {
        const type = JSON.parse(event.data).type;
        console.log(event.data)
        console.log(type); 
        if(type === 'connection'){
          const users: IUser[] = JSON.parse(event.data).msg[0].players;   
          setMemberList(users);
        } else if(type === 'update-players') {
          const users: IUser[] = JSON.parse(event.data).msg[0].players;   
          setMemberList(users);
          setOpenDeleteModal(false);
        }  else if(type === 'start-game') {
            console.log('game-started')
            history.replace(`/game/${params.id}`);
        } else if(type === 'vote-for-delete-player') {
          console.log('voting for delete', JSON.parse(event.data).msg)
          const userToDelete: IUser = JSON.parse(event.data).msg.msg;
          if(userToDelete.id !== player.id) {
            setOpenDeleteModal(prev => !prev)
            setDeleteUser(userToDelete);
          }
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
              <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
                <Paper elevation={3} component='form' style={{width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                  <Typography component='h2' variant='h3' color='textPrimary' style={{textTransform: 'uppercase'}}>You have been kicked from the server</Typography>
                  <Button onClick={clearServerInfo}>OK</Button>
                </Paper>
              </Container>
            </Modal>
        }       
        <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(prev => !prev)} disableBackdropClick  >
          <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
            <Paper elevation={3} component='form' style={{width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
              <Typography component='h3' variant='h5' color='textPrimary' style={{textTransform: 'uppercase', width: '90%', textAlign: 'center'}}>Поступило предложение об исключении {deleteUser?.name}</Typography>
              <Box display='flex' flexDirection='row'>
                <Button variant="contained" color="primary" onClick={()=> {
                  socketUser.send(JSON.stringify({
                    id: params.id,
                    method: 'get-votes',
                    msg: {
                      desision: true,
                      player: deleteUser,
                    }
                  }))
                  setOpenDeleteModal(prev => !prev)
                }}>Исключить</Button>
                <Button variant="contained" color="secondary" onClick={() => setOpenDeleteModal(prev => !prev)}>Оставить</Button>
              </Box>
            </Paper>
          </Container>
        </Modal> 
      </Container>
    </>
    );
}