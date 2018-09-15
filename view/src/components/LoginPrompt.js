import React from 'react';

const LoginPrompt = () => (
    <div className="container">
      <p>Login: <input placeholder="email"></input></p>
      <p>Password: <input placeholder="password"></input></p>
      <button onClick={alert('You attempted to login.')}>Log On</button>
      <button onClick={alert('You will recieve an email')}>Forgot Password</button>
    </div>
);

export default LoginPrompt;