import { Box, Button, Container, FormControlLabel, Paper, Switch, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ModalProp {
  setIsOpen(isopen: boolean): void;
}

export const ModalForm: React.FC<ModalProp> = (prop: ModalProp) => {
  const [isObserver, setIsObserver] = useState<boolean>(false);
  const { setIsOpen } = prop;
  const dispatch = useDispatch();
  const player = useSelector(state => state)
  return (    
    <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
      <Paper elevation={3} component='form' style={{width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <Typography component='h2' variant='h3' color='textPrimary' style={{textTransform: 'uppercase'}}>connect to lobby</Typography>
        <TextField label='First Name' required type='text' variant='outlined' style={{width: '70%'}}/>
        <TextField label='Last Name' required type='text' variant='outlined' style={{width: '70%'}}/>
        <TextField label='Job position' required type='text' variant='outlined' style={{width: '70%'}}/>
        <Box display="flex" flexDirection="row" justifyContent="space-between" width={'70%'}>
          <div>
            <input accept='image/*' id='input-avatar' type='file' style={{display: 'none'}}/>
            <label htmlFor='input-avatar'>
              <Button variant="outlined" color="primary" component="span">Upload avatar</Button>
            </label>
          </div>
          <FormControlLabel
            control={<Switch
                checked={isObserver}
                onChange={() => setIsObserver(prev => !prev)}
                name="isObserver"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />}
              label='Join as observer'
          />
        </Box>        
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '90%'}}>
          <Button variant='contained' color='primary'>Confirm</Button>
          <Button variant='contained' color='secondary' onClick={()=>setIsOpen(false)}>Cancel</Button>
        </div>
      </Paper>
    </Container>
  )
}