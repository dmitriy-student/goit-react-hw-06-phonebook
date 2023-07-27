import css from './App.module.css';
import { Section } from 'components/Section/Section';
import FormPhonebook from 'components/FormPhonebook/FormPhonebook';
import Contacts from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

export default function App(params) {
  const contacts = useSelector(state => state.contacts.data);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Section>
        <FormPhonebook></FormPhonebook>
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? (
          <Contacts />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </Section>
    </div>
  );
}
