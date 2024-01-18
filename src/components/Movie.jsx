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
        <div>
          <div className="relative">
            <img
              className="w-96 mt-8"
              src={movies.image?.original}
              alt={movies.name}
            />
            <StarRating star={movies.rating?.average} />
          </div>

          <div className="text-sm text-left">
            <h1 className="text-2xl my-4 text-center">{movies.name}</h1>
            <p className="font-bold">Lenguaje: {movies.language}</p>
            <p className="font-bold">{`Géneros: ${movies.genres?.join(
              " "
            )} `}</p>
            <p className="font-bold">Fecha de estreno: {movies.premiered}</p>
            <h2 className="text-2xl my-4 text-center">Sinopsis</h2>
            <p className="w-96">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              officiis consequatur odit aperiam inventore similique facere
              facilis ipsa ad iusto eum praesentium sapiente vitae unde
              provident, temporibus tenetur dolorum eaque!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
