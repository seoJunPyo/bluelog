import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';

const reducers = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    user: persistReducers,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
