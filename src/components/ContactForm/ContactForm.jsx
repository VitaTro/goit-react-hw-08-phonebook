import { nanoid } from '@reduxjs/toolkit';

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

  // відслідковування змін у полях вводу і оновлює відповідний стан
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  // обробка відправлення форми
  const handleSubmit = e => {
    e.preventDefault();

    // перевірка форми на пусті поля
    if (name.trim() === '' || number.trim() === '') return;

    // перевірка, чи немає повторюваних імен
    const isRepeating = contacts.some(contact => contact.name === name);
    if (isRepeating) {
      alert('Contact with this name already exists!');
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
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
