import React, { createContext, useState, useMemo } from "react";

// Create the UserContext
export const UserContext = createContext();

// UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update the user
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Function to clear the user
  const clearUser = () => {
    setUser(null);
  };

  // Memoize the context value to avoid unnecessary re-renders
  const contextValue = useMemo(() => ({ user, updateUser, clearUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
