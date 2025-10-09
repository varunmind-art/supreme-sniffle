import React, { useState } from 'react';

export default function AuthPanel({ user, onLogin, onLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // or 'register'

  const handleAuth = () => {
    fetch(`/api/auth/${mode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    .then(res => res.json())
    .then(userObj => onLogin(userObj));
  };

  if (user) {
    return (
      <div style={{ float: 'right', margin: 10 }}>
        Hello, {user.username}!
        <button onClick={onLogout} style={{ marginLeft: 10 }}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ float: 'right', margin: 10 }}>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ marginRight: 5 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ marginRight: 5 }}
      />
      <button onClick={handleAuth}>{mode === 'login' ? 'Login' : 'Register'}</button>
      <button style={{ marginLeft: 5 }} onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        {mode === 'login' ? 'Register' : 'Login'}
      </button>
    </div>
  );
}
