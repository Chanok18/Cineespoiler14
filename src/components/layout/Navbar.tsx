import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          🎬 CineSpoilerS
        </h1>

        <div className="flex gap-6">

          <Link
            to="/"
            className="text-slate-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-slate-300 hover:text-white"
          >
            Movies
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
