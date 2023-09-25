<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {defineComponent } from 'vue';
import ListaCliente from './components/ListaCliente.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import type Cliente from './interfaces/Cliente';
import http from './http';

export default defineComponent ({
  name: 'App',
 
  })
</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand" href="#">Menu Principal</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page" >Clientes</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/produto" class="nav-link" >Produtos</RouterLink>
        </li>
        <li class="nav-item">

          <RouterLink to="/jogos" class="nav-link">Jogos</RouterLink>

        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div class="container">
<RouterView></RouterView>
  </div>
  
</template>

<style scoped>
</style>