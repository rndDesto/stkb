import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Text(props) {
  const { className, input, inputProps, label, meta, helper, icon } = props;
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
      <div className={classes}>
        <input className={classes} id={input.name} {...input} {...inputProps}  />
        { icon ?
          <span>
            <img alt="icon" src={`../../../assets/${icon}.svg`}/>
          </span> : ''}
      </div>
      {!!error && (dirty || touched) && <small className={styles.error}>{error}</small>}
      <span>{helper}</span>
    </div>
  );
}

Text.defaultProps = {
  className: '',
  helper:'',
  icon:'',
  input: {},
  inputProps: {},
  label: '',
  meta:{},

};

Text.propTypes = {
  className: PropTypes.string,
  helper: PropTypes.string,
  icon: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,

};
