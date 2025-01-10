<script setup>
import MovieService from '@/services/MovieService'
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
})

const movieService = new MovieService()

const movie = ref(null)

const video = computed(() => {
  if (!movie.value) return false

  for (let video of movie.value.videos) {
    if (video.site === 'YouTube') {
      return video
    }
  }

  return false
})

onMounted(async () => {
  try {
    const response = await movieService.getMovie(props.movieId)
    movie.value = response
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="wrapper">
    <template v-if="movie">
      <div v-if="video" class="iframe-video">
        <iframe
          :src="`https://www.youtube.com/embed/${video.key}`"
          :title="video.name"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div v-else class="no-trailer">
        No trailer found
      </div>
    </template>
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
  margin-bottom: 2rem;
}
.iframe-video {
  aspect-ratio: 16 / 9;
}
.iframe-video iframe {
  width: 100%;
  height: calc(100vh - 32px);
  border-radius: 0.75rem;
}

.no-trailer {
  color: white;
  text-align: center;
  padding: 15rem 0;
}

@media (max-width: 1024px) {
  .iframe-video iframe {
    height: calc(100vh - 140px);
  }

  .wrapper {
    padding-left: 1rem;
  }
}
</style>
