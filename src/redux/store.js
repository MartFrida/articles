import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { articleReducer } from "./slice";

const rootReducer = combineReducers({
  articles: articleReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})