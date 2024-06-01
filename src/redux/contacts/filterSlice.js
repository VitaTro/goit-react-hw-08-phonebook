import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '', // початковий стан фільтра
  reducers: {
    // визначення редуктора changeFilter, який змінюватиме стан фільтра на основі переданої діє action
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
