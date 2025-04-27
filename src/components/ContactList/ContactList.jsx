import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const selectNameFilter = useSelector((state) => state.filter.filters.name);

  if (!contacts || contacts.length === 0) {
    return <p>Loading contacts...</p>;
  }

  const filteredUsers = contacts.filter((user) =>
    user.name
      .toLocaleLowerCase()
      .includes(selectNameFilter.toLocaleLowerCase().trim())
  );

  return (
    <ul className={s.contactList}>
      {filteredUsers.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
