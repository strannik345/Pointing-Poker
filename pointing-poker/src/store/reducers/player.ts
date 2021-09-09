export interface PlayerState {
  name: string;
  lastName: string;
  position: string;
  observer: boolean;
}

export interface PlayerAction {
  type: string;
  payload: PlayerState; 
}

export const defaultPlayerState: PlayerState = {
  name: '',
  lastName: '',
  position: '',
  observer: false,
}

export const playerReducer = (state = defaultPlayerState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return action.payload;
    default:
      return state;
  }
}