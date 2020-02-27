import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext/ContactContext";

type inputProps = {
  name: string;
  email: string;
  phone: string;
  type: string;
};

const ContactForm: React.FC = () => {
  //State
  const [val, setVal] = useState<inputProps>({
    name: "",
    email: "",
    phone: "",
    type: "Personal"
  });
  //Context
  const contactContext = useContext(ContactContext);

  // Input Change Handler
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };
  // Form Submit Handler
  const FormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    contactContext.AddContact(val);
    setVal({
      name: "",
      email: "",
      phone: "",
      type: "Personal"
    });
  };
  const { name, email, phone, type } = val;

  return (
    <form action="POST" onSubmit={FormSubmit}>
      <h2 className="text-primary">Add New Contact</h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleInput}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone"
        onChange={handleInput}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value={type}
        checked={true}
        onChange={handleInput}
      />{" "}
      Personal
      <input
        type="radio"
        name="type"
        value={type}
        checked={true}
        onChange={handleInput}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-block btn-primary"
        />
      </div>
    </form>
  );
};

export default ContactForm;
