<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Parámetros técnicos
    .row
      .col-lg-12
        .cajon.color-primario.p-4.mb-4(data-aos="flip-up")
          p Los parámetros técnicos, o parámetros productivos, son variables medibles que permiten evaluar el comportamiento de la unidad productiva con respecto a los objetivos de producción. Con el seguimiento a los parámetros técnicos al interior de la unidad productiva es posible establecer si los diferentes sistemas que la integran están funcionando de manera correcta y si las prácticas de alimentación, manejo sanitario, reproducción, bienestar animal y mantenimiento están siendo realmente efectivas.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_1 6.1 Tipos y características
    
    p.mb-5(data-aos="fade-left") Los parámetros técnicos se basan principalmente en la medición de características particulares de los individuos o las poblaciones de animales con el fin de identificar su comportamiento en términos de rendimientos y productividad. Dentro de los principales tipos de parámetros técnicos se encuentran los siguientes:

    .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Mediciones de peso
            p Estas permiten evaluar la efectividad de los programas de manejo animal expresados en ganancia de peso en determinado número de días, semanas o meses. Se destacan parámetros como el peso al nacer, peso promedio al destete, peso promedio al sacrificio o ganancia de peso en determinado momento del ciclo productivo. También en algunas especies se mide la proporción entre el peso de alimento consumido y la ganancia de peso vivo que comúnmente se denomina tasa de conversión alimenticia.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/1.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Mediciones de productividad
            p Se tiene en cuenta la productividad en kilogramos o litros por individuo, como en el caso de las ganaderías de leche donde se establecen los litros de leche que una vaca produce en un día o en cada ordeño.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/2.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Medición del número de animales por unidad de área o volumen
            p Este dato da cuenta de la eficiencia de los sistemas de alojamiento, al relacionar el área disponible con la productividad. En sistemas avícolas, por ejemplo, se estima el número de kilogramos de peso vivo por cada metro cuadrado de galpón.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/3.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Mediciones de tamaño o altura
            p Este tipo de parámetros se basan en la medición de algún rasgo característico del animal para verificar si efectivamente su tamaño se encuentra acorde con la edad. En aves, por ejemplo, se utiliza la medición del tarso como un indicador del desarrollo corporal.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/4.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Medición de la mortalidad diaria o acumulada
            p Este es otro de los indicadores que da indicios sobre la efectividad de los programas de manejo animal. Dependiendo de cada especie existen umbrales de mortalidad diaria o acumulada que no se pueden superar. Mortalidades por encima de esos parámetros son indicadores de problemas en el componente sanitario o alimenticio.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/5.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Medición de la duración de las etapas productivas
            p Estos parámetros se enfocan en la medición de la precocidad con la que los individuos llegan a determinadas etapas de desarrollo, por ejemplo, la edad a la primera monta en cerdas de cría o la madurez sexual de machos y hembras en especies menores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/6.jpg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Medición en el aumento o reducción de las poblaciones
            p En varias especies animales se mide el número de partos en el año y el número de individuos nacidos en cada temporada con el fin de establecer la efectividad de los programas de reproducción, por ejemplo. También se mide el número de abortos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/7.jpg', alt='Texto que describa la imagen')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_6_2 6.2 Métodos de cálculo
    p.mb-5(data-aos="fade-left") Para calcular los parámetros técnicos es muy importante tener en cuenta los siguientes factores:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="flip-up")
      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/8.svg' alt='AvatarTop')
        h2.text-center Registros
        p.text-center Llevar registros detallados de la unidad productiva.

      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/9.svg' alt='AvatarTop')
        h2.text-center Mediciones
        p.text-center Realizar mediciones periódicas de los parámetros seleccionados.

      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/10.svg' alt='AvatarTop')
        h2.text-center Muestras
        p.text-center Realización de actividades que promuevan el respeto y la utilización consciente de los recursos naturales y su cuidado para una futura disponibilidad de los mismos.

      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/11.svg' alt='AvatarTop')
        h2.text-center Variables
        p.text-center Identificar las variables que se ajustan al tipo de explotación pecuaria.

      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/12.svg' alt='AvatarTop')
        h2.text-center Periódicas
        p.text-center Realizar las mediciones en todas las épocas del año y en diferentes circunstancias.

      .tarjeta.p-4.col-ipad(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema6/13.svg' alt='AvatarTop')
        h2.text-center Parámetros
        p.text-center Establecer y respetar protocolos para la medición de los parámetros productivos.

    p.mb-5(data-aos="fade-left") Cada productor está en la libertad de medir cuantos parámetros técnicos desee, siempre y cuando los recursos y el tiempo se lo permitan. Sin embargo, se sugieren algunos parámetros los cuales pueden ser calculados de acuerdo con los siguientes indicadores:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 5
      span #[em Parámetros de acuerdo a la especie animal]

    .row.justify-content-center 
      .col-md-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr.text-white(style="background-color:#1B3F5E")
                th Especie
                th Parámetro productivo
                th Unidad
            tbody
              tr
                <th rowspan="11">Bovinos - bufalinos - ovinos – caprinos</th> 
                td Peso promedio al nacer
                td Kg
              tr
                td Peso promedio al destete
                td Kg
              tr
                td Edad promedio al destete
                td Meses
              tr
                td Número de terneros
                td Número de animales
              tr
                td Número de terneras
                td Número de animales
              tr
                td Porcentaje de nacimiento de hembras
                td Porcentaje
              tr
                td Mortalidad anual de lactantes
                td Número de animales
              tr
                td Mortalidad anual de adultos
                td Número de animales
              tr
                td Producción de leche diaria
                td Litros
              tr
                td Número mensual de partos
                td Número de partos
              tr
                td Ganancia de peso mensual
                td Kilogramos / mes
              tr
                <th rowspan="11">Aves</th>
                td Aves que inician - aves que finalizan
                td Número de animales
              tr
                td Mortalidad diaria
                td Número de animales
              tr
                td Mortalidad acumulada
                td Porcentaje
              tr
                td Peso corporal
                td Gramos
              tr
                td Longitud del pico
                td Milímetros
              tr
                td Longitud del tarso
                td Centímetros
              tr
                td Consumo de alimento diario
                td Gramos
              tr
                td Conversión de alimento
                td Kilogramo / Kilogramo
              tr
                td Masa del huevo
                td Gramos
              tr
                td Huevos día
                td Número de huevos
              tr
                td Porcentaje de pérdida de huevos
                td Porcentaje
              tr
                <th rowspan="10">Porcinos</th>
                td Edad a la primera monta
                td Meses
              tr
                td Peso corporal
                td Kilogramos
              tr
                td Conversión de alimento
                td Kilogramos
              tr
                td Edad al sacrificio
                td Días
              tr
                td Intervalo destete monta
                td Meses
              tr
                td Abortos
                td Número de abortos
              tr
                td Porcentaje de partos
                td Porcentaje
              tr
                td Lechones nacidos vivos por camada
                td Número de lechones
              tr
                td Lechones nacidos muertos
                td Número de lechones
              tr
                td Partos/Cerda/Año
                td Número de partos
              tr
                <th rowspan="10">Especies menores (conejos - cuyes)</th>
                td Edad destete
                td Días
              tr
                td Peso crías al nacer
                td Gramos
              tr
                td Número de crías al año
                td Número de animales
              tr
                td Partos al año
                td Número de partos
              tr
                td Peso
                td Kilogramos
              tr
                td Camadas/hembra/año
                td Número de camadas
              tr
                td Peso crías al destete
                td Gramos
              tr
                td Edad al sacrificio
                td Días
              tr
                td Madurez sexual machos
                td Días
              tr
                td Madurez sexual hembras
                td Días
    p.mt-5(data-aos="fade-left") En el caso de especies mayores, como bovinos, la medición de los parámetros técnicos puede hacerse a cada uno de los individuos siempre y cuando se cuente con los recursos para ello. Por el contrario, en especies menores, como las aves, se debe trabajar con muestras representativas, las cuales pueden dar una idea general de cómo se encuentra la población.
          
    

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
