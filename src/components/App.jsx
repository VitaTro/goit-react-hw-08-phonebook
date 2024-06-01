import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refresh } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoure';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh()); //викликаємо функцію оновлення користувача при монтажі компонента або зміні діспатч
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user..</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* головна сторінка */}
        <Route index element={<Home />} />
        {/* сторінка реєстрації */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<Register />} />
          }
        />
        {/* сторінка входу */}
        <Route path="/login" />
        {/* сторінка контактів користувача */}
        <Route path="/contacts" />
      </Route>

      {/* якщо жоден маршрут не співпадає, то повертає на головну сторінку */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
