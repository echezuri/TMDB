import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/users";

const ButtonGeneric = {
  margin: "2rem",
  width: "8rem",
  boxShadow: 3,
  backgroundColor: "#64429B",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#64429B",
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("/api/login", { email, password }).then((user) => {
      dispatch(setUser(user.data));
    });
    navigate("/");
  };

  return (
    <>
      <Grid
        sx={{
          width: "80%",
          maxWidth: "340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          margin: "auto",
          mt: "50px",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <Typography mt="10px" mb="30px" align="center" variant="h5">
          Login
        </Typography>
        <TextField
          sx={{
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            marginTop: "15px",
            width: "90%",
            maxWidth: "300px",
          }}
          label="E-mail"
          type="text"
          placeholder="Enter E-Mail"
          fullWidth
          required
          onChange={emailOnChange}
        />

        <TextField
          sx={{
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            marginTop: "15px",
            width: "90%",
            maxWidth: "300px",
          }}
          label="Contraseña"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={passwordOnChange}
        />

        {email === "" || password === "" ? (
          <Button
            sx={ButtonGeneric}
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleLogin}
            disabled
          >
            Ingresa
          </Button>
        ) : (
          <>
            <Button
              sx={ButtonGeneric}
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleLogin}
            >
              Ingresa
            </Button>
          </>
        )}
        <Typography
          align="center"
          sx={{ fontSize: "medium", textAlign: "center" }}
        >
          No estas registrado?
        </Typography>
        <Button
          sx={ButtonGeneric}
          type="button"
          variant="contained"
          href="/register"
          fullWidth
        >
          Registrarse
        </Button>
      </Grid>
    </>
  );
};

export default Login;
