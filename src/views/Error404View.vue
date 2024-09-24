<template>
    <h3> Pero... pero... qué paso aquí? Not Found?</h3>
    <img src="../assets/404.gif" alt="">
</template>

<script>
export default {
    name: 'Error404View',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
img{
    border-style:double;
    border-color: rgb(216, 212, 213);
    border-radius: 5%;
    width: 100%;
}
h3{
    position: fixed;
    top: 15%;
    left: 50%;
    translate: -50% -50%;
}
    
</style>