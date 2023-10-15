import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'PATAS-FELIZES',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};
