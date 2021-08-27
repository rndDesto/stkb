export default function validate(values) {
  const { email, password } = values;

  return {
    email: !email && 'required',
    password: !password && 'required',
  };
}
