import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { refresh } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Wrapper } from './App.styled';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh()); //викликаємо функцію оновлення користувача при монтажі компонента або зміні діспатч
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user..</p>
  ) : (
    <Wrapper>
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
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          {/* сторінка контактів користувача */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>

        {/* якщо жоден маршрут не співпадає, то повертає на головну сторінку */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};
