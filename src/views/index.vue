<template>
  <div class="index">
    <h1>{{ title }}</h1>
    <br>
    <router-link to="/new">Add Movie</router-link>
    <div v-for="movie in movies">
      <br><br>
      <h2> {{ movie.title }} </h2>
      <!-- <div v-on:click="showMovie(movie)"> -->
      <router-link :to="{ name: 'show', params: {id: movie.id} }">Show Details</router-link>
    <!-- </div> -->
      <!-- <button v-on:click="showMovie(movie)">Show Movie Info</button> -->
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "Movies",
      movies: [],
      currentMovie: {}
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      this.movies = response.data;
    })
  },
  methods: {
    // showMovie: function(movie){
      // this.currentMovie = movie;
      // console.log(this.currentMovie);

    // }
  }
};
</script>