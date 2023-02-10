import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";


function App() {

  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

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
        {
          loading ? <p>Cargando... </p> : <Movies movies={movies} />
        }
      </main>

    </div>
  );
}

export default App;
