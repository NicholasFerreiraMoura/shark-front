<template>
    <form @submit.prevent="salvarCliente" class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" v-model="cliente.nome">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" v-model="cliente.email">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="endereco" class="form-label">Endereço</label>
            <input type="text" class="form-control" id="endereco" v-model="cliente.endereco">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="dt-nascimento" class="form-label">Data de Nascimento</label>
            <input type="text" class="form-control" id="dt-nascimento" v-model="cliente.dtNascimento">
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label for="cpf" class="form-label">CPF</label>
            <input type="text" class="form-control" id="cpf" v-model="cliente.cpf">
          </div>
        </div>
      </div>
  
      <div class="divCenter">

        <button type="submit" class="btn">Salvar</button>

      </div>

      
    </form>
  </template>
  
  <script lang="ts">
  import http from '@/http';
  import type Cliente from '@/interfaces/Cliente';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Cliente',
    data() {
      return {
        cliente: {} as Cliente,
      };
    },
    methods: {
      async salvarCliente() {
       await http.post('/cliente', this.cliente);
       this.cliente = {} as Cliente;
        this.$emit("aoSalvarCliente");
    },
    }, emits: ["aoSalvarCliente"]
  });
  </script>
  
  <style scoped>



.btn{
                                                     
  background-color: #007bff; /* Cor de fundo azul */
  color: #fff; /* Cor do texto branco */
  padding: 10px 20px; /* Preenchimento interno */
  border: none; /* Sem borda */
  border-radius: 5px; /* Borda arredondada */
  font-size: 18px; /* Tamanho da fonte */
  cursor: pointer; /* Cursor de mão ao passar por cima */
  transition: background-color 0.5s ease; /* Transição suave da cor de fundo */
  
}

.btn-custom:hover {
  background-color: #0056b3; /* Cor de fundo mais escura ao passar por cima */
}

.divCenter {

    display: flex;
    text-align: center;
}

</style>
  