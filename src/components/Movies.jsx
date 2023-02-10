export const ListOfMovies = ({ movies }) => {
    return (
        <ul className="movies">
            {
                movies.map((movie) => {
                    return (
                        <li className="movie" key={movie.id}>
                            <h3>{movie.title} </h3>
                            <p>{movie.year} </p>
                            <img src={movie.poster} alt={movie.Title} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export const NoMovies = () => {
    return (
        <p> No hay resultados para esa busqueda </p>
    )
}

export const Movies = ({movies}) => {

const hasMovies = movies?.length > 0
    return (
        hasMovies ? <ListOfMovies movies={movies} /> :  <NoMovies />
    )
}