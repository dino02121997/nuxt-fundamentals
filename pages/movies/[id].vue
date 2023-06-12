<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = useFetch(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
//     `https://httpbin.org/status/500`,
  {
    pick: ["Plot", "Title"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    },
    onResponseError(response) {
        showError({ statusCode: 500, statusMessage: "Internal Server Error" });
    },
  }
);
</script>

<style>

</style>