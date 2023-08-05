import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Users.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-item">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <Link to={`/albums/${user.id}`} className="album-link">
                Album
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
