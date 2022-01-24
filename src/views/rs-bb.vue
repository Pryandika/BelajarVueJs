<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RSUP Sanglah','Sanglah General Hospital'])}}</li>
  </ol>
</nav>

  <section v-if="errored">
    <p>Mohon maaf, terjadi kesalahan saat mengambil data. Silakan coba beberapa saat lagi.</p>
  </section>

  <section v-else>
    
    <!-- Whole Card -->
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <!-- <img src="" id="img1-mobile" alt="rs-header-img" class="d-block d-sm-block d-md-block d-lg-none">
            <img src="" id="img1-desktop" alt="rs-header-img" class="rs-header-img my-auto d-none d-lg-block"> -->
      <div id="slideshow-member" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>  
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="" id="img1-desktop" alt="rs-image-slide" class="d-block mt-5 pt-2 w-100">
          </div>
        </div>
        <div class="carousel-item">
          <img src="" id="img1-desktop" class="d-block mt-5 pt-2 w-100" alt="rs-image-slide-2">
        </div>
      </div>
            <div class="d-none d-lg-block col">

              <!-- Card on desktop-->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto"><div v-if="loading">Loading...</div>{{this.alamat}}</div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><div v-if="loading">Loading...</div></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><div v-if="loading">Loading...</div><a v-bind:href="`https://wa.me/+${ this.whatsapp }`">{{this.whatsapp}}</a></div>
                  
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-bookmarks-fill"></i></div>
                  <div class="col my-auto"><div v-if="loading">Loading...</div>{{this.kategori}}</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card in smaller screen -->
        <div class="d-block d-lg-none container">
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col-9 my-auto"><div v-if="loading">Loading...</div>{{this.alamat}}</div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><div v-if="loading">Loading...</div></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><div v-if="loading">Loading...</div><a v-bind:href="`https://wa.me/+${ this.whatsapp }`">{{this.whatsapp}}</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-bookmarks-fill"></i></div>
                  <div class="col-auto my-auto"><div v-if="loading">Loading...</div>{{this.kategori}}</div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['About','Tentang'])}} {{this.nama}}</h3>
        <hr>
        <div v-if="loading">Loading...</div><p>{{this.deskripsi}}</p>
        </div>
</section>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    poli: null,
    jadwal: null,
    nama: null,
    alamat: null,
    whatsapp: null,
    deskripsi: null,
    img: null,
    kategori: null,
    loading: true,
    errored: false
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/offices.php?page=1&lat=-8.6649188&long=115.2384802`)
      .then((response) => {
        this.nama = response.data.data.items[0].name;
        this.img1 = response.data.data.items[0].images[0];
        this.img2 = response.data.data.items[0].images[1];
        this.img3 = response.data.data.items[0].images[2];
        this.img4 = response.data.data.items[0].images[3];
        this.img5 = response.data.data.items[0].images[4];
        this.deskripsi = response.data.data.items[0].description;
        this.alamat = response.data.data.items[0].address;
        this.whatsapp = response.data.data.items[0].whatsapp;
        this.kategori = response.data.data.items[0].type.name;
        console.log(this.kategori);
        console.log(this.name);
        console.log(this.whatsapp);
        console.log(this.alamat);
        console.log(this.img);
        console.log(this.deskripsi);
        document.getElementById("img1-mobile").src = this.img1;
        document.getElementById("img1-desktop").src = this.img1;
        document.getElementById("img2-desktop").src = this.img2;
      })
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/grouped_counters.php`)
      .then((response) => {
        this.poli = response.data.data.items[0];
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  }

</script>

<style>
.rs-header-img {
  width: 60%;
  height: 60%;
}

</style>