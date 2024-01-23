import { useEffect } from "react";
import { MovieApi } from "../API/MovieApi";
import { StarRating } from "./StarRating";

const Movie = ({ id }) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const { movies, isLoading, fetchData } = MovieApi();

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <p>Cargando...</p>
        </>
      ) : (
        <>
          <div className="relative">
            <img
              className="w-96 max-md:mt-8 rounded-lg "
              src={movies.image?.medium}
              alt={movies.name}
            />
            <StarRating star={movies.rating?.average} />
          </div>

          <div className="text-sm text-left w-96">
            <h1 className="max-md:text-2xl text-5xl my-4 text-center">
              {movies.name}
            </h1>
            <p className="font-bold text-base opacity-90">
              Lenguaje: {movies.language}
            </p>
            <p className="font-bold text-base opacity-90">{`Géneros: ${movies.genres?.join(
              " "
            )} `}</p>
            <p className="font-bold text-base opacity-90">
              Fecha de estreno: {movies.premiered}
            </p>
            <h2 className="max-md:text-2xl text-4xl my-4 text-center">
              Sinopsis
            </h2>
            <span dangerouslySetInnerHTML={{ __html: movies.summary }} />
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
