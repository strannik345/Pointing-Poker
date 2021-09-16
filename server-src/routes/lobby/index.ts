import express, { Router } from "express";
import events from 'events';
import { IUser } from "../../interfaces";

interface StopGame {
  gameNumber: number;
}

interface IGame {
  gameID: number;
  users: IUser[];
}

interface IPostUser {
  gameID: number;
  user: IUser;
}

const emitter = new events.EventEmitter();

const userList: IUser[] = [];

const games: IGame[] = [];

export const lobbyRouter = Router();

lobbyRouter.get('/start-new-game', (req, res) => {
  games.push({
    gameID: games.length+1,
    users: []
  });
  res.json(games[games.length-1]);
});

lobbyRouter.post('/stop-game', (req, res) => {
  const gameNumber: StopGame = req.body; 
  const gameIndex: number = games.findIndex(game => game.gameID === gameNumber.gameNumber);
  games.splice(gameIndex,1);
  console.log(games, gameNumber);
  res.status(200).end();  
})

lobbyRouter.get('/get-all-users', (req, res) => {
  const { gameID } = req.query;
  res.json(games.filter(game => game.gameID === Number(gameID)))
})

lobbyRouter.get('/get-users', (req,res) => {
  const { gameID } = req.query;
  emitter.once(`newUser${gameID}`, () => {
    res.json(games.filter(game => game.gameID === Number(gameID)));
  })
})

lobbyRouter.post('/new-user', function (req, res) {
  const user: IPostUser = req.body;
  const gameIndex: number = games.findIndex(game => game.gameID === user.gameID);
  games[gameIndex].users.push(user.user);
  console.log(games);
  emitter.emit(`newUser${user.gameID}`, user);
  res.status(200).end();
})