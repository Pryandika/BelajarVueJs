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
                  <div class="col my-auto"><a href="https://goo.gl/maps/JA5RaDxG4krVm3918" target="_blank" style="color:black;">Jl. Diponegoro, Kota Denpasar, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@sanglahhospitalbali.com" style="color:black;">info@sanglahhospitalbali.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62 361 227911" target="_blank" style="color:black;"> +62 361 227911 ext 15</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://sanglahhospitalbali.com/home/" target="_blank">https://sanglahhospitalbali.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/JA5RaDxG4krVm3918" target="_blank" style="color:black;">Jl. Diponegoro, Kota Denpasar, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info@sanglahhospitalbali.com" style="color:black;">info@sanglahhospitalbali.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62 361 227911" target="_blank" style="color:black;"> +62 361 227911 ext 15</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://sanglahhospitalbali.com/home/" target="_blank">https://sanglahhospitalbali.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RSUP Sanglah','Sanglah General Hospital'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RSUP Sanglah','RSUP Sanglah\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Unggul dan Mandiri Tahun 2024','Becoming an Excellent and Independent Hospital in 2024'])}}
        </p>
        <h5>{{$translate(['Misi RSUP Sanglah','RSUP Sanglah\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menyelenggarakan pelayanan kesehatan yang paripurna, mandiri dan terjangkau','Organizing comprehensive, independent and affordable health services'])}}</li>
          <li>{{$translate(['Menyelenggarakan Pendidikan Terintegrasi dan Pelatihan Tenaga Kesehatan yang berdaya saing dan berbudaya','Organizing Integrated Education and Training of Health Workers who are competitive and cultured'])}}</li>
          <li>{{$translate(['Menyelenggarakan penelitian kesehatan berbasis rumah sakit','Organizing hospital-based health research'])}}</li>
          <li>{{$translate(['Menciptakan tata kelola RS yang baik','Creating good hospital governance'])}}</li>
          <li>{{$translate(['Membangun jejaring kesehatan dan kerjasama dengan pemangku kepentingan terkait','Building health networks and collaboration with stakeholders related interests'])}}</li>
        </ol>
        </div>
</section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/rs-sanglah.jpg'),
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