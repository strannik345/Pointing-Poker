export interface Socket {
  socketUser: WebSocket;
  socketChat: WebSocket;
}

export interface SocketAction {
  type: string;
}


export const defaultSocket: Socket = {
  socketUser: new WebSocket(`ws://${process.env.REACT_APP_SERVER}`),
  socketChat: new WebSocket(`ws://${process.env.REACT_APP_SERVER}`),
}

export const socketReducer = (state = defaultSocket, action: SocketAction): Socket => {
  switch (action.type) {  
    default:
      return state;
  }
}