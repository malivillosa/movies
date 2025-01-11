<script setup>
import MovieCard from '@/components/MovieCard.vue'
import { useStorage } from '@vueuse/core'

const popularMovies = useStorage('bookmarked_movies', [])
</script>

<template>
  <div class="wrapper">
    <h1 class="title">Bookmarked movies</h1>
    <div class="movies-grid">
      <MovieCard v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
}
.title {
  color: white;
}
.movies-grid {
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  row-gap: 2.5rem;
  width: 100%;
}

@media (max-width: 1024px) {
  .wrapper {
    padding-left: 1rem;
  }
}
</style>
