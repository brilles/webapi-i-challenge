import React from "react";

const UserList = props => {
  return (
    <div className="users-list">
      <h1>Users: </h1>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <span onClick={e => props.deleteUser(e, user.id)}>X</span>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
