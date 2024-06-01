import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserNoMenu } from 'components/UserNoMenu/UserNoMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';

// AppBar діє як хедер
export const AppBar = () => {
  const { isLoggedIn } = useAuth(); //отримуємо стан ідентичності (автентифікація) користувача

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserNoMenu />}{' '}
      {/* при логуванні вискакує userMenu (ок), або  UserNoMenu (нок)*/}
    </header>
  );
};
