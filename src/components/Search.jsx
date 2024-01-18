import { MovieApi } from "../API/MovieApi";
import { useEffect, useState } from "react";
import { useDebounce } from "../hook/useDebounce";

const Search = () => {
  const [movie, setMovie] = useState("Star Wars");
  const debounceValue = useDebounce(movie, 700);
  const url = `https://api.tvmaze.com/search/shows?q=${debounceValue}`;
  const { movies, isLoading, fetchData } = MovieApi();

  const handleChange = (event) => {
    setMovie(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [debounceValue]);
  return (
    <>
      {movie === "" ? (
        <>
          <form className="flex justify-center">
            <input
              className="bg-slate-700 text-white w-96 h-12 pl-4 mt-7 rounded-lg border-red-600 border-2 focus:outline-none focus:ring focus:ring-red-600"
              type="text"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={movie}
              name="query"
              maxLength="24"
              placeholder="Filtro de peliculas"
            />
          </form>

          <h2 className="text-white text-2xl ml-14 my-3">Películas</h2>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] justify-items-center mx-5 gap-3 text-white border-t pt-6"></ul>
        </>
      ) : (
        <>
          <form className="flex justify-center">
            <input
              className="bg-slate-700 text-white w-96 h-12 pl-4 mt-7 rounded-lg"
              type="text"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              value={movie}
              name="query"
              maxLength="24"
              placeholder="Filtro de peliculas"
            />
          </form>
          <h2 className="text-white text-2xl ml-14 my-3">Películas</h2>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] justify-items-center mx-5 gap-3 text-white border-t pt-6">
            {isLoading ? (
              <>
                <p>Cargando...</p>
              </>
            ) : (
              movies.map((movie) => (
                <li
                  className="transition-all duration-300 object-cover hover:scale-105 cursor-pointer"
                  key={movie.show.id}
                >
                  <a href={`/movies/${movie.show.id}`}>
                    <img src={movie.show.image?.medium} alt={movie.show.name} />
                    <p className="text-right">{movie.show.name}</p>
                  </a>
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default Search;
