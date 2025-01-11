<script setup>
import MovieService from '@/services/MovieService'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['close'])

const movieService = new MovieService()

const movie = ref(null)
const show = ref(false)

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
  document.body.style.overflow = 'hidden'
  show.value = true

  try {
    const response = await movieService.getMovie(props.movieId)
    movie.value = response
  } catch (error) {
    console.log(error)
  }
})

onUnmounted(() => {
  document.body.style.overflow = null
})

function close() {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}
</script>

<template>
  <div class="overlay" @click.self="close()">
    <Transition name="panel">
      <div v-if="show" class="details-modal">
        <button type="button" class="close" @click="close()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-x"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
        <template v-if="movie">
          <h2 class="title">{{ movie.title }}</h2>
          <iframe
            v-if="video"
            :src="`https://www.youtube.com/embed/${video.key}`"
            :title="video.name"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="overview">
            {{ movie.overview }}
          </p>
        </template>
        <div v-else class="loading-wrapper">
          <LoadingSpinner />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.panel-enter-from {
  transform: translateX(100%);
}

.panel-enter-active {
  transition: all 0.3s ease-out;
}

.panel-enter-to {
  transform: translateX(0);
}

.panel-leave-from {
  transform: translateX(0);
}

.panel-leave-active {
  transition: all 0.2s ease-out;
}

.panel-leave-to {
  transform: translateX(100%);
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  justify-content: flex-end;
}

.details-modal {
  background-color: #161d2f;
  width: 700px;
  /* height: 100%; */
  padding: 1.5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.close {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
}

.title {
  color: white;
}

.overview {
  color: #e2e8f0;
}

iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.75rem;
}
</style>
