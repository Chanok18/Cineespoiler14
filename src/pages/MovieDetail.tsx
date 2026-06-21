import { useParams } from "react-router-dom"
import { useMovie } from "../hooks/useMovies"
import { Button } from "../components/ui/button"

function MovieDetail() {
  const { id } = useParams()

  const { data, isLoading } = useMovie(id!)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        <h2 className="text-2xl">
          Cargando película...
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <img
            src={data.image?.original}
            alt={data.name}
            className="
              rounded-2xl
              shadow-2xl
              w-full
              hover:scale-105
              transition
            "
          />

          <div className="space-y-6">

            <span className="
              bg-red-600
              px-3
              py-1
              rounded-full
              text-sm
            ">
              🎬 Película
            </span>

            <h1 className="text-5xl font-bold">
              {data.name}
            </h1>

            <p className="text-yellow-400 text-xl">
              ⭐ Rating: {data.rating?.average || "N/A"}
            </p>

            <p className="text-slate-300 text-lg">
              🎭 {data.genres?.join(" • ")}
            </p>

            <div
              className="
                text-slate-400
                leading-8
                text-lg
              "
              dangerouslySetInnerHTML={{
                __html: data.summary,
              }}
            />

            <div className="flex gap-4">

              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700"
              >
                🎟 Comprar Ticket
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                ❤️ Favoritos
              </Button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default MovieDetail