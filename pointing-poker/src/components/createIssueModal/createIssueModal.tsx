import { Box, Button, Container, FormControl, FormControlLabel, InputLabel, Paper, Select, Switch, TextField, Typography } from "@material-ui/core";
import React from "react";

export const CreateIssueModal: React.FC = () => {
  return (    
    <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
      <Paper elevation={3} component='form' style={{paddingLeft: '50px', width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'start'}}>
        <Typography component='h2' variant='h3' color='textPrimary'>Create issue</Typography>
        <TextField label='Title' required type='text' variant='outlined' style={{width: '70%'}}/>
        <TextField label='Link' required type='text' variant='outlined' style={{width: '70%'}}/>
        <FormControl style = {{margin: "10px", minWidth: "120px"}}>
            <InputLabel htmlFor="Priority">Priority</InputLabel>
            <Select style={{width: '100%'}}
            native
            onChange={()=>{}}
            >
                <option aria-label="None" value="" />
                <option value={"low"}>Low</option>
                <option value={"middle"}>Middle</option>
                <option value={"hight"}>Hight</option>
            </Select>
      </FormControl>     
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '90%'}}>
          <Button variant='contained' color='primary' style = {{width:"190px"}}>Yes</Button>
          <Button variant='outlined' style = {{width:"190px"}} onClick={()=>{}}>No</Button>
        </div>
      </Paper>
    </Container>
  )
}