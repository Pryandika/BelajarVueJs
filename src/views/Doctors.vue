<template>
<section>
    <div class="doctors" id="doctors">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">Our doctors</h1>
      </div>
    </div>
</section>
  <!-- Content -->
  <section>
      <h5 align="middle" class="my-5">Coming soon</h5>
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

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>