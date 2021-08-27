import validate from '../validate';

describe('src/components/forms/Login/validate', () => {
  test('validate', () => {
    const input1 = { email: '', password: '' };
    expect(validate(input1)).toMatchObject({
      email: 'required',
      password: 'required',
    });

    const input2 = { email: 'tes', password: 'tes' };
    expect(validate(input2)).toMatchObject({
      email: false,
      password: false,
    });
  });
});
