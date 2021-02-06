import React from 'react';
import { Provider } from 'react-redux';

import store from './src/config/redux/store';
import Home from './src/feature/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
