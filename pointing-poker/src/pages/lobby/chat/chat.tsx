import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { SendText } from "./sendText";
import { ChatMessage } from "./chatMessage";
import { useTypedSelector } from "../../../store/hooks/hooks";
import { useActions } from "../../../store/hooks/useAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "400px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      top: "0",
      right: "0"


    },
    // paper2: {
    //   width: "80vw",
    //   maxWidth: "500px",
    //   display: "flex",
    //   alignItems: "center",
    //   flexDirection: "column",
    //   position: "relative"
    // },
    container: {
      width: "30vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function Chat() {
  const classes = useStyles();
  const { fetchMessages } = useActions();
  const {
    messages
  } = useTypedSelector((state) => state.messages);
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} >
        <Paper id="style-1" className={classes.messagesBody}>
          {console.log("messages",messages)};
          { Object.keys(messages).map((key) => {
            return messages[+key] ? <ChatMessage key = {messages[+key].id} userName={(messages[+key].user_id as unknown as string)} text={messages[+key].text} />
    : ""})
  }
          {/* {messages.map((mes)=>{
            return <ChatMessage key = {mes.id} userName={(mes.user_id as unknown as string)} text={mes.text}/>
          })} */}
        
        </Paper>
        <SendText/>
      </Paper>
    </div>
  );
}
