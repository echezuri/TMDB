import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { useSelector } from "react-redux";
import axios from "axios";

const ButtonGeneric = {
  margin: "10px",
  width: "4rem",
  color: "#64429B",
  "&:hover": {
    transform: "scale(1.2)",
    transition: "all 0.5s ease",
    backgroundColor: "#161616",
  },
};

const addToVista = (movie) => {};

const Detalles = ({ movie }) => {
  const usuario = useSelector((state) => state.user);

  const handleFav = (e) => {
    axios.put(`/api/favs/${usuario.id}`, e);
  };

  const handleVistas = (e) => {
    axios.put(`/api/vistas/${usuario.id}`, e);
  };

  return (
    <>
      <Grid
        estadisticas
        sx={{
          width: "100%",
          height: "35%",
          marginLeft: "25px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          textShadow:
            "0px 0px 4px black, 0px 0px 20px black, 0px 0px 50px black",
        }}
      >
        <Typography
          variant="contained"
          component="h3"
          color="#E3E3D1"
          align="center"
        >
          {movie.original_title}
        </Typography>

        <Typography variant="h6" color="#E3E3D1" align="center">
          {movie.release_date}
        </Typography>

        <Typography
          sx={{
            color: "#D0D21A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="h5"
          color="white"
          align="center"
        >
          {movie.vote_average}
          <StarIcon fontSize="large" />
        </Typography>
        {/* <Grid
          botonera
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        ></Grid> */}
      </Grid>
    </>
  );
};

export default Detalles;
