import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";


function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
