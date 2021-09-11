import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { MemberCard } from "../../../shared/memberCard/memberCard";

interface Message {
  userName:string;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageRow: {
      display: "flex",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    messageArea: {
      position: "relative",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#c0f0e5",
      width: "60%",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #60DABF",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #c0f0e5",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #60DABF",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },

    messageContent: {
      padding: 0,
      margin: 0
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      marginTop: "10px",
      bottom: "-3px",
      right: "5px"
    },

    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    player:{
      width: "200px",
      position: "relative",
      top: "0",
    }
  })
);

export const ChatMessage:React.FC<Message> = (props:Message) => {
  const {userName, text} = {...props};
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <div>
          <div className={classes.messageArea}>
            <div>
              <p className={classes.messageContent}>{text}</p>
            </div>
          </div>
        </div>
        <div className={classes.player}>
          <MemberCard isSmall = {true}/>
        </div>
      </div>
    </>
  );
};
