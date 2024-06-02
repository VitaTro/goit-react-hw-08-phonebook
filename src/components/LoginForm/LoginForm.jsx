import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  Button,
  Form,
  Input,
  Label,
  Section,
  Wrapper,
} from './LoginForm.styled';

// відповідає за форму авторизації користувача
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // викликаю дію login з параметрами мейла і пароля, які отримую зі значень полів форми
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Wrapper>
        <h2> Log In, please</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
              required
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="password"
              pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
              title="The password should contain only Latin letters (both uppercase and lowercase), numbers and other symbols"
              required
            />
          </Label>
          <Button type="submit"> Log In</Button>
        </Form>
      </Wrapper>
    </Section>
  );
};
