import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GameProps } from '../../interfaces/GameProps';
import { IssueStatistic } from '../../interfaces/IssueStatistic';
import { GameInfo } from '../../shared/gameInfo';
import { useTypedSelector } from '../../store/hooks/hooks';
import { Score } from './score';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "80vw",
        height: "80vh",
        minHeight: '2150px',
        marginBottom: '70px',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingBottom: "100px",
    }
  })
)
export const Game: React.FC =()=> {
    
    const classes = useStyles();
    const [issueStatistic, setIssueStatistic] =useState<number[]>([]); 
    const [gameStatistic, setGameStatistic] = useState<IssueStatistic[][]>([]);
    const {socketUser} = useTypedSelector(state=> state.socket);
    // const dispatch = useDispatch();
  
    const calculateIssueStatistic = ()=>{
      let data:IssueStatistic[] =[];
      console.log(issueStatistic);
      const uniqueCards = issueStatistic.filter((e, i, a) => a.indexOf(e) === i);
      uniqueCards.map((el: number) =>{
        data.push({cardValue: el, percent: issueStatistic.filter(ob=>ob===el).length*100/issueStatistic.length})
      })
      console.log("game data", data);
      return data;
    }

    const connect = () => {
      socketUser.onmessage = (event: any) => {
          const type = JSON.parse(event.data).type;
          console.log("connect", type);
          if(type === 'throw-card'){
            setIssueStatistic([]);
            const data:GameProps[] = JSON.parse(event.data).msg.cards; 
            console.log(data);
            data[data.length-1].players.map(player => {
              console.log(player.card);
               setIssueStatistic((prev: number[]) => [...prev, +player.card]); 
            }    
            )  
          }    
    }   
  }
 
  useEffect(()=>{
    connect();
    
  })
    return(
        <Container className={classes.container}>
            <GameInfo issueStatistic={calculateIssueStatistic()} gameStatistic={gameStatistic} index={null}/>
            <Score/>
        </Container>);
}