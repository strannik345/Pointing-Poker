import { combineReducers } from "redux"
import { gameURLReducer } from "./gameId"
import { messageReducer } from "./messageReducer"
import { playerReducer } from "./player"

// Register your redusers here


export const rootReducer = combineReducers({
  player: playerReducer,
  gameURL: gameURLReducer,
  messages: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>