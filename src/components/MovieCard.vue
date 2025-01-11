<script setup>
import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const skeleton = ref(true)
const bookmarkedMovies = useStorage('bookmarked_movies', [])

const image = computed(() => {
  if (props.movie.backdrop_path == null) {
    return '@/assets/placeholder.jpeg'
  }

  return 'https://image.tmdb.org/t/p/w1280' + props.movie.backdrop_path
})

const releaseDate = computed(() => {
  if (!props.movie.release_date) {
    return 'UNKNOWN'
  }

  return new Date(props.movie.release_date).getFullYear()
})

const bookmarked = computed(() => {
  return bookmarkedMovies.value.find(({ id }) => props.movie.id === id)
})

function togglebookmark() {
  const movieIsBookmarked = bookmarkedMovies.value.find(({ id }) => id === props.movie.id)
  if (movieIsBookmarked) {
    bookmarkedMovies.value = bookmarkedMovies.value.filter(({ id }) => id !== props.movie.id)
  } else {
    bookmarkedMovies.value.push(props.movie)
  }
}
</script>

<template>
  <div class="movie">
    <div tabindex="0" class="movie__image-wrapper">
      <img v-if="skeleton" class="movie__image-skeleton" src="@/assets/placeholder.jpeg" />
      <img
        class="movie__image"
        :class="{ hidden: skeleton }"
        :src="image"
        @load="skeleton = false"
      />
      <div class="movie__overlay">
        <button
          type="button"
          class="movie__overlay-details"
          @click="$emit('view-details', movie.id)"
        >
          View details
        </button>
      </div>
      <button type="button" class="movie__bookmark" @click="togglebookmark()">
        <svg
          v-if="!bookmarked"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="checked"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      </button>
    </div>
    <div>
      <p class="movie__title">
        {{ movie.title }}
      </p>
      <p class="movie__release-date">
        {{ releaseDate }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.movie {
  display: flex;
  flex-direction: column;
}
.movie:hover .movie__overlay {
  display: flex;
}
.movie__image-wrapper {
  display: block;
  position: relative;
  border-radius: 0.375rem;
  padding: 0.125rem;
  height: 100%;
}
.movie__image-skeleton {
  display: block;
  object-fit: cover;
  height: 100%;
  border-radius: 0.375rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.movie__image {
  display: block;
  object-fit: cover;
  height: 100%;
  border-radius: 0.375rem;
}
.movie__title {
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  color: white;
}
.movie__release-date {
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  color: #9ca3af;
}
.movie__bookmark {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.movie__bookmark svg {
  color: white;
  width: 16px;
  height: 16px;
}
.movie__bookmark svg.checked {
  color: #fc4747;
}
.movie__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0.125rem;
  border-radius: 0.375rem;
  display: none;
  align-items: center;
  justify-content: center;
}
.movie__overlay-details {
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 9999px;
}
.movie__overlay-details svg {
  width: 16px;
  height: 16px;
}
.hidden {
  display: none;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
