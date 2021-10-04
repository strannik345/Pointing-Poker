import React from 'react';
import './teamMember.scss';
import '@fontsource/ruda';
import { MembersList } from '../../../shared/membersList/membersList';
import { LobbyInfo } from '../../../shared/lobbyInfo/lobbyInfo';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "70vw",
      },
  })
)
export const TeamMember: React.FC =()=> {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            {/* <LobbyInfo isMaster={false}/> */}
            {/* <MembersList/> */}
        </div>
    );
}