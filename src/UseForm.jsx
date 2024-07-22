import React, { useState, useEffect } from 'react';

const UseForm = ({ addUser, editUser, userToEdit, setUserToEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      editUser({ id: userToEdit.id, name, email });
      setUserToEdit(null);
    } else {
      addUser({ id: Date.now(), name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{userToEdit ? 'Обновить' : 'Добавить'}</button>
    </form>
  );
};

export default UseForm;