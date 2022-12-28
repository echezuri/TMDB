import React from "react";

import { useContext } from "react";
import { useState } from "react";
import { getMovies, getMovie } from "../commons/getMovies";
import axios from "axios";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import corazon from "../utils/corazon.png";
import tilde from "../utils/tilde.png";
import { useSelector } from "react-redux";

const imgURL = "https://image.tmdb.org/t/p/original";

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

const Grilla = function ({ peliculas }) {
  const usuario = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleInfo = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        // flexFlow: "row wrap",
        overflowX: "scroll",
        maxWidth: "100%",
      }}
    >
      {peliculas ? (
        <>
          {peliculas.map((pelicula, i) => (
            <Grid
              key={i}
              sx={{
                // width: "200px",

                margin: "8px",
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <Grid id="img-contenedor">
                <Link to={`/movie/${pelicula.id}`}>
                  <img
                    className="imagen"
                    style={{
                      // width: "95%",
                      minHeight: "320px",
                      maxHeight: "320px",
                      marginTop: "5%",
                      borderRadius: "8px",
                      border: "2px solid black",
                      "&:hover": { transform: "scale(1.25)" },
                    }}
                    src={imgURL + pelicula.poster_path}
                    alt="Imagen no disponible"
                  />
                </Link>
              </Grid>
              <Grid
                sx={{
                  height: "80px",
                  width: "100%",
                  margin: "auto",
                  mt: "5px",
                }}
              >
                <Typography
                  variant="contained"
                  component="h5"
                  color="rgb(220, 220, 220)"
                  align="center"
                >
                  {pelicula.title}
                </Typography>
              </Grid>
              {/* <Grid sx={{ height: "60px" }}></Grid> */}
            </Grid>
          ))}
        </>
      ) : null}
    </Grid>
  );
};

export default Grilla;
