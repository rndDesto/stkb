import { DATA_FETCHED, LOADING, FAILED, DATA_RESET, CLOSE } from './constants';

const initialState = {
  isLoading: false,
  data:{
    getMovieList: [],
    getMovieDetail:null
  },
  isError:false
};

export default function reducer(state = initialState, action = {}) {
  const { type, data, isLoading, key, message } = action;

  switch (type) {
    case DATA_FETCHED:
      return {
        ...state,
        isLoading,
        data:{
          ...state.data,
          [key]: key === 'getMovieDetail' ? data :[...new Set([...state.data[key], ...data.map(b => b)])]}
      };
    case LOADING:
      return {
        ...state,
        isLoading,
      };
    case DATA_RESET:
      return {
        ...state,
        data:{
          getMovieList:[]
        },
      };
    case FAILED:

      return {
        ...state,
        isLoading,
        message,
        isError:true
      };
    case CLOSE:

      return {
        ...state,
        isLoading,
        message,
        isError:false
      };
    default:
      return state;
  }
}
