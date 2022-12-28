import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

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

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
  };
  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/user", {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((res) => console.log(res));
    navigate("/login");
  };

  return (
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
        Registro
      </Typography>
      <TextField
        sx={{
          borderRadius: "5px",
          backgroundColor: "#f0f0f0",
          marginTop: "15px",
          width: "90%",
          maxWidth: "300px",
        }}
        value={name}
        id="input-name"
        label="Nombre"
        type="text"
        required
        onChange={nameOnChange}
      />
      <TextField
        sx={{
          borderRadius: "5px",
          backgroundColor: "#f0f0f0",
          marginTop: "15px",
          width: "90%",
          maxWidth: "300px",
        }}
        value={lastName}
        id="input-lastname"
        label="Apellido"
        type="text"
        required
        onChange={lastNameOnChange}
      />
      <TextField
        sx={{
          borderRadius: "5px",
          backgroundColor: "#f0f0f0",
          marginTop: "15px",
          width: "90%",
          maxWidth: "300px",
        }}
        value={email}
        id="outlined-basic-email"
        label="Email"
        type="text"
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
        value={password}
        id="outlined-basic-password"
        label="Contraseña"
        type="password"
        required
        onChange={passwordOnChange}
      />

      {name === "" || lastName === "" || email === "" || password === "" ? (
        <Button
          sx={ButtonGeneric}
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          component="label"
          fullWidth
          disabled
        >
          Registrate
        </Button>
      ) : (
        <>
          <Button
            sx={ButtonGeneric}
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            component="label"
            fullWidth
          >
            Registrate
          </Button>
        </>
      )}
      <Typography sx={{ textAlign: "center" }}>Ya estas registrado?</Typography>
      <Button
        sx={ButtonGeneric}
        type="button"
        variant="contained"
        href="/login"
        fullWidth
      >
        Ingresar
      </Button>
    </Grid>
  );
};

export default Register;
