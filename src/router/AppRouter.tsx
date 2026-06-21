import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import Movies from "../pages/Movies"
import MovieDetail from "../pages/MovieDetail"

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/movies"
            element={<Movies />}
          />

          <Route
            path="/movies/:id"
            element={<MovieDetail />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter