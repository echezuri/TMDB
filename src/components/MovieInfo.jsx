import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovies, getMovie } from "../commons/getMovies";
import "../index.css";

import axios from "axios";
import { Grid, Typography, Button, IconButton } from "@mui/material";

import Wallpaper from "./movieInfo/Wallpaper";
import Detalles from "./movieInfo/Detalles";
import Poster from "./movieInfo/Poster";
import Resumen from "./movieInfo/Resumen";


const apiKEY = "82a0b1180bed121094213fd39978e60d";
const imgURL = "https://image.tmdb.org/t/p/original";

const MovieInfo = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKEY}&language=es`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, []);

  return (
    <>
      <Grid
        className="wallpaper"
        sx={{
          // backgroundColor: "green",
          backgroundImage: `url(${imgURL}${movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          // minHeight: "400px",
          objectFit: "contain",
          height: "90vh",
          mt: "10px",
          // margin: "auto",
          // mb: "60px",
        }}
      >
        <Grid sx={{ width: "30%", maxWidth: "350px" }}>
          <Detalles movie={movie} />
          <Poster movie={movie} />
        </Grid>
        <Grid sx={{ width: "60%" }}>
          <Resumen movie={movie} />
        </Grid>
        {/* <Wallpaper movie={movie} /> */}
      </Grid>
    </>
  );
};

export default MovieInfo;
