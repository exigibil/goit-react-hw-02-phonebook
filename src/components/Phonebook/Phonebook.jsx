import React, { useState } from 'react';
import styles from './Phonebook.module.css';
import ContactsForm from 'components/ContactsForm/Contactform';





function Phonebook() {
  
  const [contacts, setContacts] = useState([]);
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <>
      <ContactsForm onAddContact={addContact} />

      <div className={styles.phonebookContainer}>
        <h2 className={styles.title}>Contacts List</h2>
        <input className={styles.inputText} type="text" name="search" placeholder="Search.." />
        <ul className={styles.phonebookList}>
          {contacts.map((contact, index) => (
            <li key={contact.id}> {index + 1 }. {contact.name}: {contact.number}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Phonebook;
