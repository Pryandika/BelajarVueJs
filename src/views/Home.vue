<template>
<!-- Slideshow -->
  <section>
    <div id="slideshow" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#slideshow" data-slide-to="0" class="active"></li>
        <li data-target="#slideshow" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block mt-5 pt-2 w-100" :src="images.cover1" alt="First slide">
          <div class="carousel-caption text-dark">
              <h1 class="font-weight-bold" style="font-size:5vw;">WELCOME</h1>
              <p calss="text-justify" style="font-size:2vw;">Selamat datang di website BMTA</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption text-dark">
              <h1 class="font-weight-bold" style="font-size:5vw;">BMTA</h1>
              <p class="" style="font-size:2vw;">Berwisata medis bersama kami</p>
          </div>
        </div>
      </div>
        <a class="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#slideshow" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </section>

  <!-- Search Destination & Categories Lg -->
  <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>Kategori</option>
          <option>Klinik</option>
          <option>Rumah Sakit</option>
          <option>Apotek</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Pencarian">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>
</form>
  <!-- Search Destination & Categories SM -->
<div class="container d-block d-md-none pt-3">
  <select class="form-control form-control-md">
    <option hidden>Lokasi</option>
    <option>Denpasar</option>
    <option>Tabanan</option>
    <option>Klungkung</option>
    <option>Gianyar</option>
    <option>Buleleng</option>
  </select>
  <select class="form-control form-control-md my-3">
    <option hidden>Kategori</option>
    <option>Klinik</option>
    <option>Rumah Sakit</option>
    <option>Apotek</option>
  </select>
  <input class="form-control mb-3" type="search" placeholder="Search">
  <router-link :to="{name: 'Destination'}">
    <button type="button" class="btn btn-md btn-block btn-outline-primary">Search</button>
  </router-link>
</div>

  <section>
    <h2 class="pt-5 font-weight-bold">Keunggulan Kami</h2>
    <div class="container d-flex">
      <div class="container my-5 align-items-center" style="width: 900px;">
        <div class="card-group">
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card1" alt="Card image 1">
            <div class="card-body">
              <h5 class="card-title">Mitra handal kami</h5>
              <p class="card-text">Tersedia 17 rumah sakit mitra yang tersebar di seluruh Bali.</p>
              <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">Tentang kami</router-link>
            </div>
          </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card2" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Biaya terjangkau</h5>
              <p class="card-text">Menerima asuransi & BPJS untuk meringankan biaya Anda.</p>
              <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">Kontak kami</router-link>
            </div>
          </div>
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card3" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">Pelayanan profesional</h5>
              <p class="card-text">Ratusan dokter yang berpengalaman di bidangnya.</p>
              <router-link to="/Destination" class="btn d-block btn-outline-primary text-wrap">Cari dokter</router-link>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>

<section>
  <h2 class="font-weight-bold text-center pb-3">Layanan kami</h2>
</section>

<section>
  <div class="container">
        <div class="row d-flex">
          <div class="col-5">
          <i class="fas fa-plane-departure"></i>
              <h5 class="service-title">Medical Tourism Guidelines</h5>
              <p class="service-text">Panduan untuk seseorang yang membutuhkan perawatan medis.</p>
          </div>
          <div class="col-5">
          <i class="fas fa-notes-medical"></i>
          <div>
            <h5 class="service-title">Medical training</h5>
            <p class="service-text">Seminar dan Lokakarya Pelatihan untuk Pemerintah, Cluster Kesehatan, Rumah Sakit, Penyedia Asuransi, Perhotelan, dan pihak-pihak lain yang berkepentingan.</p>
          </div>
          </div>
          <div class="col-5">
          <i class="fas fa-stethoscope"></i>
              <h5 class="service-title">Medical research</h5>
              <p class="service-text">Informasi dan penelitian yang diperoleh dari melakukan penelitian dan survei secara signifikan meningkatkan kesadaran dalam pariwisata medis melalui temuan kami dan informasi terkini.</p>
          </div>
          <div class="col-5 mb-3">
          <i class="fas fa-heart"></i>
              <h5 class="service-title">Medical advisor</h5>
              <p class="service-text">Membantu memberikan penilaian, review atau audit medik terhadap praktik medis yang diberikan oleh provider atau non-provider dari asuransi atau perusahaan yang menyelenggarakan jaminan kesehatan pekerjanya.</p>
          </div>
        </div>
      </div>
</section>


<section>
  <h2 class="font-weight-bold pb-3">Our Team</h2>
<!-- Carousel wrapper -->
<div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-ride="carousel"
>
  <!-- Inner -->
  <div class="carousel-inner pb-5">
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                :src="images.team1"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Ida Ayu Oka Purnamawati</h5>
                <p class="card-text">
                  Sekertaris
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card">
              <img
                :src="images.team2"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. I Gede Wiryana Patra Jaya</h5>
                <p class="card-text">
                  Ketua
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card">
              <img
                :src="images.team3"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Putu Deddy Suhartawan</h5>
                <p class="card-text">
                  Sekertaris 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Inner -->
</div>
<!-- Carousel wrapper -->
</section>

<!-- Popular Destination -->
<h2 class="font-weight-bold py-3">Destinasi Populer</h2>
<div id="stripes" class="d-none d-lg-block">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<section>
  <div class="container-fluid d-none d-lg-block">
    <div class="destination">
      <div class="row">
        <div class="col">
          <img class="dest-img" :src="selectedBanner.img">
        </div>
        <div class="col-4 mt-3 pt-3 text-left mr-5 destination">
          <h2 class="text-black font-weight-bold mx-3 dest-text">{{selectedBanner.label}}</h2>
          <p class="text-black text-justify mx-3 dest-text">{{selectedBanner.deskripsi}}</p>
          <br>
          <h4 class="text-black ml-3">Destinasi Lainnya </h4>
          <router-link to="/Destination" class="btn btn-outline-primary text-wrap ml-3 dest-text">Lihat Semua ►</router-link>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="d-block d-lg-none">
  <div class="container-fluid">
    <img class="dest-img" :src="selectedBanner.img">
      </div>
    <div class="destination">
      <h2 class="px-5 text-black text-left font-weight-bold dest-text pt-4">{{selectedBanner.label}}</h2>
      <p class="px-5 text-black text-justify dest-text">{{selectedBanner.deskripsi}}</p>
      <br>
      <h4 class="px-5 text-black text-left">Destinasi Lainnya </h4>
      <router-link to="/Destination" class="btn btn-outline-primary text-wrap dest-text-sm">Lihat Semua ►
      </router-link>
      <div class="pb-2"></div>
    </div>
  </div>
</section>
<div class="d-none d-sm-block">
<br><br><br><br><br><br>
</div>

<div class="d-block d-sm-none">
<br><br>
</div>

<section>
  <h2 class="font-weight-bold">Our Partners</h2>
<!-- Carousel wrapper -->
  <!-- Controls -->
  <div id="carouselMultiItemPartner" class="carousel slide carousel-dark" data-ride="carousel">

  <!-- Inner -->
  <div class="carousel-inner pb-5">
      <div class="d-flex justify-content-center position-relative">
      <a class="carousel-control-prev" type="button" data-target="#carouselMultiItemPartner" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" type="button" data-target="#carouselMultiItemPartner" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </a>
  </div>
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-4 col-lg-4">
            <div class="card border-0">
              <i class="fas fa-dollar-sign"></i>
            </div>
          </div>

          <div class="col-4 col-lg-4">
            <div class="card border-0">
              <i class="fab fa-google"></i>
            </div>
          </div>
          <div class="col-4 col-lg-4">
            <div class="card border-0">
              <i class="fab fa-microsoft"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <div class="container">
        <div class="row">

          <div class="col-block col-sm-4 col-lg-4">
            <div class="card border-0">
              <i class="fab fa-chrome"></i>
            </div>
          </div>

          <div class="col-sm-4 lg-4 d-none d-sm-block">
            <div class="card border-0">
              <i class="fab fa-vuejs"></i>
            </div>
          </div>
          <div class="col-sm-4 lg-4 d-none d-sm-block">
            <div class="card border-0">
              <i class="fab fa-github"></i>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <div class="container">
        <div class="row">
       <div class="col-block col-sm-4 col-lg-4">
            <div class="card border-0">
              <i class="fab fa-whatsapp"></i>
            </div>
          </div>
          <div class="col-sm-4 lg-4 d-none d-sm-block">
            <div class="card border-0">
              <i class="fab fa-facebook"></i>
            </div>
          </div>
          <div class="col-sm-4 lg-4 d-none d-sm-block">
          <div class="col-block col-sm-4 col-lg-4">
            <div class="card border-0">
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- Inner -->
  <div class="py-4"></div>
</div>
<!-- Carousel wrapper -->
</section>


<!-- Video -->
<div class="container-fluid d-none d-md-block">
  <div class="background-video">
    <div class="row">
      <div class="col-4 center-block text-center">
        <h2 class="ml-4 pt-5 mt-3 text-white font-weight-bold ">Video</h2>
        <p class="ml-4 h4 text-white">Groundbreaking Rumah Sakit Internasional Bali</p>
      </div>
      <div class="col">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/Y1wC9GU00hg?controls=0&amp;start=585&end=717;"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Small Video -->
<div class="container-fluid">
  <div class="background-video-sm text-center d-block d-md-none">
    <h2 class="text-white font-weight-bold ">Video</h2>
    <p class="h4 text-white">Groundbreaking Rumah Sakit Internasional Bali</p>
  </div>
  <div class="embed-responsive embed-responsive-16by9 d-block d-md-none">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y1wC9GU00hg?controls=0&amp;start=585&end=717;"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
</div>

<br>
<br>

</template>
    
    
<script>
export default {
  data() {
    return {
      images: {
        cover1: require('@/assets/hero/hero.png'),
        cover2: require('@/assets/hero/hero2.jpg'),
        card1: require('@/assets/gallery/blog1.png'),
        card2: require('@/assets/gallery/blog2.png'),
        card3: require('@/assets/gallery/blog3.png'),
        team1: require('@/assets/Team/dr ida ayu oka purnamawati.jpg'),
        team2: require('@/assets/Team/Dr.i gede wiryana patra jaya.jpg'),
        team3: require('@/assets/Team/PUTU-DEDDY-SUHARTAWAN-B.BUS-MKTG.jpg'),
        placeholder: require('@/assets/placeholder.png')

      },
    banners: [
        {img: require('@/assets/rumahsakit/bimc-nusa-dua.jpg'), label: 'BIMC Siloam Nusa Dua', deskripsi: 'BIMC Siloam Hospital Nusa Dua adalah rumah sakit di Bali bertaraf internasional yang menyediakan layanan kesehatan kelas satu dengan harga yang relative terjangkau bagi masyarakat di sekitar area Jimbaran, Nusa Dua, Uluwatu dan Kampial.'},
        {img: require('@/assets/rumahsakit/rs-siloam-kuta.jpg'), label: 'BIMC Siloam Kuta', deskripsi: 'Rumah Sakit Bali International Medical Centre (BIMC) Siloam Kuta adalah pusat pelayanan medis dan gawat darurat 24 jam yang berstandar internasional. Lokasinya yang strategis di daerah Kuta menjadikannya sebagai pusat pelayanan kesehatan pilihan yang mudah diakses baik oleh penduduk setempat maupun para wisatawan.'},
        {img: require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'), label: 'RS Kasih Ibu Saba', deskripsi: 'Rumah Sakit Kasih Ibu Saba berdiri pada tahun 2016 dibawah naungan Kasih Ibu Hospital Group. Rumah Sakit Kasih Ibu memiliki Visi menjadi Rumah Sakit pilihan utama di Bali, pelayanan yang lengkap dan berkualitas, mengutamakan keselamatan pasien & sentuhan kasih. Dengan Misi meningkatkan manajemen secara profesional, memberi pelayanan yang ramah, mengembangkan SDM yang berkualitas, meningkatkan pelayanan dengan mengutamakan keselamatan pasien, dan menyediakan sarana prasarana yang canggih.'},
        {img: require('@/assets/rumahsakit/bimc-kuta.jpg'), label: 'BIMC Kuta', deskripsi: 'Rumah Sakit Bali International Medical Centre (BIMC) Kuta adalah pusat pelayanan medis dan gawat darurat 24 jam yang berstandar internasional. Lokasinya yang strategis di daerah Kuta menjadikannya sebagai pusat pelayanan kesehatan pilihan yang mudah diakses baik oleh penduduk setempat maupun para wisatawan.'},
        {img: require('@/assets/rumahsakit/bros.jpg'), label: 'Rumah Sakit BROS', deskripsi: 'BIMC Hospital Nusa Dua adalah rumah sakit di Bali bertaraf internasional yang menyediakan layanan kesehatan kelas satu dengan harga yang relative terjangkau bagi masyarakat di sekitar area Jimbaran, Nusa Dua, Uluwatu dan Kampial.'},
    ],
    selectedBanner: ''
    }
  },
  created (){
    const idx = Math.floor(Math.random() * this.banners.length)
    this.selectedBanner = this.banners[idx]

    console.log(this.selectedBanner)
  },
  computed: {
    heroImage() {
      return {
        backgroundImage: `url${require('../assets/gallery/section_bg02.png')}`
      };
    }
  }
}
</script>
    
<style lang="css">
.fas, .fab, .far {
  font-size:6em;
  color:rgb(85, 189, 253);
  margin-block: 2rem;
  margin-inline: auto;
}

.col-5{
  margin-inline: auto;
  text-align: center;
}

.container {
  position: relative;
  text-align: left;
  color: rgb(0, 0, 0);
}

.container-fluid{
   padding: 0;
   margin: 0;
}

.carousel {
  width:unset;
  height:unset;
}

.carousel-item img {
  position:relative;
  min-width: 100%;
  width: 100%;
}

.carousel-caption {
  padding-inline-end: 15rem;
  width: 700px !important;
  left: 15%;
  top: 50% !important;
  transform: translateY(-60%);
  text-align: left;
  bottom: initial;
}

@media only screen and (max-width: 1000px){
  .carousel-caption {
    padding-inline-end: 15rem;
    width: 500px !important;
    left: 15%;
    top: 50% !important;
    transform: translateY(-60%);
    text-align: left;
    bottom: initial;
  }
}

@media only screen and (max-width: 768px){
  .carousel-caption {
    padding-inline-end: 15rem;
    width: 390px !important;
    left: 15%;
    top: 50% !important;
    transform: translateY(-60%);
    text-align: left;
    bottom: initial;
  }
}

.carousel .carousel-indicators li {
  background-color: #fff;
  background-color: rgba(70, 70, 70, 0.25);
}

.carousel .carousel-indicators .active {
  background-color: #444;
}

.carousel-control-prev{
  margin-top: 10px;
  width:20%;
  height:0px;
}

.carousel-control-next{
  margin-top: 0px;
  width:20%;
  height: auto;   
}

.card-img-top {
  padding-inline: 4pt;
  padding-block: 4pt;
}

.card-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
}

.card-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
}

.service-title {
  font-family: 'Segoe UI', Verdana, sans-serif, sans-serif;
  font-weight:bold;
  text-align: center;
}

.service-text {
  font-family:Calibri, sans-serif;
  font-weight:normal;
  text-align: center;
}

.f-color{
  padding-block: 1em;
  color: black;
  background-color: #6ec3ff;
}

.destination{
  background-color: #eaf6ff;
}

.dest-img{
  position:relative;
  min-width: 100%;
  min-height: 100%;
}

.dest-text{
  position:relative;
  min-width: 100%;
  width: 100%;
  max-height: 100%;
}

.dest-text-sm{
  position:relative;
  min-width: 90%;
  width: 85%;
  max-height: 100%;
}

@media screen and (max-width: 48em) {
  .col {
    flex: 100% !important;
    max-width: 100% !important;
  }
}

#stripes{
width:100%;
height: 100%;
overflow: hidden;
transform-origin: 100;
transform: skewY(-5deg);
background: -webkit-linear-gradient(300deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
}

#stripes, #stripes span{
  position: absolute;
}

#stripes span{
  height: 40px;
}

#stripes :nth-child(1){
  width: 50%;
  left: 50%;
  top:40px;
  background:#4c29ff;
}

#stripes :nth-child(2){
  width: 14%;
  right: 0;
  bottom:40px;
  background: #2be7ff;
}

#stripes :nth-child(3){
  width: 25%;
  bottom: 0;
  right: 0;
  background: #a1ffc8;
}

@media (min-width:670px){
    #stripes{
    height: 80%;
  }

  #stripes span{
    height:150px;
  }
  #stripes :nth-child(1){
    top: 0;
  }
  #stripes :nth-child(2){
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }
  #stripes :nth-child(3){
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}
@media only screen and (max-width: 1600px){
    #stripes{
    height: 75%;
  }

  #stripes :nth-child(1){
    top: 0;
  }
  #stripes :nth-child(2){
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }
  #stripes :nth-child(3){
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1450px){
    #stripes{
    height: 65%;
  }

  #stripes :nth-child(1){
    top: 0;
  }
  #stripes :nth-child(2){
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }
  #stripes :nth-child(3){
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}


@media only screen and (max-width: 1300px){
    #stripes{
    height: 55%;
  }

  #stripes :nth-child(1){
    top: 0;
  }
  #stripes :nth-child(2){
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }
  #stripes :nth-child(3){
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

@media only screen and (max-width: 1100px){
    #stripes{
    height: 50%;
  }

  #stripes :nth-child(1){
    top: 0;
  }
  #stripes :nth-child(2){
    width: 16.66667%;
    top: 300px;
    bottom: auto;
    background: #0dcfff;
  }
  #stripes :nth-child(3){
    width: 33.33333%;
    right: auto;
    background: #11bdff;
  }
}

.background-video{
  background: url('../assets/gallery/section_bg02.png');
}

.background-video-sm{
  padding-block: 1em;
  background: url('../assets/gallery/section_bg02.png');
}
</style>