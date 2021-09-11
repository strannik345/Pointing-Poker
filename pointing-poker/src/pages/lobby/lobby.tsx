import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Chat from './chat/chat';
import { ScrumMaster } from './scrumMaster/scrumMaster';
import { TeamMember } from './teamMember/teamMember';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        // width: "100vw",
        height: "80vh",
        minHeight: '1885px',
        marginBottom: '70px',
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        paddingBottom: "100px",
    }
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