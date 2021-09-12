import { combineReducers } from "redux"
import { messageReducer } from "./messageReducer"
import { playerReducer } from "./player"

// Register your redusers here


export const rootReducer = combineReducers({
  player: playerReducer,
  messages: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>