import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Text(props) {
  const { className, input, inputProps, label, meta, helper } = props;
  const { dirty, error, touched } = meta;
  const classes =   [
    styles.root,
    !!input.value || styles.empty,
    !!error && (dirty || touched) && styles.error,
    className
  ].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <label>{label}</label>
      <input className={classes} id={input.name} {...input} {...inputProps}  />
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
      <span>{helper}</span>
    </div>
  );
}

Text.defaultProps = {
  className: '',
  helper:'',
  input: {},
  inputProps: {},
  label: '',
  meta:{},
};

Text.propTypes = {
  className: PropTypes.string,
  helper: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
};
