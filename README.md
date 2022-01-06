# Titulo

**_ranking-front_** es una aplicación web SPA implmentada bajo el framework VUE-3.
El requrimiento es para cumplir con el desafío técnico de la empresa Creditu.

## Descripción

La aplicación cuenta con una sola ruta que apunta al home de la web, la que muestra
un listado de jugadores en una tabla.

Permite filtro por ID al ingresar un número, o por Alías o Estado.

Los datos que se muestran están en una base de datos MongoDB a la cual se tiene acceso
a través de un microservicio que forma parte de otra pieza de software ( BACKEND ),
los fuentes del Backend están en:

Ver [GIT ranking-srv](https://github.com/andresgalaz/ranking-srv.git)

## Configuración del proyecto

Primero es necesario cargar las biblioetcas de NODE

```bash
yarn install
```

### Para correr localmente

```
yarn serve
```

## Para correr en Producción

Esta aplicación web fue instalada en HEROKU, la url es:

https://ranking-front.herokuapp.com/
