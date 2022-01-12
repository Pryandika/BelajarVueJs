<template>
<div id="app">
  <form class="pt-5 mt-5 d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>Lokasi</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>Kategori</option>
          <option>Klinik</option>
          <option>Rumah Sakit</option>
          <option>Apotek</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Pencarian">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-outline-light">Search</button>
        </router-link>
      </div>
    </div>
</form>
</div>
<br><br>
</template>
    
    
<script>
  import axios from "axios";
export default {
  data: () => ({
    data: null,
    dokterm: null
  }),
  created() {
    axios.get('http://localhost:3000/dokter/')
      .then((response) => {
        this.data = response.data;
        this.dokterm = response.dokterm.nama;
        console.log(this.dokterm);
      });
    }
  } 
</script>

<style>

</style>