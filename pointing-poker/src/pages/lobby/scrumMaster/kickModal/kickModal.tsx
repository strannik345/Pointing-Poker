import { Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Player } from "../../../../interfaces/player";

export const KickModal: React.FC<Player> = (player: Player) => {
  return (    
    <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)'}}>      
      <Paper elevation={3} style={{width:'80vw', maxWidth: '880px', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '30px'}}>
        <Typography variant='h3' color='textPrimary'>
            Kick player?
        </Typography> 
        <Typography variant='h5' color='textPrimary'>
            Are you really want to remove player {player.name} from game session?
        </Typography>       
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '90%'}}>
          <Button variant='contained' color='primary' style = {{width:"190px"}}>Yes</Button>
          <Button variant='outlined' style = {{width:"190px"}} onClick={()=>{}}>No</Button>
        </div>
      </Paper>
    </Container>
  )
}