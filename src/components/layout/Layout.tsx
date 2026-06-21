import { Outlet, Link } from "react-router-dom"

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

          <h1 className="text-2xl font-bold">
            🎬 CineSpoilerS
          </h1>

          <nav className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout