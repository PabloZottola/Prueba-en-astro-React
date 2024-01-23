const Search = ({ setMovie, movie }) => {
  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <>
      <form className="flex justify-center">
        <input
          className="bg-slate-700 text-white w-96 h-12 pl-4 my-6 rounded-lg"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={movie}
          name="query"
          maxLength="24"
          placeholder="Filtro de peliculas"
        />
      </form>
    </>
  );
};

export default Search;
