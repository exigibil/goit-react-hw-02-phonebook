import React from 'react';
import styles from './Phonebook.module.css';
import { nanoid } from 'nanoid';

function Phonebook() {
  return (
    <div className={styles.phonebookContainer}>
        <p className={styles.title}>Name</p>
      <input
        className={styles.inputText}
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <button className={styles.buttonContact} type="submit">Add contact</button>
    </div>
  );
}

export default Phonebook