import React from 'react';
import './teamMember.scss';
import '@fontsource/ruda';
import { Avatar, Card, Typography, Button, Container } from '@material-ui/core';
import { MemberCard } from '../../../components/memberCard/memberCard';
export const TeamMember: React.FC =()=> {
    return(<>
    <Container className = "lobby-info">
        <Typography className = " lobby--title lobby--title__primary">
            Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
        </Typography>
        <Container>
            <Typography className = " lobby--title lobby--title__secondary">
                Scram master:
            </Typography>
            <MemberCard/>
        </Container>
        <Button  className ="button button__oulined button__right" variant="outlined" >Exit</Button>
        
    </Container>
    <Container>
        <Typography className = "lobby--title lobby--title__primary">Members:</Typography>
    </Container>
    
    <Container className = "team-members">
        <MemberCard/>
        <MemberCard/>
        <MemberCard/>
        <MemberCard/>
        <MemberCard/>
        <MemberCard/>
        <MemberCard/>
    </Container>
    </>);
}