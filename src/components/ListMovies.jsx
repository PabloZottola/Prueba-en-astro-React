import { useEffect, useState } from "react";

const ListMovies = ({ movies, isLoading }) => {
  const [page, setPage] = useState(40);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    if (scrollPosition >= pageHeight) setPage((prevPage) => prevPage + 40);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [document.body.offsetHeight]);

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] justify-items-center mx-5 mb-6 gap-3 text-white border-t pt-6">
        {isLoading ? (
          <>
            <p>Cargando...</p>
          </>
        ) : movies.length === 240 ? (
          movies.slice(0, page).map((movie) => (
            <li
              className="transition-all duration-300 object-cover hover:scale-105 cursor-pointer"
              key={movie.id}
            >
              <a href={`/movies/${movie.id}`}>
                <img src={movie.image?.medium} alt={movie.name} />
                <p className="text-right">{movie.name}</p>
              </a>
            </li>
          ))
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
  );
};

export default ListMovies;
