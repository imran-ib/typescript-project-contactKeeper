import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./compoenets/Home/Home";
import { About } from "./compoenets/About/About";
import Layout from "./compoenets/layout/Layout";
import ContactState from "./context/ContactContext/ContactStateHOC";

const App: React.FC = () => {
  return (
    <ContactState>
      <Router>
        <>
          <Layout>
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </Layout>
        </>
      </Router>
    </ContactState>
  );
};

export default App;
