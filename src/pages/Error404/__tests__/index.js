import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Error404 from '../Error404';

jest.mock('react-router-dom', () => ({
  Link: function link(props) { return <a {...props} />; },
}));

describe('src/pages/Error404', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Error404 />);
    expect(tree).toMatchSnapshot();
  });
});
