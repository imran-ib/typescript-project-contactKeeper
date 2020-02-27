import { Reducer } from "react";
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
import { initialSatate } from "./ContactContext";

export interface Action {
  type: string;
  payload?: any;
}

interface State {
  contacts: {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    type?: string;
  }[];
}

const ContactReducer: Reducer<State, Action> = (
  state = initialSatate,
  action
) => {
  const { type } = action;
  switch (type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default ContactReducer;
