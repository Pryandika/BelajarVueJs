<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Assist 221','Assist 221'])}}</li>
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
                  <div class="col my-auto"><a href="http://www.221assist.com/" target="_blank">http://www.221assist.com/</a></div></div>
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
                  <div class="col-auto my-auto"><a href="https://goo.gl/maps/5jZdg3LdCGWQ5VUc8" target="_blank" style="color:black;">Jl. Anyelir No. 8, Kota Denpasar, Bali</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:service@221assist.com" style="color:black;">service@221assist.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:+6281558221221" target="_blank" style="color:black;"> +62 81 558 221 221</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="http://www.221assist.com/" target="_blank">http://www.221assist.com/</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">221 Assist</h3>
        <hr>
        <p>
         Indonesia is a big and beautiful country that consists of thousand islands where geographically in every place giving specific difficulties to execute an emergency medical evacuation. Forced with this situation 221Assist was designed to understand the situation and always learn the unique of Indonesia. 221Assist has been developing networking of correspondent in several main cities Indonesia in order to be faster and responsive when a medical case is activated.</p>
         <p>221assist is a growing Indonesian's medical assistance company, since established in 2009 has proven a consistency in providing medical assistances to local people and expatriate who is medically needs better treatment at the closest adequate medical facility. A good work performance of 221Assist that shows high quality, efficiency, simplicity, and reasonable cost has positioned 221Assist as a reliable partner for any medical assistance in the world.</p>
         <p>Behind the success of 221assist is supported by a strong operational staff which is basically a blend of personnel who posses wide experiences in medical assistance. Their abilities has given advantage in managing any mode of medical transport includes air ambulance, commercial carrier, chopper, ground ambulance, boat, ferry and either combination two-three of them. Our medical team that consist of ICU Doctor, Anesthesia, and experience Nurse/Paramedic supported with good medical equipment give confidence that 221Assist will provide high care to the patient during the transportation.
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
                cover1: require('@/assets/rumahsakit/assist-221.jpg'),
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