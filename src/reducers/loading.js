import { ACTIONS } from '../constants';

const initialState = {
  isLoading: false
};

export default function reducer(state = initialState, action) {
  const { DONE_LOADING, LOADING } = ACTIONS;
  const { type } = action;

  switch (type) {
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
