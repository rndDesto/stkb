import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto';
import configureStore, { history } from './store/configureStore';
import App from './App';
import './App.css';
import './styles/constants.css';
require('./favicon.ico');
const store = configureStore();

render (
  <App history={history} store={store} />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render (
      <NewApp history={history} store={store} />,
      document.getElementById('app')
    );
  });
}
