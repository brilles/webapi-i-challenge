// import React, { Component } from "react";
import axios from "axios";
// import "./App.css";
// import UserList from "./UserList";
// import UserForm from "./UserForm";

import React, { useState, useEffect } from "react";

function UserList({ users, deleteUser }) {
  return (
    <div className="users-list">
      <h1>Users: </h1>
      {users.map(user => {
        return (
          <div key={user.id}>
            <span onClick={() => deleteUser(user.id)}>X</span>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
          </div>
        );
      })}
    </div>
  );
}

function UserForm({ addUser, updateUser }) {
  return <p>hello from the userform</p>;
}

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setUsers({ error: err });
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <UserForm />
      <UserList users={users} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: []
//     };
//   }

//   fetchUsers() {
//     axios
//       .get("http://localhost:4000/api/users")
//       .then(res => {
//         this.setState({ users: res.data });
//       })
//       .catch(err => {
//         this.setState({ error: err });
//         console.log(err);
//       });
//   }

//   deleteUser = (e, id) => {
//     e.preventDefault();
//     axios
//       .delete(`http://localhost:4000/api/users/${id}`)
//       .then(res => {
//         this.fetchUsers();
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   addUser = (name, bio) => {
//     const newUser = {
//       "name": name,
//       "bio": bio
//     };
//     axios
//     .post("http://localhost:4000/api/users", newUser)
//     .then(res => {
//         // console.log(res)
//         // this.setState({ users: [...this.state.users, res.data]})
//         this.fetchUsers();
//     })
//         .catch(err => {
//         console.log(err);
//       });

//   };

//   updateUser = (name, bio, id) => {
//     const updatedUser = {
//       "name": name,
//       "bio": bio
//     };
//     axios
//       .put(`http://localhost:4000/api/users/${id}`, updatedUser)
//       .then(res => {
//         this.fetchUsers();
//       })
//       .catch(err => {
//         console.log(err);
//       });

//   };

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   render() {
//     return (
//       <div className="App">
//         <UserForm addUser={this.addUser} updateUser={this.updateUser}/>
//         <UserList users={this.state.users} deleteUser={this.deleteUser} />
//       </div>
//     );
//   }
// }

// export default App;
