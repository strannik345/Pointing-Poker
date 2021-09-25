import React from 'react';
import '../../lobby/scrumMaster/gameCards/gameCards.scss'
import '../../lobby/lobby.scss';
import '../../lobby/scrumMaster/addCardValue/addCardValue.scss';
import '@fontsource/ruda';
import { Container,createStyles,makeStyles,Theme,Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../store/hooks/hooks';
import { CardValue } from '../../lobby/scrumMaster/addCardValue/cardValue';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    percent: {
        fontFamily: "Ruda",
        fontSize:30,
        paddingLeft: "12px",
    }}));
    
export const Statistic: React.FC=()=> {
    const {cardValues } = useTypedSelector(state => state.gameSettings);
    const classes = useStyles();
    return (<div className = "game-cards">
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Statistics:</Typography>
        </Container>
        <Container className = "cards-list" style={{display:"flex", justifyContent:"start", padding:"20px"}}>
            {
                cardValues.map((cardValue:string, index: number)=>{
                    return <div>
                        <CardValue cardValue={cardValue} index={index} isSmall={true}/>
                        <span className = {classes.percent}>45%</span>
                        </div>
                })
            }
        </Container>
</div>)
}