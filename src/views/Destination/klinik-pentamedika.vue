<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Klinik Penta Medika','Klinik Penta Medika'])}}</li>
  </ol>
</nav>

  <section>
    <!-- Whole Card -->
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <img :src="images.cover1" alt="rs-header-img" class="d-block d-sm-block d-md-block d-lg-none">
            <img :src="images.cover1" alt="rs-header-img" class="rs-header-img my-auto d-none d-lg-block">
            <div class="d-none d-lg-block col">

              <!-- Card  on desktop-->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto"><a href="https://g.page/penta-medica-clinic-bali?share" target="_blank" style="color:black;">Jl Mahendradatta Selatan No. 88, Denpasar, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:clinic@pentamedica.com" style="color:black;">clinic@pentamedica.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:(+62) 361 490709" target="_blank" style="color:black;"> (+62) 361 490709</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="http://pentamedica.com/" target="_blank">http://pentamedica.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://g.page/penta-medica-clinic-bali?share" target="_blank" style="color:black;">Jl Mahendradatta Selatan No. 88, Denpasar, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:clinic@pentamedica.com" style="color:black;">clinic@pentamedica.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:(+62) 361 490709" target="_blank" style="color:black;"> (+62) 361 490709</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="http://pentamedica.com/" target="_blank">http://pentamedica.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['Klinik Penta Medika','Klinik Penta Medika'])}}</h3>
        <hr>
        <h5>{{$translate(['Sejarah Klinik Penta Medika','History Penta Medika\'s History'])}}</h5>
        <p>
         {{$translate([' Klinik Penta Medica adalah klinik dan asisten medis 24 jam yang berlokasi di Jl. Teuku Umar Barat – Marlboro 88, Denpasar, Bali, Indonesia dan bernaung di bawah PT. Penta Bali Media. Para pendiri terdiri dari dua orang pengusaha dan tiga orang Dokter Umum yang memiliki pengalaman bekerja di klinik internasional. Pada awalnya, fokus utama Perusahaan adalah layanan Evakuasi Medis dan Repatriasi, dengan klinik 24 jam sebagai sistem pendukung. Namun, dengan semakin meningkatnya jumlah kunjungan pasien ke klinik, beberapa perluasan dan kemajuan layanan telah dilakukan oleh Manajemen Klinik Penta Medica untuk memenuhi kebutuhan pelanggannya, baik sebagai klinik, maupun sebagai asisten medis. Kepedulian mereka yang besar terhadap kepuasan pelanggan telah menjadi pengaruh utama Direksi untuk fleksibel dan dinamis dalam menjalankan bisnis, tanpa mengabaikan kualitas layanan.','Klinik Penta Medica is a 24 hours clinic and medical assistant located in Jl. Teuku Umar Barat – Marlboro 88, Denpasar, Bali, Indonesia and is sheltered under PT. Penta Bali Media. The founders consist of two businessmen and three General Practitioners who had an experience working in an international clinic. At the beginning, the Company’s main focus was the Medical Evacuation and Repatriation service, with a 24 hours clinic as a support system. However, with its growing number of patient visits to the clinic, several expansions and advancement of services have been taken by the Management of Penta Medica Clinic to meet its customers’ needs, both as a clinic, as well as a medical assistant. Their huge concern in customers’ satisfaction has been the main influencer to the Board of Management to be flexible and dynamic in operating the business, without ignoring the quality of the service.'])}}
        </p>~
        </div>
</section>
  </section>
</template>~

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/penta-medica.jpeg'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/gallery/popular_sub3.png'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    }

}
</script>

<style>
.rs-header-img {
  width: 60%;
  height: 60%;
}

</style>