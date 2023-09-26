<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa Seguridad y Salud en el Trabajo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1  Interpretación
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Tipos de riesgo
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Elementos de protección personal y colectiva
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_4 4.4 Métodos de prevención de accidentes, incidentes y enfermedades laborales
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_5 4.5 Condiciones inseguras
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_6 4.6 Programa de capacitación en primeros auxilios

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
