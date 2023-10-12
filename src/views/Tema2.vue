<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de Alimentación
    p.mb-5(data-aos="fade-left") Otro de los aspectos que merece especial atención en el desarrollo de las explotaciones pecuarias es el de la alimentación animal, en donde debe tenerse en cuenta diferentes aspectos como:

    TabsA.color-acento-botones.mb-5(data-aos="flip-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa productiva")(style="background-color:#FFFAD0")
        h4 Etapa productiva
        p Es la cantidad de calor necesaria para elevar un grado centígrado una molécula de H2O, por ejemplo, para pasar de 14.5 ºC a 15.5 ºC. Se pueden medir en kilocalorías, que son 1000 calorías (o 4.184 julios), o en megacalorías, que son 1.000.000 de calorías.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Duración de la etapa en días")(style="background-color:#FFFAD0")
        h4 Duración de la etapa en días
        p Cada una de las etapas de desarrollo del animal tiene una duración estimada, la cual se determina con base en el comportamiento de cada especie y su fisiología.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Productos alimenticios")(style="background-color:#FFFAD0")
        h4 Productos alimenticios
        p Es necesario definir qué productos alimenticios se emplearán, sus contenidos nutricionales, su composición y las funciones que cada uno de esos elementos tendrá en el metabolismo de los animales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ganancia diaria de peso")(style="background-color:#FFFAD0")
        h4 Ganancia diaria de peso
        p Aunque cada sistema productivo es diferente y las condiciones medioambientales tienen una clara influencia sobre el metabolismo de los animales, es importante establecer un estimado de ganancia diaria de peso diario.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Consumo diario de alimento")(style="background-color:#FFFAD0")
        h4 Consumo diario de alimento
        p Al igual que ocurre con la ganancia de peso es importante definir un consumo diario aproximado de alimento por individuo, con lo cual es posible monitorear la eficiencia del sistema.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Consumo de alimento por etapa")(style="background-color:#FFFAD0")
        h4 Consumo de alimento por etapa
        p Cada una de las etapas que se definen al comienzo del proceso productivo tiene una duración determinada, por lo que es sencillo calcular el consumo de alimento en cada una de ellas a fin de revisar la eficiencia del proceso productivo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Parámetros productivos")(style="background-color:#FFFAD0")
        h4 Parámetros productivos
        p Los parámetros productivos son indicadores de la efectividad de la ración que se está proporcionando a los animales. Si los animales se encuentran por debajo de los parámetros productivos es muy posible que se tenga que revisar el plan de alimentación.

    p(data-aos="fade-left") De acuerdo con FAO un programa de alimentación animal debe estar orientado a satisfacer los requerimientos nutricionales de los animales, en términos de cantidad y calidad, de forma que obtengan un buen desempeño, lo cual se constata en los parámetros productivos y reproductivos, en la salud y el bienestar de la unidad productiva.
    p.mb-5(data-aos="fade-left") Al igual que los demás componentes del manejo animal, el plan de alimentación se rige por los principios de las BPP (Buenas Prácticas Pecuarias) donde se establecen algunas recomendaciones generales para su diseño y seguimiento. De acuerdo con el ICA las buenas prácticas para la alimentación animal se resumen en lo siguiente:

    .row.justify-content-center.align-items-center(data-aos="flip-up") 
      .col-md-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/1.jpg', alt='Texto que describa la imagen')
      .col-md-8.text-white
        .cajon.p-4.mb-3(style="background-color:#3B5620")
          <li>Todos los alimentos, suplementos y sales mineralizadas deben contar con registro ICA, al igual que todos los insumos empleados en el cultivo de forrajes.</li>
          <li>No emplear en los suplementos alimenticios harinas de carne, hueso, sangre o despojos de mamíferos.</li>
          <li>No suplementar con residuos de cosechas que pueden estar contaminados con pesticidas.</li>
          <li>En caso de usar forrajes tratados con pesticidas se deben respetar los periodos de carencia.</li>
          <li>Contar con autorización del ICA para el empleo de materiales transgénicos en la alimentación o la salud animal.</li>
          <li>El suministro de agua debe ser permanente y en condiciones higiénicas.</li>
          <li>El agua suministrada a los animales no debe alterar la inocuidad de los productos obtenidos.</li>
          <li>Los sitios de obtención y almacenamiento de agua deben estar protegidos de contaminación.</li>
          <li>Cada año debe hacerse un análisis de la calidad del agua.</li>
          <li>Los alimentos deben almacenarse en lugares exclusivos para este fin.</li>
          <li>Se deben controlar las condiciones de temperatura y humedad para el almacenamiento de los alimentos.</li>
          <li>Para almacenar los alimentos deben usarse estibas y estar separados de las paredes.</li>
    
    P.mt-5.mb-5(data-aos="fade-left") El plan de alimentación animal podría definirse como una guía en la que se indica el consumo de alimento que tendrán los animales en determinado periodo de tiempo de acuerdo con la etapa de desarrollo en la que se encuentren. Igualmente, allí se presenta un estimado de la ganancia que tendrán los animales, expresada en gramos por día o por semana. En el diseño de los planes de alimentación animal se consideran varios factores, entre los cuales se encuentran los siguientes:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-7.mb-5.mb-md-0
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="El sistema productivo") De autoabastecimiento o de economía campesina los planes de alimentación son menos tecnificados y están más en función de los recursos con los que cuenta el productor en la unidad pecuaria, por el contrario, en sistemas productivos intensivos o industriales los procesos de alimentación son mucho más elaborados y tecnificados. Igualmente, si se trabaja con un sistema enfocado en la producción de carne, el tipo de alimentación es muy diferente al que se trabaja en una explotación lechera.
          
          p.text-small(numero="2" titulo="La especie animal") Tiene diferentes regímenes alimenticios y se hace necesario conocer sus etapas de desarrollo, hábitos y necesidades nutricionales para así determinar la dieta más indicada para cada explotación. Incluso dentro de grupos de animales relativamente similares (por ejemplo, ovejas y cabras) el tipo de alimentación puede tener diferencias importantes.
          
          p.text-small(numero="3" titulo="El destino de la producción") Dependiendo del cliente y del uso que se dé a los productos se define qué tipo de alimentación se debe entregar al animal en la unidad productiva, por ejemplo, existen clientes que exigen determinadas características en la carne, como el contenido de grasa. En este caso, una dieta rica en energía y baja en proteína dará como resultado una carne con mayor contenido de grasa.
          
          p.text-small(numero="4" titulo="Los recursos disponibles") En el caso de los bovinos y demás especies con las que puedan desarrollarse prácticas de pastoreo, es importante conocer la disponibilidad de forraje para así mismo saber cómo balancear las raciones y qué tipo de suplementos entregar para garantizar la nutrición de los animales.

          p.text-small(numero="4" titulo="Las condiciones agroclimáticas") En sistemas productivos ubicados en zonas más frías, los animales requieren consumir mayores cantidades de alimento para mantener su temperatura corporal. Por el contrario, en explotaciones ubicadas en zonas más cálidas los animales tienden a demandar menos comida, por lo que este es un elemento que se debe tener en cuenta en el desarrollo del plan de alimentación.

          p.text-small(numero="4" titulo="La infraestructura de la unidad productiva") En procesos de suplementación animal es importante contar con infraestructura apropiada para los procesos de alimentación, de manera que se garantice la calidad del producto y se asegure que este llegue a todos los individuos.

      .col-md-5.mb-5.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
