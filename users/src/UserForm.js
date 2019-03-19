import React, { Component } from "react";

export default class UserForm extends Component {
  state = {
    name: "",
    bio: "",
    id: ""
  };

  handleChanges = e => {

    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
      e.preventDefault();
    this.props.addUser( this.state.name, this.state.bio);
  };

  updateUser = e => {
      e.preventDefault();
      this.props.updateUser( this.state.name, this.state.bio, parseInt(this.state.id, 10))
  };

  render() {
    return (
      <div className="add-user-form">
        <h2>Add or Update a User:</h2>
        <form onSubmit={this.state.id === "" ? this.addUser : this.updateUser}>
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
          <input
            type="number"
            name="id"
            placeholder="id of user to edit"
            value={this.state.id}
            onChange={this.handleChanges}
          />
          <button>{this.state.id === "" || "" ? "Add user" : "Update user"}</button>
        </form>
      </div>
    );
  }
}
