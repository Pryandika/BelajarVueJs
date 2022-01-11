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
            <h5 class="card-title">RSUP Sanglah</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap gap-2">Detail
            </router-link>
            <div class="py-1"></div>
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                  <button class="btn w-100 btn-primary" data-toggle="modal"
                    data-target="#Reservasi">Reservasi</button>
                </div>
                <div class="py-1 d-block d-sm-block d-md-none"></div>
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
            <h5 class="card-title">RSU Bali Mandara</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail
            </router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
  </section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsptnunud" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RSPTN Unud</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsmangusadabadung" alt="RS Mangusada Ubung">
          <div class="card-body text-center">
            <h5 class="card-title">RS Mangusada Badung</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bimcnusadua" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS BIMC Nusa Dua</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bimckuta" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS BIMC Kuta</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rssiloamkuta" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Siloam Kuta</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.bros" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Bali Royal Hospital</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsprimamedika" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Prima Medika</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rskasihibudps" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Kasih Ibu Denpasar</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rskasihibusaba" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Kasih Ibu Saba</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
</section>

<section>
  <div class="container d-flex">
    <div class="container my-5 align-items-center" style="width: 900px;">
      <div class="card-group">
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsramata" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Khusus Mata Ramata</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.rsbhayangkara" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">RS Bhayangkara</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.pentamedika" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Klinik Penta Medika</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">#Jadwal</button>
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
            <h5 class="card-title">Dental 911 Clinic</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Reservasi">Reservasi</button>
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#Jadwal">Jadwal</button>
              </div>
            </div>
          </div>
        </div>
         <div class="card" style="width:auto;">
          <img class="card-img-top" :src="images.assist" alt="Card image 1">
          <div class="card-body text-center">
            <h5 class="card-title">Assist 221</h5>
            <p class="card-text">Deskripsi</p>
            <router-link to="/Destination/rs-member" class="btn d-block btn-outline-primary text-wrap">Detail</router-link>
            <div class="pt-2"></div>
            <div class="row">
              <div class="col">
                <button class="btn w-100 btn-primary" data-toggle="modal"
                  data-target="#exampleModalCenter">Reservasi</button>  
              </div>
              <div class="py-1 d-block d-sm-block d-md-none"></div>
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
          <h4 class="font-weight-bold">
            Anda dapat melakukan registrasi langsung lewat aplikasi SpeedID dengan mencari rumah sakit "Rumah Sakit Ini"
            pada fitur SpeedQ.
          </h4>
          <br>
          <h5 class="text-left">Belum Install?</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>Klik SpeedQ</li>
            <li>Cari Lokasi yang Anda Inginkan</li>
            <li>Tambahkan "Rumah Sakit Ini" ke Favorite (Klik ★)</li>
            <li>Pilih Dokter dan Hari Layanan</li>
            <li>Tiket Anda di My-Ticket</li>
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
            Mohon maaf, jadwal belum tersedia.
          </h4>
          <hr>
          <br>
          <h5 class="text-left">Belum Install SpeedID?</h5>
          <ol class="text-left">
            <li>Download SpeedID</li>
            <li>Klik SpeedQ</li>
            <li>Cari Lokasi yang Anda Inginkan</li>
            <li>Tambahkan "Rumah Sakit Ini" ke Favorite (Klik ★)</li>
            <li>Pilih Dokter dan Hari Layanan</li>
            <li>Tiket Anda di My-Ticket</li>
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
export default {
    data() {
        return {
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
                rskasihibudps:require('@/assets/rumahsakit/rs-kasihibu-dps.jpg'),
                rskasihibusaba: require('@/assets/rumahsakit/rs-kasihibu-saba.jpg'),
                rsramata: require('@/assets/rumahsakit/rs-ramata.jpg'),
                rsbhayangkara: require('@/assets/rumahsakit/rs-bhayangkara.jpg'),
                pentamedika: require('@/assets/rumahsakit/penta-medica.jpeg'),
                dentalclinic: require('@/assets/rumahsakit/bali-dental911.jpg'),
                assist: require('@/assets/rumahsakit/assist-221.jpg'),
                apple: require('@/assets/modal/apple.png'), 
                playstore: require('@/assets/modal/playstore.png'), 
                speedid: require('@/assets/modal/SpeedID.png')           
              },
          data: {
					tlokasi: "",
					userid: 0
				},
				methods: {
					allRecords: function(){
						
						axios.get('ajaxfile.php')
						.then(function (response) {
						    app.users = response.data;
						})
						.catch(function (error) {
						    console.log(error);
						});
					},
					recordByID: function(){
						if(this.userid > 0){
							
							axios.get('ajaxfile.php', {
							    params: {
							      	userid: this.userid
							    }
							})
						  	.then(function (response) {
						    	app.users = response.data;
						  	})
						  	.catch(function (error) {
						    	console.log(error);
						  	});
						}
						
					}
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