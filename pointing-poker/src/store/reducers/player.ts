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
  isScrumMaster: false,
}

export const playerReducer = (state = defaultPlayerState, action: PlayerAction): IUser => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      console.log(action.payload)
      return {...state, ...action.payload, id: Date.now().toString(16)};
    default:
      return state;
  }
}