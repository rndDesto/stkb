import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '../../elements/Button';
import TextField from '../../fields/Text';
import Password from '../../fields/Password';
import styles from './styles.scoped.css';
import { useSelector } from 'react-redux';

export default function Login(props) {
  const { handleSubmit, pristine, submitting } = props;
  const { message } = useSelector(s => s.login);
  const { isLoading } = useSelector(s => s.loading);
  const textInputProps = { placeholder: 'cth. admin@email.com' };
  const passwordInputProps = { placeholder: 'Min. 6 karakter' };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <Field component={TextField} inputProps={textInputProps} label="Email" name="email"/>
      <Field component={Password} inputProps={passwordInputProps} label="Kata Sandi" name="password" />
      {message && <p className={styles.error}>{message}</p>}
      <Button disabled={pristine || submitting} onSubmit={handleSubmit}>
        { isLoading ? 'Menunggu...' : 'MASUK' }
      </Button>
    </form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};
