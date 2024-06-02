import { useAuth } from 'hooks/useAuth';
import { Link } from './Navigation.styled';
// відповідає за навігацію меню
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
      {/* посилання на сторінку контактів, тільки для залогінених каристувачів */}
    </nav>
  );
};
