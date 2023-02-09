import { useEffect, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function App() {

  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(" ")) return
    setQuery(e.target.value)
  } 
  
  useEffect(() => {

    if (query === "") {
      setError("El campo esta vacio")
      return;
    }

    if (query.length < 3) {
      setError("El nombre de la pelicula debe tener mas de 3 caracteres")
      return;
    }

    setError(null);

  }, [query])

  return (
    <div className="page">
      <header>
        <h2 className="titulo"> Buscador de peliculas </h2>
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={handleChange} placeholder="Advengers, Spiderman..." type="text" />
          <button type="submit"> Search </button>
        </form>
        {error && <p style={{color: "red"}}> {error} </p>}
      </header >

      <main >
        <Movies movies={movies} />
      </main>

    </div>
  );
}

export default App;
