import PageProduto from "@/components/PageProduto.vue";
import PageCliente from "@/components/pageCliente.vue";
import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes : RouteRecordRaw[] = [{


path: "/",
component: PageCliente

},

{

path: "/produto",
component: PageProduto

}

];

const router = createRouter ({

    history : createWebHashHistory(), 
    routes

})

export default router;
