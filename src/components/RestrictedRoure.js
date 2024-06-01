import { useAuth } from 'hooks';
import { Navigate } from 'react-router';

// компонент відповідає за обмежений маршрут, який доступний тільки для користувачів, що не увійшли до облікового запису
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; //Перенаправляємо на redirectTo, якщо користувач ВЖЕ авторизований, інакше рендеримо компонент Component
};
