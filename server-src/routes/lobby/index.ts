import express, { Router } from "express";
import events from 'events';
import { IUser } from "../../interfaces";

interface StopGame {
  gameNumber: number;
}

const emitter = new events.EventEmitter();

const userList: IUser[] = [];

const games: any[] = [];

export const lobbyRouter = Router();

lobbyRouter.get('/start-new-game', (req, res) => {
  games.push({
    gameURL: `/localhost:`,
    gameNumber: games.length + 1,
  });
  res.json(games[games.length-1]);
});

lobbyRouter.post('/stop-game', (req, res) => {
  const gameNumber: StopGame = req.body;  
  games.filter(game => game.gameNumber!== gameNumber.gameNumber);
  console.log(games, gameNumber);
  res.status(200).end();  
})

lobbyRouter.get('/get-users', (req,res) => {
  emitter.once('newUser', () => {
    res.json(userList);
  })
})

lobbyRouter.post('/new-user', function (req, res) {
  const user: IUser = req.body;
  userList.push(user);
  console.log(userList);
  emitter.emit('newUser', user);
  res.status(200).end();
})