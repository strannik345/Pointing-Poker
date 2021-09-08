import React from 'react';
import './gameCards.scss';
import './../../pages/lobby/lobby.scss'
import '@fontsource/ruda';
import { Card, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

export const GameCards: React.FC=()=> {
    const useStyles = makeStyles({
        media: {
          height: 162,
        },
      });
      const classes = useStyles();
    return (<div className = "game-cards">
        <Container>
            <Typography className = "lobby--title lobby--title__primary">Game cards:</Typography>
            <Typography className = "lobby--title lobby--title__secondary">Select cover:</Typography>
        </Container>
        <Container className = "cards-list" style={{display:"flex", justifyContent:"end", padding:"20px"}}>
        <div className = "game-card">
                <div className = "card card--cover__1"> </div>
            </div>
            <div className = "game-card">
                <div className = "card card--cover__2"> </div>
            </div>
            <div className = "game-card">
                <div className = "card card--cover__3"> </div>
            </div>
            <div className = "game-card">
                <div className = "card new-card"> </div>
            </div>
        </Container>
</div>)
}