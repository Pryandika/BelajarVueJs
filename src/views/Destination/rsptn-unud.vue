<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RSPTN Unud','RSPTN Unud'])}}</li>
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
                  <div class="col my-auto"><a href="https://g.page/rsunud?share" target="_blank" style="color:black;">Jl. Rumah Sakit Universitas Udayana No.1, Jimbaran, Kuta Selatan, Badung,Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@rs.unud.ac.id" style="color:black;">info@rs.unud.ac.id</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+623618953670" target="_blank" style="color:black;">(+62 361) 8953670 ext 15</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://rs.unud.ac.id/" target="_blank">https://rs.unud.ac.id/</a></div></div>
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
                  <div class="col-10 my-auto"><a href="https://g.page/rsunud?share" target="_blank" style="color:black;">Jl. Rumah Sakit Universitas Udayana No.1, Jimbaran, Kuta Selatan, Badung, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="info@rs.unud.ac.id" style="color:black;">info@rs.unud.ac.id</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+623618953670" target="_blank" style="color:black;">(+62 361) 8953670 ext 15</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://rs.unud.ac.id/" target="_blank">https://rs.unud.ac.id/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RSPTN Unud','RSPTN Unud'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RSPTN Unud','RSPTN Unud\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Perguruan Tinggi Negeri yang berbasis pendidikan, riset, dan pelayanan kesehatan yang unggul, mandiri, dan berbudaya.','To become a State University Hospital based on education, research, and health services that are superior, independent, and cultured.'])}}
        </p>
        <h5>{{$translate(['Misi RSPTN Unud','RSPTN Unud\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menyelenggarakan pendidikan yang menghasilkan dokter dan tenaga kesehatan lainnya yang professional, unggul, mandiri, berbudaya, dan berwawasan global.','Organizing education that produces doctors and other health workers who are professional, superior, independent, cultured, and have a global perspective.'])}}</li>
          <li>{{$translate(['Menyelenggarakan riset yang bermanfaat bagi masyarakat dan lingkungan.','Conducting research that is beneficial to society and the environment.'])}}</li>
          <li>{{$translate(['Menyelenggarakan pelayanan kesehatan yang berkualitas dan terjangkau bagi seluruh masyarakat.','To provide quality and affordable health services for the entire community.'])}}</li>
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
                cover1: require('@/assets/rumahsakit/rsptn-unud.jpeg'),
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