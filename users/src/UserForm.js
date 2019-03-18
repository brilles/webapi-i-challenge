import React, { Component } from "react";

export default class UserForm extends Component {
  state = {
    name: "",
    bio: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    this.props.handleSubmit(e, this.state.name, this.state.bio);
  };

  render() {
    return (
      <div className="add-user-form">
        <h2>Add User:</h2>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={this.state.bio}
            onChange={this.handleChanges}
          />
          <button>Add User</button>
        </form>
      </div>
    );
  }
}
