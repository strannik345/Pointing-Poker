import { Box, Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import './startPage.css'

export const StartPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="sm" style={{height: '600px'}}>
        <Paper elevation={3} style={{height: '90%'}} >
          <div className="start-img"></div>        
          <Container style={{width: '100%', height: '70%', display: 'flex', flexDirection: 'column'}}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" height={40}>
              <Typography style={{color: 'black'}}>Create new session</Typography>
              <Button variant="contained" color="primary">Start new game</Button>
            </Box>
            <Box display="flex" flexDirection="column" >
              <Typography style={{color: 'black'}}>Connect to lobby by URL:</Typography>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <TextField size="small" id="input-url" label="URL" variant="outlined" style={{width: '400px'}}/>
                <Button variant="contained" color="primary">Connect</Button>
              </Box>
            </Box>
          </Container>        
        </Paper>
      </Container>
    </>
  )
}