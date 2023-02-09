import moviesResults from "../src/moviesResults.json"

function App() {

  const movies = moviesResults.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <header>

        <h2 className="titulo"> Buscador de peliculas </h2>

        <form className="form">
          <input className="inputText" type="text" />
          <button className="btn btn-success" type="button"> Search </button>
        </form>
      </header >

      <main className="peliculasContenedor">
        {
          hasMovies ? (
            <ul>
              {
                movies.map((movie) => {
                  return (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title} </h3>
                      <p>{movie.Year} </p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  )
                })
              }
            </ul>
          ) :
            <p> No hay peliculas </p>
        }

      </main>

    </>
  );
}

export default App;
