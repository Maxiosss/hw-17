import ContactItem from "./ContactItem";
import "./ContactList.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
