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
              <div class="mt-5"><h1 class="font-weight-bold" style="font-size:5vw;">{{$translate(['Selamat Datang','Welcome'])}}</h1></div>
              <p calss="text-justify" style="font-size:2vw;">
                {{$translate(['Selamat datang di BMTA','Welcome to BMTA'])}}
              </p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block mt-5 pt-2 w-100 h-3" :src="images.cover2" alt="Third slide">
          <div class="carousel-caption text-dark">
              <div class="mt-5"><h1 class="font-weight-bold" style="font-size:5vw;">BMTA</h1></div>
              <p class="" style="font-size:2vw;">
                {{$translate(['Wisata medis bersama BMTA','Medical Tourism with BMTA'])}}
              </p>
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
          <option hidden>{{$translate(['Lokasi','Location'])}}</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>{{$translate(['Kategori','Categories'])}}</option>
          <option v-for="kategori in poli" :key="kategori.id">{{kategori.name}}</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Search">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-primary">{{$translate(['Cari','Search'])}}</button>
        </router-link>
      </div>
    </div>
</form>
  <!-- Search Destination & Categories SM -->
<div class="container d-block d-md-none pt-3">
  <select class="form-control form-control-md">
    <option hidden>{{$translate(['Lokasi','Location'])}}</option>
    <option>Denpasar</option>
    <option>Tabanan</option>
    <option>Klungkung</option>
    <option>Gianyar</option>
    <option>Buleleng</option>
  </select>
  <select class="form-control form-control-md my-3">
    <option hidden>{{$translate(['Kategori','Categories'])}}</option>
    <option v-for="kategori in poli" :key="kategori.id">{{kategori.name}}</option>
  </select>
  <input class="form-control mb-3" type="search" placeholder="Search">
  <router-link :to="{name: 'Destination'}">
    <button type="button" class="btn btn-md btn-block btn-primary">{{$translate(['Cari','Search'])}}</button>
  </router-link>
</div>

  <section>
    <h2 class="pt-5 font-weight-bold">{{$translate(['Mengapa Memilih Kami?','Why choose us?'])}}</h2>
    <div class="container d-flex">
      <div class="container my-5 align-items-center" style="width: 900px;">
        <div class="card-group">
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card1" alt="Card image 1">
            <div class="card-body">
              <h5 class="card-title">
                {{$translate(['Mitra handal','Reliable partners'])}}
              </h5>
              <p class="card-text">
                {{$translate(['Tersedia 17 rumah sakit mitra yang tersebar di seluruh Bali.',
                'We have 17 hosiptal partners across Bali.'])}}</p>
              <router-link to="/Destination" class="btn d-block btn-outline-primary text-wrap">
              {{$translate(['Lihat rumah sakit','See hospitals'])}}
              </router-link>
            </div>
          </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card2" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">{{$translate(['Biaya terjangkau','Affordable costs'])}}</h5>
              <p class="card-text">
                {{$translate(['Menerima asuransi & BPJS untuk meringankan biaya Anda.',
                'We accept insurances & BPJS to ease your costs.'])}}
                </p>
              <router-link to="/Contact" class="btn d-block btn-outline-primary text-wrap">
              {{$translate(['Kontak kami','Contact us'])}}
              </router-link>
            </div>
          </div>
          <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.card3" alt="Card image 2">
            <div class="card-body">
              <h5 class="card-title">{{$translate(['Layanan profesional','Reliable partners'])}}</h5>
              <p class="card-text">
                 {{$translate(['Kami punya ratusan dokter yang ahli di bidangnya.',
                'Hundreds of expert doctors ready to serve you.'])}}
              </p>
              <router-link to="/About" class="btn d-block btn-outline-primary text-wrap">
              {{$translate(['Tentang kami','About us'])}}
              </router-link>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>

<section>
  <h2 class="font-weight-bold text-center pb-3">{{$translate(['Layanan Kami','Our Services'])}}</h2>
</section>

<section>
  <div class="container">
        <div class="row d-flex">
          <div class="col-5">
          <i class="fas fa-plane-departure"></i>
              <h5 class="service-title">Medical Tourism Guidelines</h5>
              <p class="service-text">
                {{$translate(['Panduan untuk seseorang yang membutuhkan perawatan medis.',
                'A guide for someone who needs medical care.'])}}</p>
          </div>
          <div class="col-5">
          <i class="fas fa-notes-medical"></i>
          <div>
            <h5 class="service-title">Medical training</h5>
            <p class="service-text">
              {{$translate(['Seminar dan Lokakarya Pelatihan untuk Pemerintah, Cluster Kesehatan, Rumah Sakit, Penyedia Asuransi, Perhotelan, dan pihak-pihak lain yang berkepentingan.',
              'Seminars and Training Workshops for Government, Health Clusters, Hospitals, Insurance Providers, Hospitality, and other interested parties.'])}}</p>
          </div>
          </div>
          <div class="col-5">
          <i class="fas fa-stethoscope"></i>
              <h5 class="service-title">Medical research</h5>
              <p class="service-text">
                {{$translate(['Informasi dan penelitian yang diperoleh dari melakukan penelitian dan survei secara signifikan meningkatkan kesadaran dalam pariwisata medis melalui temuan kami dan informasi terkini.',
                'The information and research gleaned from conducting research and surveys significantly raises awareness in medical tourism through our findings and up-to-date information.'])}}</p>
          </div>
          <div class="col-5 mb-3">
          <i class="fas fa-heart"></i>
              <h5 class="service-title">Medical advisor</h5>
              <p class="service-text">
                {{$translate(['Membantu memberikan penilaian, review atau audit medik terhadap praktik medis yang diberikan oleh provider atau non-provider dari asuransi atau perusahaan yang menyelenggarakan jaminan kesehatan pekerjanya.',
                'Help provide medical assessments, reviews or audits of medical practices provided by providers or non-providers from insurance or companies that provide health insurance for their workers.'])}}
              </p>
          </div>
        </div>
      </div>
</section>


<section>
  <h2 class="font-weight-bold pb-3">{{$translate(['Tim Kami','Our Team'])}}</h2>
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
                  {{$translate(['Sekretaris 1','1st Secretary'])}}
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
                  {{$translate(['Ketua','Leader'])}}
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
                  {{$translate(['Sekretaris 2','2nd Secretary'])}}
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
<h2 class="font-weight-bold py-3 my-3">{{$translate(['Destinasi Populer','Popular Destinations'])}}</h2>
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

          <p class="text-black text-justify mx-3 dest-text">{{$translate([selectedBanner.deskripsi_id, selectedBanner.deskripsi_en])}}</p>
    
          <br>
          <router-link to="/Destination" class="btn btn-outline-primary text-wrap ml-3 dest-text">{{$translate(['Lihat Destinasi Lainnya','See More Destinations'])}} ►</router-link>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="d-block d-lg-none">
  <div class="container-fluid">
    <img class="dest-img" :src="selectedBanner.img">

    <div class="destination">
      <h2 class="mx-4 text-black text-left font-weight-bold dest-text-sm pt-4">{{selectedBanner.label}}</h2>
      <p class="mx-4 text-black text-justify dest-text-sm">{{$translate([selectedBanner.deskripsi_id, selectedBanner.deskripsi_en])}}</p>
      <br>
      <router-link to="/Destination" type="button" class="btn btn-outline-primary mx-4 d-block">
      {{$translate(['Lihat Destinasi Lainnya','See More Destinations'])}} ►
      </router-link>
      <div class="pb-2"></div>
    </div>
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
  <h2 class="font-weight-bold">{{$translate(['Mitra Kami','Our Partners'])}}</h2>
<!-- Carousel for bigger screen -->
  <div id="carouselMultiItemPartner" class="carousel slide carousel-dark d-none d-md-none d-lg-block" data-ride="carousel">
  <!-- Controls -->
  <div class="carousel-inner pb-4">
      <div class="d-flex justify-content-center position-center">
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
          <div class="col">
            <img class="partner-carousel" :src="images.partner1" alt="Partner logo">
          </div>

          <div class="col">
            <img class="partner-carousel" :src="images.partner2" alt="Partner logo">
          </div>

          <div class="col">
            <img class="partner-carousel" :src="images.partner3" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner4" alt="Partner logo">
          </div>

          <div class="col">
            <img class="partner-carousel" :src="images.partner5" alt="Partner logo">
          </div>

          <div class="col">
              <img class="partner-carousel" :src="images.partner6" alt="Partner logo">
          </div>

        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="py-4"></div>
<!-- Carousel wrapper -->

<!-- Carousel smaller screen-->
<div id="carouselMultiItemPartnerSmall" class="carousel slide carousel-dark d-block d-sm-block d-md-block d-lg-none" data-ride="carousel">
  <div class="carousel-inner pb-4">
      <div class="d-flex justify-content-center position-center">
      <a class="carousel-control-prev" type="button" data-target="#carouselMultiItemPartnerSmall" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" type="button" data-target="#carouselMultiItemPartnerSmall" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
  </a>
  </div>
    <!-- Single item -->
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner1" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner2" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner3" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner4" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner5" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="partner-carousel" :src="images.partner6" alt="Partner logo">
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
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
import json from "@/api/poliRs.json"

export default {  
  data() {
    return {
      poli: json.data.items,
      images: {
        cover1: require('@/assets/hero/hero.png'),
        cover2: require('@/assets/hero/hero2.jpg'),
        card1: require('@/assets/gallery/blog1.png'),
        card2: require('@/assets/gallery/blog2.png'),
        card3: require('@/assets/gallery/blog3.png'),
        team1: require('@/assets/Team/dr ida ayu oka purnamawati.jpg'),
        team2: require('@/assets/Team/Dr.i gede wiryana patra jaya.jpg'),
        team3: require('@/assets/Team/PUTU-DEDDY-SUHARTAWAN-B.BUS-MKTG.jpg'),
        partner1: require('@/assets/logors/350x350-01.png'),
        partner2: require('@/assets/logors/350x350-02.png'),
        partner3: require('@/assets/logors/350x350-03.png'),
        partner4: require('@/assets/logors/350x350-04.png'),
        partner5: require('@/assets/logors/350x350-05.png'),
        partner6: require('@/assets/logors/350x350-06.png'),
        partner7: require('@/assets/logors/350x350-07.png'),
        partner8: require('@/assets/logors/350x350-08.png'),
        partner9: require('@/assets/logors/350x350-09.png'),
      },
    banners: [
        {img: require('@/assets/rumahsakit/bimc-nusa-dua.jpg'), label: 'BIMC Siloam Nusa Dua', deskripsi_en: 'BIMC Siloam Hospital Nusa Dua is an international standard hospital in Bali that provides first-class health services at relatively affordable prices for communities around the Jimbaran, Nusa Dua, Uluwatu and Kampial areas.', deskripsi_id: 'BIMC Siloam Hospital Nusa Dua adalah rumah sakit di Bali bertaraf internasional yang menyediakan layanan kesehatan kelas satu dengan harga yang relative terjangkau bagi masyarakat di sekitar area Jimbaran, Nusa Dua, Uluwatu dan Kampial.'}, 
        {img: require('@/assets/rumahsakit/rs-siloam-kuta.jpg'), label: 'BIMC Siloam Kuta',deskripsi_en: 'Siloam Kuta Bali International Medical Center (BIMC) Hospital is a 24-hour international standard medical and emergency service center. Its strategic location in the Kuta area makes it a preferred health care center that is easily accessible to both locals and tourists.', deskripsi_id: 'Rumah Sakit Bali International Medical Centre (BIMC) Siloam Kuta adalah pusat pelayanan medis dan gawat darurat 24 jam yang berstandar internasional. Lokasinya yang strategis di daerah Kuta menjadikannya sebagai pusat pelayanan kesehatan pilihan yang mudah diakses baik oleh penduduk setempat maupun para wisatawan.'}, 
        {img: require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'), label: 'RS Kasih Ibu Saba', deskripsi_en: 'Kasih Ibu Saba Hospital was established in 2016 under the auspices of Kasih Ibu Hospital Group. Kasih Ibu Hospital has a vision to be the first choice hospital in Bali, complete and quality services, prioritizing patient safety & a touch of love. With a mission to improve management professionally, provide friendly services, develop quality human resources, improve services by prioritizing patient safety, and provide sophisticated infrastructure.', deskripsi_id: 'Rumah Sakit Kasih Ibu Saba berdiri pada tahun 2016 dibawah naungan Kasih Ibu Hospital Group. Rumah Sakit Kasih Ibu memiliki Visi menjadi Rumah Sakit pilihan utama di Bali, pelayanan yang lengkap dan berkualitas, mengutamakan keselamatan pasien & sentuhan kasih. Dengan Misi meningkatkan manajemen secara profesional, memberi pelayanan yang ramah, mengembangkan SDM yang berkualitas, meningkatkan pelayanan dengan mengutamakan keselamatan pasien, dan menyediakan sarana prasarana yang canggih.'}, 
        {img: require('@/assets/rumahsakit/bimc-kuta.jpg'), label: 'BIMC Kuta', deskripsi_en: 'Bali International Medical Center (BIMC) Kuta Hospital is a 24-hour international standard medical and emergency service center. Its strategic location in the Kuta area makes it a preferred health care center that is easily accessible to both locals and tourists.', deskripsi_id: 'Rumah Sakit Bali International Medical Centre (BIMC) Kuta adalah pusat pelayanan medis dan gawat darurat 24 jam yang berstandar internasional. Lokasinya yang strategis di daerah Kuta menjadikannya sebagai pusat pelayanan kesehatan pilihan yang mudah diakses baik oleh penduduk setempat maupun para wisatawan.'}, 
        {img: require('@/assets/rumahsakit/bros.jpg'), label: 'Rumah Sakit BROS', deskripsi_en: 'BIMC Hospital Nusa Dua is an international standard hospital in Bali that provides first-class health services at relatively affordable prices for communities around the Jimbaran, Nusa Dua, Uluwatu and Kampial areas.', deskripsi_id: 'BIMC Hospital Nusa Dua adalah rumah sakit di Bali bertaraf internasional yang menyediakan layanan kesehatan kelas satu dengan harga yang relative terjangkau bagi masyarakat di sekitar area Jimbaran, Nusa Dua, Uluwatu dan Kampial.'}, 
    ],
    loc: {
      lat: '',
      long: ''
    },
    selectedBanner: ''
    }
  },
  mounted(){
    navigator.geolocation.getCurrentPosition((pos) => {
      const {latitude: lat, longitude: lng} = pos.coords
      this.loc.lat = lat
      this.loc.long = lng
      // console.log(this.loc);
    }, (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  },
  created (){
    const idx = Math.floor(Math.random() * this.banners.length)
    this.selectedBanner = this.banners[idx]

    console.log(this.selectedBanner)
  },
  methods: {
      
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
.partner-carousel {
  min-height:100px;
  
}

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
    padding-inline-end: 1rem;
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
  margin-top: auto;
  width:20%;
  height:auto;
}

.carousel-control-next{
  margin-top: auto;
  width:20%;
  height: auto;   
}

.card-img-top {
  padding-inline: 4pt;
  padding-block: 4pt;
}

.card-title {
  font-family: 'Segoe UI', Verdana, sans-serif, ans-serif;
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
  width: 100%;
  height: 100%;
}

.dest-text{
  position:relative;
  min-width: 100%;
  width: 100%;
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