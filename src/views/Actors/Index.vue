<template>
  <div class="actors-index">

    <br>
    {{actors}}
    <div class="container-fluid pt70 pb70">
      <datalist id="names">
        <option v-for="actor in actors">{{actor.first_name}}</option>
      </datalist>
      <div id="fh5co-projects-feed" class="fh5co-projects-feed clearfix masonry">
        Search by Name: <input v-model="nameFilter" list="names"><br><br>
        <div>
          <button v-on:click="sortByAttribute('first_name')">Sort Alphabetically</button>
          <button v-on:click="sortByAttribute('gender')">Sort by Gender</button>
          <button v-on:click="sortByAttribute('age')">Sort by Age</button>
          
        </div>
        <div v-for="actor in orderBy(filterBy(actors, nameFilter, 'first_name'), sortAttribute)" class="fh5co-project masonry-brick">
            <img src="https://irs.www.warnerbros.com/keyart-jpeg/inception_keyart.jpg">
            <h3>{{actor.first_name}} {{actor.last_name}}</h3>
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      actors: [],
      currentActor: {},
      nameFilter: "",
      sortAttribute: "last_name"
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      console.log(response.data);
      this.actors = response.data;
    })
  },
  methods: {
    sortByAttribute: function(attribute){
      this.sortAttribute = attribute;
    }
    // showMovie: function(movie){
      // this.currentMovie = movie;
      // console.log(this.currentMovie);

    // }
  }
};
</script>