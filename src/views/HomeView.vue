<template>
  <div class="home">
    <GamesOpinion />
    <div v-if="games.length">
      <CardJuegos v-for="(game, index) in games" :key="index" :game="game" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import GamesOpinion from '@/components/GamesOpinion.vue';
import CardJuegos from '@/components/CardJuegos.vue';


export default {
  name: 'HomeView',
  components: {
    GamesOpinion,
    CardJuegos,
  },
  data: function () {
    return {
      games: [],
    }
  },
  mounted() {
    axios.get(`https://api.rawg.io/api/games?key=${process.env.VUE_APP_apikey}`)
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.table(response.data.results)
        this.games.push(...response.data.results)
        console.log(this.games)
      })
  }
}

</script>
