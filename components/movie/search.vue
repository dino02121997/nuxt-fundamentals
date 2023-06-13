<template>
  <div>
    <h1>Page Movies</h1>
    <form>

      <input type="text" v-model="query" placeholder="search your movie"/>
      <button type="submit" @click.prevent="search">Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <MovieItem
        v-for="movie in moviesSearch"
        :key="movie.imdbID"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Movie {
  Title: string;
  Poster: string;
  imdbID: string;
}
interface MoviesResponse {
  Response: string;
  Search: Array<Movie>;
  totalResult: string;
}
const query = ref("");
const moviesSearch = ref<Movie[]>([]);
// const MoviesResponse = ref<MoviesResponse>({
//   Response: "",
//   Search: [],
//   totalResult: ""
// });
async function search() {
  const { Search } = (await $fetch(
    `https://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  )) as MoviesResponse;

  moviesSearch.value = Search;
}
</script>

<style lang="scss">
h1{
  text-align: center;
}
form{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 60%;
  margin: auto;
  padding:20px;
  
     box-shadow: 0px 5px 6px rgba(68, 67, 67, 0.2);
  input{
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgba(68, 67, 67, 0.2);
  }
  button{
    width: 50%;
    height: 30px;
    background: #eaafaf;
    outline: none;
    border: none;
    border-radius: 5px;
  }
}
</style>
