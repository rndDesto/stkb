
import { getMovieList, getMovieDetail } from '../../services/movies';
import { DATA_FETCHED, LOADING, FAILED, DATA_RESET, CLOSE } from './constants';

export function fetchData(key, bodyParam, queryParam) {

  const apis = {
    getMovieList,
    getMovieDetail
  };



  return async dispatch => {
    if(bodyParam ==='reset'){

      dispatch(dataReset(true));
    }
    dispatch(loadingAction(true));
    try {
      const response = await apis[key](bodyParam, queryParam);

      if(response.Response === 'False'){
        dispatch(loadingAction(false));
        dispatch(failedAction(response.Error, key));
        return;
      }

      if(key === 'getMovieDetail'){
        dispatch(dataFetchedAction(response, key));
      }
      else{
        dispatch(dataFetchedAction(response.Search, key));
      }

      dispatch(loadingAction(false));
    } catch (err) {
      dispatch(loadingAction(false));
      dispatch(failedAction(err.Error, key));
    }
  };
}


export function closeError() {


  return async dispatch => {
    dispatch(loadingAction(false));
    dispatch(closeAction());

  };
}

function dataFetchedAction(data, key) {
  return { type: DATA_FETCHED, data, key };
}

function dataReset(data) {
  return { type: DATA_RESET, data:data };
}

function loadingAction(isLoading) {
  return { type: LOADING, isLoading:isLoading };
}

function failedAction(message,key) {
  return { type: FAILED, message, key };
}

function closeAction() {
  return { type: CLOSE };
}

