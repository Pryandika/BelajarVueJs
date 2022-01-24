<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS BIMC Kuta','RS BIMC Kuta'])}}</li>
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
                  <div class="col my-auto"><a href="https://g.page/bimc-kuta?share" target="_blank" style="color:black;">Jl. Bypass Ngurah Rai No 100X Kuta 80361, Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:admin@bimcbali.com" style="color:black;">admin@bimcbali.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361761263" target="_blank" style="color:black;">Phone: (+62 361) 761263</a>
                  <br>
                  <a href="https://wa.me/6281139608500" target="_blank" style="color:black;">WhatsApp: +62 811 3960 8500</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://bimcbali.com/" target="_blank">https://bimcbali.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://g.page/bimc-kuta?share" target="_blank" style="color:black;">Jl. Bypass Ngurah Rai No 100X Kuta 80361, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:admin@bimcbali.com" style="color:black;">admin@bimcbali.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+62 361 761263" target="_blank" style="color:black;"> +62 361 761263</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://bimcbali.com/" target="_blank">https://bimcbali.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
                <h3 class="text-center">{{$translate(['RS BIMC Nusa Dua','RS BIMC Nusa Dua'])}}</h3>
        <hr>
                <h5>{{$translate(['Sejarah RS BIMC Kuta','RS BIMC Kuta\'s History'])}}</h5>
        <p>
         {{$translate([' Rumah Sakit BIMC Nusa Dua adalah rumah sakit pertama di Indonesia yang mendapat akreditasi internasional dari Australian Council on Healthcare Standards (ACHS) dan diakui sebagai penyedia layanan kesehatan nomor satu di Indonesia oleh Internasional Assistance Group (IAG).','BIMC Nusa Dua Hospital is the first hospital in Indonesia to receive international accreditation from the Australian Council on Healthcare Standards (ACHS) and is recognized as the number one healthcare provider in Indonesia by the International Assistance Group (IAG).'])}}
         {{$translate([' Rumah Sakit BIMC Nusa Dua juga menjadi pilihan tujuan wisata kesehatan dan layanan gawat darurat unggulan di Indonesia mengingat jaraknya hanya 20 menit dari Bandara Internasional Ngurah Rai. Rumah sakit ini juga terletak di di lingkungan Bali Tourism Development Corporation (BTDC) Complex yang ramai dan dikelilingi oleh hotel-hotel berbintang lima dan pantai-pantai yang menawan maupun pusat perbelanjaan dan gaya hidup modern seperti Bali Golf and Country Club.','BIMC Nusa Dua Hospital is also the preferred destination for health tourism and leading emergency services in Indonesia considering that it is only 20 minutes from Ngurah Rai International Airport. The hospital is also located in the bustling Bali Tourism Development Corporation (BTDC) Complex, surrounded by five-star hotels and charming beaches as well as shopping centers and modern lifestyles such as the Bali Golf and Country Club.'])}}
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
                cover1: require('@/assets/rumahsakit/bimc-kuta.jpg'),
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