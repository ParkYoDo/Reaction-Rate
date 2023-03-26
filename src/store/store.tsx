import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import score from 'store/score';

const reducers = combineReducers({
  score: score.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [],
  whitelist: ['score'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof reducers>;
