<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Movies" class="nav-link">Movies</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Personalities" class="nav-link">Personalities</router-link>
        </li>
      </ul>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style>
</style>
