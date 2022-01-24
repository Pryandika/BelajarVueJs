<template>
<div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" src="" id="img1" alt="RSUP Sanglah">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs1"></h5>
            <p class="card-text">Jl. Diponegoro, Denpasar</p>
            <div class="pt-4 d-none d-sm-block"></div>
            <router-link to="" class="btn d-block btn-outline-primary text-wrap gap-2">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Reservasi">{{$translate(['Reservasi','Reservation'])}}</button>
                </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" src="" alt="RSU Bali Mandara">
          <div class="card-body text-center">
            <h5 class="rs2 card-title" id="rs2">RSU Bali Mandara</h5>
            <p class="card-text">Jl. Bypass Ngurah Rai No. 548, Denpasar</p>
            <router-link to="" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" src="" alt="RS Mata Bali Mandara">
          <div class="card-body text-center">
            <h5 class="rs card-title" id="rs3">RS Mata Bali Mandara</h5>
            <p class="card-text">Jl. Angsoka No. 8 Denpasar</p>
            <div class="pt-4 d-none d-sm-block d-md-none d-lg-block"></div>
            <router-link to="" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ul>
    <li v-for="klinik in poli" :key="klinik.id">{{this.poli}}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    poli: null,
    jadwal: null,
    nama: null,
    deskripsi: null,
    img: null,
  }),
    created(){
      let baseUrl = 'https://kimiafarmadenpasar.co.id/api_bmta';
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/offices.php?page=1&lat=-8.6649188&long=115.2384802`)
      .then((response) => {
        this.img = response.data.data.items[0].images[1];
        console.log(this.img);
        document.getElementById("img1").src = this.img;
      })
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}${baseUrl}/grouped_counters.php`)
      .then((response) => {
        this.poli = response.data.data.items[0];
      })
    }
  }
</script>

<style>
</style>