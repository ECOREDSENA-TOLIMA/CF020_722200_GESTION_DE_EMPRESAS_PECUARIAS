<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Durante el recorrido por el componente formativo fue posible leer, analizar y observar el proceso tan interesante frente el monitoreo de los procesos que se dan al interior de las explotaciones pecuarias y a su vez fue posible observar cómo lograr que estas sean más eficientes, sostenibles y logren productos acordes con las exigencias del mercado, en el siguiente mapa se presenta el resumen vivido.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura de la síntesis se resalta el monitoreo de los procesos que se dan al interior de las explotaciones pecuarias y a su vez fue posible observar cómo lograr que estas sean más eficientes, sostenibles y logren productos acordes con las exigencias del mercado, en el siguiente mapa se presenta el resumen vivido.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
