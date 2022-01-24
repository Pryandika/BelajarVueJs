<template>
  <section>
    <section>
    <div class="p-5"></div>
    </section>

  <nav aria-label="breadcrumb" class="container">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">{{$translate(['Beranda','Home'])}}</a></li>
    <li class="breadcrumb-item"><a href="/Destination">{{$translate(['Destinasi','Destination'])}}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$translate(['RS Mata Bali Mandara','RS Mata Bali Mandara'])}}</li>
  </ol>
</nav>

  <section>
    <!-- Whole Card -->
    <div class="container">
      <div class="card my-3">
        <div class="card-body">
          <div class="row">
            <img :src="images.cover1" alt="rs-header-img" class="d-block d-sm-block d-md-block d-lg-none">
            <img :src="images.cover1" alt="rs-header-img" class="rs-header-img my-auto d-none d-lg-block">
            <div class="d-none d-lg-block col">

              <!-- Card  on desktop-->
              <div class="card my-3">
                <div class="card-body">
                <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-geo-alt-fill"></i></div>
                  <div class="col my-auto"><a href="https://goo.gl/maps/h67ejFARb79VwHn49" target="_blank" style="color:black;"> Jl. Angsoka No.8, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80236</a></div>
                </div></div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-10 my-auto"><a href="mailto:inforsmatabalimandara@gmail.com" style="color:black;">inforsmatabalimandara@gmail.com</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
                  <div class="col my-auto"><a href="tel:+62361243350" target="_blank" style="color:black;"> (+62 361) 243350 ext 15</a></div>
                  </div>
                </div>
              </div>
              <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-10 my-auto"><a href="https://rsmatabalimandara.baliprov.go.id//home/" target="_blank">https://rsmatabalimandara.baliprov.go.id//</a></div></div>
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
                  <div class="col-10 my-auto"><a href="https://goo.gl/maps/h67ejFARb79VwHn49  " target="_blank" style="color:black;">Jl. Angsoka No.8, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80236</a></div>
                </div></div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-envelope-fill"></i></div>
                  <div class="col-auto my-auto"><a href="mailto:inforsmatabalimandara@gmail.com" style="color:black;">inforsmatabalimandara@gmail.com</a></div></div>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-body">
              <div class="row align-center">
              <div class="col-1 mr-3"><i class="bi bi-telephone-fill"></i></div>
              <div class="col-auto my-auto"><a href="tel:(0361) 243350" target="_blank" style="color:black;"> (+62 361) 243350 ext 15</a></div></div>
            </div>
          </div>
          <div class="card my-3">
                <div class="card-body">
                  <div class="row align-center">
                  <div class="col-1 mr-3"><i class="bi bi-globe2"></i></div>
                  <div class="col-auto my-auto"><a href="https://rsmatabalimandara.baliprov.go.id//home/" target="_blank">https://rsmatabalimandara.baliprov.go.id//</a></div></div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="p-4">
        <div class="text-justify px-5">
        <h3 class="text-center">{{$translate(['RSM Bali Mandara','RSM Bali Mandara'])}}</h3>
        <hr>
        <h5>{{$translate(['Visi RSM Bali Mandara','RSM Bali Mandara\'s Vision'])}}</h5>
        <p>
         {{$translate(['Menjaga Kesucian dan Keharmonisan Alam Bali Beserta Isinya, Untuk Mewujudkan Kehidupan Krama Bali Yang Sejahtera dan Bahagia, Sakala-Niskala Menuju Kehidupan Krama dan Gumi Bali Sesuai Dengan Prinsip Trisakti Bung Karno: Berdaulat secara Politik, Berdikari Secara Ekonomi, dan Berkepribadian dalam Kebudayaan Melalui Pembangunan Secara Terpola, Menyeluruh, Terencana, Terarah, dan Terintegrasi Dalam Bingkai Negara Kesatuan Republik Indonesia Berdasarkan Nilai-Nilai Pancasila 1 Juni 1945.','Maintaining the Sanctity and Harmony of Bali Nature and Its Contents, To Realize a Prosperous and Happy Balinese Krama Life, Sakala-Niskala Towards a Balinese Krama and Gumi Life in accordance with Bung Karno Trisakti Principles: Political Sovereignty, Economically Independent, and Personality in Culture through Social Development Patterned, Comprehensive, Planned, Directed, and Integrated in the Frame of the Unitary State of the Republic of Indonesia Based on the Values ​​of Pancasila June 1, 1945.'])}}
        </p>
        <h5>{{$translate(['Misi RSM Bali Mandara','RSM Bali Mandara\'s Mission'])}}</h5>
        <ol>
          <li>{{$translate(['Memastikan terpenuhinya kebutuhan pangan, sandang, dan papan dalam jumlah dan kualitas yang memadai bagi kehidupan Krama Bali.','Ensuring the fulfillment of food, clothing and housing needs in sufficient quantity and quality for the life of Balinese Krama.'])}}</li>
          <li>{{$translate(['Mewujudkan kemandirian pangan, meningkatkan nilai tambah dan daya saing pertanian, dan meningkatkan kesejahteraan petani.','Realizing food self-sufficiency, increasing added value and agricultural competitiveness, and improving farmers welfare.'])}}</li>
          <li>{{$translate(['Mengembangkan pelayanan kesehatan masyarakat yang terjangkau, merata, adil dan berkualitas serta didukung dengan pengembangan sistem dan data base riwayat kesehatan Krama Bali berbasis kecamatan.','Developing affordable, equitable, fair and quality public health services and supported by the development of a sub-district-based system and database of Krama Bali health history.'])}}</li>
          <li>{{$translate(['Memastikan tersedianya pelayanan pendidikan yang terjangkau, merata, adil, dan berkualitas serta melaksanakan wajib belajar 12 tahun.','Ensuring the availability of affordable, equitable, fair and quality education services and implementing 12-year compulsory education.'])}}</li>
          <li>{{$translate(['Mengembangkan sistem pendidikan dasar dan pendidikan menengah berbasis keagamaan Hindu dalam bentuk Pasraman di Desa Pakraman/Desa Adat.','Develop a Hindu religious-based primary and secondary education system in the form of a Pasraman in Pakraman/Indigenous Villages.'])}}</li>
          <li>{{$translate(['Mengembangkan sumber daya manusia yang berdaya saing tinggi yaitu berkualitas dan berintegritas: bermutu, profesional dan bermoral serta memiliki jati diri yang kokoh yang dikembangkan berdasarkan nilai-nilai kearifan lokal Krama Bali.','Develop highly competitive human resources, namely quality and integrity: quality, professional and moral and have a strong identity that is developed based on the values ​​of local wisdom of Krama Bali.'])}}</li>
          <li>{{$translate(['Mengembangkan sistem jaminan sosial secara konprehensif dan terintegrasi bagi kehidupan Krama Bali sejak mulai kelahiran, tumbuh dan berkembang sampai akhir masa kehidupannya.','Develop a comprehensive and integrated social security system for the life of Balinese Krama from birth, grow and develop until the end of their life.'])}}</li>
          <li>{{$translate(['Menghasilkan tenaga kerja yang kompeten, produktif, berkualitas dan memiliki daya saing tinggi serta memperluas akses kesempatan kerja di dalam dan di luar negeri.','Produce competent, productive, qualified and highly competitive workforce and expand access to job opportunities at home and abroad.'])}}</li>
          <li>{{$translate(['Mengembangkan sistem jaminan sosial dan perlindungan tenaga kerja yang komperhensif, mudah dijangkau, bermutu, dan terintegrasi bagi Krama Bali yang bekerja di dalam dan di luar negeri.','Develop a comprehensive, accessible, quality, and integrated social security and labor protection system for Balinese Krama who work at home and abroad.'])}}</li>
          <li>{{$translate(['Memajukan kebudayaan Bali melalui peningkatan pelindungan, pembinaan, pengembangan dan pemanfaatan nilai-nilai adat, agama, tradisi, seni, dan budaya Krama Bali.','Advancing Balinese culture through increased protection, guidance, development and utilization of traditional values, religion, traditions, arts, and Balinese culture.'])}}</li>
          <li>{{$translate(['Mengembangkan tata kehidupan Krama Bali secara sakala dan niskala berdasarkan nilai-nilai filsafat Sad Kertih yaitu Atma Kertih, Danu Kertih, Wana Kertih, Segara Kertih, Jana Kertih, dan Jagat Kertih.','Developing the Balinese manners of life in a sakala and abstract manner based on the philosophical values ​​of Sad Kertih, namely Atma Kertih, Danu Kertih, Wana Kertih, Segara Kertih, Jana Kertih, and Jagat Kertih.'])}}</li>
          <li>{{$translate(['Memperkuat kedudukan, tugas dan fungsi Desa Pakraman/ Desa Adat dalam menyelengarakan kehidupan krama Bali yang meliputi Parahyangan, Pawongan, dan Palemahan.','Strengthening the position, duties and functions of the Pakraman/Indigenous Villages in carrying out the life of Balinese manners which includes Parahyangan, Pawongan, and Palemahan.'])}}</li>
          <li>{{$translate(['Mengembangkan destinasi dan produk pariwisata baru berbasis budaya dan berpihak kepada rakyat yang terintegrasi antar kabupaten/kota se-Bali.','Developing new tourism destinations and products based on culture and in favor of the people that are integrated between regencies/cities throughout Bali.'])}}</li>
          <li>{{$translate(['Meningkatkan promosi pariwisata Bali di dalam dan di luar negeri secara bersinergi antar kabupaten/kota se-Bali dengan mengembangkan inovasi dan kreatifitas baru.','Increasing the promotion of Bali tourism at home and abroad in synergy between regencies/cities throughout Bali by developing new innovations and creativity.'])}}</li>
          <li>{{$translate(['Meningkatkan standar kualitas pelayanan kepariwisataan secara konprehensif.','Improving the quality standard of tourism services in a comprehensive manner.'])}}</li>
          <li>{{$translate(['Membangun dan mengembangkan pusat-pusat perekonomian baru sesuai dengan potensi kabupaten/kota di Bali dengan memberdayakan sumber daya lokal untuk mendukung pertumbuhan ekonomi dalam arti luas.','Build and develop new economic centers in accordance with the potential of districts/cities in Bali by empowering local resources to support economic growth in a broad sense.'])}}</li>
          <li>{{$translate(['Membangun dan mengembangkan industri kecil dan menengah berbasis budaya (branding Bali) untuk memperkuat perekonomian Krama Bali.','Build and develop small and medium-sized industries based on culture (Bali branding) to strengthen the economy of Krama Bali.'])}}</li>
          <li>{{$translate(['Meningkatkan pembangunan infrastruktur (darat, laut dan udara) secara terintegrasi serta konektivitas antar wilayah untuk mendukung pembangunan perekonomian serta akses dan mutu pelayanan publik di Bali.','Improving infrastructure development (land, sea and air) in an integrated manner as well as inter-regional connectivity to support economic development as well as access and quality of public services in Bali.'])}}</li>
          <li>{{$translate(['Mengembangkan sistem keamanan terpadu yang ditopang dengan sumber daya manusia serta sarana prasarana yang memadai untuk menjaga keamanan daerah dan Krama Bali serta keamanan para wisatawan.','Develop an integrated security system that is supported by human resources and adequate infrastructure to maintain regional security and Balinese manners as well as the safety of tourists.'])}}</li>
          <li>{{$translate(['Mewujudkan kehidupan Krama Bali yang demokratis dan berkeadilan dengan memperkuat budaya hukum, budaya politik dan kesetaraan gender dengan memperhatikan nilai-nilai budaya Bali.','Realizing a democratic and just Balinese Krama life by strengthening legal culture, political culture and gender equality by paying attention to Balinese cultural values.'])}}</li>
          <li>{{$translate(['Mengembangkan tata kehidupan Krama Bali, menata wilayah, dan lingkungan yang, hijau, indah, dan bersih.','Develop Balinese manners of life, organize areas and environments that are green, beautiful, and clean.'])}}</li>
          <li>{{$translate(['Mengembangkan sistem tata kelola pemerintahan daerah yang efektif efisien, terbuka, transparan, akuntabel dan bersih serta meningkatkan pelayan publik terpadu yang cepat, pasti dan murah.','Develop an effective, efficient, open, transparent, accountable and clean regional governance system and improve integrated public services that are fast, sure and inexpensive.'])}}</li>
        </ol>
        </div>
</section>
  </section>
</template>

<script>
export default {
    data() {
        return {
            images: {
                cover1: require('@/assets/rumahsakit/rs-mata-bali-mandara.jpg'),
                cover2: require('@/assets/gallery/section_bg01.png'),
                about: require('@/assets/gallery/popular_sub3.png'),
                logo: require('@/assets/logo/logo.png')
            }
        }
    }

}
</script>

<style>
.rs-header-img {
  width: 60%;
  height: 60%;
}

</style>