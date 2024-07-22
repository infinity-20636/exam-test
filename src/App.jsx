
import React, { useState } from 'react';
import UseForm from './UseForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


  const array = [3, 5, 7, 9, 11, 13, 15]

  const result = array.filter((e)=> {
    if(e === 2 % 0){
      e.length
    }
    console.log(result);
  })

  return (
    <div>
      <h1>Управление пользователями</h1>
      <UseForm
        addUser={addUser}
        editUser={editUser}
        userToEdit={userToEdit}
        setUserToEdit={setUserToEdit}
      />
      <UserList users={users} deleteUser={deleteUser} setUserToEdit={setUserToEdit} />
    </div>
  );
};

export default App;
