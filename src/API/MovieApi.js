import { useState } from "react";

export const MovieApi = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setIsLoading(false);
    }
  };
  return { movies, isLoading, fetchData };
};
