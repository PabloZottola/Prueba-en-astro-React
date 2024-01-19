import { useEffect, useState } from "react";
import { MovieApi } from "../API/MovieApi";
import { StarRating } from "./StarRating";

const Movie = ({ id }) => {
  const url = `https://api.tvmaze.com/shows/${id}`;
  const { movies, isLoading, fetchData } = MovieApi();
  const [imagenCargada, setImagenCargada] = useState(false);

  const handleImagenCargada = () => {
    setImagenCargada(true);

  };

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
              onLoad={handleImagenCargada}
            />
            <StarRating star={movies.rating?.average} />
          </div>

          <div className="text-sm text-left w-96">
            <h1 className="text-2xl my-4 text-center">{movies.name}</h1>
            <p className="font-bold">Lenguaje: {movies.language}</p>
            <p className="font-bold">{`Géneros: ${movies.genres?.join(
              " "
            )} `}</p>
            <p className="font-bold">Fecha de estreno: {movies.premiered}</p>
            <h2 className="text-2xl my-4 text-center">Sinopsis</h2>
            <span dangerouslySetInnerHTML={{ __html: movies.summary }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
