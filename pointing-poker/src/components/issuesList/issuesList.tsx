import React from 'react';
import './../../pages/lobby/lobby.scss';
import '@fontsource/ruda';
import { Typography, Container } from '@material-ui/core';
import { IssueCard } from '../issueCard/issueCard';
export const IssuesList: React.FC =()=> {
    return(<>
    <Container style={{width: '1000px', paddingTop: "100px"}}>
        <Typography className = "lobby--title lobby--title__primary">Issuess:</Typography>
    </Container>
    <Container className = "team-members" >
        <IssueCard isNew={false}/>
        <IssueCard isNew={true}/>
    </Container>
    </>)
}