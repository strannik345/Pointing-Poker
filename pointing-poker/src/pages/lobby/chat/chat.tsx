import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Paper, TextField } from "@material-ui/core";
import { SendText } from "./sendText";
import SendIcon from '@material-ui/icons/Send';
import { ChatMessage } from "./chatMessage";
import axios from '../../../services/api';
import { IMessage } from "../../../interfaces/chat";
import { connect } from "tls";
import { useTypedSelector } from "../../../store/hooks/hooks";
import { useParams } from "react-router";
import { IUser } from "../../../shared/membersList/membersList";

export interface ChatMessageFromServer extends IUser {
  message: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "50vh",
      maxWidth: "400px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    container: {
      width: "30vw",
      minHeight: "80vh",
      maxHeight:"100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // position: "relative",
      // top: "0",
      // right: "0"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    },
    wrapForm : {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`
  },
  wrapText  : {
      width: "100%"
  },
  button: {
      margin: theme.spacing(1),
  }
  })
);

export default function Chat() {
  const classes = useStyles();
  const [messages, setMessages] = useState<ChatMessageFromServer[]>([]);
  const [content, setContent] = useState('');
  const {socketChat} = useTypedSelector(state => state.socket);
  const player = useTypedSelector(state => state.player);
  const params = useParams<any>();

  useEffect(()=> {
    connect();
  }, []);

  const connect = () => {
    socketChat.onmessage = (event: any) => {
      const type = JSON.parse(event.data).type;
      console.log(type);
      if(type === 'chat-message'){
        const message: ChatMessageFromServer = JSON.parse(event.data).msg;  
        console.log(message)            
        setMessages(prev => {
          console.log(prev)
          console.log([...prev, message])
          return [...prev, message]
        })        
      }      
    }    
  } 

  const sendMessage = () => [
    socketChat.send(JSON.stringify({
      id: params.id,
      method: 'chat-message',
      msg: {...player, message: content}
    }))
  ]
  
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} >
        <Paper id="style-1" className={classes.messagesBody}>
          { 
            messages.map(message => {
              console.log(message)
              return <ChatMessage {...message}/>
            })
          }
        </Paper>
        {/* <SendText/> */}
        <div className={classes.wrapForm} >
            <TextField
                id="standard-text"
                label="text"
                className={classes.wrapText}
                value = {content}
                onChange={e => setContent(e.target.value)}
            />
            <Button variant="contained" color="primary" 
                    className={classes.button}
                    onClick = {sendMessage}>
                <SendIcon />
            </Button>
            </div>
      </Paper>
    </div>
  );
}
