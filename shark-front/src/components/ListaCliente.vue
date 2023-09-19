<template>
  <div class="table-container">
    <table class="table table-striped custom-table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Email</th>
          <th scope="col">CPF</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <th scope="row">{{ cliente.id }}</th>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.endereco }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.cpf }}</td>
          <td> 
            <button class="btn" @click="$emit('aoDeletarCliente', cliente.id)">
              <i class="fa fa-trash no-border" style="color: #ff0000; border: none;"></i>
            </button>  
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Cliente from '../interfaces/Cliente';
import http from '../http';

export default defineComponent({
  name: 'ListaCliente',
 props: {
  clientes: {

    type: [] as PropType<Cliente[]>,
    required: true

  }

 }, emits: ['aoDeletarCliente']

  
});
</script>

<style >



</style>
