import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Signup.css';  // Import CSS specific to this component

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://imgbackend-h3dn.onrender.com/0auth/signup', {
        username,
        email,
        password
      });
      setMessage(response.data.userCreated ? 'User created successfully!' : 'Failed to create user.');
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>𝕻𝖎𝖔𝖓𝖊𝖊𝖗 𝕰𝖘𝖙𝖆𝖙𝖊</h2>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
