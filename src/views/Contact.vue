<template>
  <section>
    <div class="contact">
      <!--Section heading-->
      <div class="contacthead" id="contacthead">
        <div class="container-fluid px-0">
          <img :src="images.cover1" alt="contacthead" class="w-100">
          <h1 class="d-block d-sm-block d-md-block d-lg-block pb-5 mt-5 pt-3 centered text-black style fw-bold" style="font-size:3vw;">Contact us</h1>
          <!-- Header Small Screen -->
          <p class="d-block d-lg-none text-center my-2"></p>
        </div>
      </div>
    </div>
  </section>
  
<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Kontak','Contact'])}}</li>
  </ol>
</nav>

  <section>
    <!-- Whole Card -->
    <div class="container">
    <p class="text-center">{{$translate(['Hubungi kami melalui kontak di bawah ini:','Contact us via the contact below:'])}}</p>
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <div class="d-none d-lg-block col">
              <!-- Card -->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto">Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali</div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col my-auto">info@bamboomedia.net</div></div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto">+62 361 265521</div></div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-whatsapp"></i></div>
                  <div class="col my-auto">+62 821-4663-3466</div></div>
                </div>
              </div>
            </div>
            <!-- Map -->
            <div class="col">
              <div class="iframe-container col-lg-12 py-3">
                <div id="map-container-google-11" class="z-depth-1-half map-container-6 map-height" style="height: 400px">
                  <iframe src="https://maps.google.com/maps?q=Bamboomedia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" style="border:0" allowfullscreen></iframe>
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
                  <div class="col-10 my-auto">Jl. Merdeka No.45, Renon, Denpasar Selatan, Kota Denpasar, Bali.</div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto">info@bamboomedia.net</div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto">+62 361 265521</div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-whatsapp"></i></div>
                  <div class="col-auto my-auto">+62 821-4663-3466</div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/hero/flat.png'),
                cover2: require('@/assets/gallery/section_bg01.png')
            }
        }
    }
}
</script>

<style>
.bi {
  font-size:2rem;
  align-self: center;
}

.card-icon{
  margin:0em;
}

.container{
  position: relative;
}

.container-fluid {
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.iframe-container > *{
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.map-container-6{
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}

.map-container-6 iframe{
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}

.t-pos{
  height: 0px;
}
</style>