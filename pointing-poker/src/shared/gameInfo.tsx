import React, { useState } from 'react';
import '@fontsource/ruda';
import './lobbyInfo/lobbyInfo.scss';
import { Typography, Button, Container, makeStyles, Theme, createStyles, Paper} from '@material-ui/core';
import { MemberCard } from './memberCard/memberCard';
import { ManageGame } from '../pages/lobby/scrumMaster/manageGame/manageGame';
import { ILobbyInfo } from '../interfaces/ILobbyInfo';
import { callbackify } from 'util';
import { IssuesList } from '../pages/lobby/scrumMaster/issuesList/issuesList';
import { useTypedSelector } from '../store/hooks/hooks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    info:{
        marginBottom: "-10px",
        marginTop: "10px",display: "flex",
        alignItems: "end",
        width: "40vw",
    },
    controlPanel: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "75px",
        paddingLeft:"0",
    },
    issues: {

    },
    issuesList: {

    },
    statistic: {

    },
    controlPart:{
        width: "calc((40vw - 20px)/3)",
        paddingLeft:"0",

    }
  })
)
export const GameInfo: React.FC<ILobbyInfo> =(props)=> {
    const {issues} = useTypedSelector(state => state.gameSettings);
    const [activeIssue, setActiveIssue] = useState(0);
    const {isMaster} = {...props}
    const classes = useStyles();
    // const handleClick = () =>{
    //     if (issues.length < (activeIssue+1)) {
    //         prompt("ok");
    //         setActiveIssue(activeIssue+1)
    //     }
    //             else setActiveIssue(0)
    // }
    return(<Container className={classes.container}>
        <Typography className = " lobby--title lobby--title__primary">
            Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
        </Typography>    
        <Container className={classes.info}>
            <Container>
                <Typography className = " lobby--title lobby--title__secondary">
                    Scram master:
                </Typography>
                <MemberCard isSmall={false}/>
            </Container>
        {isMaster ? 
        <Button  className ="button button__outlined " variant="outlined" >Stop game</Button>
        :
        <Button  className ="button button__outlined " variant="outlined" >Exit</Button>
        }
        </Container>
        <Container className={classes.controlPanel}>
            <div className={`${classes.issues} ${classes.controlPart}`}>
                <div ><IssuesList isGame={true} activeIssue={activeIssue}/></div>
                <div className={classes.statistic}>Statistic</div>
            </div>
            {/* <GameTimer/> */}
            <h2>Game timer and timer button</h2>
            <Button  className ="button button__contained " variant="contained" color='primary'
            onClick ={()=>{issues.length > activeIssue+1 ? setActiveIssue(activeIssue + 1) : setActiveIssue(+0)}}>Next issue</Button>
        </Container>
    </Container>);
}