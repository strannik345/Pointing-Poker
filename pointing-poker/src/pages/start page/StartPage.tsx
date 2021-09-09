import { Box, Button, Container, Modal, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { ModalForm } from './ModalForm';
import './startPage.css'

export const StartPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Container maxWidth="md" style={{height: '80vh', minHeight: '600px', marginBottom: '70px'}}>
        <Paper elevation={3} style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}} >
          <div className="start-img"></div>        
          <Container style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" height={40}>
              <Typography style={{color: 'black'}}>Create new session</Typography>
              <Button variant="contained" color="primary">Start new game</Button>
            </Box>
            <Box display="flex" flexDirection="column" >
              <Typography style={{color: 'black'}}>Connect to lobby by URL:</Typography>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <TextField size="small" id="input-url" label="URL" variant="outlined" style={{width: '400px'}}/>
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