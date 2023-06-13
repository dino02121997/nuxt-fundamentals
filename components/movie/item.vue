<template>
  <li class="movie-item">
    <NuxtLink :to="{ name: 'movies-id', params: { id: props.movie.imdbID } }">
      <img :src="props.movie.Poster" :alt="props.movie.Title" width="100" />
      <p>{{ props.movie.Title }}</p>
    </NuxtLink>
  </li>
</template>
<script setup lang="ts">
interface MoveItemProps {
  movie: {
    Title: string;
    Poster: string;
    mdbID: string;
  };
}
const props = defineProps<MoveItemProps>();
</script>
<style lang="scss">
.movie-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  overflow: hidden;
  position: relative;
  a{
    width: 100%;
  }
}
.movie-item img {
  width: 100px;
  aspect-ratio: 2/3;
  margin-bottom: 10px;
}
.movie-item p {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>