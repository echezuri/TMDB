import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Resumen = ({ movie }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid
        texto
        sx={{
          // backgroundColor: "red",
          // backdropFilter: "blur(20px)",

          // width: "500px",
          // margin: "auto",
          mt: "40px",
          marginLeft: "50px",

          display: "flex",
          flexDirection: "column",
          textShadow:
            "0px 0px 4px black, 0px 0px 20px black, 0px 0px 50px black",
        }}
      >
        <Typography variant="h5" color="#E3E3D1" align="center">
          {movie.tagline}
        </Typography>
        {!open ? (
          <IconButton onClick={() => toggleOpen()}>
            <ExpandMoreIcon
              fontSize="large"
              sx={{
                color: "#E3E3D1",
              }}
            />
          </IconButton>
        ) : (
          <IconButton onClick={() => toggleOpen()}>
            <ExpandLessIcon
              fontSize="large"
              sx={{
                color: "#E3E3D1",
              }}
            />
          </IconButton>
        )}
        {open ? (
          <Grid sx={{}}>
            <Typography variant="h6" color="#E3E3D1" align="center">
              {movie.overview}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Resumen;
