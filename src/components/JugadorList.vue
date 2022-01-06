<template>
  <div class="mb-3">
    <div v-if="isLoading"><Spinner /></div>
    <div v-else-if="error">
      <div class="alert alert-danger" role="alert">
        Tenemos problemas técnicos, vuelva a intentar mas tarde.<br />
        Mensaje de error: <br />
        <div style="margin-left: 40px">
          {{ error }}
        </div>
      </div>
    </div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nº Id.</th>
            <th scope="col">Alias</th>
            <th scope="col">Estado</th>
            <th align="right">Balance</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jugador in jugadores" :key="jugador.id">
            <td>{{ jugador.id }}</td>
            <td>{{ jugador.nickname }}</td>
            <td>{{ jugador.status }}</td>
            <td align="right">
              {{ Number(jugador.balance).toLocaleString() }}
            </td>
            <td align="center">
              <img
                :src="'https://' + jugador.avatar"
                alt="jugador.avatar"
                width="48"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { onMounted } from "vue";
//import axios from "axios";
//import { server } from "../helper";

import Spinner from "../components/Spinner";

export default {
  name: "JugadorList",
  props: {
    jugadores: Array,
    getJugadores: Function,
    isLoading: Boolean,
    error: Object,
  },
  components: { Spinner },
};
</script>
<style>
th {
  text-align: center;
}
td {
  vertical-align: middle;
}
</style>
