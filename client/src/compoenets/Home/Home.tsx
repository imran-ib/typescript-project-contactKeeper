import React from "react";
import Contacts from "../Contacs/Contacts";
import ContactForm from "../Contacs/ContactForm";
import Counter from "../../Counter/Counter";

const Home: React.FC = () => (
  <>
    <Counter />
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>{" "}
      <div>
        <Contacts />
      </div>
    </div>
  </>
);

export default Home;
