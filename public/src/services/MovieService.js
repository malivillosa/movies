const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

export default class MovieService {
  async fetchPopularMovies({ page } = { page: 1 }) {
    const endpoint = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    const response = await fetch(endpoint).then((res) => res.json())

    const bookmarkedMovieIds = JSON.parse(localStorage.getItem('bookmarked_movies')) ?? {}

    if (response?.results) {
      response.results = response.results.map((movie) => ({
        ...movie,
        bookmarked: bookmarkedMovieIds[movie.id],
      }))
    }

    return response
  }

  async getMovie(id) {
    const endpoint = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
    let response = await fetch(endpoint).then((res) => res.json())

    if (response) {
      const endpointVideos = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`
      const videos = await fetch(endpointVideos).then((res) => res.json())

      response.videos = videos.results
    }

    return response
  }
}
