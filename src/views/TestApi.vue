<template>

<nav class="container pt-5 mt-5">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['Search','Pencarian'])}}</li>
  </ol>
</nav>

<div class="container">
  <div class="row" id="results">

  </div>
</div>


<div v-if="loading" class="justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>


<div class="error pb-5" id="error"></div>




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
        <div class="modal-body">
          <h4 class="font-weight-bold">

          </h4>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      images:{
        apple: require('@/assets/modal/apple.png'),
        playstore: require('@/assets/modal/playstore.png'),
        speedid: require('@/assets/modal/SpeedID.png')
      },
        apipage: 1,
        repositories: [],
        page: 1,
        loading: false,
        perPage: 20
    };
  },
  api: () => ({
    listpoli: null,
    poli: null,
    img: null,
    nama: null,
    alamat: null,
    deskripsi: null,
    waktu: null,
    bahan: null,
    total: null,
    jadwal: null,
    days: null,
    op_hours: null,
    ed_hours: null,

    total_page: null,
    item_per_page: null,
  }),
  computed: {
      lastPage() {
        let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?lat=-8.6649188&long=115.2384802&page=';
        axios.get(baseUrl + this.apipage)
          .then((response) => {
           this.total_page = response.data.data.paging.total_page;
           var tp = this.total_page;
           console.log(tp);
           return tp;
          })
      }
  },
  methods: {
      setName(idName) {
        var name = document.getElementById(idName).innerHTML;
        console.log(name);
        let language = localStorage.getItem('language')
        if (language == 1) {
          document.getElementById("buttonRs").innerHTML = "Anda dapat melakukan registrasi langsung lewat aplikasi SpeedID dengan mencari office" + " " + "'" + name + "'" + " " + "pada fitur SpeedQ."
        } else {
          document.getElementById("buttonRs").innerHTML = "You can register directly through the SpeedID application by searching for office" + " " + "'" + name + "'" + " " + "in the SpeedQ feature."
        }
      },
      cari() {
        this.loading = "true";
        var value_kabupaten = localStorage.getItem("val_kabupaten");
        console.log(value_kabupaten);
        if (value_kabupaten == "Lokasi" || value_kabupaten == "Location") {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage)
            .then((response) => {
              this.total = response.data.data.paging.total_item;
              this.item_per_page = response.data.data.paging.item_per_page;
              var total_item = this.total;
              var strHTML = '';
              for (var i = 0; i < total_item; i++) {
                this.bahan = response.data.data.items[i];
                // console.log(this.bahan);
                // console.log(this.bahan.name);
                var template =
                `<div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <div class="card h-100">
                      <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title" id="${this.bahan.id}">${this.bahan.name}</h5>
                        <p class="card-text" id="${this.bahan.office.id}">${this.bahan.office.name}</p>
                        <br>
                        <h4 class="card-text">${this.bahan.person}</h4>
                        <p class="card-text">${this.bahan.office.whatsapp}</p>
                        <p class="card-text">${this.bahan.office.address}</p>
                        <div class="pt-2"></div>
                        <div class="row">
                          <div class="col">
                            <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                              data-target="#Reservasi">Reservasi</button>
                          </div>
                          <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
                          <div class="col">
                            <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                              data-target="#Jadwal" id="${this.bahan.id}">Jadwal</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
                strHTML += template;
              }
              document.getElementById('results').insertAdjacentHTML('beforeend', strHTML);
              this.loading = "false";
            })
            .catch(error => {
              this.loading = "false";
              console.log(error);
              // document.getElementById('error').innerHTML;
            })
        } else {
          let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/counters_with_office.php?&lat=-8.6649188&long=115.2384802&page=';
          axios.get(baseUrl + this.apipage + `&search=${value_kabupaten}`)
            .then((response) => {
              this.total = response.data.data.paging.total_item;
              this.item_per_page = response.data.data.paging.item_per_page;
              var total_item = this.total;
              var strHTML = '';
              for (var i = 0; i < total_item; i++) {
                this.bahan = response.data.data.items[i];
                // console.log(this.bahan);
                // console.log(this.bahan.name);
                var template =
                  `<div class="col-lg-4 mb-3 d-flex align-items-stretch">
                  <div class="card">
                    <div class="card h-100">
                      <img class="card-img-top" src="${this.bahan.office.images[0]}" alt="Card image">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title" id="${this.bahan.id}">${this.bahan.name}</h5>
                        <p class="card-text" id="${this.bahan.office.id}">${this.bahan.office.name}</p>
                        <br>
                        <h4 class="card-text">${this.bahan.person}</h4>
                        <p class="card-text">${this.bahan.office.whatsapp}</p>
                        <p class="card-text">${this.bahan.office.address}</p>
                        <div class="pt-2"></div>
                        <div class="row">
                          <div class="col">
                            <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                              data-target="#Reservasi">Reservasi</button>
                          </div>
                          <div class="py-1 d-block d-sm-block d-md-block d-lg-none mt-auto"></div>
                          <div class="col">
                            <button class="btn w-100 btn-primary align-self-end" data-toggle="modal"
                              data-target="#Jadwal" id="${this.bahan.id}">Jadwal</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
                strHTML += template;
                }
              document.getElementById('results').insertAdjacentHTML('beforeend', strHTML);
            })
            .catch(error => {
              document.getElementById('error').innerHTML = "Data Tidak Ditemukan";
            })
        }
      },
      
      cariJadwal(counter_id, office_id){
        var c = counter_id;
        var o = office_id;
        

        console.log("office =", o);
        console.log("counter =", c);

        // let baseUrl = 'https://cors-anywhere.herokuapp.com/https://kimiafarmadenpasar.co.id/api_bmta/operational_days.php?lat=-8.6649188&long=115.2384802&counter_id=2081&office_id=536';
        // axios.get(baseUrl + this.apipage + `&counter_id=${c}` + `&office_id=${o}`)
        // .then((response) => {
        //   this.jadwal = response.data.data.items[0];
        //   this.days = this.jadwal.day;
        //   this.op_hours = this.jadwal.opening_hours;
        //   this.ed_hours = this.jadwal.closing_hours;
        // })

      },

      prevPage() {
        this.page--;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },

      nextPage() {
        this.githubPage++;
        this.cari();
        this.page++;
      },

      getNextData() {
      window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          console.log("success")
          this.cari();
        }
      }
    }
  },

  mounted() {
    this.getNextData(),
    this.cari()
  }
}
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.fa-spinner {
  animation: spinner 1s linear infinite;
}

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
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