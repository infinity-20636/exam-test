import React from 'react';

const UserItems = ({ user, deleteUser, setUserToEdit }) => {
  return (
    <li>
      {user.name} ({user.email})
      <button onClick={() => setUserToEdit(user)}>Редактировать</button>
      <button onClick={() => deleteUser(user.id)}>Удалить</button>
    </li>
  );
};

export default UserItems;