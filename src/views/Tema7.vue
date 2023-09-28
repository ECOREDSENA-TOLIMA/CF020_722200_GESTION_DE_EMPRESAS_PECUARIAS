<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de mejoramiento
    p(data-aos="fade-left") En la actualidad una de las principales herramientas que existe para la gestión al interior de las empresas en lo relacionado con la mejora continua es el ciclo PHVA (planear, hacer, verificar, actuar) el cual permite aprender de los errores y capitalizar las experiencias.
    p.mb-5(data-aos="fade-left") Las cuatro fases que posee el ciclo PHVA son las siguientes:

    LineaTiempoA.color-secundario.mb-5(:datos="datosLineaTiempoA")

    .cajon-b.color-secundario.p-3.mb-5
      p.mb-0 De acuerdo con lo anterior, el plan de mejoramiento es un resultado de la fase de verificación en el cual se establecen los componentes del sistema productivo que requieren especial atención y se fijan las metas para la implementación de acciones que permitan corregir las fallas. En el caso de las explotaciones pecuarias, por ejemplo, en un plan de mejora es posible identificar factores que inciden en bajos rendimientos o baja productividad por unidad de área, por lo que es necesario implementar acciones que reviertan esas situaciones y que ataquen sus causas y no sus efectos.
        br
        

    .tarjeta--container.row.mb-5(data-aos="flip-up")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/5.jpg', alt='Texto que describa la imagen')
          
        h2.text-center Acciones preventivas
        p Para la implementación de un plan de mejora, es posible desarrollar tanto acciones preventivas como acciones correctivas. Las acciones preventivas se basan en la identificación y previsión de situaciones que se puedan llegar a presentar en la unidad pecuaria, por ejemplo, la instalación de cercos perimetrales para evitar el ingreso de personas y animales ajenos a la explotación. Con ellas se está realizando una adecuada gestión del riesgo y se están tomando las medidas correspondientes para mitigarlo.

      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/6.jpg', alt='Texto que describa la imagen')
          
        h2.text-center Acciones correctivas
        p Las acciones correctivas, a diferencia de las preventivas, buscan revertir determinada situación y eliminar el riesgo asociado, por ejemplo, cambiar la dieta de los animales o incluir un nuevo protocolo de limpieza y desinfección para un área específica en la que se han detectado problemas de contaminación. Las medidas correctivas son también elementos válidos en los procesos de mejoramiento continuo y generalmente contribuyen a generar cambios positivos en el sistema productivo. Si bien estas acciones provienen de procesos de evaluación y verificación realizados previamente, las acciones preventivas y correctivas deben ser nuevamente evaluadas a fin de revisar su efectividad y determinar si requieren de un nuevo ajuste. 



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosLineaTiempoA: [
      {
        ano: 'Planear',
        titulo: '',
        texto:
          'En esta fase se define la programación de las actividades, se estima la demanda de recursos y se establecen los pasos a seguir para la implementación del plan de mejora. Es importante contar con información suficientemente detallada para realizar un correcto proceso de planeación.',
      },
      {
        ano: 'Hacer',
        titulo: '',
        texto:
          'Esta fase consiste en llevar a la práctica todo lo que se ha planeado, teniendo en cuenta la programación elaborada en el “planear”. En ella tiene lugar la materialización en la práctica de las ideas y propuestas.',
      },
      {
        ano: 'Verificar',
        titulo: '',
        texto:
          'En esta fase se lleva a cabo la comprobación de los avances en el proceso de implementación del proyecto. Se utilizan indicadores para analizar las situaciones y tomar las medidas correspondientes basados en información veraz y confiable. Como producto de esta etapa se genera un plan de mejoramiento el cual debe ser implementado para corregir las fallas detectadas.',
      },
      {
        ano: 'Actuar',
        titulo: '',
        texto:
          'En esta etapa del proceso se llevan a la práctica todas las recomendaciones contenidas en el plan de mejoramiento, de manera que se corrijan las situaciones encontradas y se logre avanzar hacia el logro de los objetivos de la empresa. En esta fase se abre nuevamente la posibilidad de encontrar fallas y de esta forma continuar con el ciclo de mejora continua.',
      },
    ],
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
