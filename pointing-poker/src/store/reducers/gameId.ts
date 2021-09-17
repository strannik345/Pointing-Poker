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
      return action.payload;
    default:
      return state;
  }
}