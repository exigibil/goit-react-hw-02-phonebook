import React from 'react';
import styles from './Phonebook.module.css';
import { nanoid } from 'nanoid';

function Phonebook() {
  return (
    <>
      <div className={styles.phonebookContainer}>
        <p className={styles.title}>Name</p>
        <input
          className={styles.inputText}
          type="text"
          name="name"
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
          pattern="number"
          title="Phone number must be a number"
          placeholder="Enter your phone number"
          required
        />
        <button className={styles.buttonContact} type="submit">
          Add contact
        </button>
      </div>
      <div className={styles.phonebookContainer}>
        <h2 className={styles.title}>Contacts List</h2>

        <input 
        className={styles.inputText}
        type="text" 
        placeholder="Search.." />

        <div>
          Lista
        </div>

      </div>
    </>
  );
}

export default Phonebook;
