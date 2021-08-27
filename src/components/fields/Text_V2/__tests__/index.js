import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Text from '../Text';

describe('src/components/fields/Text', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Text />);
    expect(tree).toMatchSnapshot();

    const res1 = Text({
      ...Text.defaultProps,
      meta: { error: 'err', dirty: true, touched: true }
    });
    expect(res1.props.children[2].props.children).toBe('err');

    const res2 = Text({
      ...Text.defaultProps,
      meta: { error: 'err', dirty: false, touched: true }
    });
    expect(res2.props.children[2].props.children).toBe('err');
  });
});
