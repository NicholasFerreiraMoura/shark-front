<template>
    <form @submit.prevent="salvarJogo">
        <div class="mb-3">
            <label for="titulo" class="form-label">Titulo</label>
            <input type="text" class="form-control" id="titulo" v-model="jogos.titulo">
        </div>
        <div class="mb-3">
            <label for="descricao" class="form-label">Descrição</label>
            <input type="textarea" class="form-control" id="descricao" v-model="jogos.descricao">
        </div>
        <div class="mb-3">
            <label for="preco" class="form-label">Preço</label>
            <input type="number" class="form-control" id="preco" v-model="jogos.preco">
        </div>
        <div class="mb-3">
            <label for="data" class="form-label">Data de Lançamento</label>
            <input type="date" class="form-control" id="prazo" v-model="jogos.dtLancamento">
        </div>
        
        <div class="mb-3">
            <label for="data" class="form-label">Nome da Desenvolvedora</label>
            <input type="date" class="form-control" id="prazo" v-model="jogos.nomeDesenvolvedora">
        </div>
        <div class="mb-3">
            <label for="data" class="form-label">Nome da Publisher</label>
            <input type="date" class="form-control" id="prazo" v-model="jogos.nomePublisher">
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
</template>

<script lang="ts">

import http from '@/http';
import type jogos from "@/interfaces/Jogo"
import { defineComponent } from 'vue';

export default defineComponent({
    
    name: "CadastroJogos",
    data() {
        
        return {
            
            jogos : {}  as jogos
            
        }
        
    }, methods: {
        
        salvarJogo() {
            http.post("/jogo", this.jogos)
            this.$emit("aoSalvarJogo")
        }
        
        
    }, emits: ["aoSalvarJogo"]
    
    
});

</script>