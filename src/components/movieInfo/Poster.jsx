import React from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";
import corazon from "../../utils/corazon.png";
import tilde from "../../utils/tilde.png";
import swal from "sweetalert";

// import swal from "@sweetalert/with-react";
import favbtn from "../../utils/favbtn.png";
import vistobtn from "../../utils/vistobtn.png";

import { useSelector } from "react-redux";

const imgURL = "https://image.tmdb.org/t/p/original";

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

const Poster = ({ movie }) => {
  const usuario = useSelector((state) => state.user);

  const handleFav = (e) => {
    axios
      .put(`/api/favs/${usuario.id}`, e)
      .then(() => {
        swal({
          icon: "success",
          title: "Listo, añadido a favoritos!",
          text: `${e.original_title}`,
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          swal({
            icon: "error",
            title: "Ya se encuentra en favoritos",
            text: `${e.original_title}`,
          });
        }
      });
  };

  const handleVistas = (e) => {
    axios
      .put(`/api/vistas/${usuario.id}`, e)
      .then(() => {
        swal({
          icon: "success",
          title: "Añadido a lista de peliculas ya vistas!",
          text: `${e.original_title}`,
        });
      })
      .catch((error) => {
        if (error.response.status === 401) {
          swal({
            icon: "error",
            title: "Ya se encuentra entre tus peliculas vistas",
            text: `${e.original_title}`,
          });
        }
      });
  };

  return (
    <>
      <img
        style={{
          width: "70%",
          marginLeft: "75px",
          borderRadius: "10px",
          border: "1px solid black",
          boxShadow: "0px 0px 60px #161616",
        }}
        src={imgURL + movie.poster_path}
        alt="Imagen no disponible"
      />
      {usuario.id ? (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: "45px",
          }}
        >
          <Button
            // variant="contained"
            // sx={ButtonGeneric}
            onClick={() => handleFav(movie)}
          >
            {/* a favs */}
            <img src={favbtn} alt="Boton-favoritos" className="posterbtn" />
          </Button>
          <Button
            // variant="contained"
            // sx={ButtonGeneric}
            onClick={() => handleVistas(movie)}
          >
            {/* Ya la vi */}
            <img src={vistobtn} alt="Boton-visto" className="posterbtn" />
          </Button>
        </Grid>
      ) : null}
    </>
  );
};

export default Poster;
