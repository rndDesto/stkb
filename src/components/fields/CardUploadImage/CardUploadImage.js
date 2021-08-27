import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Upload(props) {
  const { className, input, inputProps, data, label, helper, meta } = props;
  const { dirty, error, touched } = meta;
  const classes =   [
    styles.root,
    !!data || styles.placeholder,
    !!error && (dirty || touched) && styles.error,
    className
  ].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <label>{label}</label>
      <div className={classes}>
        {data ? <img alt="icon image" className={styles.preview} src={data} /> :
          <img alt="icon image" className={styles.icon} src="../../../assets/ic-default-image.svg" />
        }
        <label>
          {data ? <p>Edit</p>  : <p>Upload</p>}
          <input  id={input.name} {...input} {...inputProps} type="file"/>
        </label>
      </div>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
      <span>{helper}</span>
    </div>
  );
}
Upload.defaultProps = {
  className: '',
  data:'',
  helper: '',
  input: {},
  inputProps: {},
  label: '',
  meta:{},
};

Upload.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
  helper: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};
