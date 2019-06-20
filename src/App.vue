<template>
  <div id="app">
    
    <header id="fh5co-header" role="banner">
      <div class="container text-center">
        <div id="fh5co-logo">
          <a href="index.html"><h1>Movies</h1></a>
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Movies</router-link></li>
            <li><router-link to="/movies/new">Add Movie</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view/>

    <footer id="fh5co-footer" role="contentinfo">
      <div class="container-fluid">
        <div class="footer-content">
          <div class="copyright"><small>&copy; 2016 Present. All Rights Reserved. <br>Designed by <a href="http://freehtml5.co/">FreeHTML5.co</a> Images: <a href="http://graphicburger.com/">GraphicBurger</a></small></div>
          <div class="social">
            <a href="#"><i class="icon-facebook3"></i></a>
            <a href="#"><i class="icon-instagram2"></i></a>
            <a href="#"><i class="icon-linkedin2"></i></a>
          </div>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<style>

</style>
