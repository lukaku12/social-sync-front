import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div className="p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p className="text-gray-500">Welcome to the home page</p>
        <p className="text-gray-600">Give Us Your info!</p>

        <form
          onSubmit={handleSubmit}
          className="flex gap-y-4 flex-col pt-2 w-[300px]"
        >
          <div>
            <TextField
              className="w-full"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              className="w-full"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <TextField
              className="w-full"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
