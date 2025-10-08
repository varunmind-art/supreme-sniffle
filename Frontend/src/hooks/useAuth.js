import { useState } from "react";

// Simple React hook for authentication state

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (username) => {
    setUser(username);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return { user, loggedIn, login, logout };
}
