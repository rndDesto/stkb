import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';
describe('src/pages/Login', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
