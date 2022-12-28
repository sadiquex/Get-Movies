import { createElement as $ } from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import { MoviesContainer } from "./MovieStyles";
import Filter from "./Filter";
const App = () => {
  // initially, set popular to an empty array of movies
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  // the activeGenre is 0 because the genres are indicated by numbers in the api docs
  // 0 indicating all genres
  const [activeGenre, setactiveGenre] = useState(0);

  // run fetch popular when the component gets rendered out
  // get the data as soon as the page renders
  useEffect(() => {
    fetchPopular();
  }, []);

  // get popular movies
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b771f5d4d53ab4fbdbdafcb462a17175&language=en-US&page=1"
    );
    const movies = await data.json();
    // results contains the movies
    setPopular(movies.results);
    // duplicate array to handle filter according to genre
    setFiltered(movies.results);
  };

  return $(
    "div",
    { className: "App" },
    $(Filter, { popular, setFiltered, activeGenre, setactiveGenre }),
    // popular movies
    $(
      MoviesContainer,
      {
        className: "popular-movies",
        transition: { layout: { duration: 0.5 } },
      },
      filtered.map((movie) => $(Movie, { key: movie.id, movie }))
    )
  );
};

export default App;
