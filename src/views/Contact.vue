<template>
  <section>
    <div class="contact">
      <!--Section heading-->
      <div class="contacthead" id="contacthead">
        <div class="container-fluid p-0">
          <img :src="images.cover1" alt="contacthead" class="w-100">
          <h1 class="d-none d-lg-block mt-5 centered text-black style fw-bold" style="font-size:3vw;">Contact us</h1>
          <p class="d-none d-lg-block mt-5 pt-5 centered text-black style t-pos" style="font-size:1vw;">Anda dapat menghubungi kami melalui beberapa kontak yang kami berikan</p>
           <!-- Header Small Screen -->
          <h1 class="d-block d-lg-none text-center pt-2"> Contact Us</h1>
          <p class="d-block d-lg-none text-center px-2">Anda dapat menghubungi kami melalui beberapa kontak yang kami berikan</p>
        </div>
      </div>
    </div>
  </section>

<!-- Flex -->
<section>
  <div class="container">
    <div class="row">
      <div class="d-none d-md-block col">
        Blm isi konten
      </div>
      <!-- Small Screen Map -->
      <div class="col">
        <div class="container-map col-lg-11 py-3">
          <div id="map-container-google-11" class="z-depth-1-half map-container-6 map-height container-map"
            style="height: 400px">
            <iframe src="https://maps.google.com/maps?q=Bamboomedia&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style="border:0" allowfullscreen></iframe>
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
.container{
  position: relative;
}

.container-fluid {
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
}

.container-map{
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
  height: 6px;
}
</style>