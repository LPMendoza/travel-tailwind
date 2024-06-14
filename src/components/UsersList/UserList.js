import { useEffect, useState } from 'react';

export default function UserLists({ currentPlace }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPlace]);

  return (
    <div className="flex items-center h-8">
      {users?.map(({ picture, name }) => (
        <img
          key={name.first}
          src={picture.thumbnail}
          alt="user"
          className={`w-8 border-2 border-primary rounded-full ${users.length > 1 ? '-ml-2' : ''}`}
        />
      ))}
    </div>
  );
}
