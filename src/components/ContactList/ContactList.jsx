import css from './ContactList.module.css';
import Contacts from '../Contact/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items) || [];
  const filterName = useSelector(state => state.filters.name) || '';

  const visibleContacts = contacts.filter(contact => {
    const contactName = contact?.name || '';
    return contactName.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleDelete = id => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };

  if (visibleContacts.length === 0)
    return <p className={css.text}>Contact not found</p>;
  else
    return (
      <ul className={css.container}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.contacts}>
            <Contacts contact={contact} delContact={handleDelete} />
          </li>
        ))}
      </ul>
    );
};
export default ContactList;
