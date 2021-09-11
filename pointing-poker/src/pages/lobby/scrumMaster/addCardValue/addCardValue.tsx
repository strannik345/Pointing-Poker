import React from 'react';
import '../gameCards/gameCards.scss';
import './../../lobby.scss';
import './addCardValue.scss';
import '@fontsource/ruda';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import CreateIcon from '@material-ui/icons/Create';
import { Card, CardMedia, Container, IconButton,Typography } from '@material-ui/core';

export const AddCardValue: React.FC=()=> {
    return (<div className = "game-cards">
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Add cards value:</Typography>
        </Container>
        <Container className = "cards-list" style={{display:"flex", justifyContent:"end", padding:"20px"}}>
            <div className = "game-card">
                <div className = "card"> 
                <span className = "card-value">12</span>
                    <IconButton aria-label="edit" style={{marginLeft: "10px"}}>
                        <CreateIcon  />
                    </IconButton>
                    <FreeBreakfastIcon style={{ fontSize: 80, marginLeft: "10px" }}/>
                </div>
            </div>
            <div className = "game-card">
                <div className = "card"> 
                <span className = "card-value">12</span>
                    <IconButton aria-label="edit" style={{marginLeft: "10px"}}>
                        <CreateIcon  />
                    </IconButton>
                    <Typography style={{ fontSize: 60, marginLeft: "10px" }}>SP</Typography>
                </div>
            </div>
            <div className = "game-card">
                <div className = "card new-card"> </div>
            </div>
        </Container>
</div>)
}