<template>
    <div class="grid-container">
        <div class="card" style="width: 18rem;">
            <img :src="game.background_image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ game.name }}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border-top">Rating:{{ game.rating }} </li>
                    <li class="list-group-item">Released:{{ game.released }}</li>
                    <li class="list-group-item border-bottom">Update:{{ game.updated }}</li>
                </ul>
                <router-link :to="`/opinion/${game.slug}`" class="btn btn-primary" >Opinar</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardJuegos',
    props: {
        game: {
            type: Object, // 'Game debe ser un objeto ( y es uno solo) y se obtiene del arreglo games'
            required: true, // es obligatorio pasar este objeto
        }
    },
    
}
</script>

<style scoped>
li,
h5 {
    text-align: left;
    margin-top: .5rem;
}

.card-body {
    padding: 0;
}

.card-title {
    margin-top: 1rem;
}

.btn {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

}

.grid-container {
    height: 100%;
    display: inline-flex;
    padding: 20px;
}
</style>