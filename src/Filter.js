import { useEffect } from "react";
import { createElement as $ } from "react";
import { Button } from "./FilterStyles";

const Filter = ({ setactiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return $(
    "div",
    { className: "filter-container" },
    // the numbers here are from the api docs, these genres have these genres respectively
    $(Button, { onClick: () => setactiveGenre(0) }, "All"),
    $(Button, { onClick: () => setactiveGenre(35) }, "Comedy"),
    $(Button, { onClick: () => setactiveGenre(28) }, "Action")
  );
};

export default Filter;
