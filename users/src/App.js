import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  deleteUser = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/api/users/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
