import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'netflix',
      storage,
      whitelist: ['auth', 'media'],
    },
    reducers
  );

  return persistedReducer;
};
