import React from 'react';
import '@fontsource/ruda';
import './lobbyInfo.scss';
import { Typography, Button, Container} from '@material-ui/core';
import { MemberCard } from '../memberCard/memberCard';
import { ILobbyInfo } from '../../interfaces/ILobbyInfo';
import { ManageGame } from '../../pages/lobby/scrumMaster/manageGame/manageGame';
export const LobbyInfo: React.FC<ILobbyInfo> =(props)=> {
    const isMaster = {...props}
    return(<>
    <Container className = "lobby-info">
        <Typography className = " lobby--title lobby--title__primary">
            Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
        </Typography>
        <Container>
            <Typography className = " lobby--title lobby--title__secondary">
                Scram master:
            </Typography>
            <MemberCard isSmall={false}/>
        </Container>
        {isMaster && <ManageGame/>}
        { !isMaster && <Button  className ="button button__outlined button__right" variant="outlined" >Exit</Button>}
    </Container>
    </>);
}