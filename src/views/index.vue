<template>
  <div class="index">
    <br>
    <div class="container-fluid pt70 pb70">
      <div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
        <div v-for="movie in movies" class="fh5co-project masonry-brick">
          <router-link :to="{ name: 'show', params: {id: movie.id} }">
            <img src="https://irs.www.warnerbros.com/keyart-jpeg/inception_keyart.jpg">
            <h2>{{movie.title}}</h2>
          </router-link>
        </div>        
      </div>
      <!--END .fh5co-projects-feed-->
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
      movies: [],
      currentMovie: {}
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      console.log(response.data);
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