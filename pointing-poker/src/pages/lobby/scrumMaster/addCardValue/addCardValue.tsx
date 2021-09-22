import React, { useState } from 'react';
import '../gameCards/gameCards.scss';
import './../../lobby.scss';
import './addCardValue.scss';
import '@fontsource/ruda';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import CreateIcon from '@material-ui/icons/Create';
import { Container, IconButton,TextField,Typography } from '@material-ui/core';
import { useTypedSelector } from '../../../../store/hooks/hooks';
import { CardValue } from './cardValue';
import { useDispatch } from 'react-redux';
import { ScramInfoActionTypes } from '../../../../interfaces/IScramInfo';

export const AddCardValue: React.FC=()=> {
    const {cardValues } = useTypedSelector(state => state.gameSettings);
    const dispatch = useDispatch();
    return (<div className = "game-cards">
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Add cards value:</Typography>
        </Container>
        <Container className = "cards-list" style={{display:"flex", justifyContent:"start", padding:"20px"}}>
            {
                cardValues.map((cardValue:string, index: number)=>{
                    return <CardValue cardValue={cardValue} index={index}/>
                })
            }
            
            <div className = "game-card">
                <div className = "card new-card" onClick={()=>{
                    dispatch({type: ScramInfoActionTypes.ADD_CARD_VALUE});
                }}> </div>
            </div>
        </Container>
</div>)
}