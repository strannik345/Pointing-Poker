import React, { useEffect, useState } from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { MemberCard } from '../memberCard/memberCard';
import { Player } from '../../interfaces/player';
export const MembersList: React.FC =()=> {
    const [membersList, setMemberList] = useState<Player[]>([])
    console.log(process.env.REACT_APP_SERVER)
    useEffect(()=> {
        subscribeMembers();
    }, []);

    const subscribeMembers = async () => {
        try {             
            const response = await fetch(`${process.env.RREACT_APP_SERVERE}/api/get-user`);
            const members: Player[] = await response.json();
            setMemberList(prev => members );
            console.log(membersList);
            await subscribeMembers()
        } catch(e) {
            setTimeout(() => {
                subscribeMembers();
            }, 500);
        }
    }

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