export interface GameURL {
  gameURL: string;
}

export interface GameURLAction {
  type: string;
  payload: GameURL; 
}


export const defaultGameURL: GameURL = {
  gameURL: '',
}

export const gameURLReducer = (state = defaultGameURL, action: GameURLAction): GameURL => {
  switch (action.type) {
    case 'CHANGE_GameURL':
      console.log(`payload`);
      console.log( action.payload)
      return {...state, gameURL: action.payload.gameURL};
    default:
      return state;
  }
}