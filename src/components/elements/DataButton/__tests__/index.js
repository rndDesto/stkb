import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DataButton from '../DataButton';

describe('src/components/elements/DataButton', () => {

  test('render', () => {
    const shallow = new ShallowRenderer();
    DataButton.defaultProps.onClick();
    const tree = shallow.render(<DataButton />);
    expect(tree).toMatchSnapshot();
  });

  test('isLoading', () => {
    const shallow = new ShallowRenderer();
    DataButton.defaultProps.onClick();
    const tree = shallow.render(<DataButton isLoading={true}/>);
    expect(tree).toMatchSnapshot();
  });

});

