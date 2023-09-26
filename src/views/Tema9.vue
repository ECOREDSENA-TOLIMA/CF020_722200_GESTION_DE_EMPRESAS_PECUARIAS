<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Registros y Documentación
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_1 9.1 Tipos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_2 9.2 Formatos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_3 9.3 Inventarios
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_4 9.4 Listas de chequeo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_5 9.5 Técnica de diligenciamiento

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
