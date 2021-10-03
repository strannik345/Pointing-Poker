import { classExpression } from "@babel/types";
import { Button, Card, Container, createStyles, makeStyles, Paper, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { useTypedSelector } from "../store/hooks/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timerContainer: {
        display: "flex",
        flexDirection: "column",

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
    isMaster: boolean;
}
export const GameTimer: React.FC<TimerProps> = (props) =>{

    const classes = useStyles();
    const {isMaster} = {...props};
    console.log(isMaster);
    const {roundTimeMinutes, roundTimeSeconds} = useTypedSelector(state => state.gameSettings);
    const [[mins, secs], setTime] = useState([0, 0]);

    const tick = () => {
   
        if (mins === 0 && secs === 0) 
            return false;
         else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    };
    const startTimer = () => setTime([roundTimeMinutes, roundTimeSeconds]);
    React.useEffect(() => {
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
            {isMaster ? 
            <Button  className ={`button button__contained ${classes.timerButton}`} variant="contained" color='primary'
            onClick ={()=>{startTimer()}}>Run round</Button>
            : ""}
        </Container>
      );
}