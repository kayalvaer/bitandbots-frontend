import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { API, BEARER } from "../constant";
import { useEffect } from "react";
import { getToken } from "../helpers";
import { Alert, Snackbar } from "@mui/material";

const AuthProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      setOpen(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">
          There was an error with fetching the user, please try to Log In!
        </Alert>
      </Snackbar>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
