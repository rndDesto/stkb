import * as format from '../format';

describe('src/utils/format', () => {
  test('thousand', () => {
    const result = format.thousand(1000);
    expect(result).toEqual('1.000');
  });
});
