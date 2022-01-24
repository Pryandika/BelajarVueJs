<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Siloam Kuta','RS Siloam Kuta'])}}</li>
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
                  <div class="col my-auto"><a href="https://g.page/siloam-denpasar?share" target="_blank" style="color:black;">Jl. Sunset Road No.818, Kuta, Kabupaten Badung, Bali 80361</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-10 my-auto"><a href="mailto:info.siloamhospitalsbali@siloamhospitals.com" style="color:black;">info.siloamhospitalsbali@siloamhospitals.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361779900" target="_blank" style="color:black;">(+62 361) 779 900</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://www.siloamhospitals.com/" target="_blank">https://www.siloamhospitals.com/</a></div></div>
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
                  <div class="col-10 my-auto"><a href="https://g.page/siloam-denpasar?share" target="_blank" style="color:black;">Jl. Sunset Road No.818, Kuta, Kabupaten Badung, Bali 80361</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info.siloamhospitalsbali@siloamhospitals.com" style="color:black;">info.siloamhospitalsbali@siloamhospitals.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62361779900" target="_blank" style="color:black;">(+62 361) 779 900</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://www.siloamhospitals.com/" target="_blank">https://www.siloamhospitals.com//</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Siloam Kuta','Siloam Kuta Hospital'])}}</h3>
        <hr>
        <p>
          {{$translate(['Siloam Hospitals Group (Siloam) adalah jaringan rumah sakit swasta yang terdepan di Indonesia dan telah menjadi benchmark (nilai standar) pada pelayanan kesehatan berkualitas di Indonesia. Tim medis Siloam terdiri dari 2.700 dokter umum dan dokter spesialis, serta 10.000 perawat dan staf pendukung lainnya dan telah melayani hampir 2 juta pasien setiap tahunnya. Untuk memenuhi kebutuhan pelayanan medis berkelas dunia bagi semua kalangan masyarakat di Indonesia, strategi bisnis Siloam yang berdasarkan pada economies of scale (prinsip skala ekonomis) memungkinkan setiap unit rumah sakitnya untuk beroperasi dengan biaya yang lebih rendah. Dengan demikian, visi perusahaan untuk mewujudkan pelayanan kesehatan berkualitas internasional di Indonesia yang dilandasi dengan belas kasih ilahi dapat menjadi platform bagi Siloam untuk meresponi transformasi sosial yang dinamis di Indonesia.','Siloam Hospitals Group (Siloam) is the leading private hospital network in Indonesia and has become the benchmark (standard value) for quality health services in Indonesia. Siloam\'s medical team consists of 2,700 general practitioners and specialists, as well as 10,000 nurses and other support staff and treats nearly 2 million patients annually. To meet the needs of world-class medical services for all segments of society in Indonesia, Siloam\'s business strategy based on economies of scale allows each hospital unit to operate at lower costs. Thus, the company\'s vision to realize international quality health services in Indonesia based on divine mercy can be a platform for Siloam to respond to the dynamic social transformation in Indonesia.'])}}
        </p>
        <h5>{{$translate(['Visi RS Siloam Kuta','RS Siloam Kuta\'s Vision'])}}</h5>
        <p>
         {{$translate([' Kualitas Internasional. Skala. Pencapaian. Berbelas Kasih','International Quality. Scale. Reach. Godly Compassion'])}}
        </p>
        <h5>{{$translate(['Misi RS Siloam Kuta','RS Siloam Kuta\'s Mission'])}}</h5>
        <p>
          {{$translate(['Destinasi pilihan terpercaya untuk perawatan kesehatan holistik kelas dunia, pendidikan kesehatan dan penelitian.','The trusted destination of choice for holistic world class healthcare, health education and research.'])}}
        </p>
        </div>
</section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/rs-siloam-kuta-2.jpg'),
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