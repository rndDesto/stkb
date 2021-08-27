import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Password(props) {
  const { className, input, inputProps, label } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');
  const [show, setShow] = useState(false);

  return (
    <div className={classes}>
      <label>{label}</label>
      <div className={className}>
        <input id={input.name} type={show ? 'text' : 'password'} {...input} {...inputProps} />
        <button onClick={() => setShow(!show)} type="button">
          <img alt={show ? 'show' : 'hide'} src={`/assets/ic-password-${show ? 'show' : 'hide'}.svg`} />
        </button>
      </div>
    </div>
  );
}

Password.defaultProps = {
  className: '',
  input: {},
  inputProps: {},
  label: ''
};

Password.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string
};
