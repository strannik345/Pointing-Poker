export interface Socket {
  socket: WebSocket;
}

export interface SocketAction {
  type: string;
}


export const defaultSocket: Socket = {
  socket: new WebSocket(`ws://${process.env.REACT_APP_SERVER}`),
}

export const socketReducer = (state = defaultSocket, action: SocketAction): Socket => {
  switch (action.type) {  
    case 'OPEN':
      return {socket: new WebSocket(`ws://${process.env.REACT_APP_SERVER}`)};
    default:
      return state;
  }
}