<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Comunicación
    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema10/1.png', alt='Texto que describa la imagen')
      .col-md-8
        p(data-aos="fade-left") Dentro de los procesos de monitoreo que se llevan a cabo en la unidad productiva la comunicación juega un papel muy importante, ya que es allí donde culminan las actividades de evaluación, seguimiento, identificación de oportunidades de mejora y recolección de información. Si no se da un buen ejercicio de comunicación, las demás actividades desarrolladas carecerán de valor y se perderá la esencia del trabajo de monitoreo.
        p(data-aos="fade-left") El proceso comunicativo cuenta con 5 elementos fundamentales que son emisor, mensaje, receptor, canal y código. Si alguno de estos elementos no está presente sencillamente no hay proceso comunicativo.

    .titulo-sexto.color-acento-contenido.offset-1.mt-5
      h5 Figura 4
      span #[em Elementos del proceso de comunicación]

    .row.justify-content-center(data-aos="flip-up") 
      .col-10.desktop
        figure
          img(src='@/assets/curso/temas/tema10/2.svg', alt='Indica los actores del proceso de la comunicación.')
    .row.justify-content-center 
      .col-10.movil
        figure
          img(src='@/assets/curso/temas/tema10/3.svg', alt='Indica los actores del proceso de la comunicación.')

    p.mb-3.mt-5(data-aos="fade-left") En el reporte de las novedades encontradas en el proceso de monitoreo pueden emplearse distintos canales para transmitir la información al receptor, bien sea de manera individual o simultánea. Lo importante es que se transmita el mensaje que se quiere entregar y se deje la respectiva trazabilidad. Igualmente, al interior de la empresa agropecuaria existen canales formales para hacer circular la información y otros que son de tipo informal, por lo que es importante saber diferenciar en qué momento es propicio utilizar uno u otro canal.
    p.mb-5(data-aos="fade-left") Para el desarrollo de las actividades comunicativas en la unidad productiva es importante tener en cuenta las siguientes recomendaciones para procesos comunicativos.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-7.mb-5.mb-md-0
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Identificar al receptor") Saber a quién se debe dirigir qué tipo de información. No todos deben saber de todo.
          
          p.text-small(numero="2" titulo="Claridad en el mensaje") Dar un mensaje claro, sin ambigüedades y concreto.
          
          p.text-small(numero="3" titulo="Contar con evidencias de la información que se presenta") Dejar trazabilidad de las actividades en terreno para respaldar la información que se entregue en el proceso de monitoreo.
          
          p.text-small(numero="4" titulo="Utilizar los canales oficiales") Es recomendable usar los canales oficiales de la empresa para trasmitir información relevante sobre las novedades y hallazgos.
          
          p.text-small(numero="5" titulo="Canales apropiados") Utilizar los canales apropiados dependiendo de la situación. Hay informaciones que se deben entregar de forma personal, otras de manera escrita y otras por medios oficiales.
          
          p.text-small(numero="6" titulo="Prudencia") Ser prudente con el manejo de información sensible sobre situaciones que se presenten en la unidad productiva.
          
          p.text-small(numero="7" titulo="Desarrollar una comunicación asertiva") Ser concreto frente a lo que se desea manifestar, hablar con claridad y expresar lo que se piensa asegurándose de que la contraparte está entendiendo el mensaje.
      
      .col-md-5.mb-5.mb-md-0
        figure
            img(src='@/assets/curso/temas/tema10/4.png', alt='')

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
