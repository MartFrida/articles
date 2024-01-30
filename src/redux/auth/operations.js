import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "../../configAxios/api";

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const response = await api.post('users/signup', credentials)
    setToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const response = await api.post('users/login', credentials)
    setToken(response.data.token)
    return response.data
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.post('users/logout')
    clearToken()
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})