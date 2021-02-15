import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../../reducer/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export default () => {
  return {
    store,
    persistor: persistStore(store),
  };
};
