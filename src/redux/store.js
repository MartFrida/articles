import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./articles/slice";
import { userReducer } from './user/slice'


const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})