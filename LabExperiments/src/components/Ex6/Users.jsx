import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import '../../css/shared/ExperimentLayout.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="experiment-layout">
      <Navbar />
      <div className="experiment-content">
        <h2>This is the Users : 2300032384</h2>
        <br />
        {users.length > 0 ? (
          <table border={1} style={{ textAlign: 'center', width: '100%' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img src={user.avatar} alt="User Avatar" width={75} height={75} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>Data unable to fetch</h1>
        )}
      </div>
    </div>
  );
}

export default Users;
