<template>
  <nav class="navbar navbar-dark bg-primary mb-4">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Listado de Jugadores</span>
      <span class="navbar-brand mb-0">
        Desafío Técnico &nbsp; | &nbsp; Autor: Andrés Galaz
      </span>
    </div>
  </nav>

  <div class="container-sm">
    <JugadorBusca :jugadores="jugadores" :getJugadores="getJugadores" />
    <JugadorList
      :error="error"
      :jugadores="jugadores"
      :getJugadores="getJugadores"
      :isLoading="isLoading"
      :pagina="pagina"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { config } from "../config";

import JugadorList from "../components/JugadorList";
import JugadorBusca from "../components/JugadorBusca";

export default {
  name: "JugadorView",
  components: { JugadorList, JugadorBusca },
  setup() {
    const pagina = ref(0);
    const jugadores = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    onMounted(() => {
      getJugadores();
    });

    const getJugadores = async (salto = 0, filtro = "") => {
      isLoading.value = true;
      pagina.value = Math.floor(salto / config.pageSize);
      try {
        const json = await axios(
          `${config.serverBaseURL}/jugador?salto=${salto}&filtro=${filtro}`
        );
        isLoading.value = false;
        jugadores.value = json.data;
      } catch (e) {
        isLoading.value = false;
        console.error("error:", e);
        error.value = e;
      }
    };

    return { jugadores, getJugadores, isLoading, error, pagina };
  },
};
</script>

<style>
.h1 {
  font-size: 40px;
}
</style>
