import React, { useContext } from "react";
import { ContactContext } from "../../context/ContactContext/ContactContext";
import ContactItem from "./ContactItem";

const Contacts: React.FC = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <>
      {contacts &&
        contacts.map((contact, i) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </>
  );
};

export default Contacts;
