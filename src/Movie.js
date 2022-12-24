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
    null,
    $(MovieTitle, null, movie.title),
    $(MovieThumbnail, {
      src: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
    })
  );
};

export default Movie;
