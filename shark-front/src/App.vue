<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {defineComponent } from 'vue';
import ListaCliente from './components/ListaCliente.vue';


export default defineComponent ({
  name: 'App',
  components: {
  ListaCliente   
  }
})
</script>

<template>
<ListaCliente/>
</template>

<style scoped>
</style>