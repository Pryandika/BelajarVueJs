<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Bali Royal Hospital','Bali Royal Hospital'])}}</li>
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
                  <div class="col my-auto"><a href="https://g.page/baliroyalhospital?share" target="_blank" style="color:black;">Jl. Tantular No. 6 Renon, Denpasar - Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:info@baliroyalhospital.co.id" style="color:black;">info@baliroyalhospital.co.id</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:(+62361) 247 499, 222 588" target="_blank" style="color:black;"> (+62361) 247 499, 222 588</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://baliroyalhospital.co.id/" target="_blank">https://baliroyalhospital.co.id/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://g.page/baliroyalhospital?share" target="_blank" style="color:black;">Jl. Tantular No. 6 Renon, Denpasar - Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:info@baliroyalhospital.co.id" style="color:black;">info@baliroyalhospital.co.id</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:(+62361) 247 499, 222 588" target="_blank" style="color:black;"> (+62361) 247 499, 222 588</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://baliroyalhospital.co.id/" target="_blank">https://baliroyalhospital.co.id/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['Bali Royal Hospital','Bali Royal Hospital'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi Bali Royal Hospital','Bali Royal Hospital\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi pusat pelayanan kesehatan yang unggul (Center of Excellence) dengan mengutamakan keselamatan dan kepuasan pasien.','To become a center of excellence for health services (Center of Excellence) by prioritizing patient safety and satisfaction.'])}}
        </p>
        <h5>{{$translate(['Misi Bali Royal Hospital','Bali Royal Hospital\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Memberikan pelayanan kesehatan terpercaya melalui kerjasama Tim yang berkualitas dan optimal, bertanggungjawab, berempati, rasional dan terintegrasi untuk kepuasan dan keselamatan pasien.','Providing trusted health services through quality and optimal team collaboration, being responsible, empathetic, rational and integrated for patient satisfaction and safety.'])}}</li>
          <li>{{$translate(['Memberikan pelayanan kesehatan yang terkini melalui pendekatan ilmiah (scientific approach)','Providing the latest health services through a scientific approach'])}}</li>
          <li>{{$translate(['Membangun kerjasama dalam bidang Ilmu Pengetahuan Teknologi Kedokteran (IPTEKDOK) yang tepat guna, dan bidang lainnya, baik vertical maupun horizontal secara berkesinambungan.','Build cooperation in the field of Medical Science Technology (IPTEKDOK) that is appropriate, and other fields, both vertically and horizontally on an ongoing basis.'])}}</li>
          <li>{{$translate(['Mengembangkan pusat unggulan untuk meningkatkan derajat kesehatan masyarakat.','Develop a center of excellence to improve the health status of the community.'])}}</li>
          <li>{{$translate(['Mengembangkan dan menyediakan SDM dan penguatan infrastruktur finansial untuk menunjang pelayanan yang unggul.','Develop and provide human resources and strengthen financial infrastructure to support superior services.'])}}</li>
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
                cover1: require('@/assets/rumahsakit/bros.jpg'),
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