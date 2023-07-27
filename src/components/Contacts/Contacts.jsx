import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/contactsSlice';
import { selectFiltredContacts } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();

  const filtredNumbers = useSelector(selectFiltredContacts);

  return (
    <ul className={css.contacts_list}>
      {filtredNumbers.map(({ id, name, number }) => (
        <li className={css.contacts_item} key={id}>
          {name}: {number}
          <button
            className={css.contacts_btn}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
