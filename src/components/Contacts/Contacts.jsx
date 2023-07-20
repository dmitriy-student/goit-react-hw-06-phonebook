import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css';
import { deleteContact } from 'redux/contactsSlice';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filtredNumbers = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

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
