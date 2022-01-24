<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Prima Medika','RS Prima Medika'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/1GVR5YomCZwL4Ea47" target="_blank" style="color:black;">Jl. Raya Sesetan No. 10, Denpasar Bali </a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@primamedika.com" style="color:black;">info@primamedika.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361236225" target="_blank" style="color:black;">(+62 361) 236225</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://www.primamedika.com/id" target="_blank">https://www.primamedika.com/id</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/1GVR5YomCZwL4Ea47" target="_blank" style="color:black;">Jl. Raya Sesetan No. 10, Denpasar Bali </a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info@primamedika.com" style="color:black;">info@primamedika.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62361236225" target="_blank" style="color:black;">(+62 361) 236225 ext 15</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://www.primamedika.com/id" target="_blank">https://www.primamedika.com/id</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Prima Medika','RS Prima Medika'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RS Prima Medika','RS Prima Medika\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi Rumah Sakit Terbaik Yang Berdaya Saing Global','To Be The Best Hospital With Global Competitiveness'])}}
        </p>
        <h5>{{$translate(['Misi RS Prima Medika','RS Prima Medika\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Menjaga mutu pelayanan ','Maintain service quality'])}}</li>
          <li>{{$translate(['Meminimalkan rantai birokrasi ','Minimizing bureaucratic chains'])}}</li>
          <li>{{$translate(['Ramah, profesional, menjalin hubungan yang erat dan harmonis secara berkesinambungan dengan customer ','Friendly, professional, maintain a close and harmonious relationship on an ongoing basis with customers'])}}</li>
          <li>{{$translate(['Menciptakan suasana yang aman dan nyaman bagi customer dan karyawan','Creating a safe and comfortable atmosphere for customers and employees'])}}</li>
          <li>{{$translate(['Membentuk SDM yang berkualitas , kreatif , inovatif , efektif dan efisien','Forming qualified, creative, innovative, effective and efficient human resources'])}}</li>
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
                cover1: require('@/assets/rumahsakit/primamedika-2.png'),
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