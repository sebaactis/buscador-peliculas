import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function App() {

  const { movies } = useMovies();

  return (
    <div className="page">
      <header>
        <h2 className="titulo"> Buscador de peliculas </h2>
        <form>
          <input placeholder="Advengers, Spiderman..." type="text" />
          <button type="submit"> Search </button>
        </form>
      </header >

      <main >
        <Movies movies={movies} />
      </main>

    </div>
  );
}

export default App;
