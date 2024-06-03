import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';

// загальна структура сторінки
export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        {/* Дочірній компонент, який буде містити відповідний компонент в залежності від поточного шляху  */}
        <Outlet />
      </Suspense>
    </div>
  );
};
