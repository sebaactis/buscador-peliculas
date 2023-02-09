import moviesResults from "../moviesResults.json"

export const useMovies = () => {
    
    const movies = moviesResults.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}