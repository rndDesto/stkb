import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Upload from '../Upload';

jest.mock('react', () => ({
  ...require.requireActual('react'),
  useEffect: cb => cb(),
}));

describe('src/components/fields/Upload', () => {
  test('render', () => {
    global.URL.createObjectURL = jest.fn();
    document.getElementById = () => ({ src: null });

    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Upload  />);
    expect(tree).toMatchSnapshot();

    const res = Upload({ ...Upload.defaultProps, data: { name: 'a' } });
    expect(res).toMatchSnapshot();

    const res1 = Upload({
      ...Upload.defaultProps,
      meta: { error: 'err', dirty: true, touched: true }
    });
    expect(res1.props.children[2].props.children).toBe('err');

    const res2 = Upload({
      ...Upload.defaultProps,
      meta: { error: 'err', dirty: false, touched: true }
    });
    expect(res2.props.children[2].props.children).toBe('err');
  });
});
