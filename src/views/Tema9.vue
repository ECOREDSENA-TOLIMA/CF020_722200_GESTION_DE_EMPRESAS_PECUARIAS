<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Registros y Documentación
    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema9/1.png', alt='Texto que describa la imagen')
      .col-md-8.mb-3
        p(data-aos="fade-left") En las empresas pecuarias modernas el manejo de los registros y la documentación se han convertido en pieza clave de todos los procesos de gestión administrativa. Igualmente, los avances tecnológicos en lo relacionado con el almacenamiento de información y la sistematización de los procesos han sido fundamentales para el desarrollo de unidades productivas más eficientes y con mayores facilidades para la toma de decisiones.
        p(data-aos="fade-left") La función principal de los registros es entregar información vital al administrador sobre la producción de los animales, sus características, su crecimiento, el consumo de alimento y demás parámetros productivos, con lo cual es posible tomar decisiones respecto al manejo de la explotación.

    .row.justify-content-center.mt-5 
      .col-10
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          .row.justify-content-center.align-items-center 
            .col-md-2.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema9/2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              p(data-aos="fade-left") En cuanto a la documentación de la unidad productiva es importante señalar que esta hace referencia a los documentos necesarios para que la unidad productiva pueda funcionar cumpliendo con los requisitos normativos. Dentro de estos documentos están los documentos del predio, los planos de las instalaciones, los protocolos de las diferentes labores, fichas técnicas de maquinaria y equipos, certificaciones y permisos, documentos del personal, registros y archivo general de la empresa.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_1 9.1 Tipos
    p.mb-5(data-aos="fade-left") Existe una gran diversidad de registros que se pueden manejar al interior de la unidad productiva, estos dependen del tipo de explotación, de la especie y de la raza con la que se esté trabajando, básicamente. Entre los principales tipos de registros que pueden manejarse dentro de la unidad pecuaria están los siguientes:

    TabsC.color-primario
      .py-3.py-md-4(titulo="Parámetros productivos")
        .row.justify-content-center.align-items-center
          .col-md-3.offset-1
            figure
              img(src='@/assets/curso/temas/tema9/3.svg', alt='Texto que describa la imagen')
          .col-md-7.offset-1
            h4 Parámetros productivos
            <li>Registros de producción</li>
            <li>Registros de pesaje de animales</li>
            <li>Registro de individuos</li>
            <li>Registros reproductivos</li>
            <li>Registros para ganadería de carne</li>

      .py-3.py-md-4(titulo="Infraestructura")
        .row.justify-content-center.align-items-center
          .col-md-3.offset-1
            figure
              img(src='@/assets/curso/temas/tema9/4.svg', alt='Texto que describa la imagen')
          .col-md-7.offset-1
            h4 Infraestructura
            <li>Áreas disponibles</li>
            <li>Reparaciones locativas</li>
            <li>Disponibilidad de infraestructura</li>
            <li>Mantenimiento</li>
            <li>Planos  y diseños</li>
            <li>Planos de instalaciones sanitarias y eléctricas</li>

      .py-3.py-md-4(titulo="Labores")
        .row.justify-content-center.align-items-center
          .col-md-3.offset-1
            figure
              img(src='@/assets/curso/temas/tema9/5.svg', alt='Texto que describa la imagen')
          .col-md-7.offset-1
            h4 Labores
            <li>Fecha de labores</li>
            <li>Actividades realizadas</li>
            <li>Responsables</li>
            <li>Novedades</li>
            <li>Programación de labores</li>
            <li>Calendario productivo</li>

      .py-3.py-md-4(titulo="Mantenimiento de maquinaria y equipos")
        .row.justify-content-center.align-items-center
          .col-md-3.offset-1
            figure
              img(src='@/assets/curso/temas/tema9/6.svg', alt='Texto que describa la imagen')
          .col-md-7.offset-1
            h4 Mantenimiento de maquinaria y equipos
            <li>Fichas técnicas de equipos</li>
            <li>Registro de mantenimientos</li>
            <li>Factura de compra de repuestos</li>
            <li>Responsables de mantenimiento</li>
            <li>Mantenimientos programados</li>

      .py-3.py-md-4(titulo="Inventarios")
        .row.justify-content-center.align-items-center
          .col-md-3.offset-1
            figure
              img(src='@/assets/curso/temas/tema9/7.svg', alt='Texto que describa la imagen')
          .col-md-7.offset-1
            h4 Inventarios
            <li>Inventario de animales</li>
            <li>Inventario de equipos y herramientas</li>
            <li>Inventario de recursos</li>
            

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_2 9.2 Formatos
    p.mb-5(data-aos="fade-left") Para la elaboración de los formatos de captura de información es importante antes de empezar revisar lo siguiente:

    .row.justify-content-center.mb-5
      .col-md-4.mb-3 
        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD; height:100%")
          p #[b Qué se va a registrar]: tener claridad sobre los datos que se quieren registrar, qué parámetros se van a medir y cómo pueden ser de utilidad para la administración de la unidad productiva.
      .col-md-4.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD; height:100%")
          p #[b Para qué se va a emplear la información] : en muchas unidades productivas se registran altos volúmenes de información que posteriormente no tienen una utilidad aparente. Por esta razón es importante definir el destino de esos datos antes de proceder con su captura.
      .col-md-4.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD; height:100%")
          p #[b Para qué se va a emplear la información]: en muchas unidades productivas se registran altos volúmenes de información que posteriormente no tienen una utilidad aparente. Por esta razón es importante definir el destino de esos datos antes de proceder con su captura. 

    .row.justify-content-center.align-items-center.mb-3
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema9/8.png', alt='Texto que describa la imagen')
      .col-md-8.mb-3
        p(style="background-color:#FFFAD0") Las principales condiciones que debe cumplir un formato de captura de información son las siguientes:
        <li>Preguntas concretas sin lugar a interpretaciones ni opiniones. Ejemplo: cantidad de animales, peso de las novillas, número de potreros, presencia de instalaciones.</li>
        br
        <li>El formulario debe tener una secuencia lógica relacionada con el sistema productivo y no cambiar de temas abruptamente.</li>
        br
        <li>Aplicables en cualquier zona independientemente de los contextos particulares.</li>
        br
        <li>Obtener respuestas concretas donde se mencionan principalmente cifras y datos, no opiniones ni percepciones.</li>
        br
        <li>Hacer preguntas cerradas que no den la opción de interpretaciones subjetivas.</li>
        br
        <li>Se deben formular preguntas de fácil comprensión tanto para quien diligencia el formato como para quien lo sistematiza.</li>

    p.mt-5(data-aos="fade-left") Además de lo anterior es fundamental incluir dentro de los registros los siguientes datos: nombre de la finca, fecha de aprobación del formato, responsable de aprobación del formato, fecha de diligenciamiento, nombre y cargo de quien diligencia la información.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_3 9.3 Inventarios
    p.mb-3(data-aos="fade-left") Un inventario esencialmente es una relación esquematizada y detallada de los recursos de los que se dispone al interior de la empresa pecuaria, de manera que se pueda conocer de antemano su cantidad, estado, disponibilidad y costo aproximado.
    P.mb-5(data-aos="fade-left") Al interior de la unidad productiva pecuaria es posible encontrar las siguientes clases de inventarios:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Figura 3
      span #[em Clases de inventarios]

    .row.justify-content-center(data-aos="flip-up") 
      .col-10.desktop
        figure
          img(src='@/assets/curso/temas/tema9/9.svg', alt='La figura indica los diferentes inventarios que pueden llevarse a cabo en torno a la empresas pecuarias.')
    .row.justify-content-center 
      .col-10.movil
        figure
          img(src='@/assets/curso/temas/tema9/10.svg', alt='La figura indica los diferentes inventarios que pueden llevarse a cabo en torno a la empresas pecuarias.')


    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema9/11.png', alt='Texto que describa la imagen')
      .col-md-8.mb-3
        p(style="background-color:#FFFAD0") Para construir un buen formato de inventario es necesario revisar los siguientes aspectos:
        <li>Incluir un número prudente de columnas en las que se pregunte el número del ítem, la descripción, la unidad, la cantidad, la referencia, el sitio donde se encuentra almacenado.</li>
        br
        <li>Incluir una celda donde se indique la fecha del último inventario realizado.</li>
        br
        <li>Dejar una celda para observaciones.</li>
        br
        <li>De ser posible establecer dentro del formato una clasificación para los elementos del inventario (herramienta, equipo, maquinaria, insumo, etc.).</li>
        br
        <li>Establecer códigos para los elementos que se encuentren en el inventario y marcarlos debidamente.</li>

    .row.justify-content-center 
      .col-6.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5; height:100%")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema9/12.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              h4 Inventario de materias primas e insumos
              p La información relacionada con este tipo de productos dentro de la unidad productiva. Además de las cantidades y la descripción es importante señalar las fechas de vencimiento o caducidad de los productos.

      .col-6.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5; height:100%")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema9/13.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              h4 Inventario de animales
              p Se debe señalar la edad de los animales, su sexo, raza, edad y peso. Igualmente, es importante tener datos adicionales sobre su procedencia y comportamiento productivo.

    .row.justify-content-center 
      .col-6.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5; height:100%")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema9/14.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              h4 Inventario de coberturas del suelo
              p Identificar el número de potreros de la unidad productiva y establecer las especies vegetales que allí se encuentran. Se puede combinar con aforos para medir la disponibilidad de alimento para los animales en pastoreo.

      .col-6.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5; height:100%")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema9/15.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              h4 Inventario de equipos y herramientas
              p Establecer qué tipo de herramientas se tienen en la unidad productiva, su estado y su disponibilidad. En el caso de los equipos también se debe registrar en el inventario si cuentan o no con accesorios y manuales de operación.

    .row.justify-content-center 
      .col-6.mb-3
        .tarjeta.p-4.mb-3(style="background-color:#F9FEF5; height:100%")
          .row.justify-content-center.align-items-center
            .col-md-4.mb-3
              figure
                img(src='@/assets/curso/temas/tema9/16.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-3
              h4 Instalaciones
              p En este inventario es importante señalar qué tipo de instalaciones se tienen, su estado actual y las fechas en las que han recibido mantenimiento. Dentro de su estado actual es importante aprovechar para señalar qué tipo de reparaciones locativas o actividades de mantenimiento se requieren.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_4 9.4 Listas de chequeo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una lista de chequeo es un mecanismo de control que funciona muy bien para verificar que se han cumplido cada uno de los pasos de un proceso o de una actividad en particular. Estas listas de chequeo se emplean regularmente para evitar errores en la realización de tareas que son repetitivas y que requieren del desarrollo de acciones paso a paso de manera secuencial. Igualmente, tienen una excelente aplicabilidad en procesos de monitoreo, seguimiento o auditoría ya que permiten verificar uno a uno los ítems a evaluar.
          br
          br
          | Al igual que los demás formatos que se emplean con frecuencia en la unidad productiva, estas listas llevan un encabezado en el que se recoge información como la fecha de diligenciamiento, la ubicación, el nombre del predio, los datos de la unidad productiva y el propósito de la verificación. Un ejemplo clásico de este tipo de documento es el que presenta el Instituto Colombiano Agropecuario denominado #[b “Lista de chequeo para predios productores de porcinos con destino al sacrificio”].

    p(data-aos="fade-left") A diferencia de otro tipo de formatos, las listas de chequeo solo permiten respuestas cortas como “sí”, “no” o “cumple”, “no cumple” ya que se emplean principalmente para procesos de evaluación o verificación. 

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_9_5 9.5 Técnica de diligenciamiento
    p.mb-5(data-aos="fade-left") Aparentemente el diligenciamiento de una lista de chequeo es una tarea sencilla ya que este es un formato que contiene preguntas concretas que dan cuenta de la realización de determinados procesos o actividades. Sin embargo, a pesar de su sencillez, su diligenciamiento conlleva una gran responsabilidad debido a que a menudo estas son empleadas para la verificación del cumplimiento de tareas que resultan esenciales para la unidad productiva.
    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema9/18.png', alt='Texto que describa la imagen')
      .col-md-8.mb-0
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          h5 Para el correcto diligenciamiento de la lista de chequeo, dada su aparente sencillez, se recomienda lo siguiente:
          <li>Estar enfocado en el proceso de verificación para evitar la omisión de alguno de los pasos de la lista de comprobación.</li>
          <li>Conocer de antemano el paso a paso de los procesos para identificar la secuencia lógica en la que se diligencia la lista.</li>
          <li>Responder de manera clara, concreta y veraz si se cumple o no con determinado criterio.</li>
          <li>Tener precaución de marcar adecuadamente cada uno de los ítems verificados.</li>
          <li>No saltarse alguno de los pasos o las preguntas de la lista de verificación.</li>
          <li>Ante alguna duda en la comprobación de algún criterio solicitar una segunda opinión.</li>

    p.mt-5(data-aos="fade-left") En procesos como el montaje o instalación de equipos las listas de comprobación se convierten en herramientas que salvan vidas y evitan altos costos por daños en los implementos. Algunos de los protocolos al interior de la unidad productiva se basan en listas de comprobación puesto que evitan recurrir a la memoria humana la cual, en ocasiones, no es confiable.

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
