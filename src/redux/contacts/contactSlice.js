import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // показати контакти
      // .addCase(fetchContacts.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, (state, action) => {
      //   state.isLoading = true;
      //   state.error = action.payload;
      // })
      // додати контакт
      // .addCase(addContacts.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      // .addCase(addContacts.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // видалити контакт
      // .addCase(deleteContacts.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      // .addCase(deleteContacts.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // });

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
