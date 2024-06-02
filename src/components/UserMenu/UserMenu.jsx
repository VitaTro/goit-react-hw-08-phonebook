import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Button, Container, Wrapper } from './UserMenu.styled';

// користувач залогувався
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>Welcome to PhoneBook {user.name}</Wrapper>{' '}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>{' '}
    </Container>
  );
};
