import { FAILED } from './constants';

const initialState = {
  message: ''
};

export default function reducer(state = initialState, action) {
  const { type, message } = action;

  switch (type) {
    case FAILED:
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
}
