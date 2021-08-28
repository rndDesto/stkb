import {  Button, Grid, TextField } from '@material-ui/core';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../../components/layout/MovieList/MovieList';
import { fetchData } from './action';
import styles from './styles.scoped.css';

const Movie = () => {
  const [query, setQuery] = useState('');
  const [currentQuery,setCurrentQuery] = useState('batman');
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();


  const { data,isLoading,isError, message } = useSelector((s) => s.movie);
  const { getMovieList } = data;


  const observer = useRef();
  const lastBookElementRef = useCallback(node => {

    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading]);


  useEffect(() => {
    if(pageNumber > 1){
      dispatch(fetchData('getMovieList', '', { query:currentQuery,pageNumber }));
    }
  }, [pageNumber]);

  // useEffect(() => {
  //   dispatch(fetchData('getMovieList', '', { query:currentQuery,pageNumber }));
  // }, []);



  const handleSearch = (e)=> {
    setCurrentQuery(e.target.value);
  };

  const handleSubmit = ()=> {

    if(query === currentQuery){
      dispatch(fetchData('getMovieList', '', { query,pageNumber }));
    }
    else{
      setQuery(currentQuery);
      dispatch(fetchData('getMovieList', 'reset', { query:currentQuery,pageNumber }));
    }

  };

  return (
    <>
      <Grid className={styles.searchBar} container spacing={5}>
        <Grid item xs={10}>
          <TextField fullWidth id="outlined-basic" label="Cari Film" onChange={handleSearch} size="small" value={currentQuery} variant="outlined"/>
        </Grid>
        <Grid item xs={2}>
          <Button  color="primary" disabled={query === currentQuery} fullWidth onClick={()=>handleSubmit()} variant="contained">Cari</Button>
        </Grid>
      </Grid>


      <Grid container spacing={3}>
        {getMovieList.map((movie, index) => {
          if (getMovieList.length === index + 1) {
            return (<Grid item key={movie.imdbID} md={4} ref={lastBookElementRef} xs={12}>
              <MovieList movieDetails={movie} />
            </Grid>);
          } else {
            return (<Grid item key={movie.imdbID} md={4} xs={12}>
              <MovieList movieDetails={movie} />
            </Grid>);
          }
        })}
      </Grid>

      <div>{isLoading ? 'Loading...':null}</div>
      <div>{isError ? message
        : null}</div>
    </>
  );

};

export default Movie;
