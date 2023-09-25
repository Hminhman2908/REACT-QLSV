import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class DssvPage extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="text-center text-warning">Quản Lý Account</h1>
          <Form />
        </header>
        <section>
          <List />
        </section>
      </div>
    );
  }
}
