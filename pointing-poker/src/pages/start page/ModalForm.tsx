import { Box, Button, Container, FormControlLabel, Paper, Switch, TextField, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { IStartModalProp } from "../../interfaces/IStartModalProp";
import { useTypedSelector } from "../../store/hooks/hooks";
import axios from 'axios';
import { uploadImage } from "../../services/uploadImage";

export const ModalForm: React.FC<IStartModalProp> = (prop: IStartModalProp) => {
  const [avatar, setAvatar] = useState<string>("");
  const [observer, setObserver] = useState<boolean>(false);
  const { setIsOpen } = prop; 
  const dispatch = useDispatch();
  const {lastName, name, position} = useTypedSelector(state => state.player);
  const {gameURL} = useTypedSelector(state => state.gameURL);
  const formData = { 
    name: useRef<HTMLInputElement>(),
    lastName: useRef<HTMLInputElement>(),
    position: useRef<HTMLInputElement>()
  };
  const handleUploadImage = (file:File | null) =>{
    uploadImage(file).then((response) => {
      setAvatar(response.data.public_id);
    })
  }
  // const uploadImage= async (file:File | null)=>{
  //   const imageData = new FormData();
  //   file && imageData.append("file", file);
  //   imageData.append("upload_preset", "pqlbzyac");
  //   await axios.post("https://api.cloudinary.com/v1_1/pointingpoker/image/upload", 
  //   imageData).then((response)=>{
  //     setAvatar(response.data.public_id);
  //   })
  // }
  const history = useHistory();
  return (    
    <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
      <Paper elevation={3} component='form' style={{width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <Typography component='h2' variant='h3' color='textPrimary' style={{textTransform: 'uppercase'}}>Enter your user</Typography>
        <TextField inputRef={formData.name} label='First Name' required type='text' variant='outlined' style={{width: '70%'}}/>
        <TextField inputRef={formData.lastName} label='Last Name' required type='text' variant='outlined' style={{width: '70%'}}/>
        <TextField inputRef={formData.position} label='Job position' required type='text' variant='outlined' style={{width: '70%'}}/>
        <Box display="flex" flexDirection="row" justifyContent="space-between" width={'70%'}>
          <div>
            <input accept='image/*' id='input-avatar' 
                  type='file' 
                  style={{display: 'none'}}
                  onChange={(event)=>{ event.target.files && handleUploadImage(event.target.files[0])}}/>
            <label htmlFor='input-avatar'>
              <Button variant="outlined" color="primary" component="span">Upload avatar</Button>
            </label>
          </div>
          <FormControlLabel 
            control={<Switch
                checked={observer}
                onChange={() => setObserver(prev => !prev)}
                name="observer"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />}
              label='Join as observer'
          />
        </Box>        
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '90%'}}>
          <Button variant='contained' color='primary' onClick={()=>{
            dispatch({type: 'CHANGE_PLAYER', payload: { lastName: formData.lastName.current?.value, name: formData.name.current?.value, isObserver: observer, position: formData.position.current?.value, avatar: avatar}});            
            setIsOpen(false);
          }}>Confirm</Button>
          <Button variant='contained' color='secondary' onClick={()=>setIsOpen(false)}>Cancel</Button>
        </div>
      </Paper>
    </Container>
  )
}