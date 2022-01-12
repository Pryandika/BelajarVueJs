<template>
  <!-- Navbar atas -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
  <section>
  <div class="header-area" id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
      <div class="container">
        <nav class="navbar navbar-white bg-white">
          <a class="navbar-brand my-0" href="/">
            <img :src="images.logo" height="45" alt="logo">
          </a>
        </nav>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav">
            <!-- Nav Link Fullscreen -->
            <router-link to="/" class="nav-item nav-link navbar-collapse fs-4 mx-3 nav-fill active"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/About" class="nav-item nav-link navbar-collapse fs-4 mx-3" 
              data-target="#navbarSupportedContent">About</router-link>
             <router-link to="/Services" class="nav-item nav-link navbar-collapse fs-4 mx-3" 
              data-target="#navbarSupportedContent">Services</router-link>
            <router-link to="/Destination" class="nav-item nav-link navbar-collapse fs-4 mx-3" 
              data-target="#navbarSupportedContent">Destination</router-link>
            <router-link to="/Blog" class="nav-item nav-link navbar-collapse fs-4 mx-3" 
              data-target="#navbarSupportedContent">Blog</router-link>
            <router-link to="/Contact" class="nav-item nav-link navbar-collapse fs-4 mx-3"
              data-target="#navbarSupportedContent">Contact</router-link>
              

            <!-- Nav Link Collapsed -->
            <router-link to="/" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Home</router-link>
            <router-link to="/Contact" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Contact</router-link>
            <router-link to="/About" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">About</router-link>
            <router-link to="/Blog" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Blog</router-link>
            <router-link to="/Destination" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Destination</router-link>
            <router-link to="/Services" class="d-none fs-4 mx-2" data-toggle="collapse"
              data-target="#navbarSupportedContent">Services</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <br>
  </section>
  <router-view />

  <!-- Top Page Button -->
  <section>
  <transition>
    <div id="pagetop" v-show="scY > 300" @click="toTop">
      <button type="button" class="btn btn-secondary btn-sm"><i class="bi bi-chevron-double-up px-1"></i></button>
    </div>
  </transition>
  </section>


  <section>
    <div class="footer">
        <div class="d-flex justify-content-center">
          <div class="col-1"><a class="text-dark" href="https://facebook.com"><i class="bi bi-facebook"></i></a></div>
          <div class="col-1"><a class="text-dark" href="https://whatsapp.com"><i class="bi bi-whatsapp"></i></a></div>
          <div class="col-1"><a class="text-dark" href="https://instagram.com"><i class="bi bi-instagram"></i></a></div>
        </div>
      <div class="py-2"></div>
      <div class="d-block d-sm-none">© 2021 - {{new Date().getFullYear()}}Bali Medical Tourism Association<br><br>
        <router-link to="/">Home</router-link> • <router-link to="/Destination">Destination</router-link> • 
        <router-link to="/Contact">Contact</router-link>  • <router-link to="/About">About</router-link>
      </div>
      <div class="d-none d-sm-block d-md-block d-lg-none">
        <div class="text-center">© 2021 - {{new Date().getFullYear()}}Bali Medical Tourism Association<br>
          <router-link to="/">Home</router-link> • <router-link to="/Destination">Destination</router-link> • <router-link to="/Contact">Contact</router-link> • <router-link to="/About">About</router-link>
        </div>
      </div>
      <div class="d-none d-lg-block d-xl-block d-xxl-block">
        <div class="text-center">© 2021 - {{new Date().getFullYear()}} Bali Medical Tourism Association</div>
      </div>
    </div>
  </section>
</template>

<script>
import GoTop from './component/GoTop.vue'
export default {
    data() {
        return {
            images: {
                logo: require('@/assets/logo/logo-real-a.jpeg')
            },
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 20);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
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

#pagetop {
  position: fixed;
  bottom: 20px;
  right: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #6ec3ff;
}

#nav a:hover {
  color: #6ec3ff;
}

#nav form {
  color: #6ec3ff;
}

.container {
  color:white;
}

.footer {
  color: black;
  background-color: #6ec3ff;
  padding-block: 2em;
}

.fsma {
  text-align: center;
}

.fmed {
  text-align: center;
}

#toTopBtn {
  position: fixed;
  bottom: 26px;
  right: 39px;
  z-index: 98;
  padding: 21px;
  background-color: rgb(110, 195, 255)
}
.js .cd-top--fade-out {
  opacity: .5
}
.js .cd-top--is-visible {
  visibility: visible;
  opacity: 1
}
.js .cd-top {
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s, visibility .3s, background-color .3s
}
.cd-top {
  position: fixed;
  bottom: 20px;
  bottom: var(--cd-back-to-top-margin);
  right: 20px;
  right: var(--cd-back-to-top-margin);
  display: inline-block;
  height: 40px;
  height: var(--cd-back-to-top-size);
  width: 40px;
  width: var(--cd-back-to-top-size);
  box-shadow: 0 0 10px rgba(0, 0, 0, .05) !important;
  background: url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1571057658/cd-top-arrow.svg) no-repeat center 50%;
  background-color: hsla(5, 76%, 62%, .8);
  background-color: hsla(var(--cd-color-3-h), var(--cd-color-3-s), var(--cd-color-3-l), 0.8)
}
.scroll {
  color: #fff;
  margin-top: 100px
}
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
}
@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style> 