import "./ContactItem.css";

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className="contact-item">
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
