<template>
    <h3 v-if="game"> Escribe tu opinión para el juego: {{$route.params.miidentificador}}</h3>
    <!-- <DejarOpinion @nuevaOpinion="recibirOpinion" /> -->
    <ListadoOpiniones/>
</template>

<script>
// import DejarOpinion from '@/components/DejarOpinion.vue';
import ListadoOpiniones from '@/components/ListadoOpiniones.vue';
import axios from 'axios';

export default {
    name: 'OpinionView',
    
    data: function(){
        return {
           game:null,
        }
    },
    created() {
        axios.get(`https://api.rawg.io/api/games/${this.$route.params.miidentificador}?key=${process.env.VUE_APP_apikey}`)
        .then((response) => {
          console.log(response.data)
          this.game = response.data;
        })
        .catch((err) => {
          console.log(err);
          if( err.status===404 )
            this.$router.push({name:"error404"})
        });
    },
    components:{
        // DejarOpinion,
        ListadoOpiniones
    },
    // methods: {
    //     recibirOpinion(nuevaOpinion) {
    //         // Añadir la nueva opinión al array de opiniones
    //         this.opiniones.push(nuevaOpinion);
    //     }
    // },
}
</script>

<style scoped>
    
</style>