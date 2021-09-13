import express, { Router } from "express";
import events from 'events';
import { GET200_chat, IMessage } from "../../interfaces";

const emitter = new events.EventEmitter();

export const chatRouter = Router();

chatRouter.use(express.json()) ;
chatRouter.use(express.urlencoded({ extended: true })) ;

chatRouter.get('/get-message', (req,res) => {
  emitter.once('newMessage', (message) => {
    res.json(message);
  })
})

chatRouter.post('/new-message', function (req, res) {
  const message: IMessage = req.body;
  console.log(message);
  emitter.emit('newMessage', message);
  res.status(200).end();
})

