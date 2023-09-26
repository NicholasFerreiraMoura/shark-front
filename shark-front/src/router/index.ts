import PageProduto from "@/components/PageProduto.vue";
import PageCliente from "@/components/pageCliente.vue";
import PageJogos from "@/components/pageJogos.vue";
import PageContato from "@/components/PageContato.vue";

import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes : RouteRecordRaw[] = [{


path: "/cliente",
component: PageCliente

},

{

path: "/produto",
component: PageProduto

}, 

{

    path: '/jogos',
    component: PageJogos

},

{
    path: "/contato",
    component: PageContato
}

];

const router = createRouter ({

    history : createWebHashHistory(), 
    routes

})

export default router;
