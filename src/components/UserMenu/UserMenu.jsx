import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

// користувач залогувався
export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <section>
      <div>Welcome to PhoneBook {user.name}</div>{' '}
      <button type="button" onClick={() => dispatch(logOut())}></button>{' '}
    </section>
  );
};