// Entry point for the browser

import { rehydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const element = document.getElementById('app');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (process.env.NODE_ENV === 'production') {
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}

if (module.hot) {
  module.hot.accept();
}
