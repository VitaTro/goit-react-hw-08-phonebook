import { useAuth } from "hooks";
import { Navigate } from "react-router";

// компонент відповідає за приватний маршрут, який доступний лише для авторизованих користувачів 
export const PrivateRoute =  ({ component: Component, redirectTo = '/'}) => {
    const  { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component; //Перенаправляємо на redirectTo, якщо користувач НЕ авторизований, інакше рендеримо компонент Component
};
}