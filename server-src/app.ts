import { Game, GameProps, Issues, Votes } from "./interfaces";

const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

const PATH = process.env.PORT || 8000;

const games: Game[] = [];

const issues: Issues[] = []

const gameProps : GameProps[] =[];

const votes: Votes[] = []

app.ws('/',(ws: any, req: any) => {
  ws.on('message', (msg: any) => {
    console.log('incomming message', msg);
    msg = JSON.parse(msg);
    switch (msg.method) {
      case 'start-server' :
        games.push({
          id: msg.id,
          players: [msg.msg],          
        });    
        votes.push({
          id: msg.id,
          vote: [],
        })
        connectionHandler(ws, msg); 
        break;
      case 'connection' :
        const index = games.findIndex(game => game.id === msg.id);        
        if (!games[index].players.some(player=> player.id === msg.msg.id)) {
          games[index].players.push(msg.msg);
        }
        console.log(games[index].players)
        connectionHandler(ws, msg);        
        break;
      case 'throw-card':
        connectionHandler(ws, msg);
        break;  
      case 'clear-users':
        connectionHandler(ws,msg);
        break;
      case 'chat-message' :
        connectionHandler(ws, msg);
        break;
      case 'delete-player' :
        connectionHandler(ws, msg);
        break;
      case 'vote-for-delete-player' :
        connectionHandler(ws, msg);
        break;
      case 'start-game' :              
        connectionHandler(ws, msg);
        break;
      case 'get-votes': 
        const indexForDelete = votes.findIndex(vote => vote.id === msg.id);
        const playerIndexForDelete = games.findIndex(game => game.id === msg.id);
        votes[indexForDelete].vote.push(msg.msg);
        if(votes[indexForDelete].vote.filter(vote => vote.desision === true).length >= (games[playerIndexForDelete].players.length-1) / 2) {
          connectionHandler(ws, {id: msg.id, method: 'delete-player', msg: msg.msg.player });
        }        
        break;
      case 'send-issues':
        issues.push({
          id: msg.id,
          issues: msg.msg.issues,
          isTimerNeeded: msg.msg.isTimerNeed,
        }) 
        connectionHandler(ws, msg);
        break;
      case 'set-active-issue':
        connectionHandler(ws, msg);
        break;
      
    }    
  })
})

const connectionHandler = (ws: any, msg: any) => {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
}

const broadcastConnection = (ws: any, msg: any) => {  
  aWss.clients.forEach((client: any) => {
    console.log('in aws foreach', msg.method);
    if(ws.id === msg.id) {
      switch (msg.method) {
        case 'start-server':
          client.send(JSON.stringify({
            type: 'start-server',
            msg: msg.id,
          })); 
        break;
        case 'vote-for-delete-player':
          client.send(JSON.stringify({
            type: 'vote-for-delete-player',
            msg: msg,
          }));
          break;
        case 'connection':
          console.log(games.filter(game => game.id === msg.id))
          client.send(JSON.stringify({
            type: 'connection',
            msg: games.filter(game => game.id === msg.id),
          })); 
          break;
        case 'chat-message':
          client.send(JSON.stringify({
            type: 'chat-message',
            msg: msg.msg,
          })); 
          break;
        case 'delete-player' :            
          const gameIndex = games.findIndex(game => game.id === msg.id);
          const playerIndex = games[gameIndex].players.findIndex(player => player.id === msg.msg.id)
          if(playerIndex != -1) {
            games[gameIndex].players.splice(playerIndex, 1);
          }        
          client.send(JSON.stringify({
            type: 'update-players',
            msg: games.filter(game => game.id === msg.id),
          })); 
          break;
        case 'start-game':
          gameProps.push({
            id: msg.id,
            cards: [],
          })
          client.send(JSON.stringify({
            type: 'start-game',
            msg: msg.msg,
          }))
          break;
        case 'send-issues':
          client.send(JSON.stringify({
            type: 'send-issues',
            msg: {
              issues,
              players: games.filter(game => game.id === msg.id)[0].players
            }
          }))
          break;
        case 'set-active-issue':
          client.send(JSON.stringify({
            type: 'set-active-issue',
            msg: msg.msg,
          })); 
          break;
        case 'throw-card':
          const index = gameProps.findIndex(game => game.id === msg.id);
          console.log(gameProps[index].cards)
          const gameCards = gameProps[index].cards;
          if (!gameCards.some(card => card.issue.id === msg.msg.issue.id)) {
            gameCards.push({issue: msg.msg.issue, players: []});
          }
          console.log(gameProps[index])
          const issueIndex = gameCards.findIndex(card => card.issue.id === msg.msg.issue.id); 
          const gamePlayer = gameProps[index].cards[issueIndex].players
          console.log(gameProps[index].cards[issueIndex].players)
          console.log(msg.msg.player.id)
          if(gamePlayer.some(player => player.id === msg.msg.player.id )) {
            const plIndex = gamePlayer.findIndex(player => player.id === msg.msg.player.id )
            gamePlayer[plIndex].card = msg.msg.card
          } else {
            gamePlayer.push({...msg.msg.player, card: msg.msg.card });
          }
          console.log(gameProps[index].cards[issueIndex].players)
          client.send(JSON.stringify({
            type: 'throw-card',
            msg: gameProps[index],
          }))
          break;
      }       
   }
  });
}


app.listen(PATH, () => console.log(`server started at port ${PATH}`));
