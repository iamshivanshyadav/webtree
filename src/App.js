import React, { useEffect, useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex flex-col sm:flex-row items-center p-6 bg-white rounded-xl shadow-xl w-10/12 max-w-md border border-purple-600">
        <img
          src={user.picture.large}
          alt="User"
          className="w-24 h-24 rounded-lg object-cover border-4 border-purple-600 shadow-md"
        />
        <div className="flex flex-col sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-lg font-bold text-purple-800">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-sm text-gray-700 mt-1">Gender: <span className="font-medium text-purple-700">{user.gender}</span></p>
          <p className="text-sm text-gray-700 mt-1">Phone: <span className="font-medium text-purple-700">{user.phone}</span></p>
          <p className="text-xs text-gray-500 mt-4">{`Location: ${user.location.city}, ${user.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
