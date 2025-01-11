<script setup>
import { onMounted, ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'
import MovieService from '@/services/MovieService'
import MovieCard from '@/components/MovieCard.vue'

const movieService = new MovieService()

const popularMovies = ref([])
const page = ref(1)
const totalPages = ref(null)
const loadingNewPage = ref(false)

onMounted(async () => {
  try {
    const response = await movieService.fetchPopularMovies()
    popularMovies.value = response.results
    totalPages.value = response.total_pages
  } catch (error) {
    console.log(error)
  }
})

async function loadMore() {
  if (loadingNewPage.value) return
  if (page.value < totalPages.value) {
    page.value += 1
  } else {
    return
  }

  loadingNewPage.value = true

  try {
    const response = await movieService.fetchPopularMovies({
      page: page.value,
    })
    popularMovies.value.push(...response.results)
    totalPages.value = response.total_pages
  } catch (error) {
    console.log(error)
  } finally {
    loadingNewPage.value = false
  }
}
</script>

<template>
  <div class="wrapper">
    <h1 class="title">Popular movies</h1>
    <div class="movies-grid">
      <MovieCard
        v-for="movie in popularMovies"
        :key="movie.id"
        :movie="movie"
        @view-details="$emit('view-details', $event)"
      />
      <div v-element-visibility="loadMore"></div>
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
