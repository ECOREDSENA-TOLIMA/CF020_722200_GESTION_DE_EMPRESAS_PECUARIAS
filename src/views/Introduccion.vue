<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-3(data-aos="fade-left") El desarrollo de las actividades productivas en la unidad pecuaria demanda gran cantidad de recursos, tanto físicos como humanos, por lo que los procesos relacionados con la gestión de esos recursos y con la búsqueda de alternativas más eficientes de producción es uno de los principales retos que enfrentan los productores. Se debe observar el siguiente video como parte de la bienvenida y ampliación de la importancia del material formativo.

    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
