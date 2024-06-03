import { Link, Wrapper } from './UserAuth.styled';

// користувач не залогувався, або такого нема
export const UserAuth = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>{' '}
    </Wrapper>
  );
};
