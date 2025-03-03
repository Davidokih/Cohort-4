
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import GlobalState from "./GlobalState";
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userRTK';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const current_user = persistReducer(persistConfig, GlobalState);

export default configureStore({
  reducer: {
    current_user,
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: (getAllMiddelware) =>
    getAllMiddelware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userSlice.middleware),
});
