import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import tmdbLogo from "../utils/tmdblogo.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/users";
import favbtn from "../utils/favbtn.png";
import vistobtn from "../utils/vistobtn.png";
import loginbtn from "../utils/loginbtn.png";
import salirbtn from "../utils/salirbtn.png";
import usuariosbtn from "../utils/usuariosbtn.png";
import { useNavigate } from "react-router-dom";
import Buscador from "./Buscador";

const ButtonGeneric = {
  textShadow: "0px 0px 4px black, 0px 0px 20px black, 0px 0px 50px black",
  margin: "10px",
  width: "7rem",
  boxShadow: 3,
  backgroundColor: "#64429B",
  borderRadius: "5px",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.5s ease",
    backgroundColor: "#64429B",
  },
};

const Header = function () {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios.post("/api/logout");
    dispatch(setUser({}));
    navigate("/");
  };

  return (
    <>
      <Grid
        sx={{
          height: "74px",
          pt: "10px",

          color: "#E3E3D1",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid id="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={tmdbLogo} alt="TMDBlogo" className="logo" />
          </Link>
        </Grid>
        {/* <Grid buscador>
          <Buscador />
        </Grid> */}
        <Grid id="centro">
          {/* {usuario.name ? (
            <>
              <Typography sx={{ width: "100%" }} variant="h5">
                Hola, {usuario.name}!
              </Typography>
            </>
          ) : null} */}
        </Grid>

        <Grid
          id="botonera"
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          {usuario.name ? (
            <>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  navigate(`/usuarios`);
                }}
              >
                {/* USUARIOS */}
                <img
                  src={usuariosbtn}
                  alt="Favoritos"
                  className="headerneonbtn"
                />
              </Button>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  navigate(`/favoritos/${usuario.id}`);
                }}
              >
                {/* FAVORITOS */}
                <img src={favbtn} alt="Favoritos" className="headerneonbtn" />
              </Button>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  navigate(`/vistas/${usuario.id}`);
                }}
              >
                {/* VISTAS */}
                <img src={vistobtn} alt="Vistas" className="headerneonbtn" />
              </Button>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  handleLogOut();
                }}
              >
                {/* SALIR */}
                <img src={salirbtn} alt="TMDBlogo" className="headerneonbtn" />
              </Button>
            </>
          ) : (
            <>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  navigate(`/usuarios`);
                }}
              >
                {/* USUARIOS */}
                <img
                  src={usuariosbtn}
                  alt="Favoritos"
                  className="headerneonbtn"
                />
              </Button>
              <Button
                // variant="contained"
                // sx={ButtonGeneric}
                onClick={() => {
                  navigate("/login");
                }}
              >
                {/* INGRESAR */}
                <img src={loginbtn} alt="TMDBlogo" className="headerneonbtn" />
              </Button>
            </>
          )}
        </Grid>
      </Grid>
      {/* <div style={{ marginTop: "40px" }}></div> */}
    </>
  );
};

export default Header;
