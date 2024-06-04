import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/auth/selectors';
import { fetchContacts } from '../redux/contacts/operations';

// сторінка Контакти відповідає за відображення списку контактів та їх форми
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts()); //запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && <Loader />}</div>
      {/* <ContactList /> */}
    </>
  );
}
