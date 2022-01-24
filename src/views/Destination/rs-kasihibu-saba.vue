<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Kasih Ibu Saba','RS Kasih Ibu Saba'])}}</li>
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
                  <div class="col my-auto"><a href="https://goo.gl/maps/yFDviSVmdckyqbX38" target="_blank" style="color:black;">Jl. Raya Pantai Saba No. 9, Gianyar,Bali</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto"><a href="mailto:care@kih.co.id" style="color:black;">care@kih.co.id</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+623613003333" target="_blank" style="color:black;"> (+62 361) 300 3333</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col my-auto"><a href="https://kih.co.id/" target="_blank">https://kih.co.id/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/yFDviSVmdckyqbX38" target="_blank" style="color:black;">Jl. Raya Pantai Saba No. 9, Gianyar,Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:care@kih.co.id" style="color:black;">care@kih.co.id</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+623613003333" target="_blank" style="color:black;">(+62 361) 300 3333</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https:https://kih.co.id/" target="_blank">https://kih.co.id/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RS Kasih Ibu Saba','RS Kasih Ibu Saba'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RS Kasih Ibu Saba','RS Kasih Ibu Saba\'s Vision'])}}</h5>
        <p>
         {{$translate([' Menjadi rumah sakit pilihan utama di Bali, melalui pelayanan kesehatan yang lengkap & berkualitas, dengan beberapa layanan unggulan, serta mengutamakan keselamatan pasien & sentuhan kasih.','To become the first choice hospital in Bali, through complete & quality health services, with several superior services, and prioritizing patient safety & a touch of love.'])}}
        </p>
        <h5>{{$translate(['Misi RS Kasih Ibu Saba','RS Kasih Ibu Saba\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Meningkatkan pengelolaan manajemen rumah sakit yang profesional.','Improve the management of professional hospital management.'])}}</li>
          <li>{{$translate(['Memberikan pelayanan melalui sumber daya manusia yang ramah dan paripurna.','Providing services through friendly and complete human resources.'])}}</li>
          <li>{{$translate(['Mengembangkan kemampuan sumber daya manusia yang berkualitas melalui pelatihan internal dan eksternal yang berkesinambungan.','Develop quality human resource capabilities through continuous internal and external training.'])}}</li>
          <li>{{$translate(['Meningkatkan pelayanan yang terfokus kepada keselamatan dan kepuasan pasien.','Improve services that are focused on patient safety and satisfaction.'])}}</li>
          <li>{{$translate(['Menyediakan sarana, prasarana dan peralatan medis yang canggih.','Providing sophisticated medical facilities, infrastructure and equipment.'])}}</li>
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
                cover1: require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'),
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