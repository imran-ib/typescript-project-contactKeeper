import React, { useReducer } from "react";
import { initialSatate, ContactContext } from "./ContactContext";
import ContactReducer from "./ContactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

type StateProps = {
  children: React.ReactNode;
};

const ContactState: React.FC<StateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, initialSatate);

  //ADD_CONTACT
  type ContactProps = {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    type?: string;
  };

  const AddContact = (contact: ContactProps) => {
    contact.id = Math.round(Math.random() * 1000000000000).toString();
    return dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //DELETE_CONTACT
  const RemoveContact = (id: string) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //SET_CONTACT

  //CLEAR_CURRENT

  //UPDATE_CONTACT

  //FILTER_CONTACT

  //CLEAR_FILTER

  //SET_ALERT

  //REMOVE_ALERT

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        AddContact,
        RemoveContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
