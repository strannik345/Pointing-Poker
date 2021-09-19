import { Box, Button, Container, Modal, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/hooks';
import { ModalForm } from './ModalForm';
import './startPage.css'

export const StartPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [m, setM] = useState<any[]>([]);
  const dispatch = useDispatch();
  // const { gameURL } = useTypedSelector(state => state.gameURL);
  
  const urlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = event.target.value.split('').reverse().findIndex(i => i=== '=');
    const gameID = event.target.value.split('').reverse().slice(0, index).reverse().join('');
    console.log(gameID);
    dispatch({type: "CHANGE_GameURL", payload: {gameURL: gameID}});
  }

  useEffect(()=> {
    const socket = new WebSocket('ws://shielded-plains-14826.herokuapp.com/');
    socket.onmessage= (event) => {
      console.log('get message');
      const type = JSON.parse(event.data).type;
      console.log(type);
      if(type === 'chat-message'){
        const message = JSON.parse(event.data).msg;        
        console.log(message);
        setM(prev => {return [...prev, message] });
      }
    }
  },[])

  const click = () => {
    console.log('clicked')
    const socket = new WebSocket('ws://shielded-plains-14826.herokuapp.com/');
    socket.onopen = () => {
      console.log('connected for chat'); 
      socket.send(JSON.stringify({
        method: 'chat-message',
        msg: 'hello',
      }))     
    } 
    
  }

  return (
    <>
      <Container maxWidth="md" style={{height: '80vh', minHeight: '600px', marginBottom: '70px'}}>
        <Paper elevation={3} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} >
          <div className="start-img"></div>        
          <Container style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" height={40}>
              <Typography style={{color: 'black'}}>Create new session</Typography>
              {/* <Link to='/lobby'> */}
                <Button variant="contained" color="primary" onClick={click}>Start new game</Button>
              {/* </Link> */}
              {
                m.map(i => <div>i</div>)
              }
            </Box>
            <Box display="flex" flexDirection="column" >
              <Typography style={{color: 'black'}}>Connect to lobby by URL:</Typography>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <TextField onChange={urlHandler} size="small" id="input-url" label="URL" variant="outlined" style={{width: '400px'}}/>
                <Button variant="contained" color="primary" onClick={() => setOpenModal(prev => !prev)}>Connect</Button>
              </Box>
            </Box>
          </Container>        
        </Paper>
        {
          <Modal open={openModal} onClose={() => setOpenModal(prev => !prev)}>
            <ModalForm setIsOpen={setOpenModal}></ModalForm>
          </Modal>          
        }
      </Container>
    </>
  )
}