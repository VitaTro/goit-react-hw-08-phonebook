import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

// створення унікальних ідентифікаторів для полів форми
const nameInputId = nanoid();
const numberInputId = nanoid();

// додавання нового контакту у форму
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // обробка відправлення форми
  const handleSubmit = e => {
    e.preventDefault();
  };

  // перевірка, чи такий контакт вже є у списку
  const isContacts = contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isContacts) {
    Notiflix.Notify(`${name} is in use. Try another name. `);
    return;
  }

  // йде відправка дії для додавання нового контакту до Redux store
  dispatch(addContacts({ name, number }));
  setName('');
  setNumber('');

  // обробка зміни значень полів форми
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
            pattern="^[^\d]+$"
            title="The name should contain only letters, apostrophes, hyphens, and indents"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="number"
            value={number}
            onChange={handleChange}
            pattern="\+\d{11}"
            minlength="12"
            maxlength="12"
            title="The phone number should start with + followed by 11 digits"
            required
          />
        </label>
        <button type="submit">Add contact </button>
      </form>
      {/* <Filter /> */}
    </>
  );
};
