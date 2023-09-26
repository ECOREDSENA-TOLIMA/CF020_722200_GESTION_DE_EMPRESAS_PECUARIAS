<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Parámetros técnicos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Tipos y características
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2 Métodos de cálculo
    

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
