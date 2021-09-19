import React, { useState } from 'react';
import './scrumMaster.scss';
import '../teamMember/teamMember.scss'
import '@fontsource/ruda';
import { MembersList } from '../../../shared/membersList/membersList';
import { LobbyInfo } from '../../../shared/lobbyInfo/lobbyInfo';
import { IssuesList } from './issuesList/issuesList';
import { GameSettings } from './gameSettings/gameSettings';
import { GameCards } from './gameCards/gameCards';
import { AddCardValue } from './addCardValue/addCardValue';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { IScramInfo } from '../../../interfaces/IScramInfo';
import { useTypedSelector } from '../../../store/hooks/hooks';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
        width: "70vw",
      },
  })
)
export const ScrumMaster: React.FC =()=> {
    const classes = useStyles();
    const gameUrl = useTypedSelector(state => state.gameURL);
    
    // const [settings, setSettings] = useState<IScramInfo>();
    return(
        <div className={classes.container}>
        <LobbyInfo isMaster = {true} />
        <MembersList/>
        <IssuesList/>
        <GameSettings/>
        <GameCards/>
        <AddCardValue/>
    </div>)
}