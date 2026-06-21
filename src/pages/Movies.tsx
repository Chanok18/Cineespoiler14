import Navbar from "../components/layout/Navbar"
import MovieCard from "../components/movies/MovieCard"
import { useMovies } from "../hooks/useMovies"
import type { Movie } from "../types/movie"
function Movies() {

  const { data, isLoading } = useMovies()

  if (isLoading) {
    return <h1>Cargando...</h1>
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-white mb-8">
          Cartelera
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          {data?.map((movie: Movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}

        </div>

      </div>

    </div>
  )
}

export default Movies