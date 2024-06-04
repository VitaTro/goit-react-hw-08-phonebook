import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactSlice';
import { filterReducer } from './contacts/filterSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

// Конфігурація для redux-persist, вказуємо ключ, зберігання та поля, які треба зберегти.
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};
// Застосування middleware за допомогою getDefaultMiddleware,  який містить стандартні middleware, а також встановлює ігнорування деяких дій для redux-persist.
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Створення сховища Redux за допомогою configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для керування станом контактів
    filter: filterReducer, // Редюсер для керування станом фільтра
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// Створюємо persistor для збереження стану Redux у локальному сховищі.
export const persistor = persistStore(store);
