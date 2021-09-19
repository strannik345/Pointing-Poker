const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

const PATH = process.env.PORT || 8000;

const users: any[] = [];

app.ws('/',(ws: any, req: any) => {
  console.log('ПОДКЛЮЧЕНО');
  ws.on('message', (msg: any) => {
    console.log('getttttt');
    console.log(msg);
    msg = JSON.parse(msg);
    switch (msg.method) {
      case 'connection' :
        users.push(msg.msg);
        console.log(users);
        broadcastConnection(ws, msg);        
        break;
      case 'first-connection':
        broadcastConnection(ws,msg);
        break;
      case 'clear-users':
        users.splice(0);
        broadcastConnection(ws,msg);
        break;
      case 'chat-message' :
        broadcastConnection(ws, msg);
        break;
    }    
  })
})


const broadcastConnection = (ws: any, msg: any) => {  
  aWss.clients.forEach((client: any) => {
    console.log('in aws foreach', msg.method);
    switch (msg.method) {
      case 'connection':
        console.log('connection');
        client.send(JSON.stringify({
          type: 'connection',
          msg: users,
        })); 
        break;
        case 'first-connection':
        console.log('connection');
        client.send(JSON.stringify({
          type: 'connection',
          msg: users,
        })); 
        break;
      case 'chat-message':
        client.send(JSON.stringify({
          type: 'chat-message',
          msg: msg.msg,
        })); 
        break;
    }       
  });
}


app.listen(PATH, () => console.log(`server started at port ${PATH}`));
