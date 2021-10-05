import React, { useEffect, useState } from 'react';
import '@fontsource/ruda';
import './lobbyInfo/lobbyInfo.scss';
import { Typography, Button, Container, makeStyles, Theme, createStyles, Paper} from '@material-ui/core';
import { MemberCard } from './memberCard/memberCard';
import { ILobbyInfo } from '../interfaces/ILobbyInfo';
import { IssuesList } from '../pages/lobby/scrumMaster/issuesList/issuesList';
import { useTypedSelector } from '../store/hooks/hooks';
import { GameTimer } from './gameTimer';
import { Statistic } from '../pages/game/scramMaster/statistic';
import { CardValue } from '../pages/lobby/scrumMaster/addCardValue/cardValue';
import { Link, useHistory, useParams } from 'react-router-dom';

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
        alignItems: "start",
        width: "40vw",
    },
    issues: {

    },
    issuesList: {

    },
    statistic: {

    },
    controlPart:{
        width: "calc((60vw)/3)",
    },
    controlPanelItem:{
        
    },
    nextIssueButton:{
        width: "200px",
        marginTop: "113px",
    },
    hidden:{
        visibility:"hidden"
    }
  })
)
export const GameInfo: React.FC<ILobbyInfo> =(props)=> {
    const {issues, cardValues, isTimerNeed} = useTypedSelector(state => state.gameSettings);
    const {isScrumMaster} = useTypedSelector(state => state.player)

    const [activeIssue, setActiveIssue] = useState(0);
    const classes = useStyles();
    const [showStatistic, setShowStatistic] = useState(false);
    const [showIssueButton, setShowIssueButton] = useState(false);
    const {socketUser} = useTypedSelector(state=> state.socket)
    const params = useParams<any>();

    // const connect = () => {
    //     socketUser.onmessage = (event: any) => {
    //       const data = JSON.parse(event.data);
    //       console.log(data);     
    //     }    
    //   } 

    const sendActiveIssue = () => [
        socketUser.send(JSON.stringify({
          id: params.id,
          msg: activeIssue
        }))
      ]

    useEffect(()=> {
      if(socketUser.readyState === 1) {
        socketUser.send(JSON.stringify({
          method: 'start-game',
          id: params.id,
        }))
      }
    //   connect();
    
    }, [])
    useEffect(()=>{
        isScrumMaster && sendActiveIssue();
    }, [activeIssue])

    const nextIssueClick = () => {
        setShowStatistic(true);
        if(issues.length > activeIssue+1 ) {
            setActiveIssue(activeIssue + 1);
            // sendActiveIssue();
        } else {
            history.push('/result');
        }
    }
    
    const history = useHistory();
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
        {isScrumMaster ? 
            <Link to = {`/result`}>
                <Button  className ="button button__outlined " variant="outlined" onClick = {()=>setShowStatistic(true)}>Stop game</Button>
            </Link>
        :
        <Button  className ="button button__outlined " variant="outlined" >Exit</Button>
        }
        </Container>
        <Container className={classes.controlPanel}>
            <div className={`${classes.issues} ${classes.controlPart} ${classes.controlPanelItem}`}>
                <div className={classes.issuesList}>
                    <IssuesList isMaster = {isScrumMaster} isGame={true} activeIssue={activeIssue}/>
                </div>
               {isScrumMaster ? <div className={classes.statistic}><Statistic/></div> : 
               <Container className = "cards-list" style={{display:"flex", justifyContent:"start", padding:"45px"}}>
               {
                   cardValues.map((cardValue:string, index: number)=>{
                       return <CardValue cardValue={cardValue} index={index} isSmall={false} isGame={true} nextIssueClick = {nextIssueClick}/>
                   })
               }
           </Container>}
            </div>
            <div className={classes.controlPanelItem}> 
                {isTimerNeed && <GameTimer activeIssue={activeIssue} setShowIssueButton={setShowIssueButton}/>}
                {!isScrumMaster && <div className={`${!showStatistic && classes.hidden} ${classes.statistic}`}><Statistic/></div>}
            </div> 
            
            {(isScrumMaster && showIssueButton || isScrumMaster && !isTimerNeed) ? 
            <Button  className ={`button button__contained  ${classes.nextIssueButton}`} variant="contained" color='primary'
            onClick ={()=>{nextIssueClick()}}>Next issue</Button> : ""}
        </Container>
    </Container>);
}