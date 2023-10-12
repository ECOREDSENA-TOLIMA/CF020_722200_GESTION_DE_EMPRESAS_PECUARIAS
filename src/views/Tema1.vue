<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan Sanitario preventivo
    .row.justify-content-center.align-items-center 
      .col-md-4
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/1.png', alt='Texto que describa la imagen')
      .col-md-8
        p(data-aos="fade-left") Buena parte del éxito de la explotación pecuaria depende del manejo preventivo de los problemas sanitarios, pues es más eficiente y menos costoso hacer un manejo profiláctico de los problemas que tomar medidas curativas. 
        p(data-aos="fade-left") Dado esto, es importante contar con los mecanismos necesarios para evitar el ingreso y la propagación de las enfermedades, la implementación de medidas de bioseguridad y el desarrollo de protocolos para mantener libres de contaminación las instalaciones, equipos, herramientas y demás elementos con los que los animales tienen contacto.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Bioseguridad

    .row.justify-content-center.align-items-center 
      .col-md-3
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')
      .col-md-9
        p(data-aos="fade-left") Indistintamente del tipo de explotación pecuaria y de la especie animal, es importante mantener las medidas de bioseguridad.
        .cajon.p-4.mb-3(style="background-color:#E7EAE4")(data-aos="flip-up")
          p Según el Instituto Colombiano Agropecuario (ICA) consiste en el conjunto de medidas para evitar, evaluar, prevenir, mitigar, manejar y/o controlar los posibles riesgos sanitarios y sus efectos directos o indirectos en la salud humana, el medio ambiente, la biodiversidad, la productividad y producción agropecuaria.
        p(data-aos="fade-left") Una granja biosegura es aquella en la que existe un plan para contrarrestar las amenazas ligadas a los problemas que puedan afectar la salud de los animales, del personal y del entorno natural en el que se desarrolla la actividad productiva, por lo que es un elemento clave dentro del plan sanitario preventivo.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Protocolos
    .row.justify-content-center
      .col 
        p(data-aos="fade-left") Para la implementación de las medidas de bioseguridad del plan sanitario es importante desarrollar protocolos, los cuales son:
        .cajon.p-4.mb-3(style="background-color:#E7EAE4")(data-aos="flip-up")
          p Un conjunto de instrucciones o procedimientos que indican la manera correcta de llevar a cabo determinadas tareas, de forma que se evite la improvisación y la utilización de criterios personales. Estos protocolos se deben seguir con rigurosidad e igualmente es recomendable revisarlos y actualizarlos con frecuencia, ya que están sujetos a procesos de mejora continua. 
        p(data-aos="fade-left") En la explotación pecuaria es necesario tener protocolos para todas las tareas de tipo operativo, bien sean de limpieza y desinfección, control de plagas y vectores, alimentación, ingreso de animales, ordeño o de cualquier otro tipo, siempre y cuando contengan, por lo menos, los siguientes elementos que invitamos a conocer a continuación.
      
    .row.justify-content-center.mt-5 
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop')
          h2.text-center Encabezado
          p.text-center Se define nombre del protocolo, fecha de elaboración y responsables de elaboración, revisión y aprobación.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
          h2.text-center Objeto
          p.text-center Se expresa cuál es el fin del protocolo, es decir, qué se pretende con su implementación.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
          h2.text-center Alcance
          p.text-center Se delimita la escala de aplicación del protocolo: si aplica en un área de la empresa, en toda la empresa o un área geográfica definida.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          h2.text-center Definiciones
          p.text-center Debe contener un glosario con los términos que requieran una explicación un poco más amplia.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop')
          h2.text-center Condiciones generales
          p.text-center Son las disposiciones que se deben seguir para garantizar el cumplimiento del objeto del protocolo. Además, es necesario incluir en cada protocolo qué elementos se deben utilizar, cómo se usan y qué medidas de protección personal se requieren para desarrollar las tareas con seguridad.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/8.svg' alt='AvatarTop')
          h2.text-center Contenido
          p.text-center Se desglosan paso a paso los procedimientos necesarios para cumplir el protocolo. Esto se hace de manera secuencial y detallada.

        .tarjeta.p-4(style="background-color:#DBF9BD; max-width:100%")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
          h2.text-center Control de cambios
          p.text-center Se indican los cambios que ha tenido el documento desde su creación hasta la fecha: responsables, fechas de ajustes y qué versión del protocolo se está manejando.
      
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Control de plagas y vectores

    p.mb-5(data-aos="fade-left") En las unidades productivas pecuarias es común la presencia de plagas y vectores, los cuales pueden causar daño a los animales, instalaciones e insumos. Las plagas básicamente consisten en poblaciones de animales, a menudo insectos o roedores, que pueden deteriorar la calidad de las instalaciones (termitas) o alimentarse de los insumos que son para uso de los animales (ratones, cucarachas, aves). Por su parte, los vectores son animales que transportan, alojados dentro de sus órganos o estructuras, enfermedades o agentes contaminantes como ocurre con las moscas, zancudos y tábanos entre otros. Cualquiera que sea la situación, desde el punto de vista sanitario es necesario implementar medidas que permitan reducir las poblaciones de estos organismos a través de distintas alternativas de control, tales como:
    
    .row.justify-content-center 
      .col
        ImagenInfografica.color-secundario.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')
          
          .tarjeta.color-acento-botones.p-3(x="35.2%" y="72.5%" numero="")
            .h5.mb-2 Control químico
              p Utilización de productos de síntesis química (insecticidas, raticidas) que actúan por ingestión o por contacto. Emplear siempre productos con registro sanitario ICA.

          .tarjeta.color-acento-botones.p-3(x="35.2%" y="32.2%" numero="")
            .h5.mb-2 Control biológico
              p Empleo de enemigos naturales para control de poblaciones de plagas (depredadores, parasitoides, repelentes naturales).

          .tarjeta.color-acento-botones.p-3(x="42.2%" y="8.9%" numero="")
            .h5.mb-2 Control etológico
              p Se utilizan los comportamientos de las plagas en su contra. Atrayentes, trampas, cebos tóxicos.

          .tarjeta.color-acento-botones.p-3(x="64.9%" y="32.1%" numero="")
            .h5.mb-2 Control físico
              p Captura y destrucción de la plaga o alteración de las condiciones de su entorno. Trampas de caída, adhesivos, riego por aspersión.

          .tarjeta.color-acento-botones.p-3(x="64.9%" y="72.5%" numero="")
            .h5.mb-2 Control cultural
              p Prácticas para modificar el entorno de la especie plaga. Preparación de suelos, volteo de materia orgánica, control de humedades, control de aguas estancadas.
    .row.justify-content-center 
      .col
        figure.movil
          img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p(data-aos="fade-left") En el manejo de plagas y enfermedades no existen fórmulas definitivas, sino que por el contrario se recurre al uso de medidas de todo tipo, las cuales se ajustan de acuerdo con las condiciones de cada unidad productiva. Esto es lo que se conoce como manejo integrado de plagas.
      
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Limpieza y desinfección de instalaciones y equipos

    P(data-aos="fade-left") Otro de los procesos que requiere especial atención dentro del plan sanitario preventivo es el de la limpieza y desinfección de las instalaciones y equipos. Cuando no se tiene especial cuidado en estos procesos, se generan condiciones propicias para la propagación de agentes patógenos que pueden afectar el bienestar de los animales y las personas.
    p.mb-5(data-aos="fade-left") Como se aprecia continuación, para una correcta limpieza y desinfección de equipos es necesario tener en cuenta lo siguiente:

    .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Protocolo de limpieza y desinfección
            p Establecer un protocolo de limpieza y desinfección que sea acorde con las condiciones y características de cada área, que explique de manera detallada cómo realizar los procedimientos, qué productos emplear, qué concentraciones utilizar, la frecuencia con la que se deben realizar y los responsables.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/12.jpg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Fichas técnicas de los equipos
            p Revisar las fichas técnicas de los equipos para identificar cómo se debe hacer su limpieza y desinfección, con qué frecuencia y con qué productos desinfectantes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/13.jpg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Limpieza y desinfección
            p Siempre la limpieza va antes de la desinfección, pues muchas de las sustancias desinfectantes no son efectivas en ambientes con alto contenido de materia orgánica. Es importante elegir productos de limpieza acordes con las condiciones de cada área, equipo o utensilio.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.jpg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Condiciones de almacenamiento
            p Verificar las condiciones de almacenamiento de las sustancias para la limpieza y desinfección para prevenir accidentes o deterioro de los insumos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/15.jpg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Fichas y registros
            p El diligenciamiento de fichas y registros de limpieza y desinfección es necesario para llevar un control detallado de las actividades realizadas y los responsables.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/16.jpg', alt='Texto que describa la imagen')
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_5 1.5 Manual de bioseguridad
    p(data-aos="fade-left") Todas las actividades relacionadas con la prevención, mitigación, manejo y/o control de enfermedades al interior de la unidad productiva pecuaria se deben especificar en un manual, el cual generalmente se construye con base en la normatividad aplicable a cada sector productivo, bien sea avícola, porcícola o bovino.
    p.mb-5(data-aos="fade-left") Como se aprecia a continuación, en la construcción de un manual de bioseguridad es necesario incluir los siguientes aspectos.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Objetivo")
        .col-md-9.mb-4.mb-md-0
          p Definir qué se quiere conseguir con la implementación del manual de bioseguridad, qué riesgos se quieren mitigar o qué problemas sanitarios se pueden prevenir con su implementación.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/17.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Generalidades")
        .col-md-9.mb-4.mb-md-0
          p Definir de manera general qué es la bioseguridad y cómo esta puede tener impactos positivos en la prevención de problemas sanitarios al interior de la unidad productiva. Igualmente, en esta parte del documento es clave mencionar la normativa aplicable.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/18.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Personal y vehículos")
        .col-md-9.mb-4.mb-md-0
          p En este aparte se deben incluir las recomendaciones generales frente al ingreso y circulación de personas y vehículos al interior de las instalaciones pecuarias. Igualmente se deben describir los puntos en los que se instalarán los filtros sanitarios.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/19.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Protocolo para manejo de plagas y vectores")
        .col-md-9.mb-4.mb-md-0
          p Definir detalladamente los procedimientos para el manejo de estos problemas al interior de la unidad productiva.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/20.png', alt='Texto que describa la imagen')
            
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_6 1.6 Productos de limpieza y desinfección
    p(data-aos="fade-left") Un buen proceso de limpieza y desinfección parte de la correcta elección de los productos empleados para estas labores, pues no todas las áreas, instalaciones o equipos se pueden tratar con los mismos elementos.
    p.mb-5(data-aos="fade-left") De acuerdo con la resolución del #[b ICA 30292 de 2017], algunos de los productos que se emplean en la limpieza y desinfección en explotaciones avícolas para el manejo de problemas sanitarios son los siguientes:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 1
      span #[em Principales grupos de productos desinfectantes en la industria avícola]

    .row.justify-content-center
      .col-10
        .tabla-a.mb-5
          table
            caption Nota.  Resolución 30292 ICA. (2017).
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th Grupo desinfectante
                th Código
                th Producto
                th Presentación
            tbody.text-center
              tr
                td Jabones y detergentes
                td 1
                td Jabón y detergente comercial
                td Sólida o líquida
              tr
                <td rowspan="3">Agentes oxidantes</td>
                td 2a
                td Hipoclorito de sodio NaOCl
                td Líquida
              tr
                td 2b
                td Hipoclorito de calcio Ca(OCl)2
                td Sólida
              tr
                td 2c
                td Virkon® Bis (peroximonosulfato) bis (sulfato) de Pentapotasio
                td Polvo
              tr
                <td rowspan="3">Álcalis</td>
                td 3a
                td Hidróxido de sodio (soda cáustica)
                td #[i Pellets]
              tr
                <td rowspan="2"> 3b</td>
                td Carbonato de sodio Na2CO3
                td Polvo
              tr
                td Carbonato de sodio decahidratado Na2CO3.10H2O
                td Cristales
              tr
                <td rowspan="2">Ácidos</td> 
                td 4a
                td Ácido clorhídrico 
                td Concentración ácida
              tr
                td 4b
                td Ácido cítrico
                td Polvo
              tr
                <td rowspan="3">Aldehídos</td> 
                td 5a
                td Glutaraldehído
                td Concentración en la solución
              tr
                td 5b
                td Formalina
                td 40 % Formaldehído
              tr
                td 5c
                td Gas formaldehído
                td Se requiere una generación específica

    p.mb-5(data-aos="fade-left") Respecto a los usos de estas sustancias, se tiene que estos se emplean en la desinfección de alojamientos, equipos, personas, equipos eléctricos, viviendas, maquinaria y vehículos, ropa e instalaciones.
    
    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 2
      span #[em Usos recomendados para las sustancias desinfectantes]
    
    .row.justify-content-center
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema1/21.svg', alt='En la tabla se indican los desinfectantes, más usados en los diferentes procesos, y espacios que se encuentran en la industria pecuaria.')
          figcaption Nota. Resolución 30292 ICA. (2017).
      p.mt-5(data-aos="fade-left") En todos los protocolos de limpieza y desinfección es necesario contar con las fichas técnicas y las hojas de seguridad de cada uno de los productos, ya que estas dan orientaciones generales sobre los modos de uso, los equipos de protección que se deben emplear para su aplicación y las medidas en caso de accidentes o intoxicaciones.
                
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
