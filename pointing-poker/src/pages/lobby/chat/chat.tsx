import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { SendText } from "./sendText";
import { ChatMessage } from "./chatMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
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
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} >
        <Paper id="style-1" className={classes.messagesBody}>
        <ChatMessage userName={'John Doe'} text={'Hello, brothers! Lets talk about app'}/>
        <ChatMessage userName={'John Doe'} text={'Hello, brothers! Lets talk about app'}/>
        <ChatMessage userName={'John Doe'} text={'Hello, brothers! Lets talk about app'}/>
        </Paper>
        <SendText/>
      </Paper>
    </div>
  );
}
