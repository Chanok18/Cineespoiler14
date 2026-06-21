import type { Movie } from "../../types/movie"
import { Link } from "react-router-dom"
interface Props {
  movie: Movie
}

function MovieCard({ movie }: Props) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">

      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">

        <h3 className="text-white font-bold text-lg">
          {movie.name}
        </h3>

      </div>
      <Link
  to={`/movies/${movie.id}`}
  className="block mt-3"
>
  <button className="w-full bg-red-600 py-2 rounded-lg">
    Ver detalle
  </button>
</Link>

    </div>
  )
}

export default MovieCard