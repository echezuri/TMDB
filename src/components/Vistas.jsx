import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import corazon from "../utils/corazon.png";
import tilde from "../utils/tilde.png";
import { useSelector } from "react-redux";
import { setUser } from "../store/users";
import { useParams } from "react-router";
import eliminar from "../utils/eliminar.png";

const imgURL = "https://image.tmdb.org/t/p/original";

const ButtonGeneric = {
  textShadow: "0px 0px 4px black, 0px 0px 20px black, 0px 0px 50px black",
  width: "5rem",
  boxShadow: 3,
  backgroundColor: "#64429B",
  borderRadius: "5px",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all 0.5s ease",
    backgroundColor: "#64429B",
  },
};

const Vistas = () => {
  const params = useParams();
  const usuario = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [userActual, setUserActual] = useState({});

  const handleInfo = (id) => {
    navigate(`/movie/${id}`);
  };
  useEffect(() => {
    axios
      .get(`/api/user/${params.id}`)
      .then((usuario) => setUserActual(usuario.data[0]));
  }, [userActual.vistas]);

  const handleDelete = (pelicula) => {
    axios.put(`/api/vistasDelete/${params.id}`, pelicula);
    swal({
      icon: "success",
      title: "Se ha eliminado de tu lista",
      text: `${pelicula.original_title}`,
    });
  };

  return (
    <>
      <Grid sx={{ height: "40px" }}></Grid>
      <Typography
        variant="contained"
        component="h4"
        color="rgb(220, 220, 220)"
        align="center"
      >
        Las peliculas que vio {userActual.name} {userActual.lastName}
      </Typography>
      <Grid sx={{ height: "20px" }}></Grid>
      <Grid
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          margin: "auto",
          mt: "20px",
          maxWidth: "90%",
        }}
      >
        {userActual.vistas ? (
          <>
            {userActual.vistas.map((pelicula, i) => (
              <Grid sx={{ margin: "10px" }} key={i}>
                <Grid id="img-contenedor">
                  <Link to={`/movie/${pelicula.id}`}>
                    <img
                      className="imagen"
                      style={{
                        width: "260px",
                        minHeight: "360px",
                        maxHeight: "360px",
                        marginTop: "5%",
                        borderRadius: "8px",
                        border: "2px solid black",
                        "&:hover": { transform: "scale(1.25)" },
                      }}
                      src={imgURL + pelicula.poster_path}
                      alt="Imagen no disponible"
                    />
                  </Link>
                  <Grid
                    sx={{
                      position: "absolut",
                      marginTop: "-80px",
                      marginLeft: "140px",
                      marginBottom: "30px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleDelete(pelicula);
                      }}
                    >
                      <img src={eliminar} alt="eliminar" className="eliminar" />
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    width: "220px",
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="contained"
                    component="h6"
                    color="rgb(220, 220, 220)"
                    align="center"
                  >
                    {pelicula.title}
                  </Typography>
                </Grid>
                <Grid sx={{ height: "60px" }}></Grid>
              </Grid>
            ))}
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default Vistas;
