import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
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
  const {lastName, name, isObserver, position, avatar} = useTypedSelector(state => state.player);
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <GameInfo isMaster={false}/>
            <Score/>
        </Container>);
}