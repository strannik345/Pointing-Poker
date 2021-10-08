import React, { useEffect } from 'react';
import '../../lobby/scrumMaster/gameCards/gameCards.scss'
import '../../lobby/lobby.scss';
import '../../lobby/scrumMaster/addCardValue/addCardValue.scss';
import '@fontsource/ruda';
import { Container,createStyles,makeStyles,Theme,Typography } from '@material-ui/core';
import { useTypedSelector } from '../../../store/hooks/hooks';
import { CardValue } from '../../lobby/scrumMaster/addCardValue/cardValue';
import { StatisticProp } from '../../../interfaces/IssueStatistic';
import { useDispatch } from 'react-redux';
import { IUser } from '../../../shared/membersList/membersList';
import { GameProps } from '../../../interfaces/GameProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    percent: {
        fontFamily: "Ruda",
        fontSize:30,
        paddingLeft: "12px",
    }}));
    
export const Statistic: React.FC<StatisticProp>=(props)=> {
    const {issueStatistic, gameStatistic, index} = {...props};
    console.log("issueSTAT:", issueStatistic);
    console.log("gameStat:", gameStatistic);
    const {cardValues } = useTypedSelector(state => state.gameSettings);
    const {socketGame} = useTypedSelector(state=> state.socket)
    const {isScrumMaster} = useTypedSelector(state => state.player);
    const dispatch = useDispatch();
    
    const dispatchStatistic = () =>{
        socketGame.onmessage = (event: any) =>{
            const type = JSON.parse(event.data).type;
            if(type === 'throw-card'){
                const data:GameProps[] = JSON.parse(event.data).msg.cards; 
                if(issueStatistic.length >= data[data.length-1].players.length-1) dispatch({type: "SET_STATISTIC", payload: issueStatistic});
            }
        }
    }
        
dispatchStatistic();
    const classes = useStyles();
    return (<div className = "game-cards">
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Statistics:</Typography>
            
        </Container>
        {index == null && 
            <Container className = "cards-list" style={{display:"flex", justifyContent:"start", padding:"20px"}}>
                {
                    issueStatistic.map((stat, index)=>{
                        return <div> 
                            <CardValue key = {index} cardValue={(stat.cardValue as unknown as string)} 
                            index={index} isSmall={true} isGame={true} 
                            nextIssueClick={()=>{} }activeIssue={0}/>
                            <span className = {classes.percent}>{stat.percent}%</span>
                            </div>
                    })
                }
            </Container>}
            
                
</div>)
}