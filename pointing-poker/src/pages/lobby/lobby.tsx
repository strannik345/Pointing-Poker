import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { useTypedSelector } from '../../store/hooks/hooks';
import Chat from './chat/chat';
import { ScrumMaster } from './scrumMaster/scrumMaster';
import { TeamMember } from './teamMember/teamMember';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        // width: "100vw",
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
export const Lobby: React.FC =()=> {
  const {lastName, name, observer, position, avatar} = useTypedSelector(state => state.player);
    const classes = useStyles();
    return(
        // <div className={classes.container}>
        //     <TeamMember/> 
        //     <Chat/>
        // </div>);
        <Container className={classes.container}>
            <ScrumMaster/> 
            <Chat/>
        </Container>);
}