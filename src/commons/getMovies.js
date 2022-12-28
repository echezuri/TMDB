const apiKEY = "82a0b1180bed121094213fd39978e60d";
const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=es`;

const getMovies = (keyword = null) => {
  let movies;

  if (keyword) {
    let query = keyword.split(" ").join("-");
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&language=es&query=${query}&page=1&include_adult=false`
    ).then((res) =>
      res
        .json()
        .then((res) => res.results)
        .then((res) => {
          movies = res;
          return movies;
        })
    );
  } else
    return fetch(apiURL)
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) => {
        movies = res;
        return movies;
      });
};

// Funcion que en base a un id retorna el objeto pelicula correspondiente

const getMovie = (id) => {
  let movie;
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKEY}&language=es`
  )
    .then((res) => res.json())
    .then((res) => {
      movie = res;
      return movie;
    });
};

const getTop = () => {
  let tops;
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKEY}&language=es&page=1`
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => {
      tops = res;
      return tops;
    });
};

export { getMovies, getMovie, getTop };
