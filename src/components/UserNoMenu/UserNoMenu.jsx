import { Link } from 'react-router-dom';

// користувач не залогувався, або такого нема
export const UserNoMenu = () => {
  return (
    <section>
      <Link to="/register">Register</Link> <Link to="/login">Log In</Link>{' '}
    </section>
  );
};
