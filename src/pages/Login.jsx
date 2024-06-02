import { LoginForm } from 'components/LoginForm/LoginForm';

// відповідає за відображення сторінки входу в систему
export default function Login() {
  return (
    <>
      <title> Login</title>
      {/* відображення форми для входу в систему */}
      <LoginForm />
    </>
  );
}
