import fetch from '../utils/fetch';

const movieUrl = 'http://www.omdbapi.com/';
const movieKey = '761befef';

export const getMovieList = (_,payload) => (
  fetch(`${movieUrl}/?apikey=${movieKey}&s=${payload.query}&page=${payload.pageNumber}`, 'get')
);


export const getMovieDetail = (_,payload) => (
  fetch(`${movieUrl}/?apikey=${movieKey}&i=${payload.id}`, 'get')
);
