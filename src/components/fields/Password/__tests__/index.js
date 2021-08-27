import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Password from '../Password';

describe('src/components/fields/Password', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Password />);
    expect(tree).toMatchSnapshot();

    tree.props.children[1].props.children[1].props.onClick();
  });
});
