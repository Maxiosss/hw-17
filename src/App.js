import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import useContacts from "./hooks/useContacts";
import "./App.css";

function App() {
  const { contacts, addContact, deleteContact } = useContacts();
  const [filter, setFilter] = useState("");

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
