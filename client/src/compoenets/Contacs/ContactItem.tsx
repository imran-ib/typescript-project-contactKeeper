import React, { useContext } from "react";
import FontAwesome from "react-fontawesome";
import { ContactContext } from "../../context/ContactContext/ContactContext";

type conatctProps = {
  contact: {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    type?: string;
  };
};

const ContactItem: React.FC<conatctProps> = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {contact.name}
        <span
          style={{ float: "right" }}
          className={`badge ${
            contact.type === "Professional" ? "badge-primary" : "badge-success"
          }`}
        >
          {/* Fisrt Letter Uppercase */}
          {contact.type &&
            contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </span>
      </h3>
      <ul>
        {contact.email && (
          <li>
            {" "}
            <FontAwesome
              style={{ paddingRight: "5px" }}
              className="fas fa-envelope-open"
              name="email"
            />{" "}
            {contact.email}
          </li>
        )}
        {contact.phone && (
          <li>
            {" "}
            <FontAwesome
              style={{ paddingRight: "5px" }}
              className="fas fa-phone"
              name="email"
            />{" "}
            {contact.phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button
          // onClick={() => contactContext.RemoveContact(contact.id)}
          onClick={() => {
            if (
              window.confirm(
                `Are You Sure You want To Delete ${contact.name.toUpperCase()} ?`
              )
            ) {
              return contactContext.RemoveContact(contact.id);
            }
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
