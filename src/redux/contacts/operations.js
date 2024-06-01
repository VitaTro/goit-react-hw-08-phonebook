import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// створення асинхронічного запиту на показ контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// створення асинхронічного запиту на створення нового контакту
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      // надсилання POST-запиту на '/contacts' з даними { name, number }
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// створення асинхронічного запиту на видалення контакту
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      // надсилання DELETE-запиту на '/contacts'
      const response = await axios.delete(`/contact/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
