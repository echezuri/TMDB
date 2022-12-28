import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import corazon from "../utils/corazon.png";
import tilde from "../utils/tilde.png";

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("api/users").then((res) => setUsuarios(res.data));
  }, []);

  return (
    <>
      <Grid sx={{ height: "40px" }}></Grid>
      <Typography
        variant="contained"
        component="h4"
        color="#E3E3D1"
        align="center"
      >
        Listado de usuarios
      </Typography>
      <Grid sx={{ height: "20px" }}></Grid>
      <>
        <Grid
          sx={{
            color: "#E3E3D1",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // paddingBottom: "30px",
            margin: "auto",
          }}
        >
          <TableContainer sx={{ width: "100%" }}>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="#E3E3D1">
                      {<strong>Nombre</strong>}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{}}>
                    <Typography color="#E3E3D1">
                      {<strong>Apellido </strong>}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{}}>
                    <Typography color="#E3E3D1">
                      {<strong>Email</strong>}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{}}>
                    <Typography color="#E3E3D1">
                      {<strong>Favoritos</strong>}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{}}>
                    <Typography color="#E3E3D1">
                      {<strong>Vistas</strong>}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usuarios?.map((usuario, i) => (
                  <TableRow onClick={() => {}} key={i}>
                    <TableCell>
                      <Typography color="#E3E3D1">{usuario.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="#E3E3D1">
                        {usuario.lastName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="#E3E3D1">{usuario.email}</Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => navigate(`/favoritos/${usuario.id}`)}
                      >
                        <img
                          src={corazon}
                          alt="Boton-favoritos"
                          className="neonbtn"
                        />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => navigate(`/vistas/${usuario.id}`)}>
                        <img
                          src={tilde}
                          alt="Boton-visto"
                          className="neonbtn"
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </>
      <Grid sx={{ mb: "100px" }} />
    </>
  );
};

export default Users;
