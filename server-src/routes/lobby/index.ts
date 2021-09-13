import express, { Router } from "express";
import events from 'events';
import { IUser } from "../../interfaces";

const emitter = new events.EventEmitter();

export const lobbyRouter = Router();

lobbyRouter.get('/get-user', (req,res) => {
  emitter.once('newUser', (user) => {
    res.json(user);
  })
})

lobbyRouter.post('/new-user', function (req, res) {
  const user: IUser = req.body;
  console.log(user);
  emitter.emit('newUser', user);
  res.status(200).end();
})