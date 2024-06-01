import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

// відповідає за форму реєстрації нового користувача
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // Викликаємо дію userRegister з параметрами name, email та password, які отримуємо зі значень полів форми
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        UserName
        <input
          type="text"
          name="name"
          placeholder="name"
          pattern="^[^\d]+$"
          title="The name should contain only letters, apostrophes, hyphens, and indents"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="The password should contain only Latin letters (both uppercase and lowercase), numbers and other symbols"
          required
        />
      </label>
      <button type="submit"> Register</button>
    </form>
  );
};
