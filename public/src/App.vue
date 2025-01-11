<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__left">
      <nav>
        <RouterLink class="logo" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27">
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </RouterLink>
        <RouterLink class="item-link" to="/">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
            ></path>
          </svg>
        </RouterLink>
        <RouterLink class="item-link" to="/bookmark">
          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
            ></path>
          </svg>
        </RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.wrapper__left {
  padding: 1rem;
  flex-shrink: 0;
  width: 130px;
}

.wrapper__left .logo {
  margin-bottom: 2rem;
}

.wrapper__left nav {
  padding: 1.75rem;
  background-color: #161d2f;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 1rem;
  top: 1rem;
  z-index: 10;
}

.wrapper__left nav .item-link {
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.wrapper__left nav .item-link:hover {
  background-color: rgba(74, 82, 100, 0.171);
}

.wrapper__left nav .item-link.router-link-active {
  background-color: rgba(74, 82, 100, 0.171);
}

@media (max-width: 1024px) {
  .wrapper {
    flex-direction: column;
  }

  .wrapper__left {
    padding: 0;
    height: 80px;
  }

  .wrapper__left nav {
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    flex-direction: row;
  }
  .wrapper__left .logo {
    margin-bottom: 0;
  }
}
</style>
