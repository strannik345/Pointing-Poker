export interface Socket {
  socket: WebSocket;
}

export interface SocketAction {
  type: string;
  payload: Socket; 
}


export const defaultSocket: Socket = {
  socket: new WebSocket(`ws://${process.env.REACT_APP_SERVER}`),
}

export const socketReducer = (state = defaultSocket, action: SocketAction): Socket => {
  switch (action.type) {    
    default:
      return state;
  }
}