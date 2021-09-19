import { IUser } from "../../shared/membersList/membersList";


export interface PlayerAction {
  type: string;
  payload: IUser; 
}

export const defaultPlayerState: IUser = {
  id: '',
  avatar: '',
  name: 'Jhon',
  lastName: 'Doe',
  position: 'no position',
  isObserver: false,
}
// const registerNewPlayer = async (data: IUser) => {  
//   const request = {
//     gameID: Number(data.id),
//     user: data   
//   };
//   console.log(request);
//   await fetch(`${process.env.REACT_APP_SERVER}/api/new-user`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(request),
//   });
// }

const registerNewPlayer = (data: IUser) => {
  // const socket = new WebSocket('ws://localhost:8000/');
  const socket = new WebSocket('ws://shielded-plains-14826.herokuapp.com/');
  socket.onopen = () => {
    console.log('connected');
    socket.send(JSON.stringify({
      method: 'connection',
      msg: data,
    }));
  }
}

export const playerReducer = (state = defaultPlayerState, action: PlayerAction): IUser => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      registerNewPlayer(action.payload)
      return action.payload;
    default:
      return state;
  }
}