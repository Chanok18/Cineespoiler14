import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.tvmaze.com/shows"
      )

      return response.data
    },
  })
}
export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}`
      )

      return response.data
    },
  })
}