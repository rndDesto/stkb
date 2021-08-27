import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const DataButton = (props) => {
  const {
    buttonProps,
    children,
    onClick,
    id,
    isLoading } = props;
  return (
    <Button
      id={id}
      {...buttonProps}
      onClick={onClick}>
      {isLoading ? 'Mengirim':children}</Button>
  );
};

DataButton.defaultProps = {
  buttonProps: {},
  children: null,
  id:'',
  isLoading:false,
  onClick: () => {},
};

DataButton.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  id:PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DataButton;
