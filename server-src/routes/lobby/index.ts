import express, { Router } from "express";
import events from 'events';
import { IUser } from "../../interfaces";

const emitter = new events.EventEmitter();

const userList: IUser[] = [];

export const lobbyRouter = Router();

lobbyRouter.get('/get-user', (req,res) => {
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