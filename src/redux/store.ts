import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from '@/services/shazamCore';

import playerReducer from '@/redux/features/playerSlice';

const reducers = combineReducers({
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  player: playerReducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
