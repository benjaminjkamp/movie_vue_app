<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <br>
    <!-- <div v-for="movie in movies"> -->
     
      Title: <input type="text" v-model="movie.title"><br>
      Year: <input type="text" v-model="movie.year"><br>
      Director: <input type="text" v-model="movie.director"><br>
      Plot: <input type="text" v-model="movie.plot"><br><br>
      <button v-on:click="updateMovie(movie)">Update Movie</button>
      <br><br>
      <button v-on:click="deleteMovie(movie)">Delete Movie</button>
      
      
    <!-- </div> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "Edit Movie Info",
      movie: ""
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
    })
  },
  methods: {
    updateMovie: function(movie){
      var params = {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        plot: movie.plot
      }
      axios.patch("/api/movies/" + this.$route.params.id, params).then(response => {
        console.log(response.data);
        window.location.pathname = ("/movies/" + this.$route.params.id);
      })
    },
    deleteMovie: function(movie){
      axios.delete("/api/movies/" + this.$route.params.id).then(response => {
        console.log(response.data);
        window.location.pathname = ("/");
      })
    }

  }
};
</script>