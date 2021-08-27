import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';
import { useSelector } from 'react-redux';

useSelector.mockImplementation(fn => {
  fn({});
  return {
    login: {
      email: '',
      password: ''
    },
    message: 'test'
  };
});

describe('src/components/forms/Login', () => {
  let props = {
    handleSubmit: jest.fn(),
    pristine: true,
    submitting: false
  };

  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Login {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
