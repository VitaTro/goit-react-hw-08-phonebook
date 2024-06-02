import { UserMenu } from 'components/UserMenu/UserMenu';
import { UserNoMenu } from 'components/UserNoMenu/UserNoMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import css from './AppBar.module.css';

// AppBar діє як хедер
export const AppBar = () => {
  const { isLoggedIn } = useAuth(); //отримуємо стан ідентичності (автентифікація) користувача

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserNoMenu />}{' '}
      {/* при логуванні вискакує userMenu (ок), або  UserNoMenu (нок)*/}
    </header>
  );
};
