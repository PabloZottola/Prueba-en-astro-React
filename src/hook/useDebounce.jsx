import { useEffect, useState } from "react";
import { MovieApi } from "../API/MovieApi";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState("");
  let url = `https://api.tvmaze.com/search/shows?q=${debounceValue}`;
  const { movies, isLoading, fetchData } = MovieApi();

  if (value === "") {
    url = "https://api.tvmaze.com/shows";
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { isLoading, movies };
};
