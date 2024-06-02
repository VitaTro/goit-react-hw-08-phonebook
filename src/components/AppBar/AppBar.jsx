import { UserAuth } from 'components/UserAuth/UserAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';

// AppBar діє як хедер
export const AppBar = () => {
  const { isLoggedIn } = useAuth(); //отримуємо стан ідентичності (автентифікація) користувача

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserAuth />}{' '}
      {/* при логуванні вискакує userMenu (ок), або  UserNoMenu (нок)*/}
    </Header>
  );
};
