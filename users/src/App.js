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
  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
