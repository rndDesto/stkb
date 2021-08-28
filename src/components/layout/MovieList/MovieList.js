import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Dialog, Typography } from '@material-ui/core';
import styles from './styles.scoped.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../pages/Movie/action';
import DialogCustom from '../../elements/DialogCustom';

const MovieList = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const { data,isError } = useSelector((s) => s.movie);
  const { getMovieDetail } = data;

  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(true);

    dispatch(fetchData('getMovieDetail', '', { id }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <Card className={styles.root}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image={movieDetails.Poster}
            onClick={()=>handleOpen(movieDetails.imdbID)}
            title={movieDetails.Title}
          />
          <CardContent>
            <Typography component="h2" gutterBottom variant="h5">
              {movieDetails.Title}
            </Typography>

            <Typography color="textSecondary" component="p">Year: {movieDetails.Year}</Typography>
            <Typography color="textSecondary" component="p">ID: {movieDetails.imdbID}</Typography>
            <Typography color="textSecondary" component="p">Type: {movieDetails.Type}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {getMovieDetail && !isError ?
        <Dialog onClose={handleClose} open={open}>
          <DialogCustom data={getMovieDetail} />
        </Dialog>
        :
        null
      }

    </>
  );
};


MovieList.defaultProps = {
  movieDetails: {},
};

MovieList.propTypes = {
  movieDetails: PropTypes.object,
};

export default MovieList;
