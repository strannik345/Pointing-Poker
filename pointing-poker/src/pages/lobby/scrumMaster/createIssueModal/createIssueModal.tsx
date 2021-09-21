import { Button, Container, FormControl, InputLabel, Paper, Select, TextField, Typography } from "@material-ui/core";
import { stringify } from "querystring";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { IIssue, ScramInfoActionTypes } from "../../../../interfaces/IScramInfo";
import { ICreateIssueProp } from "../../../../interfaces/IssueProp";
import { useTypedSelector } from "../../../../store/hooks/hooks";

export const CreateIssueModal: React.FC<ICreateIssueProp> = (prop: ICreateIssueProp) => {
  const [priority, setPriority] = useState<string |unknown>("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const { setIsOpen } = prop;
  const dispatch = useDispatch();
  const gameSettings = useTypedSelector(state => state.gameSettings);
  const handlePriorityChange = (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) =>{
    setPriority(e.target.value);
    newIssue.priority = priority as string;
  }
  // const newIssue = { 
  //   id : `${(new Date())}`,
  //   title: useRef<HTMLInputElement>(),
  //   link: useRef<HTMLInputElement>(),
  //   priority: ''
  // };
  const newIssue = {
    id: `${(new Date())}`,
    title: title,
    link: link,
    priority: priority
  };
  return (    
    <Container maxWidth='sm' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>      
      <Paper elevation={3} component='form' style={{paddingLeft: '50px', width: '100%', height: '80vh', maxHeight: '470px', minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'start'}}>
        <Typography component='h2' variant='h3' color='textPrimary'>Create issue</Typography>
        <TextField label='Title' value={title} required type='text' 
        variant='outlined' style={{width: '70%'}}
        onChange ={(e) => setTitle(e.target.value)}/>
        <TextField label='Link' value = {link} required type='text' 
        variant='outlined' style={{width: '70%'}}
        onChange = {(e) => setLink(e.target.value)}/>
        <FormControl style = {{margin: "10px", minWidth: "120px"}}>
            <InputLabel htmlFor="Priority">Priority</InputLabel>
            <Select style={{width: '100%'}} value = {priority}
            native
            onChange={(e)=>{handlePriorityChange(e)}}
            >
                <option aria-label="None" value=""></option>
                <option value={"low"}>Low</option>
                <option value={"middle"}>Middle</option>
                <option value={"hight"}>Hight</option>
            </Select>
      </FormControl>     
        <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row', width: '90%'}}>
          <Button variant='contained' color='primary' style = {{width:"190px"}}
          onClick = {() => {
            setIsOpen(false);
            dispatch({type: ScramInfoActionTypes.ADD_ISSUE, 
              payload: {id:newIssue.id, title: newIssue.title, 
                link: newIssue.link, priority: newIssue.priority}})
            }}>Yes</Button>
          <Button variant='outlined' style = {{width:"190px"}} 
          onClick = {() => setIsOpen(false)}>No</Button>
        </div>
      </Paper>
    </Container>
  )
}