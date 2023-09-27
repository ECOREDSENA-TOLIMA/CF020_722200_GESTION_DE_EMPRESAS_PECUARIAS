<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programa de Reproducción
    .row.justify-content-center.align-items-center
      .col-md-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/1.png', alt='Texto que describa la imagen')
      .col-md-8
        p(data-aos="fade-left") En una explotación pecuaria el programa de reproducción es un elemento de vital importancia ya que define en buena parte su sostenibilidad financiera. En sistemas productivos de cría o de producción de leche, es muy importante considerar los factores ligados a la reproducción, ya que de ello depende que cada año la población de animales y la producción de leche aumenten y generen los ingresos esperados.
        p(data-aos="fade-left") En términos generales, el programa de reproducción define los procesos, actividades y tareas orientadas hacia la producción de pie de cría teniendo en cuenta las características de desempeño reproductivo de cada especie y los objetivos del sistema productivo, para así determinar la necesidad de recursos y la apropiación de los métodos que resulten más adecuados para sacar el mayor provecho a los animales.
    p.mb-5(data-aos="fade-left") Para el desarrollo exitoso de un programa de reproducción, en el ejercicio de monitoreo del programa de reproducción es importante tener en cuenta lo siguiente:

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1  Características de los Reproductores

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todos los procesos de mejoramiento genético tienen origen en la selección de los reproductores, ya que es importante identificar qué características se desean transmitir de una generación a otra. Muchos de los rasgos de los animales que se aprecian hoy día como la precocidad, tamaño, productividad de leche y ganancia de peso, entre otras, corresponden a procesos de selección de animales que se han venido desarrollando por décadas.
          br
          br
          | Para la definición de las características de los reproductores es importante establecer para qué tipo de explotación se requieren, por ejemplo, si es para carne o para leche, e igualmente tener en cuenta factores como su condición corporal y estado sanitario en general. Además de lo anterior, hay algunos factores que requieren de análisis más especializados (como morfología y motilidad espermática) por lo que es importante contar con el apoyo profesional y tecnológico suficiente para realizarlos.

    p.mb-5(data-aos="fade-left") En ganadería bovina las principales condiciones de los reproductores (machos y hembras) son las siguientes:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 2
      span #[em Características de los animales reproductores]

    .row.justify-content-center
      .col-md-10
        .tabla-a.color-primario.mb-5 
          table
            thead(style="background-color:#DBF9BD")
              tr
                th 
                  .img
                    img(src='@/assets/curso/temas/tema3/3.svg', alt='', style="width:30%; display:inline-block")
                  p #[b Machos]
                th 
                  .img
                    img(src='@/assets/curso/temas/tema3/4.svg', alt='', style="width:30%; display:inline-block")
                  p #[b Hembras]
            tbody
              tr
                td <li> #[b Condición corporal:] presentar buen estado físico, sin lesiones o alteraciones que puedan afectar su actividad reproductiva.</li>
                  <li> #[b Comprobado valor genético:] de ser posible tener registros de sus progenitores y sus calidades.</li>
                  <li> #[b Interés en la monta:] manifestar deseo y capacidad de realizar una monta completa.</li>
                  <li> #[b Órganos reproductivos saludables:] sanos, sin anormalidades visibles y tener buen desarrollo testicular. Prepucio corto y bien direccionado.</li>
                  <li> #[b Calidad espermática:] buena motilidad y morfología.</li>
                td <li> #[b Porcentaje de fertilidad:] fácil concepción e intervalos cortos entre parto - concepción.</li>
                  <li> #[b Aplomos y pezuñas:] pezuñas fuertes y saludables para caminar y soportar sin problemas el proceso de monta.</li>
                  <li> #[b Habilidad materna:] vacas con terneros saludables y con mayor peso al destete.</li>
                  <li> #[b Ubres:] ubres pendulantes y pezones de buen tamaño.</li>
                  <li> #[b Temperamento lechero:] habilidad para la producción de leche.</li>

    p.mb-5(data-aos="fade-left") De acuerdo con FAO la selección de los reproductores se debe relacionar con los objetivos reproductivos, los cuales se definen como la lista de caracteres a mejorar genéticamente al interior de la explotación pecuaria. En el caso de los rumiantes, de acuerdo con la FAO, los principales objetivos reproductivos son los siguientes:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 3
      span #[em Objetivos reproductivos en rumiantes]

    .row.justify-content-center 
      .col-md-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota. FAO (2010).
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th Objetivos/producto
                th Criterios
                th Especificación ulterior
            tbody.text-center
              tr(style="background-color:#DBF9BD")
                <td colspan="3">#[b Rasgos productivos]</td> 
              tr
                <td rowspan="2">Leche</td>
                td.text-bold Cantidad
                td.text-bold Producción de sustancias en leche
              tr
                td Contenido/ calidad
                td % proteína, % grasa, recuento de células somáticas, coagulación de la leche
              tr
                <td rowspan="3">Carne</td>
                td Tasa de crecimiento
                td En distintas edades
              tr
                td Calidad de la canal
                td Contenido en grasa – cociente grasa/ carne
              tr
                td Calidad de la carne
                td Terneza – jugosidad
              tr
                <td rowspan="2">Lana</td>
                td Cantidad
                <td rowspan="2">Longitud – diámetro</td>
              tr
                td Calidad de la fibra
              tr(style="background-color:#DBF9BD")
                <td colspan="3">#[b Rasgos funcionales]</td> 
              tr
                <td rowspan="5">Salud y bienestar</td>
                td Defectos genéticos
                td 
              tr
                td Incidencia de mastitis
                td 
              tr
                td Conformación de ubres
                td Inserción de la ubre, profundidad de la ubre, características del pezón
              tr
                td Problemas en pies y patas
                td
              tr
                td Locomoción
                td Indicador de trastornos de la pezuña
              tr
                <td rowspan="4">Eficiencia reproductiva</td>
                td Fertilidad de la hembra
                <td rowspan="4">Estros visibles, tasa de embarazo Tasa de no retorno, efectos directos y maternos, nacidos muertos</td>
              tr
                td Fertilidad del macho
              tr
                td Facilidad del parto
              tr
                td Número de nacidos vivos
              tr
                <td rowspan="2">Eficiencia del pienso</td>
                td Eficiencia de la conversión del pienso 
                td 
              tr
                td Persistencia de la producción lechera
                td 
              tr
                <td rowspan="2">Facilidad del trabajo</td>
                td Ordeñabilidad 
                td Comportamiento
              tr
                td Velocidad de ordeño
                td 
              tr
                td Longevidad
                td Vida funcional del rebaño
                td 
              
    p(data-aos="fade-left") En la actualidad buena parte del proceso de elección de los reproductores se ha sustituido con mejoras tecnológicas, como es el caso de la inseminación artificial, donde las pajillas que se utilizan para fecundar a las hembras se obtienen de machos reproductores con excelentes características, lo cual indudablemente ha conducido a sistemas productivos cada vez más eficientes, rentables y sostenibles.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Técnicas de manejo

    p.mb-5(data-aos="fade-left") El manejo de los animales dedicados a las actividades reproductivas no es diferente al del resto de ejemplares, salvo algunas consideraciones relacionadas con la preparación para cumplir con esta importante labor como las que se describen a continuación:

    .row.justify-content-center 
      .col-md-10
        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/5.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Alimentación suficiente
              p El animal debe contar con alimento y agua suficientes para su normal desarrollo y crecimiento. Un animal mal alimentado no es recomendable para desarrollar la función reproductora.

        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/6.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Manejo sanitario
              p Es importante que además del manejo sanitario preventivo que se realiza a todos los animales, se efectúen análisis detallados de la salud de los reproductores. En el caso de los bovinos, por ejemplo, se recomienda hacer a los machos exámenes para detectar la presencia de #[i Campilobacter]  y Tricomona ya que estos patógenos pueden derivar en enfermedades que ocasionalmente provocan abortos y muertes embrionarias.

        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Reemplazo de reproductores
              p Es necesario que durante el monitoreo a las actividades reproductivas se analice la necesidad de reemplazar a los reproductores debido a que pueden llegar a generar problemáticas al interior de la unidad productiva. En el caso de los bovinos, debe considerarse reemplazar a los machos reproductores en los siguientes casos: problemas sanitarios confirmados, consanguinidad (machos que pueden preñar a sus hijas) o cuando los reproductores sufran daños físicos que les impidan desarrollar esta actividad (lesiones en las patas o las pezuñas).

        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/8.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Madurez sexual
              p Es importante, dependiendo de la especie, establecer la edad ideal para que el macho o la hembra inicien su etapa reproductiva. No se recomienda emplear animales muy jóvenes o que no tengan un desarrollo fisiológico completo pues esto ocasiona una disminución importante en su vida útil. Tampoco es aconsejable emplear animales longevos pues muchos de ellos a cierta edad ya han perdido parte de su capacidad reproductiva.

        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/9.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Periodos de descanso
              p En el caso de los bovinos, en explotaciones donde el toro permanece todo el tiempo con las vacas, se recomienda que por cada 25 a 30 hembras se tenga un toro por un periodo de dos meses. Al cabo de este tiempo se recomienda dejar descansar al reproductor por un mes.

        .tarjeta.p-4.mb-3(style="background-color:#DBF9BD")
          .row.justify-content-center.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/10.svg', alt='Texto que describa la imagen')
            .col-md-10
              h5 Preñez
              p En esta etapa del proceso la hembra debe recibir una alimentación adecuada, especialmente en los últimos meses, con el fin de asegurar un buen desarrollo del feto. A pesar de los cuidados en la alimentación, se debe evitar la obesidad en los animales pues esto puede ocasionar problemas durante el parto. En el caso de las yeguas, no se recomienda que tengan jornadas extensas de trabajo a partir del sexto mes, aunque sí es recomendable que se ejerciten caminando.

    p(data-aos="fade-left") Un manejo adecuado de los reproductores contribuirá a aumentar la efectividad de las montas y una mayor vida útil de los animales. Igualmente, de esta forma se garantizarán individuos con buen peso al nacer, con mayor resistencia a las enfermedades y con características que mejorarán la productividad de la explotación pecuaria.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Celo

    .row.justify-content-center.align-items-center 
      .col-md-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')
      .col-md-8
        p(data-aos="fade-left") Como ya se indicó en el tema anterior relacionado con la reproducción natural en las especies pecuarias, dentro de los procesos de manejo reproductivo de las especies pecuarias el celo, o ciclo estral, es tal vez uno de los aspectos más importantes, pues su detección oportuna asegura una mayor tasa de fecundidad y por ende una mayor tasa reproductiva, que en definitiva es lo que más interesa al productor. Existiendo diferencias entre especies en la manifestación del proceso.
        p(data-aos="fade-left") Una de las actividades que contribuye al éxito del programa de reproducción es la detección del celo, pues esta determina el momento preciso en el cual se debe hacer la cubrición o monta a la hembra por parte del macho (en procesos de monta natural) o la inseminación artificial, en explotaciones donde se desarrolla este proceso. Cada especie tiene sus diferentes formas de manifestar el celo, pero algunos comportamientos son comunes a las hembras que están iniciando el celo y pueden ser indicativo de que el animal está atravesando por esta etapa. Algunos de esos signos son los siguientes:

    .titulo-sexto.color-acento-contenido.offset-1.mt-5
      h5 Figura 1
      span #[em Detección de celo]

    .row.justify-content-center 
      .col-md-10.desktop
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/12.svg', alt='Texto que describa la imagen')
    .row.justify-content-center 
      .col-md-10.movil
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/13.svg', alt='Texto que describa la imagen')

    p.mb-5.mt-5(data-aos="fade-left") Además de los signos que pueden indicar que la hembra está en celo, es común la utilización de algunos métodos para la detección los cuales se basan en el comportamiento de los animales y en su propia biología. Dentro de los métodos más comunes están los siguientes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/14.svg' alt='AvatarTop')
        h2.text-center Toros calentadores
        p.text-center Para esto se utilizan machos a los cuales quirúrgicamente se les ha quitado la habilidad de reproducirse (desviación de pene o vasectomía). Estos machos tienen la función de marcar a las hembras del hato que se encuentren en calor.

      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/15.svg' alt='AvatarTop')
        h2.text-center Hembras androgenizadas
        p.text-center Son hembras con características masculinas las cuales carecen de valor comercial para la reproducción. Estas hembras se tratan con hormonas (testosterona) para cumplir la función de marcadoras dentro del hato con la ayuda de un chimball.

      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/16.svg' alt='AvatarTop')
        h2.text-center Valla receladora
        p.text-center Se utiliza principalmente en yeguas. Consiste en una valla que separa a la hembra del macho pero les permite estar en contacto. La yegua en celo manifiesta receptividad hacia el macho.

      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/17.svg' alt='AvatarTop')
        h2.text-center Presentación del macho
        p.text-center En porcicultura se acostumbra pasear el macho frente a las hembras para identificar signos de aceptación. En caso de encontrar alguna hembra con estos signos esta se traslada al corral del macho para la cópula.
    h3(data-aos="fade-left") Método de cubrición
    p.mb-5(data-aos="fade-left") Los métodos de cubrición más empleados en la industria pecuaria son la monta natural, monta dirigida, monta controlada y la inseminación artificial. La elección del método a emplear en la unidad productiva depende básicamente de los siguientes elementos:

    .row.justify-content-center.align-items-center 
      .col-md-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/18.jpg', alt='Texto que describa la imagen')
      .col-md-8
        .cajon.p-4.mb-3.text-white(style="background-color:#3B5620")
          p.text-small(data-aos="fade-left") #[b La disponibilidad de material genético para realizar la inseminación artificial:] no en todos los lugares se tiene acceso a las pajillas que contienen el semen de los reproductores seleccionados ni se cuenta con las condiciones para su conservación.
        .cajon.p-4.mb-3.text-white(style="background-color:#3B5620")
          p.text-small(data-aos="fade-left") #[b El tipo de explotación desarrollada:] en sistemas de economía campesina o de autoabastecimiento es más común el empleo de métodos de monta natural, especialmente por los menores costos.
        .cajon.p-4.mb-3.text-white(style="background-color:#3B5620")
          p.text-small(data-aos="fade-left") #[b La disponibilidad de recursos e infraestructura para las labores de monta:] en algunas unidades productivas no se cuenta con los recursos ni las instalaciones para el desarrollo de procesos de inseminación artificial, por lo que se debe recurrir a otros métodos.  
        .cajon.p-4.mb-3.text-white(style="background-color:#3B5620")
          p.text-small(data-aos="fade-left") #[b Suficiente cantidad de machos reproductores:] en unidades productivas donde existe un número suficiente de machos reproductores es posible desarrollar métodos de monta natural.
        .cajon.p-4.mb-3.text-white(style="background-color:#3B5620")
          p.text-small(data-aos="fade-left") #[b Condiciones de peso, edad y estado de desarrollo de las hembras:] en algunos casos, especialmente en cerdos, los machos reproductores son demasiado pesados para servir a las hembras, por lo que se deben utilizar métodos alternativos a la monta natural o a la monta dirigida.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Monta natural
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la monta natural el reproductor cubre a una hembra y deposita su semen dentro de ella con el fin de conseguir la preñez. Este es uno de los métodos más utilizados, pues implica bajos costos y menor mano de obra. La monta natural puede ser libre o dirigida. En el primero de los casos, los animales pueden copular en un ambiente libre sin ningún tipo de intervención. En el segundo método, se lleva a la hembra al corral donde se aloja el macho con el fin de evitar que este gaste energía innecesariamente y pueda cubrir a varias hembras en cada jornada.
          br
          br
          | En cuanto a la monta controlada, se tiene que esta es común en los sistemas de producción bovina y consiste en el control de la época de monta de las vacas o de los meses que las vacas y los toros permanecen juntos. Este método permite que los partos se den en épocas similares las cuales deben corresponder con periodos de abundancia de alimento a fin de evitar mermas en la producción.

    p.mb-5(data-aos="fade-left") En los procesos de monta dirigida es importante tener en cuenta lo siguiente:

    .row.justify-content-center 
      .col-md-6
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check
              | Preparar el suelo del corral con suficiente viruta o cascarilla para evitar que los animales se resbalen durante la cópula.
              
      .col-md-6
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check
              | En los machos asegurar el aseo de la zona prepucial. Incluso es recomendable utilizar agua y posteriormente secar.
    .row.justify-content-center 
      .col-md-6
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check
              | En la hembra limpiar y lavar, si es necesario, la zona alrededor de la vulva. Igualmente, si se lava se debe secar. 
      .col-md-6
        .tarjeta.p-4.mb-3(style="background-color:#FFFAD0")
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-check
              | Se debe permitir un espacio para que los animales interactúen y se dispongan para la cópula.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_5 3.5 Inseminación artificial

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inseminación artificial básicamente se puede definir como la introducción de líquido seminal obtenido del macho en los conductos genitales de la hembra a través de métodos artificiales. Para que el proceso de inseminación artificial se dé, es necesario que la hembra esté en celo. Incluso es recomendable que la inseminación se realice 12 horas después de iniciado el celo. Por su parte, el semen con el que se realiza el proceso de inseminación se obtiene mediante la estimulación del macho, posteriormente este es conservado y almacenado empleando técnicas de crioconservación las cuales garantizan la viabilidad del material genético por un tiempo determinado.
          br
          br
          
    p(data-aos="fade-left") Este método es ampliamente utilizado en explotaciones porcícolas, bovinas, equinas y caprinas, entre otras, en las cuales ha dejado excelentes resultados. Dentro de las principales ventajas que tiene están las siguientes:
    
    .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="1")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/21.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Reducción en el riesgo de trasmisión de enfermedades de trasmisión sexual.
        .row.justify-content-center.align-items-center(titulo="2")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/22.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Se logra una rápida trasmisión de las características deseadas de padres a hijos.
        .row.justify-content-center.align-items-center(titulo="3")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/23.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Se evita el desgaste físico de los verracos (en el caso de los cerdos) al disminuir sus desplazamientos.
        .row.justify-content-center.align-items-center(titulo="4")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/24.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Se reducen los riesgos de daños o lesiones a los animales durante la monta natural.
        .row.justify-content-center.align-items-center(titulo="5")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/25.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Se mejora la calidad de los ejemplares en la unidad productiva al asegurar el alto valor genético de los reproductores.
        .row.justify-content-center.align-items-center(titulo="6")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/26.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Mejora la uniformidad de los animales que se producen en la granja.
        .row.justify-content-center.align-items-center(titulo="7")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/27.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Reduce el consumo de forraje y facilita el manejo de la unidad productiva al excluir a los toros del proceso.
        .row.justify-content-center.align-items-center(titulo="8")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/28.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Facilita el diligenciamiento de registros y la trazabilidad de las actividades de reproducción.
        .row.justify-content-center.align-items-center(titulo="9")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/29.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Mejora el control de los parámetros reproductivos.
    
    p.mb-5(data-aos="fade-left") Al igual que ocurre con otros sistemas reproductivos, la inseminación artificial tiene desventajas, las cuales limitan su implementación en todas las unidades productivas:

    .tarjeta.p-4.mb-5(style="background-color:#DBF9BD")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="1")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/30.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p La tasa de preñez es menor que la de los procesos de monta natural.
        .row.justify-content-center.align-items-center(titulo="2")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/31.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Implica mayor inversión en capacitación del personal para la realización de los procesos.
        .row.justify-content-center.align-items-center(titulo="3")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/32.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Requiere de instalaciones apropiadas para el desarrollo de las labores. 
        .row.justify-content-center.align-items-center(titulo="4")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/33.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Es una tarea delicada que puede tornarse compleja en entornos difíciles.
        .row.justify-content-center.align-items-center(titulo="5")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/34.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Exige mayor seguimiento a los celos de las hembras para identificar el momento preciso en el que se realizará la inseminación. 
        .row.justify-content-center.align-items-center(titulo="6")
          .col-md-2
            figure
              img(src='@/assets/curso/temas/tema3/35.svg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            p Su empleo en regiones donde sea complejo garantizar las condiciones de frío limita su uso.

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
