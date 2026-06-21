import Navbar from "../components/layout/Navbar"
import MovieCard from "../components/movies/MovieCard"
import { useMovies } from "../hooks/useMovies"
import type { Movie } from "../types/movie"
function Home() {

  const { data, isLoading } = useMovies()

  if (isLoading) {
    return (
      <h1 className="text-white p-10">
        Cargando películas...
      </h1>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-bold text-white mb-6">
          🎬 CineSpoilerS
        </h1>

        <p className="text-slate-400 text-xl">
          Compra tickets para tus películas favoritas
        </p>

      </section>

      {/* Películas */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-white mb-8">
          Películas Destacadas
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {data
            ?.slice(0, 8)
            .map((movie: Movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

        </div>

      </section>

    </div>
  )
}

export default Home