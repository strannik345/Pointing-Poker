import React from 'react';
import './teamMember.scss';
import '@fontsource/ruda';
import { MembersList } from '../../../components/membersList/membersList';
import { LobbyInfo } from '../../../components/lobbyInfo/lobbyInfo';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "70vw",
        height: "100vh",
      },
  })
)
export const TeamMember: React.FC =()=> {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <LobbyInfo isMaster={false}/>
            <MembersList/>
        </div>
    );
}