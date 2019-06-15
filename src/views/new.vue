<template>
  <div class="new">
    <h1>{{ title }}</h1>
    <br>
    Title: <input type="text" v-model="newMovieTitle"><br>
    Year: <input type="text" v-model="newMovieYear"><br>
    Director: <input type="text" v-model="newMovieDirector"><br>
    Plot: <input type="text" v-model="newMoviePlot"><br>
    <button v-on:click="createMovie()">Add Movie</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "New Movie",
      newMovieTitle: "",
      newMovieYear: "",
      newMovieDirector: "",
      newMoviePlot: ""
    };
  },
  created: function() {},
  methods: {
    createMovie(movie){
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        director: this.newMovieDirector,
        plot: this.newMoviePlot
      }
      axios.post("/api/movies", params).then(response => {
        console.log(response.data);
        window.location.pathname = ("/movies");
      })
    }
  }
};
</script>