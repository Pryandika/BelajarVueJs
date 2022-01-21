<template>
<section>
    <div class="destination" id="destination">
      <div class="container-fluid p-1">
        <img :src="images.cover1" alt="habout" class="w-100 pt-5">
        <h1 class="mt-5 centered text-black style fw-bold pt-3" style="font-size:3vw;">BMTA Destination</h1>
      </div>
    </div>
</section>
<nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Destination</li>
  </ol>
</nav>

<!-- Search Destination & Categories Lg -->
  <form class="d-none d-md-block">
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
          <option v-for="kategori in poli" :key="kategori.id">{{kategori.name}}</option>
        </select>
      </div>
      <div class="col-3">
        <input class="form-control mr-2" type="search" placeholder="Pencarian">
      </div>
      <div class="col-2">
        <router-link :to="{name: 'Destination'}">
          <button type="button" class="btn btn-md btn-block btn-primary">Search</button>
        </router-link>
      </div>
    </div>
</form>
  <!-- Search Destination & Categories SM -->
<div class="container d-block d-md-none pt-3">
  <select class="form-control form-control-md">
    <option hidden>Lokasi</option>
    <option>Denpasar</option>
    <option>Tabanan</option>
    <option>Klungkung</option>
    <option>Gianyar</option>
    <option>Buleleng</option>
  </select>
  <select class="form-control form-control-md my-3">
    <option hidden>Kategori</option>
    <option>Klinik</option>
    <option>Rumah Sakit</option>
    <option>Apotek</option>
  </select>
  <input class="form-control mb-3" type="search" placeholder="Search">
  <router-link :to="{name: 'Destination'}">
    <button type="button" class="btn btn-md btn-block btn-outline-primary">Search</button>
  </router-link>
</div>

<br>
<br>

<!-- Rumah Sakit Placeholder -->
<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rssanglah" alt="RSUP Sanglah">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs1">RSUP Sanglah</h5>
            <p class="card-text">Jl. Diponegoro, Denpasar</p>
            <div class="pt-4 d-none d-sm-block"></div>
            <router-link to="/Destination/rsup-sanglah" class="btn d-block btn-outline-primary text-wrap gap-2">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Reservasi" @click="setName('rs1')">{{$translate(['Reservasi','Reservation'])}}</button>
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
          <img class="card-img-top" :src="images.rsubm" alt="RSU Bali Mandara">
          <div class="card-body text-center">
            <h5 class="rs2 card-title" id="rs2">RSU Bali Mandara</h5>
            <p class="card-text">Jl. Bypass Ngurah Rai No. 548, Denpasar</p>
            <router-link to="/Destination/rsu-balimandara" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs2')">{{$translate(['Reservasi','Reservation'])}}</button>
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
          <img class="card-img-top" :src="images.rsmbm" alt="RS Mata Bali Mandara">
          <div class="card-body text-center">
            <h5 class="rs card-title" id="rs3">RS Mata Bali Mandara</h5>
            <p class="card-text">Jl. Angsoka No. 8 Denpasar</p>
            <div class="pt-4 d-none d-sm-block d-md-none d-lg-block"></div>
            <router-link to="/Destination/rsm-balimandara" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs3')">{{$translate(['Reservasi','Reservation'])}}</button>
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
  </section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsptnunud" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs4">RSPTN Unud</h5>
            <p class="card-text">Jl. Rumah Sakit Universitas Udayana No. 1, Jimbaran, Kuta Selatan</p>
            <router-link to="/Destination/rsptn-unud" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs4')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>

            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsmangusadabadung" alt="RS Mangusada Ubung">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs5">RS Mangusada Badung</h5>
            <p class="card-text">Jl. Raya Kapal, Mangupura, Mengwi, Badung</p>
            <div class="pt-4 d-none d-sm-block d-md-none d-lg-none"></div>
            <router-link to="/Destination/rs-mangusada-badung" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs5')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
                <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bimcnusadua" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs6">RS BIMC Nusa Dua</h5>
            <p class="card-text">Kawasan ITDC Blok D, Jl. Nusa Dua, Kuta Selatan, Badung</p>
            <div class="pt-4 d-none d-sm-block d-md-none"></div>
            <router-link to="/Destination/rs-bimc-nusadua" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs2')">{{$translate(['Reservasi','Reservation'])}}</button>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bimckuta" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs7">RS BIMC Kuta</h5>
            <p class="card-text">Jl. Bypass Ngurah Rai No. 100X</p>
            <div class="pt-4 d-none d-sm-none d-md-none"></div>
            <router-link to="/Destination/rs-bimc-kuta" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs7')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rssiloamkuta" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs8">RS Siloam Kuta</h5>
            <p class="card-text">Jl. Sunset Road No. 818, Kuta</p>
            <router-link to="/Destination/rs-siloam-kuta" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs8')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bros" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs9">Bali Royal Hospital</h5>
            <p class="card-text">Jl. Tantular No. 6, Renon, Denpasar</p>
            <router-link to="/Destination/bros" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs9')">{{$translate(['Reservasi','Reservation'])}}</button>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsprimamedika" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs10">RS Prima Medika</h5>
            <p class="card-text">Jl. Raya Sesetan No. 10, Denpasar</p>
            <br class="d-none d-sm-block d-md-block d-lg-none">
            <router-link to="/Destination/rs-primamedika" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs10')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rskasihibudps" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs11">RS Kasih Ibu Denpasar</h5>
            <p class="card-text">Jl. Teuku Umar No. 120, Denpasar</p>
            <router-link to="/Destination/rs-kasihibu-dps" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs11')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rskasihibusaba" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs12">RS Kasih Ibu Saba</h5>
            <p class="card-text">Jl. Raya Pantai Saba No. 9, Gianyar</p>
            <br class="d-none d-sm-none d-md-block d-lg-none">
            <router-link to="/Destination/rs-kasihibu-saba" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs12')">{{$translate(['Reservasi','Reservation'])}}</button>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsramata" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs13">RS Khusus Mata Ramata</h5>
            <p class="card-text">Jl. Gatot Subroto Barat No. 429, Denpasar</p>
            <router-link to="/Destination/rs-ramata" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs13')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsbhayangkara" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs14">RS Bhayangkara</h5>
            <p class="card-text">Jl. Trijata No. 32, Denpasar</p>
            <br class="d-none d-sm-none d-md-block d-lg-none">
            <div class="pt-4 d-none d-sm-block d-md-block d-lg-block"></div>
            <router-link to="/Destination/rs-bhayangkara" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs14')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-block d-lg-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.pentamedika" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs15">Klinik Penta Medika</h5>
            <p class="card-text">Jl. Mahendradatta Selatan No. 88, Denpasar</p>
            <div class="pt-4 d-none d-sm-block d-md-none d-lg-none"></div>
            <router-link to="/Destination/klinik-pentamedika" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs15')">{{$translate(['Reservasi','Reservation'])}}</button>
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
</section>
<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 600px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.dentalclinic" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs16">Dental 911 Clinic</h5>
            <p class="card-text">Jl. Gatot Subroto Barat No. 367, Denpasar</p>
            <router-link to="/Destination/dental911clinic" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi" @click="setName('rs16')">{{$translate(['Reservasi','Reservation'])}}</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">{{$translate(['Jadwal','Schedule'])}}</button>
              </div>
            </div>
          </div>
        </div>
         <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.assist" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title" id="rs17">Assist 221</h5>
            <p class="card-text">Jl. Anyelir No. 8, Denpasar</p>
            <br class="d-none d-sm-block d-md-block d-lg-block">
            <router-link to="/Destination/assist221" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#exampleModalCenter" @click="setName('rs17')">{{$translate(['Reservasi','Reservation'])}}</button>  
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
</section>

<!-- Modal Reservasi -->
<section>
  <div class="modal fade" id="Reservasi" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Reservasi</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img :src="images.speedid" alt="speedid" class="speedid-size pt-3">
        <div class="modal-body">
          <h4 class="font-weight-bold" id="buttonRs"></h4>
          <br>
          <h5 class="text-left">{{$translate(['Belum Install?','Have Not Installed Yet?'])}}</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>{{$translate(['Klik SpeedQ','Click SpeedQ'])}}</li>
            <li>{{$translate(['Cari Lokasi Yang Anda Inginkan','Find Your Desired location'])}}</li>
            <li>{{$translate(['Tambahkan Rumah Sakit Ini ke Favorite (Klik ★)','Add This Hospital Into Your Favourite (Click ★)'])}}</li>
            <li>{{$translate(['Pilih Dokter dan Hari Layanan','Choose The Doctor From Days of Service'])}}</li>
            <li>{{$translate(['Tiket Anda di My-Ticket','Your ticket is located in My-Ticket'])}}</li>
          </ol>
        </div>
        <div class="modal-footer">
          <div class="containe">
            <div class="row">
              <div class="col">
                <a href="https://play.google.com/store/apps/details?id=com.bamboomedia.speedid&hl=in&gl=US"
                  target="_blank"><img :src="images.playstore" alt="playstore" class="logo-download"></a>
              </div>
              <div class="col">
                <a href="https://apps.apple.com/id/app/speedid/id1439413446" target="_blank"><img :src="images.apple"
                    alt="apple" class="logo-download"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modal Jadwal -->
<section>
  <div class="modal fade" id="Jadwal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Jadwal</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <img :src="images.speedid" alt="speedid" class="speedid-size pt-3">
        <div class="modal-body">
          <h4 class="font-weight-bold">
            {{$translate(['Jadwal Tersedia','Available Schedule'])}}
          </h4>
          <div class="row px-4">
            <div class="col-5 text-left">
              <h5>{{$translate(['Senin','Monday'])}}</h5>
              <h5>{{$translate(['Rabu','Wednesday'])}}</h5>
              <h5>{{$translate(['Kamis','Thursday'])}}</h5>
              <h5>{{$translate(['Jumat','Friday'])}}</h5>
              <h5>{{$translate(['Sabtu','Saturday'])}}</h5>
              <h5>{{$translate(['Minggu','Sunday'])}}</h5>
            </div>
            <div class="col-5 text-right">
              <div v-for="jadwal in waktu" :key="jadwal.id">
              <h5 v-if="jadwal.day == 1">{{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
              <h5 v-else-if="jadwal.day == 3">  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
              <h5 v-else-if="jadwal.day == 4">  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
              <h5 v-else-if="jadwal.day == 5">  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
              <h5 v-else-if="jadwal.day == 6">  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
              <h5 v-else-if="jadwal.day == 0">  {{jadwal.opening_hours}} - {{jadwal.closing_hours}} </h5>
            </div>
          </div>
          </div>
          <hr>
          <br>
          <h5 class="text-left">{{$translate(['Belum Install SpeedID?','Have Not Installed Yet?'])}}</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>{{$translate(['Klik SpeedQ','Click SpeedQ'])}}</li>
            <li>{{$translate(['Cari Lokasi Yang Anda Inginkan','Find Your Desired location'])}}</li>
            <li>{{$translate(['Tambahkan Rumah Sakit Ini ke Favorite (Klik ★)','Add This Hospital Into Your Favourite (Click ★)'])}}</li>
            <li>{{$translate(['Pilih Dokter dan Hari Layanan','Choose The Doctor From Days of Service'])}}</li>
            <li>{{$translate(['Tiket Anda di My-Ticket','Your ticket is located in My-Ticket'])}}</li>
          </ol>
        </div>
        <div class="modal-footer">
          <div class="containe">
            <div class="row">
              <div class="col">
                <a href="https://play.google.com/store/apps/details?id=com.bamboomedia.speedid&hl=in&gl=US"
                  target="_blank"><img :src="images.playstore" alt="playstore" class="logo-download"></a>
              </div>
              <div class="col">
                <a href="https://apps.apple.com/id/app/speedid/id1439413446" target="_blank"><img :src="images.apple"
                    alt="apple" class="logo-download"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>


</template>

<script>
import listPoli from "@/api/poliRs.json"
import listWaktu from "@/api/waktuBuka.json"

export default {
  data() {
    return {
      poli: listPoli.data.items,
      waktu: listWaktu.data.items,
      images: {
        cover1: require('@/assets/hero/flat.png'),
        cover2: require('@/assets/gallery/section_bg01.png'),
        placeholder: require('@/assets/placeholder.png'),
        rssanglah: require('@/assets/rumahsakit/rs-sanglah.jpg'),
        rsubm: require('@/assets/rumahsakit/rsu-bali-mandara.jpg'),
        rsmbm: require('@/assets/rumahsakit/rs-mata-bali-mandara.jpg'),
        bimckuta: require('@/assets/rumahsakit/bimc-kuta.jpg'),
        bimcnusadua: require('@/assets/rumahsakit/bimc-nusa-dua.jpg'),
        bros: require('@/assets/rumahsakit/bros.jpg'),
        rsmangusadabadung: require('@/assets/rumahsakit/rs-mangusada-badung.jpeg'),
        rssiloamkuta: require('@/assets/rumahsakit/rs-siloam-kuta-2.jpg'),
        rsptnunud: require('@/assets/rumahsakit/rsptn-unud.jpeg'),
        rsprimamedika: require('@/assets/rumahsakit/primamedika-2.png'),
        rskasihibudps: require('@/assets/rumahsakit/rs-kasihibu-dps.jpg'),
        rskasihibusaba: require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'),
        rsramata: require('@/assets/rumahsakit/rs-ramata.jpg'),
        rsbhayangkara: require('@/assets/rumahsakit/rs-bhayangkara.jpg'),
        pentamedika: require('@/assets/rumahsakit/penta-medica.jpeg'),
        dentalclinic: require('@/assets/rumahsakit/bali-dental911.jpg'),
        assist: require('@/assets/rumahsakit/assist-221.jpg'),
        apple: require('@/assets/modal/apple.png'),
        playstore: require('@/assets/modal/playstore.png'),
        speedid: require('@/assets/modal/SpeedID.png')
      }
      
    }
    
  },
   methods: {
      setName (idName){
        var name = document.getElementById(idName).innerHTML;
        console.log(name);
        let language = localStorage.getItem('language')
        if(language == 1){
                  document.getElementById("buttonRs").innerHTML = "Anda dapat melakukan registrasi langsung lewat aplikasi SpeedID dengan mencari office" + " " + "'" + name +  "'" + " " + "pada fitur SpeedQ."
        }
        else{
                  document.getElementById("buttonRs").innerHTML = "You can register directly through the SpeedID application by searching for office" + " " + "'" + name +  "'" + " " + "in the SpeedQ feature."
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

.card-img-top {
  width:inherit;
  height:28vh;
  object-fit: cover;
}

.centered{  
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.speedid-size{
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.logo-download{
 width: 100%;
}

.nopadding{
  padding: 0;
  margin: 0;
}

.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}
</style>