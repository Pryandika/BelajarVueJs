<template>
  <section>
    <div class="blog" id="blog">
      <div class="container-fluid p-0">
        <img :src="images.cover1" alt="habout" class="w-100">
        <h1 class="mt-5 centered text-black style fw-bold" style="font-size:3vw;">BMTA Blog</h1>
      </div>
    </div>
  </section>
  <section>
    <ul class="nav nav-pills justify-content-center my-3 d-none d-sm-none d-md-flex">
      <li class="nav-item"><a class="nav-link active" id="infors-list" data-bs-toggle="list" href="#infors" role="tab" aria-controls="list-infors">{{$translate(['Info Rumah Sakit','Hospital Info'])}}</a></li>
      <li class="nav-item"><a class="nav-link" id="kesehatan-list" data-bs-toggle="list" href="#kesehatan" role="tab" aria-controls="list-kesehatan">{{$translate(['Info Kesehatan','Health Info'])}}</a></li>
      <li class="nav-item"><a class="nav-link" id="lingkungan-list" data-bs-toggle="list" href="#lingkungan" role="tab" aria-controls="list-lingkungan">{{$translate(['Info Lingkungan','Environment Info'])}}</a></li>
    </ul>
  </section>
    <!-- Desktop -->
    <section>
    <div class="tab-content d-none d-sm-none d-md-block" id="nav-tabContent">
      <div class="tab-pane fade show active" id="infors" role="tabpanel" aria-labelledby="list-infors-list">
        <div class="container pt-3 d-none d-sm-block">
          <div class="card">
            <div class="row">
              <div class="col-4">
                <img :src="images.gambar1" class="card-img-blog" alt="Card image 1" /></div>
                <div class="blog-break col-8 text-justify">
                  <router-link to="/Blog/Rumahsakit"><b class="text-black">{{$translate(['Kewajiban Rumah Sakit kepada Pasien dan Masyarakat','Hospital Obligations to Patients and Society'])}}</b>
                  </router-link>
                  <p>{{$translate(['Rumah Sakit adalah institusi pelayanan kesehatan yang menyelenggarakan pelayanan kesehatan perorangan secara paripurna yang menyediakan pelayanan rawat inap, rawat jalan, dan gawat darurat. Pasien adalah setiap orang yang melakukan konsultasi masalah kesehatannya untuk memperoleh pelayanan kesehatan yang diperlukan, baik secara langsung maupun tidak langsung di Rumah Sakit.',
                    'Hospital is a health service that provides complete individual health services that provide outpatient and emergency services. A patient is anyone who consults on his health problems to obtain the necessary health services, either directly or indirectly at the hospital.'])}} </p>
                  <router-link to="/Blog/Rumahsakit" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      <!-- Tab Kesehatan-->
        <div class="tab-pane fade" id="kesehatan" role="tabpanel" aria-labelledby="list-kesehatan-list">
          <div class="container pt-3">
            <div class="row">
              <div class="card">
                <div class="row">
                  <div class="col-4">
                  <img :src="images.gambar2" class="card-img-blog" alt="Card image 2"></div>
                  <div class="col-8 blog-break">
                    <router-link to="/Blog/Kesehatan"><b class="text-black">{{$translate(['Cara Mencuci Tangan Yang Benar','How to Wash Hands Correctly'])}}</b>
                    </router-link>
                    <br>
                    {{$translate(['Salah satu perilaku hidup bersih dan sehat (PHBS) yang selalu digaungkan sejak lama untuk menjaga kesehatan dan kebersihan pribadi adalah mencuci tangan. Perilaku ini seharusnya menjadi kebiasaan yang sangat baik, karena selain untuk menjaga kesehatan dan kebersihan, agama juga mengajarkannya.',
                    'One of the clean and healthy living behaviors (PHBS) that has always been echoed since A long time to maintain health and personal hygiene is washing hands. This behavior should be become a very good habit, because in addition to maintaining health and cleanliness, religion also teach it.'])}}
                    <div class="p-2"></div>
                    <router-link to="/Blog/Kesehatan" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
              </div>
            <div class="pt-2 d-lg-none"></div>
              <div class="card">
                <div class="row">
                  <div class="col-4">
                    <img :src="images.gambar4" class="card-img-blog" alt="Card image 4"></div>
                  <div class="col-8 blog-break">
                    <router-link class="text-black" to="/about"><b>{{$translate(['5 Cara Tetap Produktif Saat Bekerja Dari Rumah','Destination'])}}</b></router-link>
                    <br>
                    {{$translate(['Sebagai langkah mencegah penyebaran COVID-19, pemerintah mengimbau masyarakat untuk membatasi aktivitas dengan tetap berada di rumah. Imbauan ini mendorong banyak perusahaan menerapkan sistem kerja dari rumah atau work from home.',
                    'As a measure to prevent the spread of COVID-19, the government urges the public to limit their activities by staying at home. This appeal has encouraged many companies to implement a work from home system.'])}}
                    <div class="p-2"></div>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
              </div>
            <div class="pt-3"></div>
              <div class="card">
                <div class="row">
                  <div class="col-4">
                    <img :src="images.gambar6" class="card-img-blog" alt="Card image 6"></div>
                  <div class="col-8 blog-break">
                    <router-link class="text-black" to="/about"><b>{{$translate(['Kapankah Kita Periksakan Kesehatan Jantung?','When Should We Check Heart Health?'])}}</b>
                    </router-link>
                    <p class="card-text">{{$translate(['Risiko penyakit jantung terbagi dalam 4 kategori, mulai dari rendah, sedang, tinggi, dan sangat tinggi. Yang termasuk dalam risiko SANGAT TINGGI meliputi mereka yang memiliki riwayat serangan jantung, operasi jantung, stroke, gangguan peredaran darah pada anggota gerak, hasil pemeriksaan kateterisasi jantung atau CT-scan pembuluh darah dengan penyempitan bermakna, diabetes melitus lebih dari 20 tahun atau dengan komplikasi, gangguan ginjal berat, gangguan kolesterol genetik.',
                    'The risk of heart disease is divided into 4 categories, ranging from low, medium, high, and very high. Included in the VERY HIGH risk include those who have a history of heart attack, heart surgery, stroke, circulatory disorders in the limbs, the results of cardiac catheterization or CT-scan blood vessels with significant narrowing, diabetes mellitus more than 20 years or with complications, severe kidney disorders, genetic cholesterol disorders.'])}}</p>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
              </div>
            <div class="pt-3">
              <div class="card">
                <div class="row">
                  <div class="col-4">
                    <img :src="images.gambar3" class="card-img-blog" alt="Card image 3"> </div>
                  <div class="col-8 blog-break">
                    <router-link class="text-black" to="/Blog/Olahraga"><b>{{$translate(['Beragam Manfaat Olahraga untuk Kesehatan Fisik dan Mental','Various Benefits of Sports for Physical and Mental Health'])}}</b></router-link> 
                    <p class="blog-break">{{$translate(['Ada beragam manfaat olahraga yang bisa Anda peroleh, mulai dari memelihara fungsi organ hingga meningkatkan stamina dan daya tahan tubuh. Tak hanya bermanfaat untuk kesehatan fisik, olahraga juga baik untuk kesehatan mental Anda.',
                    'There are various benefits of exercise that you can get, ranging from maintaining organ function to increase stamina and endurance. Not only useful for physical health, exercise is also good for your mental health.'])}}</p>
                    <router-link to="/Blog/Olahraga" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}        
                    </router-link>            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Lingkungan -->
        <div class="tab-pane fade" id="lingkungan" role="tabpanel" aria-labelledby="list-lingkungan-list">
          <div class="container pt-3">
            <div class="card">
              <div class="row">
                <div class="col-4">
                  <img :src="images.gambar5" class="card-img-blog" alt="Card image 5"></div>
                <div class="col-8 blog-break">
                  <router-link class="text-black" to="/about"><b>{{$translate(['Lingkungan Bersih Ciptakan Hidup Sehat','Clean environment creates healthy life'])}}</b></router-link>  
                  <br>
                  {{$translate(['Lingkungan adalah kombinasi antara kondisi fisik yang mencakup keadaan sumber daya alam, serta flora dan fauna yang tumbuh di darat maupun di dalam laut. Lingkungan terdiri dari dua komponen biotik (segala sesuatu yang bernyawa) dan abiotik (segala yang tidak bernyawa).',
                  'The environment is a combination of physical conditions that include the state of natural resources, as well as flora and fauna that grow on land and in the sea. The environment consists of two components biotic (everything animate) and abiotic (everything that is not alive).'])}}
                  <div class="p-2"></div>
                  <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  <!-- mobile -->
  <section>
    <ul class="nav nav-pills justify-content-center my-3 d-flex d-sm-flex d-md-none">
      <li class="nav-item"><a class="nav-link active" id="inforsmobile-list" data-bs-toggle="list" href="#inforsmobile" role="tab" aria-controls="list-inforsmobile">{{$translate(['Info Rumah Sakit','Hospital Info'])}}</a></li>
      <li class="nav-item"><a class="nav-link" id="kesehatanmobile-list" data-bs-toggle="list" href="#kesehatanmobile" role="tab" aria-controls="list-kesehatanmobile">{{$translate(['Info Kesehatan','Health Info'])}}</a></li>
      <li class="nav-item"><a class="nav-link" id="lingkunganmobile-list" data-bs-toggle="list" href="#lingkunganmobile" role="tab" aria-controls="list-lingkunganmobile">{{$translate(['Info Lingkungan','Environment Info'])}}</a></li>
    </ul>
  </section>


  <div class="tab-content d-block d-sm-block d-md-none" id="nav-tabContent">
      <div class="tab-pane fade show active" id="inforsmobile" role="tabpanel" aria-labelledby="list-inforsnobile-list">
        <div class="container pt-3">
          <div class="card">
            <div class="row">
              
                <img :src="images.gambar1" class="card-img-blog" alt="Card image 1" /></div>
                <div class="blog-break text-justify p-4">
                  <router-link to="/Blog/Rumahsakit"><b class="text-black">{{$translate(['Kewajiban Rumah Sakit kepada Pasien dan Masyarakat','Hospital Obligations to Patients and Society'])}}</b>
                  </router-link>
                  <p>{{$translate(['Rumah Sakit adalah institusi pelayanan kesehatan yang menyelenggarakan pelayanan kesehatan perorangan secara paripurna yang menyediakan pelayanan rawat inap, rawat jalan, dan gawat darurat. Pasien adalah setiap orang yang melakukan konsultasi masalah kesehatannya untuk memperoleh pelayanan kesehatan yang diperlukan, baik secara langsung maupun tidak langsung di Rumah Sakit.',
                    'Hospital is a health service that provides complete individual health services that provide outpatient and emergency services. A patient is anyone who consults on his health problems to obtain the necessary health services, either directly or indirectly at the hospital.'])}} </p>
                  <router-link to="/Blog/Rumahsakit" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}
                  </router-link>
                </div>
              
            </div>
          </div>
        </div>
  
      <!-- Tab Kesehatan-->
        <div class="tab-pane fade" id="kesehatanmobile" role="tabpanel" aria-labelledby="list-kesehatanmobile-list">
          <div class="container pt-3 d-block d-sm-block d-md-none">
            <div class="row p-3">
              <div class="card">
                <div class="row">
                  <img :src="images.gambar2" class="card-img-blog" alt="Card image 2"></div>
                  <div class="blog-break text-justify p-4">
                    <router-link to="/Blog/Kesehatan"><b class="text-black">{{$translate(['Cara Mencuci Tangan Yang Benar','How to Wash Hands Correctly'])}}</b>
                    </router-link>
                    <br>
                    {{$translate(['Salah satu perilaku hidup bersih dan sehat (PHBS) yang selalu digaungkan sejak lama untuk menjaga kesehatan dan kebersihan pribadi adalah mencuci tangan. Perilaku ini seharusnya menjadi kebiasaan yang sangat baik, karena selain untuk menjaga kesehatan dan kebersihan, agama juga mengajarkannya.',
                    'One of the clean and healthy living behaviors (PHBS) that has always been echoed since A long time to maintain health and personal hygiene is washing hands. This behavior should be become a very good habit, because in addition to maintaining health and cleanliness, religion also teach it.'])}}
                    <router-link to="/Blog/Kesehatan" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
            <div class="pt-2 d-lg-none"></div>
              <div class="card">
                <div class="row">
                  <div class="col">
                    <img :src="images.gambar4" class="card-img-blog" alt="Card image 4"></div>
                  <div class="blog-break text-justify pt-1 px-5">
                    <router-link class="text-black" to="/about"><b>{{$translate(['5 Cara Tetap Produktif Saat Bekerja Dari Rumah','5 Ways To Stay Active while Working From Home'])}}</b></router-link>
                    <br>
                    {{$translate(['Sebagai langkah mencegah penyebaran COVID-19, pemerintah mengimbau masyarakat untuk membatasi aktivitas dengan tetap berada di rumah. Imbauan ini mendorong banyak perusahaan menerapkan sistem kerja dari rumah atau work from home.',
                    'As a measure to prevent the spread of COVID-19, the government urges the public to limit their activities by staying at home. This appeal has encouraged many companies to implement a work from home system.'])}}
                    <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
              </div>
            <div class="pt-2 d-lg-none"></div>
              <div class="card">
                <div class="row">
                    <img :src="images.gambar6" class="card-img-blog" alt="Card image 6"></div>
                  <div class="blog-break text-justify p-4">
                    <router-link class="text-black" to="/about"><b>{{$translate(['Kapankah Kita Periksakan Kesehatan Jantung?','When Should We Check Heart Health?'])}}</b>
                    </router-link>
                    <p class="card-text">{{$translate(['Risiko penyakit jantung terbagi dalam 4 kategori, mulai dari rendah, sedang, tinggi, dan sangat tinggi. Yang termasuk dalam risiko SANGAT TINGGI meliputi mereka yang memiliki riwayat serangan jantung, operasi jantung, stroke, gangguan peredaran darah pada anggota gerak, hasil pemeriksaan kateterisasi jantung atau CT-scan pembuluh darah dengan penyempitan bermakna, diabetes melitus lebih dari 20 tahun atau dengan komplikasi, gangguan ginjal berat, gangguan kolesterol genetik.',
                    'The risk of heart disease is divided into 4 categories, ranging from low, medium, high, and very high. Included in the VERY HIGH risk include those who have a history of heart attack, heart surgery, stroke, circulatory disorders in the limbs, the results of cardiac catheterization or CT-scan blood vessels with significant narrowing, diabetes mellitus more than 20 years or with complications, severe kidney disorders, genetic cholesterol disorders.'])}}</p>
                    <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                  </div>
                </div>
            <div class="pt-2 d-lg-none">
              <div class="card">
                <div class="row">
                    <img :src="images.gambar3" class="card-img-blog" alt="Card image 3"> </div>
                  <div class="blog-break text-justify p-4">
                    <router-link class="text-black" to="/Blog/Olahraga"><b>{{$translate(['Beragam Manfaat Olahraga untuk Kesehatan Fisik dan Mental','Various Benefits of Sports for Physical and Mental Health'])}}</b></router-link> 
                    <p class="blog-break">{{$translate(['Ada beragam manfaat olahraga yang bisa Anda peroleh, mulai dari memelihara fungsi organ hingga meningkatkan stamina dan daya tahan tubuh. Tak hanya bermanfaat untuk kesehatan fisik, olahraga juga baik untuk kesehatan mental Anda.',
                    'There are various benefits of exercise that you can get, ranging from maintaining organ function to increase stamina and endurance. Not only useful for physical health, exercise is also good for your mental health.'])}}</p>
                    <router-link to="/Blog/Olahraga" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}        
                    </router-link>            
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Lingkungan -->
        <div class="tab-pane fade" id="lingkunganmobile" role="tabpanel" aria-labelledby="list-lingkunganmobile-list">
          <div class="container pt-3 d-block d-sm-block d-md-none">
            <div class="card">
              <div class="row">
                  <img :src="images.gambar5" class="card-img-blog" alt="Card image 5"></div>
                <div class="blog-break text-justify p-4">
                  <router-link class="text-black" to="/about">
                  <b>{{$translate(['Lingkungan Bersih Ciptakan Hidup Sehat','Clean environment creates healthy life'])}}</b></router-link>  
                  <br>
                  {{$translate(['Lingkungan adalah kombinasi antara kondisi fisik yang mencakup keadaan sumber daya alam, serta flora dan fauna yang tumbuh di darat maupun di dalam laut. Lingkungan terdiri dari dua komponen biotik (segala sesuatu yang bernyawa) dan abiotik (segala yang tidak bernyawa).',
                  'The environment is a combination of physical conditions that include the state of natural resources, as well as flora and fauna that grow on land and in the sea. The environment consists of two components biotic (everything animate) and abiotic (everything that is not alive).'])}}
                  <router-link to="/about" type="button" class="btn d-block btn-dark">{{$translate(['Lebih Lanjut','Furthermore'])}}</router-link>
                </div>
            </div>
          </div>
        </div>
      </div>

  <div class="py-2"></div>
</template>

<script>
  export default {
    data() {
      return {
        images: {
          cover1: require('@/assets/hero/flat.png'),
          cover2: require('@/assets/gallery/section_bg01.png'),
          about: require('@/assets/gallery/popular_sub3.png'),
          logo: require('@/assets/logo/logo.png'),
          gambar1: require('@/assets/logo/rumah-sakit.jpg'),
          gambar2: require('@/assets/logo/mencuci.jpg'),
          gambar3: require('@/assets/logo/olahraga.jpg'),
          gambar4: require('@/assets/logo/kesehatanrumah.jpg'),
          gambar5: require('@/assets/logo/lingkungan.jpg'),
          gambar6: require('@/assets/logo/jantung.jpg')
        }
      }
    }
  }
</script>

<style>
.card-img-blog {
  width: 88%;
  height: 88%;
  margin: 0 auto;
  margin-inline-start: 2rem;
  margin-block: 1.15rem;
}

.blog-break{
  font-family:'Segoe UI', Verdana, sans-serif;
  padding-block: 1vw;
  padding-inline-end: 4vw;
}

.blog-break-sm{
  font-family:'Segoe UI', Verdana, sans-serif;
  padding-block: 1vw;
  padding-inline: 3rem;
}
</style>
