<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Khusus Mata Ramata','RS Khusus Mata Ramata'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/PP8iLXLq1ahvrFXe6" target="_blank" style="color:black;">Jl Gatot Subroto Barat No 429, Denpasar, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@rsmramata.com" style="color:black;">info@rsmramata.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+623619069009" target="_blank" style="color:black;"> (+62 361) 9069009</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://www.rsmramata.com/" target="_blank">https://www.rsmramata.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/PP8iLXLq1ahvrFXe6" target="_blank" style="color:black;">Jl Gatot Subroto Barat No 429, Denpasar, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info@rsmramata.com" style="color:black;">info@rsmramata.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="+623619069009" target="_blank" style="color:black;"> (+62 361) 9069009</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://www.rsmramata.com/" target="_blank">https://www.rsmramata.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Khusus Mata Ramata','RS Khusus Mata Ramata'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RS Khusus Mata Ramata','RS Khusus Mata Ramata\'s Vision'])}}</h5>
        <p>
         {{$translate(['Menjadi Pusat Layanan Mata yang Unggul dan Terpadu.','To be a Superior and Integrated Eye Service Center.'])}}
        </p>
        <h5>{{$translate(['Misi RS Khusus Mata Ramata','RS Khusus Mata Ramata\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menjaga mutu pelayanan yang prima, untuk mencapai kesembuhan pasien yang prima, paripurna dan bermutu.','Maintain excellent service quality, to achieve excellent, complete and quality patient recovery.'])}}</li>
          <li>{{$translate(['Ramah, professional, menjalin hubungan yang erat dan harmonis secara berkesinambungan dengan pasien dan keluarganya.','Friendly, professional, maintain a close and harmonious relationship on an ongoing basis with patients and their families.'])}}</li>
          <li>{{$translate(['Menciptakan rasa amn bagi seluruh pengguna jasa pelayanan rumah sakit.','Creating a sense of security for all hospital service users.'])}}</li>
          <li>{{$translate(['Terus menerus membentuk SDM yang beretika, berkinerja tinggi serta adaptif dengan ilmu pengetahuan yang terus berkembang.','Continuously developing ethical, high-performing and adaptive human resources with knowledge that continues to develop.'])}}</li>
          <li>{{$translate(['Mengembangkan eye heatlh tourism.','Developing eye heath tourism.'])}}</li>
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
                cover1: require('@/assets/rumahsakit/rs-ramata.jpg'),
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