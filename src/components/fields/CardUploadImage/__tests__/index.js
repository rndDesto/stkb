import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CardUploadImage from '../CardUploadImage';

describe('src/components/elements/CardUploadImage', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardUploadImage />);
    expect(tree).toMatchSnapshot();
  });
});
