import React from 'react';
import UserItem from './UserItems';

const UserList = ({ users, deleteUser, setUserToEdit }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUserToEdit={setUserToEdit}
        />
      ))}
    </ul>
  );
};

export default UserList;