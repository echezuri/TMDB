import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import { Grid, TextField } from "@mui/material";
import Buscador from "./Buscador";
import { getMovies } from "../commons/getMovies";

const apiKEY = "82a0b1180bed121094213fd39978e60d";

const Home = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) => {
        setTop(res);
      });
  }, [top.lenght]);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(query).then((res) => setMovies(res));
    // dispatch(setQuery(query));
    setQuery("");
  };

  return (
    <>
      <Grid
        buscador
        sx={{
          // backgroundColor: "red",
          position: "absolut",
          top: 100,
          marginTop: "-60px",
          marginLeft: "250px",
          marginBottom: "0px",
        }}
      >
        <form
          style={{
            width: "80%",
            maxWidth: "350px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            sx={{
              // width: "80%",
              borderRadius: "5px",
              backgroundColor: "#f0f0f0",
            }}
            value={query}
            fullWidth
            id="search-input"
            placeholder="Ingresa el nombre de una película"
            onChange={handleChange}
          />
        </form>
      </Grid>
      <Content peliculas={movies} />
      {top.length ? <Carousel top={top} /> : null}
    </>
  );
};

export default Home;
