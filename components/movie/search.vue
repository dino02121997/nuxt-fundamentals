<template>
  <div>
    <h1>Page Movies</h1>
    <form>
      <input type="text" v-model="query" />
      <button type="submit" @click.prevent="search">Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies.Search" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" width="100" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

interface Movie {
  Title: string;
  Poster: string;
  imdbID: string;
}
interface Movies {
  Response: string;
  Search: Array<Movie>;
  totalResult: string;
}
const query = ref("");
const movies  = reactive<Movies>({
  Response: "",
  Search: [],
  totalResult: ""
});
async function search() {
  const { Search } = await $fetch(
    `https://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  ) as Movies;

  movies.Search = Search;
}
</script>

<style></style>
