import React from 'react';
import { Provider } from 'react-redux';
import { Provider as BumbagProvider } from 'bumbag';

import { Routes } from './routes';

export let App = ({ store }) => (
  <Provider store={store}>
    <BumbagProvider>
      <Routes />
    </BumbagProvider>
  </Provider>
);
