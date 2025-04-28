import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const selectNameFilter = useSelector((state) => state.filter.filters.name);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ color: "red" }}>
        No contacts found. Add a new contact to start!
      </p>
    );
  }

  const filteredUsers = contacts.filter((user) =>
    user.name.toLowerCase().includes(selectNameFilter.toLowerCase().trim())
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
