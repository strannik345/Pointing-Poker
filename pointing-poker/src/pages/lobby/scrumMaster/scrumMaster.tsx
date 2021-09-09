import React from 'react';
import './scrumMaster.scss';
import '../teamMember/teamMember.scss'
import '@fontsource/ruda';
import { MembersList } from '../../../components/membersList/membersList';
import { LobbyInfo } from '../../../components/lobbyInfo/lobbyInfo';
import { IssuesList } from '../../../components/issuesList/issuesList';
import { GameSettings } from '../../../components/gameSettings/gameSettings';
import { GameCards } from '../../../components/gameCards/gameCards';
import { AddCardValue } from '../../../components/addCardValue/addCardValue';
import { createStyles, makeStyles, Modal, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "70vw",
        height: "100vh",
      },
  })
)
export const ScrumMaster: React.FC =()=> {
    const classes = useStyles();
    return(
        <div className={classes.container}>
        <LobbyInfo isMaster = {true}/>
        <MembersList/>
        <IssuesList/>
        <GameSettings/>
        <GameCards/>
        <AddCardValue/>
    </div>)
}