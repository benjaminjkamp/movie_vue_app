<template>
  <div class="show">
    <h1>{{ movie.title }}</h1>
    <h2> {{ movie.year }} </h2>
    <h4> {{ movie.director }} </h4>
    <h4> {{ movie.plot }} </h4>

    <router-link :to="{ name: 'edit', params: {id: this.$route.params.id} }">Edit Info</router-link>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      movie: ""
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    })
  },
  methods: {}
  
};

</script>