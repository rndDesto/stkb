import { reduxForm } from 'redux-form';
import Component from './Login';
import validate from './validate';

export default reduxForm({
  form: 'login',
  initialValues: {
    email:'',
    password:''
  },
  validate,
})(Component);
