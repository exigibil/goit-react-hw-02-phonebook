import React from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from 'components/ContactsForm/Contactform';





function Phonebook() {
  
 
  

  return (
    <>
     
     <ContactsForm />

      <div className={styles.phonebookContainer}>
        <h2 className={styles.title}>Contacts List</h2>

        <input
          className={styles.inputText}
          type="text"
          name="search"
          placeholder="Search.."
        />

        <ul>
          <li>Topa Adrian: </li>
        </ul>
      </div>
    </>
  );
}

export default Phonebook;
