// import React from "react";
// import { useState } from "react";
// import { getMovies, getMovie } from "../commons/getMovies";
// import { TextField } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { setQuery } from "../store/querys";

// const Buscador = () => {
//   const dispatch = useDispatch();
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState(null);

//   const handleChange = (e) => {
//     e.preventDefault();
//     setQuery(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getMovies(query).then((res) => setMovies(res));
//     dispatch(setQuery(query));
//     setQuery("");
//   };

//   return (
//     <>
//       <form
//         style={{
//           width: "150%",
//           maxWidth: "500px",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <TextField
//           sx={{
//             borderRadius: "5px",
//             backgroundColor: "#f0f0f0",
//           }}
//           value={query}
//           fullWidth
//           id="search-input"
//           placeholder="Ingresa el nombre de una película"
//           onChange={handleChange}
//         />
//       </form>
//     </>
//   );
// };

// export default Buscador;
