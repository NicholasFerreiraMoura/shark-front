<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {defineComponent } from 'vue';
import ListaCliente from './components/ListaCliente.vue';
import CadastroCliente from './components/icons/CadastroCliente.vue';


export default defineComponent ({
  name: 'App',
  components: {
    ListaCliente,
    CadastroCliente
}
})
</script>

<template>
<ListaCliente/>
<CadastroCliente/>
</template>

<style scoped>
</style>