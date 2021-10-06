import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../../store/hooks/hooks';
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

export const PlayerLobby: React.FC =()=> {
  const {socketUser} = useTypedSelector(state=> state.socket)
  const connect = () => {
        socketUser.onmessage = (event: any) => {
          const data = JSON.parse(event.data);
          console.log(data);     
        }    
      } 
    const classes = useStyles();

    useEffect(()=> {
      connect();
    
    }, [])
    return(
        <div className={classes.container}>
            <TeamMember/> 
            <Chat/>
        </div>);
}