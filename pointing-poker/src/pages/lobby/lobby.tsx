import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Chat from './chat/chat';
import { ScrumMaster } from './scrumMaster/scrumMaster';
import { TeamMember } from './teamMember/teamMember';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
  })
)
export const Lobby: React.FC =()=> {
    const classes = useStyles();
    return(
        // <div className={classes.container}>
        //     <TeamMember/> 
        //     <Chat/>
        // </div>);
        <div className={classes.container}>
            <ScrumMaster/> 
            <Chat/>
        </div>);
}