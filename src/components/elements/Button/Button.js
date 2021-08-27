import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';
import { noop } from '../../../utils/format';

export default function Button(props) {
  const { buttonProps, children, className, onClick, disabled } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  buttonProps: {},
  children: null,
  className: '',
  disabled: false,
  onClick: noop,
};

Button.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
