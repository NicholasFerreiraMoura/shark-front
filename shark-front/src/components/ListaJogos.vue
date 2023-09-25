<template>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Data de Lançamento</th>
            <th scope="col">Nome da Desenvolvedora</th>
            <th scope="col">Nome da Publisher</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="jogo in jogos">
            <th scope="row">{{ jogo.id }}</th>
            <td>{{ jogo.titulo }}</td>
            <td>{{ jogo.descricao }}</td>
            <td>{{ jogo.preco }}</td>
            <td>{{ jogo.dtLancamento }}</td>
            <td>{{ jogo.nomeDesenvolvedora }}</td>
            <td>{{ jogo.nomePublisher }}</td>
            <td>
              <button @click="$emit('aoDeletarJogo', jogo.id)"> <i class="fa-solid fa-trash" style="color: #ff0000;">
                </i> </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <script lang="ts">

import { defineComponent, type PropType } from 'vue';
import type Jogos from '@/interfaces/Jogos';

export default defineComponent({

name: "listaJogos", 
props: {

jogos: {

    type: [] as PropType<Jogos[]>,
    required: true


}

},       emits:["aoDeletarJogo"]


})


</script>