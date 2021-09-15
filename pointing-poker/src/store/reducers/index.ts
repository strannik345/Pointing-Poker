import { combineReducers } from "redux"
import { gameURLReducer } from "./gameId"
import { playerReducer } from "./player"

// Register your redusers here


export const rootReducer = combineReducers({
  player: playerReducer,
  gameURL: gameURLReducer,
})

export type RootState = ReturnType<typeof rootReducer>