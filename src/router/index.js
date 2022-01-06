import { createRouter, createWebHistory } from "vue-router";
import JugadorView from "../views/JugadorView";

/*
Se implementó utilizando routes, así se puede seguir agregando componentes.
Sería necesario agregar un menú para manejar mas componentes
*/
const routes = [
  {
    path: "/",
    name: "JugadorView",
    component: JugadorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
