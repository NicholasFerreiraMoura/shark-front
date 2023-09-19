<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {defineComponent } from 'vue';
import ListaCliente from './components/ListaCliente.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import type Cliente from './interfaces/Cliente';
import http from './http';

export default defineComponent ({
  name: 'App',
  components: {
    ListaCliente,
    CadastroCliente
  }, data() {
    return {
      
      clientes: [] as Cliente[]
      
    }
    
  }, async mounted() {
    const response = await http.get('/cliente');
    this.clientes = response.data;
  }, methods: {
    
    async ListaCliente() {
      
      const response = await http.get("/cliente");
      this.clientes = response.data;
      
    },
    
    async deletarCliente(id: number) {
      
      await http.delete("/cliente/" + id)
      this.ListaCliente();
      
    }
    
  }
})
</script>

<template>
  <ListaCliente @ao-deletar-cliente="deletarCliente" :clientes="clientes" class="mx-5"/>
  <CadastroCliente @ao-salvar-cliente="ListaCliente"/>
</template>

<style scoped>
</style>