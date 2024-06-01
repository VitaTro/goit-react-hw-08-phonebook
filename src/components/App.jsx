import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

import { fetchContacts } from '../redux/contacts/operations';
import { getError, getIsLoading } from '../redux/contacts/selectors';
// import Filter from './Filter/Filter';

import background from './img/apple.jpeg';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          padding: 20,
          color: '#fff',
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </>
  );
};
