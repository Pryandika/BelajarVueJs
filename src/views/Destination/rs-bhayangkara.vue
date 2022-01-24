<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Bhayangkara','RS Bhayangkara'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/74JeePRuKxiSFrbe9" target="_blank" style="color:black;">	Jl. Trijata No. 32 Sumerta Kelod 2F, Denpasar - BALI</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:rstrijata@gmail.com" style="color:black;">rstrijata@gmail.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361234670" target="_blank" style="color:black;">(+62 361) 234670</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="	https://rstrijata.com/" target="_blank">	https://rstrijata.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/74JeePRuKxiSFrbe9" target="_blank" style="color:black;">	Jl. Trijata No. 32 Sumerta Kelod 2F, Denpasar - BALI</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:	rstrijata@gmail.com" style="color:black;">	rstrijata@gmail.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62361234670" target="_blank" style="color:black;">(+62 361) 234670</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://rstrijata.com/" target="_blank">https://rstrijata.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Bhayangkara','RS Bhayangkara'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RS Bhayangkara','RS Bhayangkara\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Yang Profesional, Modern, Terpercaya Dalam Bidang Pelayanan Kesehatan dan Kedokteran Kepolisian','Becoming a Professional, Modern, Trusted Hospital in the Field of Police Health and Medical Services'])}}
        </p>
        <h5>{{$translate(['Misi RS Bhayangkara','RS Bhayangkara\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Memberikan pelayanan kesehatan yang prima dan terstandarisasi;','Provide excellent and standardized health services;'])}}</li>
          <li>{{$translate(['Memberikan dukungan pelayanan kedokteran kepolisian yang handal dan profesional;','Provide support for reliable and professional police medical services;'])}}</li>
          <li>{{$translate(['Memiliki sumber daya manusia unggul dan bermoral;','Having superior and moral human resources;'])}}</li>
          <li>{{$translate(['Meningkatkan kuantitas dan kualitas sarana dan prasarana yang modern.','Increase the quantity and quality of modern facilities and infrastructure.'])}}</li>
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
                cover1: require('@/assets/rumahsakit/rs-bhayangkara.jpg'),
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