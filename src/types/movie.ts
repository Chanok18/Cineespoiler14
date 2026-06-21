export interface Movie {
  id: number
  name: string
  image: {
    medium: string
    original: string
  }
  summary: string
}