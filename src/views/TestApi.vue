<template>
    <div class="pt-5 mt-5">
      <li v-for="name in responses" :key="name">{{name.name}}</li>
    </div>
</template>

<script>
import json from "@/api/poliRs.json"

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