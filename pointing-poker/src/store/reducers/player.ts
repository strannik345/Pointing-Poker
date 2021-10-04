import { IUser } from "../../shared/membersList/membersList";

export interface PlayerAction {
  type: string;
  payload: IUser; 
}

export const defaultPlayerState: IUser = {
  id: sessionStorage.getItem('id') || '',
  avatar: sessionStorage.getItem('avatar') || '',
  name: sessionStorage.getItem('name') || 'Jhon',
  lastName: sessionStorage.getItem('lastName') || 'Doe',
  position: sessionStorage.getItem('position') || 'no position',
  isObserver: Boolean(sessionStorage.getItem('isObserver')) || false,
  isScrumMaster: sessionStorage.getItem('isScrumMaster') === 'false' ? false : true,
}

export const playerReducer = (state = defaultPlayerState, action: PlayerAction): IUser => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      const id = Date.now().toString(16);
      console.log(action.payload)
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('avatar', action.payload.avatar);
      sessionStorage.setItem('name', action.payload.name);
      sessionStorage.setItem('lastName', action.payload.lastName);
      sessionStorage.setItem('position', action.payload.position);
      sessionStorage.setItem('isObserver', String(action.payload.isObserver));
      sessionStorage.setItem('isScrumMaster', String(action.payload.isScrumMaster));      
      return {...state, ...action.payload, id: id};
    default:
      return state;
  }
}