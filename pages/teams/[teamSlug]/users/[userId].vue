<template>
  <h1>{{message}} </h1>
</template>

<script setup>
 
    const route = useRoute();
    const message =  computed(()=> `${route.params.userId} in team slug ${route.params.teamSlug}`);
</script>

<style>

</style>