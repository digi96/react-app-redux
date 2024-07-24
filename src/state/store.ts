import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: "main-root",
  storage,
  //blacklist: ['suppliers']
  //whitelist: ['suppliers', 'counters', 'pickups']
}


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});