import React, { useState } from 'react';
import styles from './Contactform.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function ContactsForm({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = () => {
    const isDuplicate = contacts.some(contact =>contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
      alert(`Contact with name '${name}' already exist.`);
      return
    }
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
    <div className={styles.phonebookContainer}>
      <div className={styles.phonebookTitle}>
        <h2>Phonebook</h2>
      </div>
      <p className={styles.title}>Name</p>
      <input
        className={styles.inputText}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter your name"
      />

      <p className={styles.title}>Phone Number</p>
      <input
        className={styles.inputText}
        type="tel"
        name="phone number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        pattern="[0-9]*"
        title="Phone number must be a number"
        placeholder="Enter your phone number"
        required
      />
      <button onClick={addContact} className={styles.buttonContact} type="button">
        Add contact
      </button>
    </div>
  );
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactsForm;
