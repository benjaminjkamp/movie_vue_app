<template>
  <div class="home">
    
    <h1>{{ title }}</h1>
    <h2>Click Index Above ^</h2>

   <!--  <h2>Add Movie</h2>
    Title: <input type="text" v-model="newMovieTitle"><br>
    Director: <input type="text" v-model="newMovieDirector"><br>
    Year: <input type="number" v-model="newMovieYear"><br>
    Plot: <input type="text" v-model="newMoviePlot"><br>
    
    <button v-on:click="createMovie()">Add Movie</button>

    <br><br>
    <div v-for="movie in movies">
      <br><br>
      <h2> {{ movie.title }} </h2>
      <h3> Released in: {{ movie.year }} </h3>
      

      <div v-if="currentMovie === movie">
        {{movie}}
        <h4> Directed by: {{ movie.director }} </h4>
        <h4> Plot: {{ movie.plot }} </h4>
        <br>
        <h3>Update Movie</h3>
        Title: <input type="text" v-model="movie.title"> <br>
        Year: <input type="text" v-model="movie.year"> <br>
        Director: <input type="text" v-model="movie.director"> <br>
        Plot: <input type="text" v-model="movie.plot"> <br><br>
        

        <button v-on:click="updateMovie(movie)">Update Movie</button><br><br>
        <button v-on:click="destroyMovie(movie)">Delete Movie</button><br><br><br>
        
      </div>
      <button v-on:click="showMovie(movie)">Show Details</button>
    </div> -->

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "Movies!",
      movies: [],
      currentMovie: {},
      newMovieTitle: "",
      newMovieDirector: "",
      newMovieYear: "",
      newMoviePlot: ""
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      this.movies = response.data;
    })
  },
  methods: {
    // showMovie: function(movie){
    //   if (this.currentMovie === movie){
    //     this.currentMovie = {};
    //   } else {
    //     this.currentMovie = movie;
    //   }
      
    // },
    // createMovie: function(){
    //   var params = {
    //     title: this.newMovieTitle,
    //     year: this.newMovieYear,
    //     plot: this.newMoviePlot,
    //     director: this.newMovieDirector
    //   };

    //   axios.post("/api/movies", params).then(response => {
    //     this.movies.push(response.data);
    //     this.newMovieTitle = "";
    //     this.newMovieYear = "";
    //     this.newMovieDirector = "";
    //     this.newMoviePlot = "";
        
    //   })
    // },
    // updateMovie: function(movie){
    //   var params = {
    //     title: movie.title,
    //     year: movie.year,
    //     plot: movie.plot,
    //     director: movie.director
    //   };

    //   axios.patch("/api/movies/" + movie.id, params).then(response => {
    //     this.currentMovie = {};
    //   })
    // },
    // destroyMovie: function(movie){
    //   axios
    //     .delete("/api/movies/" + movie.id)
    //     .then(response => {
    //       var index = this.movies.indexOf(movie);
    //       this.movies.splice(index, 1);
    //   })
    // }
  }
};
</script>