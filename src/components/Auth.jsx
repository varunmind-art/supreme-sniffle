import React, { useState } from "react";

const Auth = () => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.trim()) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser("");
  };

  return (
    <div className="auth">
      {loggedIn ? (
        <div>
          <span>Welcome, {user}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
