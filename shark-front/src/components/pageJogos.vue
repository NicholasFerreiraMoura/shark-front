
<template>

<ListaJogos @ao-deletar-jogo="aoDeletarJogo" :jogos="jogos" class="mx-5"></ListaJogos>
<CadastroJogos @ao-salvar-jogo="ListaJogos"></CadastroJogos>

</template>



<script lang="ts">

import http from '@/http';
import type Jogos from '@/interfaces/Jogos'
import { defineComponent } from 'vue';
import ListaJogos from './ListaJogos.vue';
import CadastroJogos from './CadastroJogos.vue';

export default defineComponent ({
    
    name: "PageJogos", 
    components: {CadastroJogos, ListaJogos}, 
    
    data() {

        return {

            jogos: [] as Jogos[]

        }

    }, async mounted() {
        
this.ListaJogos();

    }, methods: {

        async ListaJogos() {

            const response = await http.get('/jogo');
            this.jogos = response.data;

        }, async aoDeletarJogo(id : number) {

            await http.delete('/jogo'+id);
            this.ListaJogos

        }

    }
    
})

</script>