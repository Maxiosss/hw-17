import { useState } from "react";
import { nanoid } from "nanoid";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, number) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return { contacts, addContact, deleteContact };
}
