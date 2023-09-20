<template>
        <div class="borda">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col">
                        <CadastroProdutos @ao-salvar-produto="listarProdutos" class="col" />
                    </div>
                    <div class="col">
                        <ListaProdutoVue @ao-deletar-produto="deletarProduto" :produtos="produtos" class="col-10" />
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script lang="ts">
    
    import CadastroProdutos from './CadastroProdutos.vue';
    import ListaProdutoVue from './ListaProduto.vue';
    import http from '@/http';
    import type Produto from '@/interfaces/Produtos';
    import { defineComponent } from 'vue';
    
    export default defineComponent({
    
        name: "PageProduto",
        data() {
            return {
                produtos: [] as Produto[],
            }
        },
        mounted() {
            this.listarProdutos()
        },
        methods: {
            async listarProdutos() {
                const response = await http.get("/produto");
                this.produtos = response.data;
            },
            async deletarProduto(id: number) {
                await http.delete("/produto/" + id)
                this.listarProdutos();
            },
        },
        components: {
            CadastroProdutos,
            ListaProdutoVue
        }
    })
    
    
    </script>
    
    <style scoped></style>