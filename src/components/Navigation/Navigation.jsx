import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

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
