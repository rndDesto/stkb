import React from 'react';
import pages from '../';

jest.mock('react', () => ({
  ...require.requireActual('react'),
  lazy: jest.fn(i => { i(); return 'div'; }),
  Suspense: function suspense(props) { return <div {...props} />; },
}));

describe('src/pages', () => {
  test('render', () => {
    const result = pages.Error404({ children: 'tes' });
    expect(result.props.children.props.children).toBe('tes');
  });
});
