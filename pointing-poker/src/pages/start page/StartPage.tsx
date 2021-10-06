import { Box, Button, Container, Modal, Paper, TextField, Typography } from '@material-ui/core';
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/hooks';
import { ModalForm } from './ModalForm';
import './startPage.css'

export const StartPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const idRef = useRef<HTMLInputElement>()
  const dispatch = useDispatch();
  const history = useHistory();
  const { gameURL } = useTypedSelector(state => state.gameURL);
  const player = useTypedSelector(state => state.player);
  const {socketUser} = useTypedSelector(state => state.socket)
  
  const urlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch({type: "CHANGE_GameURL", payload: {gameURL: event.target.value}});
  }  

  useEffect(()=> {
    socketUser.onmessage = (event: any) => {
      const type = JSON.parse(event.data).type;
      console.log(event.data)
      console.log(type); 
      if(type === 'start-server'){
        history.push(`/lobby/${JSON.parse(event.data).msg}`)
      } 
    }
  },[])

  return (
    <>
      <Container maxWidth="md" style={{height: '80vh', minHeight: '600px', marginBottom: '70px'}}>
        <Paper elevation={3} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} >
          <div className="start-img"></div>        
          <Container style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" height={40}>
              <Typography style={{color: 'black'}}>Create new session</Typography>
                <Button variant="contained" color="primary" onClick={()=> {
                  const id = `f${(+new Date()).toString(16)}`;
                  dispatch({type: 'CHANGE_PLAYER', payload: {...player, isScrumMaster: true}});
                  dispatch({type: "CHANGE_GameURL", payload: {gameURL: id}});                  
                  socketUser.send(JSON.stringify({
                    id: id,
                    method: 'start-server',
                    msg: {...player},
                  })) 
                }}>Start new game</Button>              
            </Box>
            <Box display="flex" flexDirection="column" >
              <Typography style={{color: 'black'}}>Connect to lobby by Id:</Typography>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <TextField inputRef={idRef} size="small" id="input-url" label="URL" variant="outlined" 
                style={{width: '400px'}}/>
                <Button variant="contained" color="primary" onClick={() => { 
                  dispatch({type: 'CHANGE_PLAYER', payload: {...player, isScrumMaster: false}}); 
                  console.log(player);            
                  history.push(`/lobby/${idRef.current?.value}`)
                }}>Connect</Button>
              </Box>
            </Box>
          </Container>        
        </Paper>
        {
          <Modal open={openModal} onClose={() => setOpenModal(prev => !prev)} disableBackdropClick  >
            <ModalForm setIsOpen={setOpenModal}></ModalForm>
          </Modal>          
        }
      </Container>
    </>
  )
}