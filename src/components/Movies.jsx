import { useState } from "react";
import { useDebounce } from "../hook/useDebounce";
import Search from "./Search";
import ListMovies from "./ListMovies";

const Movies = () => {
  const [movie, setMovie] = useState("");
  const { isLoading, movies } = useDebounce(movie, 700);
  return (
    <>
      <Search
        setMovie={setMovie}
        movie={movie}
      />
      <ListMovies movies={movies} isLoading={isLoading}/>
    </>
  );
};

export default Movies;
