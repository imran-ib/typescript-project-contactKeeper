import { createContext } from "react";

interface State {
  contacts?: {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    type?: string;
  }[];
  AddContact?: any;
  RemoveContact?: any;
}

export const initialSatate = {
  contacts: [
    {
      id: "1",
      name: "Imran Irshad",
      email: "imran@test.com",
      phone: "+92-333-7303358",
      type: "Personal"
    },
    {
      id: "2",
      name: "Irshad Ahmed",
      email: "Irshad@test.com",
      phone: "+92-333-33333",
      type: "Professional"
    }
  ]
};
//! No Colon
export const ContactContext = createContext<State>(initialSatate);
