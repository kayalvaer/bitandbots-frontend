import React, { useState } from "react";
import {
  Avatar,
  CssBaseline,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";

import { Link, useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import "./SignUp.css";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { setToken } from "../../helpers";
export const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    setFormState({
      [name]: e.target.value,
    });
  };
  const onFinish = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          password: formState.password,
        }),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        navigate("/games", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="sm" className="pt-2">
      <CssBaseline />
      <div className="pt-2">
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form noValidate className="mt-2" onSubmit={onFinish}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember Me"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup">Don't have an account? Sign up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
