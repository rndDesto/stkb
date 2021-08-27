import React, { useState } from 'react';
import DataButton from '../../components/elements/DataButton';

const Login = () => {
  const [isLoading, setIsLoading]= useState(false);
  const mantul = ()=>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },5000);
  };
  return (
    <div>
      Login
      <img src="/assets/ic-close.svg" />
      <DataButton
        buttonProps={{ color:'primary', variant:'contained', disabled:isLoading }}
        id="mantul"
        isLoading={isLoading}
        onClick={mantul}>ini button</DataButton>
    </div>
  );
};

export default Login;
