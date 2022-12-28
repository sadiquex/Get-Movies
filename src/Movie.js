import { createElement as $ } from "react";
import {
  //   MoviesContainer,
  MoviesCard,
  MovieTitle,
  MovieThumbnail,
} from "./MovieStyles";

const Movie = ({ movie }) => {
  return $(
    MoviesCard,
    {
      animate: { opacity: 1 },
      initial: { opacity: 0 },
      exit: { opacity: 0 },
      layout: {},
      whileHover: { scale: 1.1 },
    },
    $(MovieTitle, null, movie.title),
    $(MovieThumbnail, {
      src: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
    })
  );
};

export default Movie;
