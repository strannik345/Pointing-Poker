import { classExpression } from "@babel/types";
import { Button, Card, Container, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTypedSelector } from "../store/hooks/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timerContainer: {
        display: "flex",
        flexDirection: "column",
        paddingTop:"25px",

    },
    timer: {
        width: "150px",
        minHeight: "70px",
        display: "flex",
        fontFamily: "Ruda",
        alignItems: "baseline",
        height: "-webkit-fill-available",
        justifyContent: "center",
    },
    count:{
        fontSize: "64px",
        fontWeight: "bolder",
        maxWidth: "50px",
        margin: "0",
        padding: "0",
    },
    divider:{
        fontSize: "64px",
        fontWeight: "bolder",
        margin: "0",
    },
    timerButton: {
        marginTop: "10px",
        width: "150px",
    }
  })
)

export interface TimerProps{
    activeIssue: number;
    setShowIssueButton: Dispatch<SetStateAction<boolean>>;
}
export const GameTimer: React.FC<TimerProps> = (props) =>{

    const classes = useStyles();
    const {activeIssue, setShowIssueButton} = {...props};
    const {roundTimeMinutes, roundTimeSeconds} = useTypedSelector(state => state.gameSettings);
    const {isScrumMaster, id} = useTypedSelector(state=>state.player);
    const {socketUser} = useTypedSelector(state => state.socket);
    const [[mins, secs], setTime] = useState([roundTimeMinutes, roundTimeSeconds]);
    const [buttonValue, setButtonValue] = useState("Run round");
    const params = useParams<any>();

    // const connect = () => {
    //     socketUser.onmessage = (event: any) => {
    //       const data = JSON.parse(event.data);
    //       console.log(data);     
    //     }    
    //   } 

    // const sendActiveIssue = () => [
    //     socketUser.send(JSON.stringify({
    //       id: params.id,
    //       msg: activeIssue
    //     }))
    //   ]

    const tick = () => {
   
        if (mins === 0 && secs === 0 ) {
            // sendActiveIssue();
            return false;
        }
         else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };
   
    const startTimer = () => {
        // sendActiveIssue();
        setTime([roundTimeMinutes, roundTimeSeconds]);
        setShowIssueButton(true);
        setButtonValue("Restart round");
    };
    // if(isRoundRun)startTimer();
    useEffect(() => {
        // connect();
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    
    return (
        <Container className={classes.timerContainer}>
            <Card className={classes.timer}>
                <div className={classes.count}>{mins}</div>
                <div className={classes.count}><p className = {classes.divider}>:</p></div>
                <div className={classes.count}>{secs}</div>
            </Card>
            {isScrumMaster ? 
            <Button  className ={`button button__contained ${classes.timerButton}`} variant="contained" color='primary'
            onClick ={()=>{startTimer()}}>{buttonValue}</Button>
            : ""}
        </Container>
      );
}