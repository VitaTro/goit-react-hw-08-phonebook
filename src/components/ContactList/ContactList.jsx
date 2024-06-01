import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

// список контактів
export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts)}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};
