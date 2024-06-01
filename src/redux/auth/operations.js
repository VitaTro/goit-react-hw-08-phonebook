import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// створення НТТР - запиту за допомогою 'axios'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Встановлення заголовка авторизації у вихідних параметрах запиту
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// очищення заголовка авторизації
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// реєстрація користувача
export const userRegister = createAsyncThunk(
  // визначається тип дії (action type).
  'user/register',
  // анонімна функція
  // credentials - об'єкт, який містить дані для авторизації( login, password)
  // thunkAPI - об'єкт, який надає доступ до даткових функцій (dispatch, getState ...)
  async (credentials, thunkAPI) => {
    try {
      // відправляє РОST-запит на сервер
      const response = await axios.post('/users/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// оновлення користувача
export const userRefresh = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user.'); // Помилка, якщо токен не збережений у стані
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// вхід користувача в систему
export const userLogin = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// вихід користувача із системи
export const userLogOut = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader(); // очищення заголовка авторизації
      // return response;
    } catch (error) {
      alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
