<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Mangusada Badung','RS Mangusada Badung'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/LfFP6aNo7SxCniBa7" target="_blank" style="color:black;">Jl. Raya Kapal, Mangupura, Mengwi, Badung, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:rsdm@rsdmangusada.com" style="color:black;">rsdm@rsdmangusada.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+623613370001" target="_blank" style="color:black;">+62 361 3370001 ext 4</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="rsudmangusada.badungkab.go.id" target="_blank">rsudmangusada.badungkab.go.id</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/LfFP6aNo7SxCniBa7" target="_blank" style="color:black;">Jl. Raya Kapal, Mangupura, Mengwi, Badung, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="rsdm@rsdmangusada.com" style="color:black;">rsdm@rsdmangusada.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+623613370001" target="_blank" style="color:black;"> +62 361 3370001 ext 4</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="rsudmangusada.badungkab.go.id" target="_blank">rsudmangusada.badungkab.go.id</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Mangusada Badung','RS Mangusada Badung'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RS Mangusada Badung','RS Mangusada Badung\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Pendidikan Dengan Pelayanan yang Profesional ','Becoming a Teaching Hospital With Professional Services'])}}
         {{$translate([' Inovatif Dan Berbudaya Menuju Standar Internasional ','Innovative And Cultured Towards International Standards'])}}
        </p>
        <h5>{{$translate(['Misi RS Mangusada Badung','RS Mangusada Badung\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menyelenggarakan Pelayanan Kesehatan yang Berfokus Pada Keselamatan Pasien','Organizing Health Services that Focus on Patient Safety'])}}</li>
          <li>{{$translate(['Menyelenggarakan Pendidikan, Pelatihan, Penelitian, dan Pengembangan serta Pengabdian Kepada Masyarakat','Organizing Education, Training, Research, and Development as well as Community Service'])}}</li>
          <li>{{$translate([' Melaksanakan Tata Kelola Administrasi Rumah Sakit yang Baik','Implementing Good Hospital Administration'])}}</li>
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
                cover1: require('@/assets/rumahsakit/rs-mangusada-badung.jpeg'),
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