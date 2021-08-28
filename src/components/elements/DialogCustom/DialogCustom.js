import React, { Fragment } from 'react';
import { DialogTitle,DialogContent, Grid, Typography } from '@material-ui/core';
import styles from './styles.scoped.css';
import PropTypes from 'prop-types';


const DialogCustom = ({ data }) => {

  const renderDetail = () =>{

    let HeadDetailMovie = ['Year',
      'Rated',
      'Released',
      'Runtime',
      'Director',
      'Writer',
      'Actors',
      'Plot',
      'Language',
      'Country',
      'Awards',
      'Metascore',
      'imdbRating',
      'imdbVotes',
      'imdbID',
      'Type',
      'DVD',
      'BoxOffice',
      'Production',
      'Website'
    ];
    let DetailMovie= [];

    if(Object.keys(data).length !== 0){
      HeadDetailMovie.forEach((val, index)=>{
        let mov = (
          <Fragment key={index}>
            <Grid item xs={2}>
              <Typography>{val}</Typography>
            </Grid>
            <Grid item xs={10}>{data[val]}</Grid>
          </Fragment>
        );

        DetailMovie.push(mov);
      });
    }
    return DetailMovie;

  };
  return (
    <>
      <DialogTitle id="scroll-dialog-title">{data.Title}</DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>

        <div className={styles.poster}>
          <img src={data.Poster} />
        </div>

        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {renderDetail()}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </>
  );
};

DialogCustom.defaultProps = {
  data: {},
};

DialogCustom.propTypes = {
  data: PropTypes.object,
};

export default DialogCustom;
