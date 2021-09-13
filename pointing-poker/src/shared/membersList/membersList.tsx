import React, { useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { MemberCard } from '../memberCard/memberCard';
import { Player } from '../../interfaces/player';
export const MembersList: React.FC =()=> {
    const [membersList, setMemberList] = useState<Player[]>([])
    return(<>
    <Container style={{width: '1000px', paddingTop: "100px"}}>
        <Typography className = "lobby--title lobby--title__primary">Members:</Typography>
    </Container>
    <Container className = "team-members">
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
        <MemberCard isSmall={false}/>
    </Container>
    </>);
}