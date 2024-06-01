import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectErrors = state => state.contacts.error;
export const selectFilter = state => state.filter;

// створно складний селектор, який залежить від селектору контактового і селектору фільтру.
// createSelector передає попередньо створені селектори та функцію, яка обчислює відфільтрований масив контактів
// потім selectVisibleContacts повертає масив контактів, які відфільтровується
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
