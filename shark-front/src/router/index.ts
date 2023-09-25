import PageProduto from "@/components/PageProduto.vue";
import PageCliente from "@/components/pageCliente.vue";
import PageJogos from "@/components/pageJogos.vue";


import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes : RouteRecordRaw[] = [{


path: "/",
component: PageCliente

},

{

path: "/produto",
component: PageProduto

}, 

{

    path: '/jogos',
    component: PageJogos

}

];

const router = createRouter ({

    history : createWebHashHistory(), 
    routes

})

export default router;
