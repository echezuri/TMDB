import React from "react";
import Grilla from "./Grilla";
import { useState, useEffect } from "react";
import { getMovies, getMovie } from "../commons/getMovies";
import { useContext } from "react";

import { Grid, TextField, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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

const Content = function ({ peliculas }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(query).then((res) => setMovies(res));
    setQuery("");
    setOpen(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <>
        <Grilla peliculas={peliculas} />
      </>
    </Grid>
  );
};
export default Content;
