import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get('/users')
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map(u => (
          <li key={u._id || u.id}>{u.nombre || u.username}</li>
        ))}
      </ul>
    </div>
  );
}
