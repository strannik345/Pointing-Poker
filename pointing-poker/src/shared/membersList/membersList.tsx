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
        getCurrentUsers();
        subscribeMembers();
    }, []);

    const getCurrentUsers = async () => {
        console.log('1');
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-all-users?gameId=5`); //gameId from redux change then
        const members: Player[] = await response.json();
        setMemberList(members);
    }

    const subscribeMembers = async () => {
        console.log('2');
        try {             
            const response = await fetch(`${process.env.REACT_APP_SERVER}/api/get-users?gameId=5`);
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