import { combineReducers } from "redux"
import { playerReducer } from "./player"

// Register your redusers here


export const rootReducer = combineReducers({
  player: playerReducer,
})

export type RootState = ReturnType<typeof rootReducer>