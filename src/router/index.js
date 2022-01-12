import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import TestApi from '../views/TestApi.vue'
import Blog from '../views/Blog.vue'
import Rumahsakit from '../views/Blog/Rumahsakit.vue'
import Destination from '../views/Destination.vue'
import Services from '../views/Services.vue'
import Kesehatan from '../views/Blog/Kesehatan.vue'
import Olahraga from '../views/Blog/Olahraga.vue'
import RSUPSanglah from '../views/Destination/rsup-sanglah.vue'
import RSUBM from '../views/Destination/rsu-balimandara.vue'
import RSMBM from '../views/Destination/rsm-balimandara.vue'
import ApiLocal from '../views/ApiLocal.vue'
import RSPTNUnud from '../views/Destination/rsptn-unud.vue'
import RSMangusadaBadung from '../views/Destination/rs-mangusada-badung.vue'
import RSBIMCNusadua from '../views/Destination/rs-bimc-nusadua.vue'
import RSBIMCKuta from '../views/Destination/rs-bimc-kuta.vue'
import BROS from '../views/Destination/bros.vue'
import RSPrimaMedika from '../views/Destination/rs-primamedika.vue'
import RSKasihIbuDps from '../views/Destination/rs-kasihibu-dps.vue'
import RSKasihIbuSaba from '../views/Destination/rs-kasihibu-saba.vue'
import RSRamata from '../views/Destination/rs-ramata.vue'
import RSBhayangkara from '../views/Destination/rs-bhayangkara.vue'
import KlinikPentaMedika from '../views/Destination/klinik-pentamedika.vue'
import Dental911Clinic from '../views/Destination/dental911clinic.vue'
import Assist211 from '../views/Destination/assist211.vue'

const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
      path: '/contact',
      name: 'Contact',
      component: Contact
  },
    {
      path: '/api',
      name: 'api',
      component: TestApi
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/apilocal',
      name: 'apilocal',
      component: ApiLocal
    },
  //   { path: '/Destination/rsup-sanglah', name: 'Destination/rsup-sanglah', component: RSUPSanglah },
  // nanti struktur link untuk RS sanglah pake yang kayak di atas
  { path: '/Destination/rs-member', name: 'Destination/rsup-sanglah', component: RSUPSanglah }, //temporary page
  { path: '/Destination/rsu-balimandara', name: 'Destination/rsu-balimandara', component: RSUBM },
  { path: '/Destination/rsm-balimandara', name: 'Destination/rsm-balimandara', component: RSMBM },
  { path: '/Blog/Kesehatan', name: 'Blog/Kesehatan', component: Kesehatan },
  { path: '/Blog/Olahraga', name: 'Blog/Olahraga', component: Olahraga },
  { path: '/Blog/Rumahsakit', name: 'Blog/Rumahsakit', component: Rumahsakit },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;