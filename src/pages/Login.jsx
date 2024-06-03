import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

// відповідає за відображення сторінки входу в систему
export default function Login() {
  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>

      {/* відображення форми для входу в систему */}
      <LoginForm />
    </>
  );
}
