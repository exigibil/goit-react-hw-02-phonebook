import React, { useState } from 'react';
import styles from './Contactform.module.css';
import { nanoid } from 'nanoid';

const FILTER_TYPE = {
  ALL: 'all',
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
};

function ContactsForm({ onAddContact }) {
    
  const [contacts, setContacts] = useState([
    { id: '', name: '', number: '', isComplete: false },
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState(FILTER_TYPE.ALL);

  const addContact = () => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <div className={styles.phonebookContainer}>
        <p className={styles.title}>Name</p>
        <input
          className={styles.inputText}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name"
        />

        <p className={styles.title}>Phone Number</p>
        <input
          className={styles.inputText}
          type="telephone"
          name="phone number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="[0-9]*"
          title="Phone number must be a number"
          placeholder="Enter your phone number"
          required
        />
        <button
          onClick={addContact}
          className={styles.buttonContact}
          type="button"
        >
          Add contact
        </button>
      </div>
    </>
  );
}

export default ContactsForm;
