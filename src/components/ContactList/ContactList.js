import { useDispatch, useSelector } from 'react-redux';
import { ButtonItem, List, ListItem, Text } from './ContactList.Styled';
import { FaTrashCan } from 'react-icons/fa6';
import { getFilter } from '../../redux/selectors';
import { onDeleteContact } from '../../redux/contactSlice';


const getContacts = (contacts, filterContact) => {
  if (filterContact === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const visibleContacts = getContacts(contacts, filterContact);
  const dispatch = useDispatch();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Text>
            {name} {number}
          </Text>
          <ButtonItem onClick={() => dispatch(onDeleteContact(id))}>
            <FaTrashCan />
          </ButtonItem>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
