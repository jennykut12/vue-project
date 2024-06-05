<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Profile.vue'
import Profile from './components/Profile.vue';
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <div class="profile">
        <Profile msg="You did it!" />
      </div>
      <div>
        <nav>
          <RouterLink class="text" to="/">Repository</RouterLink>
          <RouterLink class="text" to="/followers">Followers</RouterLink>
          <RouterLink class="text" to="/following">Following</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.profile{
  width: 100%;
  
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.text{
  font-size: 24px;
  font-weight: bold;
  color: #D9D9D9;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color:  hsla(160, 100%, 37%, 1);
;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
