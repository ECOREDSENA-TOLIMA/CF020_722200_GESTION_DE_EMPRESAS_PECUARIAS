<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programa de Reproducción
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1  Características de los Reproductores
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Técnicas de manejo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Celo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Monta natural
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_5 3.5 Inseminación artificial

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
