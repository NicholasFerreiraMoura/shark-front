<template>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Endereço</th>
      <th scope="col">Email</th>
      <th scope="col">CPF</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo1</td>
      <td>000.000.000-00</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo2</td>
      <td>000.000.000-01</td>
   
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo3</td>
      <td>000.000.000-02</td>
    </tr>
  </tbody>
</table>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'; 

export default defineComponent({
name: 'ListaCliente'
});
</script>

<style>
</style>