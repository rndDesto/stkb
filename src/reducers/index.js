import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import movie from '../pages/Movie/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  movie,
  routing: routerReducer,
});

export default rootReducer;
