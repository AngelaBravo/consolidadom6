<template>
    <form @submit.prevent="enviarDatos">
        <label for="">Nombre:</label>
        <input v-model="nombreLocal" type="text" placeholder="Nombre" required>
        <label for="">Opinión:</label>
        <textarea v-model="opinionLocal" placeholder="Tú opinión debe ir aquí..." required></textarea>
        <input class="boton" type="submit" :value="indiceEdicion === -1 ? 'Envíar Opinion' : 'Actualizar Opinion'">
    </form>
</template>

<script>
export default {
    name: 'DejarOpinion',
    props: {
        nombre: String,
        opinion: String,
        indiceEdicion: Number
    },
    data() {
        return {
            nombreLocal: this.nombre || '',  // Sincronizamos los datos del padre con el componente hijo
            opinionLocal: this.opinion || ''
        };
    },

    watch: {
        // Cuando las props cambian, actualizamos las variables locales
        nombre(val) {
            this.nombreLocal = val;
        },
        opinion(val) {
            this.opinionLocal = val;
        }
    },    

    methods: {
        enviarDatos() {
            const datos={
                nombre: this.nombreLocal,
                opinion: this.opinionLocal
            }
            //  Emitimos los datos al componente padre
            this.$emit('enviarAlListado', datos);
            // Limpiar los campos del formulario después de enviar
            this.nombreLocal = '';
            this.opinionLocal = '';
        }
    }
}
</script>

<style scoped>
label,
input {
    display: block;
    width: 80%;
}

input,
textarea {
    border: 1px solid rgb(223, 217, 218);
}

form {
    text-align: left;
    padding-left: 30px;
}

textarea {
    width: 80%;
}

.boton {
    width: 15%;
    background-color: rgb(235, 217, 54);
    color: rgb(119, 111, 111);
}
</style>