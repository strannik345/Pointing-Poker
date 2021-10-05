import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Card, Container, Paper, TextField, Typography } from "@material-ui/core";
import { useTypedSelector } from "../../store/hooks/hooks";
import { LobbyMemberCard } from "../../shared/memberCard/LobbyMemberCard";
import '@fontsource/ruda';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "50vh",
      maxWidth: "400px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    container: {
      width: "30vw",
      minHeight: "80vh",
      maxHeight:"100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "Ruda",
    },
    scoreCard :{
      // fontFamily: "Ruda",
      width: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    scoreGroup:{
      display: "flex",
      justifyContent: "space-between"
    },
    title: {
      display: "flex",
      justifyContent: "space-around"
    }
  })
);

export const Score: React.FC =()=> {
  const classes = useStyles();
  // const {members} = useTypedSelector(state=>state.gameSettings);
  const members = [
    {
      id: "1",
      avatar: "",
      name: "Lizy",
      lastName: "Snow",
      position: "developer",
      isBlocked: false,
      isObserver: false,
      isScrumMaster: false,
    },
    {
      id: "2",
      avatar: "",
      name: "Garry",
      lastName: "Snow",
      position: "senior developer",
      isBlocked: false,
      isObserver: false,
      isScrumMaster: false,
    },
    {
      id: "3",
      avatar: "",
      name: "Carl",
      lastName: "Davis",
      position: "team lead",
      isBlocked: false,
      isObserver: false,
      isScrumMaster: false,
    },
    
  ]
  return (
    <div className={classes.container}>
      <Container className = {classes.title} ><h2>score:</h2><h2>players:</h2></Container>
      <Container className={classes.paper} >
       {members.map(member=> {

       return <div className={classes.scoreGroup}>
         <Card className={classes.scoreCard}>In progress</Card>
         <LobbyMemberCard size={{isSmall:true}} userInfo={member}/>
         
         </div>
      })
    }
      </Container>
    </div>
  );
}