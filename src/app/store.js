import { configureStore } from '@reduxjs/toolkit';
import { stackExchangeApi } from '../services/stackExchange';
import taggedReducer from '../features/currentTagged'


export default configureStore({
  reducer:{
    [stackExchangeApi.reducerPath] : stackExchangeApi.reducer,
    currentTagged: taggedReducer 
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(stackExchangeApi.middleware),
});