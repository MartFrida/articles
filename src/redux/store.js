import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./articles/slice";
import { userReducer } from './user/slice'
import { authReducer } from "./auth/slice";


const rootReducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})