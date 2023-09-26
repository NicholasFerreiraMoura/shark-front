<template>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Prazo Entrega</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos">
            <th scope="row">{{ produto.id }}</th>
            <td>{{ produto.titulo }}</td>
            <td>{{ produto.descricao }}</td>
            <td>{{ produto.preco }}</td>
            <td>{{ produto.prazoEntrega }}</td>
            <td>
              <button @click="$emit('aoDeletarProduto', produto.id)"> <i class="fa-solid fa-trash" style="color: #ff0000;">
                </i> </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
       
    <script lang="ts">
    import { defineComponent, type PropType } from 'vue';
    import type Produto from '@/interfaces/Produto';
    
    
    export default defineComponent({
      name: "ListaProduto",
      props: {
        produtos: {
          type: [] as PropType<Produto[]>,
          required: true
        }
      },
      emits:["aoDeletarProduto"]
    },
    
    )
    </script>
       
    <style>
    
    

    </style>