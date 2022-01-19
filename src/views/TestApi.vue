<template>
    <div class="pt-5 mt-5">
        <form class="d-none d-md-block">
    <div class="container-fluid form-row f-color px-5">
      <div class="col-3 ml-5">
        <select class="form-control form-control-md">
          <option hidden>{{$translate(['Lokasi','Location'])}}</option>
          <option>Denpasar</option>
          <option>Tabanan</option>
          <option>Klungkung</option>
          <option>Gianyar</option>
          <option>Buleleng</option>
        </select>
      </div>
      <div class="col-3">
        <select class="form-control form-control-md">
          <option hidden>{{$translate(['Kategori','Categories'])}}</option>
          <option v-for="name in responses" :key="name">{{name.name}}</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Search">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-primary">{{$translate(['Cari','Search'])}}</button>
        </router-link>
      </div>
    </div>
</form>
<div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rssanglah" alt="RSUP Sanglah">
          <div class="card-body text-center">
            <h5 class="card-title">RSUP Sanglah</h5>
            <p class="card-text">Jl. Diponegoro, Denpasar</p>
            <div class="pt-4 d-none d-sm-block"></div>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap gap-2">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Reservasi">Reservasi</button>
                </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Jadwal">Jadwal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsubm" alt="RSU Bali Mandara">
          <div class="card-body text-center">
            <h5 class="card-title">RSU Bali Mandara RSU Bali Mandara</h5>
            <p class="card-text">Jl. Bypass Ngurah Rai No. 548, Denpasar</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsmbm" alt="RS Mata Bali Mandara">
          <div class="card-body text-center">
            <h5 class="card-title">RS Mata Bali Mandara</h5>
            <p class="card-text">Jl. Angsoka No. 8 Denpasar</p>
            <div class="pt-4 d-none d-sm-block d-md-none d-lg-block"></div>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import json from "@/api/grouped_counters.json"

export default {
  name: "BMTA",
  data: function() {
    return {
      responses: json.data.items
    };
  },
  methods: {
    function() {
      this.data = json.data;
      console.log(this.data);
    },
  },
}

// import axios from "axios";

// export default {
//   data: () => ({
//     data: null
//   }),
//     created(){
//       axios.get('https://api.openweathermap.org/data/2.5/weather?id=7038902&units=metric&APPID=d7667d2d21805a0a483e3da7ce1a0c9b')
//       .then((response) => {
//         this.data = response.data;
//         console.log(this.data);
//       });
//     }
// }
</script>

<style>
</style>