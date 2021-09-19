import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Paper, TextField } from "@material-ui/core";
import { SendText } from "./sendText";
import SendIcon from '@material-ui/icons/Send';
import { ChatMessage } from "./chatMessage";
import axios from '../../../services/api';
import { IMessage } from "../../../interfaces/chat";
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

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [content, setContent] = useState('');
  useEffect(()=> {
    // fetchMessages();
}, []);
  // const fetchMessages = async () => {
  //     try {
  //       axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  //       const {data} = await axios.get(`/api/get-message`);
  //       setMessages(prev => [...prev, data]);
  //       await fetchMessages();
  //     } catch (e) {
  //       setTimeout(() => {
  //         fetchMessages();
  //       }, 500)
  //     }
  //   }
  //   const onSaveMessage = async () => {
  //       await axios.post(`/api/new-message`,{
  //       id: +(new Date()),
  //       user_id: 1,
  //       text: content})
  //       await fetchMessages();
  //   }
  
  
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} >
        <Paper id="style-1" className={classes.messagesBody}>
          { Object.keys(messages).map((key) => {
            return messages[+key] ? <ChatMessage key = {messages[+key].id} userName={(messages[+key].user_id as unknown as string)} text={messages[+key].text} />
              : ""})
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
                    onClick = {()=>{}}>
                <SendIcon />
            </Button>
            </div>
      </Paper>
    </div>
  );
}
