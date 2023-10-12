<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Normativa Ambiental
    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/1.png', alt='')
      .col-md-8.mb-0
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0") 
          p(data-aos="fade-left") La aplicación de la normativa ambiental en los sistemas productivos pecuarios es transversal, ya que impacta todos los aspectos que tienen lugar en la explotación y se relaciona estrechamente con el manejo y disposición de los residuos que se producen como resultado de las actividades de manejo de los animales. Es importante tener la capacidad de diferenciar los tipos de residuos que se generan para así mismo determinar el método de disposición más apropiado, pues cada tipo de residuo dependiendo de su peligrosidad y del impacto que tenga sobre el entorno tendrá un manejo distinto, como se observa a continuación:

    .tarjeta.color-secundario.p-3.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema5/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Normativa Ambiental
              p.text-small Listado de la normativa ambiental en los sistemas productivos pecuarios.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1_normativa_ambiental.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Recolección y clasificación
    p.mb-5(data-aos="fade-left") Los residuos sólidos producidos al interior de la unidad productiva se clasifican en cuatro grandes grupos principales: residuos reciclables, no reciclables, orgánicos y especiales. En este sentido, se tiene que el primer paso para la gestión integral de los residuos es su identificación, ya que existen algunos que tienen unas características altamente contaminantes por lo que requieren de un manejo distinto. Tipos de residuos sólidos que se producen en la unidad pecuaria.

    .row.justify-content-center 
      .col-10
        .row.justify-content-center 
          .col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/3.jpg', alt='')
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              p #[b Residuos reciclables]: son aquellos que mediante un proceso previo pueden volver a utilizarse para diferentes usos: cartón, papel, plástico, vidrio y metales.
          .col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/4.jpg', alt='')
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              p #[b Residuos no reciclables]: son aquellos que no pueden ser utilizados nuevamente como las bombillas, el papel o el cartón contaminados con restos de comida.
    .row.justify-content-center 
      .col-10
        .row.justify-content-center 
          .col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/5.jpg', alt='')
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              p #[b Residuos orgánicos]: corresponden a todos los elementos que alguna vez estuvieron vivos. Allí se destacan plumas, huevos dañados, excretas, residuos vegetales.
          .col-md-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema5/6.jpg', alt='')
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              p #[b Residuos especiales]: son residuos que requieren algún tipo de manejo especial como restos de medicamentos, agujas, empaques de plaguicidas.

    .row.justify-content-center 
      .col-10
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center
            .col-sm-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema5/7.svg', alt='')
            .col-sm-10.mb-0
              p(data-aos="fade-left") Es importante que al interior de la unidad productiva se cuente con espacios suficientes para que el personal de la empresa disponga apropiadamente de los residuos sólidos y realice la selección en la fuente.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Manejo y desactivación
    p.mb-5(data-aos="fade-left") Para el manejo y disposición de los residuos sólidos existen diferentes alternativas, muchas de las cuales se pueden realizar dentro de la misma unidad productiva. Entre los tipos de manejo más frecuentes se encuentran los siguientes:

    ImagenInfografica.color-secundario.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/8.svg', alt='La infografía para el manejo y la desactivación de los residuos, explica como llevar a cabo el deshecho de los residuos reciclables, no reciclables, orgánicos y especiales.')
          
      .tarjeta.color-acento-botones.p-3(x="30.6%" y="19.1%" numero="")
        .h5.mb-2 Residuos reciclables
        p Para el manejo de estos elementos solamente basta con hacer la separación en la fuente, teniendo cuidado de evitar su contaminación con sustancias tóxicas o que puedan significar algún riesgo para el personal, como residuos de agroquímicos, fluidos corporales o restos de animales.
      .tarjeta.color-acento-botones.p-3(x="66%" y="18.1%" numero="")
        .h5.mb-2 Residuos no reciclables
        p Estos tienen un cierto grado de peligrosidad, como en el caso de las bombillas, ya que algunos de sus componentes son altamente contaminantes o tóxicos. En este caso, es recomendable hacer una disposición parcial, la cual consiste en separar estos elementos, almacenarlos en recipientes que eviten que las sustancias entren en contacto con el agua o el suelo y entregarlos a una empresa de aseo que cuente con la idoneidad necesaria para hacer la disposición final por cualquiera de los métodos disponibles.
      .tarjeta.color-acento-botones.p-3(x="30.7%" y="61.2%" numero="")
        .h5.mb-2 Residuos orgánicos
        p Estos elementos son los más comunes dentro de las explotaciones pecuarias y corresponden a elementos que alguna vez tuvieron vida, bien sea plantas o animales. Una de las formas más eficientes de disponer de estos residuos es el compostaje o la producción de lombricultivo, ya que estos métodos permiten la degradación de estas sustancias de una forma controlada para posteriormente incorporarlas en forma de abono orgánico. En las explotaciones pecuarias, merece especial atención el manejo y disposición de mortalidades y desechos anatomopatológicos.
      .tarjeta.color-acento-botones.p-3(x="66%" y="60.8%" numero="")
        .h5.mb-2 Residuos especiales
        p Estos residuos por la complejidad de su manejo o por su peligrosidad requieren de condiciones especiales de almacenamiento a fin de evitar accidentes. En el caso de las agujas se recomienda la utilización de guardianes los cuales consisten en recipientes diseñados para proteger a quienes tengan contacto con residuos peligrosos cortopunzantes. Para los envases de agroquímicos, es necesario realizar el triple lavado, con el cual es posible eliminar la mayor parte de los agentes contaminantes, para posteriormente ser almacenados antes de su disposición final.

    .row.justify-content-center.movil 
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/9.svg', alt='La infografía para el manejo y la desactivación de los residuos, explica como llevar a cabo el deshecho de los residuos reciclables, no reciclables, orgánicos y especiales.')

    h3.mt-5 Desactivación de residuos
    
    .row.justify-content-center.align-items-center 
      .col-md-7.mb-3
        p(data-aos="fade-left") Esta se emplea en los residuos que puedan tener algún grado de peligrosidad por ser altamente infecciosos tanto para los animales como para las personas. En estos casos la desactivación de los residuos se efectúa con métodos de baja eficiencia mediante la aspersión con alguna sustancia desinfectante como amonios cuaternarios, formaldehído, glutaraldehído, yodóforos, yodopovidona, peróxido de hidrógeno, hipoclorito de sodio y calcio, entre otros. Es importante que este tipo de residuos se almacenen en lugares especialmente acondicionados y los recipientes se rotulen conforme a lo exigido por la normatividad vigente.
      .col-md-5.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/10.png', alt='')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Transporte interno y disposición de residuos peligrosos y no peligrosos
    .row.justify-content-center.align-items-center
      .col-md-5.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/11.png', alt='')
      .col-md-7.mb-3
        p(data-aos="fade-left") En el manejo de los residuos sólidos al interior de la unidad productiva es necesario establecer las rutas que se deben seguir para evitar la contaminación cruzada y la diseminación de agentes infecciosos. Los métodos de disposición de los residuos deben ser acordes con las capacidades del productor y de antemano conocer si se hará disposición final o parcial de los materiales de desecho. En el caso de hacer disposición parcial, es importante conocer con qué empresa se realizará la disposición final y las condiciones en las que se entregarán los residuos.

    .row.justify-content-center.align-items-center.mt-5 
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para la disposición de los residuos no peligrosos igualmente se deben definir rutas, protocolos y procedimientos de manera que se eviten problemas asociados a la mala disposición de estos elementos al interior de la unidad productiva.
      .col-lg-4.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/12.png', alt='')

    

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
