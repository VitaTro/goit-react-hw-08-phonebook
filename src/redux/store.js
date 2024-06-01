import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from 'redux/contacts/contactsSlice';
// import { filterReducer } from 'redux/filter/filterSlice';
import logger from 'redux-logger';
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
import { authReducer } from '../redux/auth/slice';

// Застосування middleware за допомогою getDefaultMiddleware,  який містить стандартні middleware, а також встановлює ігнорування деяких дій для redux-persist.

// це не діє, так як вже не існує в' @reduxjs/toolkit' !!!!!
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Конфігурація для redux-persist, вказуємо ключ, зберігання та поля, які треба зберегти.
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Створення сховища Redux за допомогою configureStore

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// Створюємо persistor для збереження стану Redux у локальному сховищі.
export const persistor = persistStore(store);
