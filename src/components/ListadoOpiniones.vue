<template>
    <DejarOpinion :nombre="nombre" :opinion="opinion" :indiceEdicion="indiceEdicion" @enviarAlListado="recibirOpinion" />
    <h3> A continuacion podrás ver tu opinión</h3>
    <div v-if="opiniones.length === 0" class="no">
        <p> No existen opiniones para mostrar</p>
    </div>

    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(opinionItem, index) in opiniones" :key="index">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
                    <strong>Opinión creada por: </strong>{{ opinionItem.nombre }}
                </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>Opinión:</strong> {{ opinionItem.opinion }}
                    <div class="botones">
                        <button class="editar" @click="editar(index)">Editar</button>
                        <button class="eliminar" @click="eliminar(index)">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DejarOpinion from './DejarOpinion.vue';

export default {
    name: 'ListadoOpiniones',
    
    data() {
        return {
            opiniones: [],           // Almacena todas las opiniones
            indiceEdicion: -1,       // Índice de la opinión en edición, -1 si no se está editando
            nombre: '',              // Nombre de la opinión en edición
            opinion: '',             // Opinión en edición
        }
    },
    // computed: {},
    methods: {
        recibirOpinion(opinion) {

            // Si no estamos editando, agregamos una nueva opinión
            if (this.indiceEdicion === -1) {
                this.opiniones.push(opinion);
            } else {
                // Si estamos editando, actualizamos la opinión existente
                this.opiniones[this.indiceEdicion]= opinion;
                // this.opiniones[this.indiceEdicion].opinion = this.opinion;
                this.indiceEdicion = -1;  // Salimos del modo de edición
            }
            // Limpiar los campos del formulario
            this.nombre = '';
            this.opinion = '';
        },

        editar(index) {
            this.indiceEdicion = index;
            this.nombre = this.opiniones[index].nombre;
            this.opinion = this.opiniones[index].opinion;
        },
        eliminar(index) {
            this.opiniones.splice(index, 1);
            // Si se está editando el mismo elemento que se eliminó, salir del modo edición
            if (this.indiceEdicion === index) {
                this.indiceEdicion = -1;
                this.nombre = '';
                this.opinion = '';
            }
        },
    },
    components: {
        DejarOpinion,
    },
}
</script>

<style scoped>
p {
    background-color: rgb(230, 177, 195);
    color: crimson;
    width: 80%;
    margin: 30px;
    text-align: left;
    padding-left: 20px;
}

.accordion {
    width: 80%;
    text-align: left;
}

.editar {
    background-color: rgb(231, 207, 162);
    margin-right: 20px;
}

.eliminar {
    background-color: crimson
}

.botones {
    margin: 20px;
}
</style>