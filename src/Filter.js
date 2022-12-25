import { useEffect } from "react";
import { createElement as $ } from "react";
import { Button } from "./FilterStyles";

const Filter = ({ setactiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      // return the default here, just double check
      setFiltered(popular);
      return;
    }
    // the filtered function will have the genre number
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return $(
    "div",
    { className: "filter-container" },
    // the numbers here are from the api docs, these genres have these genres respectively
    $(
      Button,
      {
        onClick: () => setactiveGenre(0),
        className: activeGenre === 0 ? "active" : "",
      },
      "All"
    ),
    $(
      Button,
      {
        onClick: () => setactiveGenre(35),
        className: activeGenre === 35 ? "active" : "",
      },
      "Comedy"
    ),
    $(
      Button,
      {
        onClick: () => setactiveGenre(28),
        className: activeGenre === 28 ? "active" : "",
      },
      "Action"
    ),
    $(
      Button,
      {
        onClick: () => setactiveGenre(80),
        className: activeGenre === 80 ? "active" : "",
      },
      "Crime"
    ),
    $(
      Button,
      {
        onClick: () => setactiveGenre(16),
        className: activeGenre === 16 ? "active" : "",
      },
      "Animation"
    )
  );
};

export default Filter;
