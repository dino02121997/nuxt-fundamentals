<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/teams/admin">Admin</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
      <NuxtLink v-if="!isLoggedIn" to="/login">login</NuxtLink>
      <NuxtLink v-else to="/login" @click.prevent="isLoggedIn = false"
        >logout</NuxtLink
      >
    </nav>
    <slot></slot>
  </div>
</template>
<script setup>
const isLoggedIn = useIsLoggedIn();
</script>