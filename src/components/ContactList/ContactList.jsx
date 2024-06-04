import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { Button, Item, List } from './ContactList.styled';

// список контактів
export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}

          <Button
            type="button"
            name="delete"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
