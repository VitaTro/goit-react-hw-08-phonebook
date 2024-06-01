import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/selectors';

// хук useAuth надає доступ до даних авторизації користувача
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn, //повертає, чи користувач авторизований
    isRefreshing, //повертає, чи є оновлення інфо про користувача
    user, // повертає об'єкт, що містить дані авторизованого користувача
  };
};
