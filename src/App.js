import { useEffect, useRef, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true)


  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ""
      return;
    }

    if (search === "") {
      setError("El campo esta vacio")
      return;
    }

    if (search.length < 3) {
      setError("El nombre de la pelicula debe tener mas de 3 caracteres")
      return;
    }

    setError(null);

  }, [search])

  return { search, setSearch, error }
}


function App() {

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies();
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(" ")) return
    setSearch(e.target.value)
  }


  return (
    <div className="page">
      <header>
        <h2 className="titulo"> Buscador de peliculas </h2>
        <form className="formulario" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} placeholder="Advengers, Spiderman..." type="text" />
          <button type="submit"> Search </button>
        </form>
        {error && <p style={{ color: "red" }}> {error} </p>}
      </header >

      <main >
        <Movies movies={movies} />
      </main>

    </div>
  );
}

export default App;
