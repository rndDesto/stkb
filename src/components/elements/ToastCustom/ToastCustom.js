import React from 'react';

import styles from './styles.scoped.css';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const ToastCustom = ({ msg }) => {
  return (
    <Grid container>
      <Grid className={styles.root} item>
        {msg}
      </Grid>
    </Grid>
  );
};

ToastCustom.defaultProps = {
  msg: {},
};

ToastCustom.propTypes = {
  msg: PropTypes.object,
};


export default ToastCustom;
