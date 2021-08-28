import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import AppContextProvider from './contexts';
import { ROUTES } from './configs';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Switch>
            <Route component={pages.Movie} exact path={ROUTES.MOVIE()} />
            <Route component={pages.Error404} />
          </Switch>
        </AppContextProvider>
      </ThemeProvider>
    </Router>
  </Provider>
);

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
