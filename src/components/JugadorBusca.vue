<template>
  <form class="row g-3 mb-3" v-on:submit.prevent="buscar()">
    <div class="input-group">
      <input
        type="text"
        class="form-control pr-2"
        placeholder="Filtro de búsqueda"
        v-model="filtro"
      />
      <i
        v-if="filtro.length > 0"
        class="form-control-clear fas fa-times"
        v-on:click.prevent="clearFiltro($event)"
      >
      </i>
      <i
        v-if="filtro.length === 0"
        class="form-control-clear-disabled fas fa-times"
      >
      </i>

      <button
        class="btn btn-outline-primary"
        :disabled="filtro.trim().length === 0"
        type="button"
        v-on:click.prevent="buscar()"
      >
        Buscar
      </button>
      <button
        class="btn btn-outline-primary ms-2"
        :disabled="jugadores.length < pageSize"
        type="button"
        v-on:click.prevent="siguiente()"
      >
        Siguiente
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { config } from "../config";

export default {
  name: "JugadorBusca",
  props: {
    jugadores: Array,
    getJugadores: Function,
  },
  setup(props) {
    let filtro = ref("");
    let nSalto = 0;
    // let haySiguiente = ref(true);
    let pageSize = ref(config.pageSize);

    // Busca con filtro
    const buscar = async () => {
      nSalto = 0;
      await props.getJugadores(nSalto, filtro.value);
    };
    const clearFiltro = async () => {
      nSalto = 0;
      filtro.value = "";
      await props.getJugadores(nSalto, filtro.value);
    };
    const siguiente = async () => {
      nSalto += config.pageSize;
      await props.getJugadores(nSalto, filtro.value);
    };
    return { buscar, filtro, clearFiltro, siguiente, pageSize };
  },
};
</script>
<style>
.form-control-clear {
  position: relative;
  left: -22px;
  top: 8px;
  font-size: 20px;
  color: #114188;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}
.form-control-clear-disabled {
  position: relative;
  left: -22px;
  top: 8px;
  font-size: 20px;
  color: #9da3ac;
  z-index: 10;
  pointer-events: auto;
  cursor: none;
}
</style>
