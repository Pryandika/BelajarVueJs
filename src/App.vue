<template>
  <!-- Navbar atas -->
  <section>
  <div class="header-area" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
      <div class="container">
        <nav class="navbar navbar-white bg-white">
          <a class="navbar-brand my-1" href="/">
            <img :src="images.logo" height="38" alt="logo">
          </a>
        </nav>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav my-1">
            <!-- Nav Link Fullscreen -->
            <router-link to="/" class="nav-item nav-link navbar-collapse fs-4 mx-2 nav-fill active"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/Doctors" class="nav-item nav-link navbar-collapse fs-4 mx-2"
              data-target="#navbarSupportedContent">Doctors</router-link>
            <router-link to="/Contact" class="nav-item nav-link navbar-collapse fs-4 mx-2"
              data-target="#navbarSupportedContent">Contact</router-link>
            <router-link to="/About" class="nav-item nav-link navbar-collapse fs-4 mx-2" data-target="#navbarSupportedContent">
              About</router-link>

            <!-- Nav Link Collapsed -->
            <router-link to="/" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/Doctors" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Doctors</router-link>
            <router-link to="/Contact" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Contact</router-link>
            <router-link to="/About" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">About</router-link>

            <!-- Search bar -->
            <form class="form-inline my-2 my-lg-1">
              <input class="d-lg-none d-xl-block form-control mr-sm-2 mx-2" type="search" placeholder="Search">
              <input class="d-none d-lg-block d-xl-none form-control mr-sm-2 mx-2" type="search" placeholder="Enter to Search">
              <button class="d-lg-none d-xl-block btn btn-outline-primary my-2 mx-2" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </section>
  <router-view />

  <section>
    <div class="footer">
      © 2021-2022
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                logo: require('@/assets/logo/logo.png')
            }
        }
    }
}

 $(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  }

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  color: #6ec3ff;
}

#nav a:hover{
  color: #6ec3ff;
}

#nav form{
    color: #6ec3ff;
}

.container{
  color: white;
}

.footer {
  padding-block: 2em;
}

</style>z