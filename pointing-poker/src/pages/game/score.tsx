import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Card, Container, Paper, TextField, Typography } from "@material-ui/core";
import { useTypedSelector } from "../../store/hooks/hooks";
import { LobbyMemberCard } from "../../shared/memberCard/LobbyMemberCard";

import '@fontsource/ruda';
import { GameProps } from "../../interfaces/GameProps";
import { IUser } from "../../shared/membersList/membersList";
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
  const {socketUser} = useTypedSelector(state=> state.socket)
  const [votes, setVotes] = useState<GameProps[]>([]);
  const classes = useStyles();

  const connect = () => {
    socketUser.onmessage = (event: any) => {
        const type = JSON.parse(event.data).type;
        console.log(type);
        if(type === 'throw-card'){
          const data:GameProps[] = JSON.parse(event.data).msg.cards;  
          setVotes( data);             
    }    
  } 
  
}
useEffect(()=>{
  connect();
})
  return (
    <div className={classes.container}>
      <Container className = {classes.title} ><h2>score:</h2><h2>players:</h2></Container>
      <Container className={classes.paper} >
        
       { votes.map(vote => {
       return vote.players.map(member=> {
       return <div className={classes.scoreGroup}>
         <Card className={classes.scoreCard}>{`${member.card}`} </Card>
         <LobbyMemberCard size={{isSmall:true}} userInfo={{
           id: (member.id as unknown as string),
           avatar: member.avatar,
           name: member.name,
           position: member.position,
           isObserver: member.isObserver,
           lastName:'',
           isScrumMaster:false,
         }}/>
         
         </div>
      })
    })
    }
      </Container>
    </div>
  );
}