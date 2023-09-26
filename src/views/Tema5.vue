<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normativa Ambiental
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Recolección y clasificación
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Manejo y desactivación
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Transporte interno y disposición de residuos peligrosos y no peligrosos
    

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
