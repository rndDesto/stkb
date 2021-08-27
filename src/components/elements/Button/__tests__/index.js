import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

describe('src/components/elements/Button', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    Button.defaultProps.onClick();
    const tree = shallow.render(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
