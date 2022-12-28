import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import MovieInfo from "./components/MovieInfo";
import { Container } from "@mui/system";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/users";
import "./App.css";
import Favoritos from "./components/Favoritos";
import Vistas from "./components/Vistas";
import { Grid } from "@mui/material";
import Users from "./components/Users";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get("/api/me").then((usuario) => {
      dispatch(setUser(usuario.data));
    });
  }, []);

  return (
    <Grid maxWidth="100%">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/favoritos/:id" element={<Favoritos />} />
        <Route path="/vistas/:id" element={<Vistas />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </Grid>
  );
};

export default App;
