<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Plan de contingencia
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso//temas/tema8/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una contingencia se define como un fenómeno que puede ocurrir o no en determinadas circunstancias y que puede afectar en diferentes grados al proyecto productivo. Debido a que las contingencias pueden ser de diferente índole y que representan una amenaza constante, es necesario permanecer enfocados en la prevención.
          br
          br
          | Para conseguir identificar las contingencias es necesario en primera instancia realizar un análisis de riesgos, el cual consiste en la caracterización de los problemas potenciales a los que está expuesto el sistema productivo y la estimación de la probabilidad de que esos fenómenos afectan su normal funcionamiento.

    p.mb-5(data-aos="fade-left") Para el desarrollo de un análisis de riesgos es recomendable lo siguiente:

    .row.justify-content-center 
      .col-md-10.desktop
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8/2.svg', alt='Imagen decorativa')
              

          .tarjeta.color-acento-botones.p-3(x="14.8%" y="31%" numero="")
            .h5.mb-2 Identificar los riesgos
            p Se pueden emplear reuniones, lluvias de ideas, encuestas o consultorías especializadas para lograr esta primera fase.
          .tarjeta.color-acento-botones.p-3(x="56.4%" y="39.2%" numero="")
            .h5.mb-2 Determinar qué tan crítico es el riesgo
            p Asignar un valor numérico basadas en la severidad del daño, la probabilidad de que ocurra y la posibilidad de detección.
          .tarjeta.color-acento-botones.p-3(x="25.1%" y="56%" numero="")
            .h5.mb-2 Clasificar los riesgos
            p Se decide qué riesgos se pueden aceptar y qué riesgos definitivamente no.
          .tarjeta.color-acento-botones.p-3(x="59.9%" y="77.9%" numero="")
            .h5.mb-2 Definir acciones
            p Se definen las actividades preventivas que se llevarán a cabo para evitar las situaciones ya identificadas.
    .row.justify-content-center 
      .col-md-10.movil
        figure
          img(src='@/assets/curso/temas/tema8/3.svg', alt='Imagen decorativa')

    p.mt-5(data-aos="fade-left") De acuerdo con la Cámara de Comercio de Bogotá, un plan de contingencia, en el ámbito de los desastres naturales, permite prevenir y mitigar riesgos y atender los eventos con la suficiente eficacia, minimizando los daños a la comunidad y al ambiente. En el entorno productivo el plan de contingencia igualmente permite prever las situaciones que puedan poner en riesgo el sistema y generar los procedimientos necesarios para evitar que sus efectos sean catastróficos. 
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_8_1 8.1 Tipos

    p.mb-5(data-aos="fade-left") Los planes de contingencia se pueden enfocar en varias alternativas para hacer frente a los problemas potenciales dependiendo de la clasificación de los riesgos, los cuales se pueden:

    .row.justify-content-center 
      .col-md-6.mb-3
        .tarjeta.p-4.mb-0(style="background-color:#FFFAD0; height:100%")
          h5.text-center Eliminar
          p Implica tomar medidas para evitar por completo la amenaza. Por ejemplo, ante el riesgo de inundación en una zona del predio se decide trasladar el alojamiento a un área elevada no inundable.
      .col-md-6.mb-3
        .tarjeta.p-4.mb-0(style="background-color:#FFFAD0; height:100%")
          h5.text-center Mitigar su impacto
          p Implica desarrollar acciones para que en caso de que se presente la contingencia se puedan reducir los daños. Por ejemplo, en una zona inundable se pueden hacer construcciones elevadas para evitar daños a la infraestructura.
      .col-md-6.mb-3
        .tarjeta.p-4.mb-0(style="background-color:#FFFAD0; height:100%")
          h5.text-center Tolerar
          p Consiste en aceptar cierto nivel de riesgo teniendo en cuenta que de llegarse a presentar la situación, los daños no serán de consideración para el sistema productivo o para la seguridad de los animales y los trabajadores. Por ejemplo, una falla en el suministro de energía eléctrica en una explotación de especies menores.
      .col-md-6.mb-3
        .tarjeta.p-4.mb-0(style="background-color:#FFFAD0; height:100%")
          h5.text-center Compartir
          p Consiste en un proceso mediante el cual se comparten o se transfieren los daños que pueda ocasionar el suceso con otra organización o empresa. Las empresas de seguros son un claro ejemplo de este tipo de manejo de contingencias.

    p.mt-5(data-aos="fade-left") Así las cosas, los planes de contingencia se pueden enfocar en eliminar, mitigar, tolerar o compartir el riesgo, a fin de disminuir las vulnerabilidades internas de la empresa pecuaria.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_8_2 8.2 Características
    p.mb-5(data-aos="fade-left") Con el desarrollo de un adecuado análisis de riesgos es posible sentar las bases para la construcción de planes de contingencia sólidos y que realmente respondan a las situaciones que puedan llegar a presentarse en la unidad productiva. Para que un plan de contingencias sea exitoso es necesario que cumpla con las siguientes características:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="flip-up")
      .row.justify-content-center.align-items-center(titulo="Análisis de riesgos")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Siempre debe partir de un buen análisis de riesgos, de ello depende su efectividad.
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/4.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center(titulo="Evaluar los riesgos")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Conocer los riesgos de la unidad productiva en términos de su gravedad y la probabilidad de ocurrencia.
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/5.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center(titulo="Identificar riesgos importantes")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Priorizar aquellos riesgos que tienen una alta gravedad y una alta probabilidad de ocurrencia.
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/6.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center(titulo="Establecer planes de contingencia para los mayores riesgos")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Definir planes de contingencia para cada riesgo con alta gravedad y alta probabilidad.
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/7.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center(titulo="Validación")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Socialización del plan al personal y directivos para su aprobación.
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/8.svg', alt='Imagen decorativa')

      .row.justify-content-center.align-items-center(titulo="Verificación y análisis")
        .col-md-8.mb-4.mb-md-0.offset-1
          p Evaluación periódica de los planes para mantenerlos actualizados y vigentes.  
      
        .col-md-2
          figure
            img(src='@/assets/curso/temas/tema8/9.svg', alt='Imagen decorativa')
            

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
