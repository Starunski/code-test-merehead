import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Main } from "./pages/main";
import { AddUser } from "./pages/add-user";
import { EditUser } from "./pages/edit-user";
import { Navbar } from "./components/navbar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/" render={() => <Main />} exact />
          <Route path="/add-user" render={() => <AddUser />} exact />

          <Route
            path="/edit-user/:id"
            render={({ match }) => {
              const { id } = match.params;
              console.log(match);
              return <EditUser id={id} />;
            }}
          />
        </Router>
      </div>
    );
  }
}
