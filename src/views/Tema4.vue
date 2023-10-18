<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Normativa Seguridad y Salud en el Trabajo
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de los aspectos que es transversal a la producción pecuaria y que por lo tanto debe ocupar buena parte de la atención del equipo de trabajo de la granja es el de la Seguridad y Salud en el Trabajo (SST), pues todas las actividades que se desarrollan deben tener en cuenta la normatividad y las recomendaciones que existen en este sentido.
          br
          br
          | El creciente interés de las empresas y las instituciones del Estado por formalizar las explotaciones productivas ha llevado a que algunos protocolos relacionados con la protección de la salud y el bienestar de los trabajadores sean de obligatorio cumplimiento, con lo cual se contribuye a disminuir los accidentes, minimizar los riesgos y reducir las afectaciones al personal que labora en este tipo de industrias.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1  Interpretación
    p.mb-5(data-aos="fade-left") La normativa relacionada con la SST en Colombia es bastante amplia y abarca una gran cantidad de leyes, decretos y resoluciones donde se destaca como principal referente el Código Sustantivo del Trabajo, el cual se ha convertido en un documento que regula las relaciones entre empleados y empleadores. La legislación relacionada con la SST en Colombia se puede agrupar de la siguiente manera:

    .row.justify-content-center.align-items-center
      .col-md-4.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/2.png', alt='Texto que describa la imagen')
      .col-md-8.mb-0
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            TabsA.color-acento-botones.mb-5
              .tarjeta.color-secundario--borde.p-4(titulo="Códigos")
                h4 Códigos
                p Código sustantivo del trabajo. 1951. Regulación de las relaciones laborales.
              .tarjeta.color-secundario--borde.p-4(titulo="Resoluciones")
                h4 Resoluciones
                <li>Resolución 2400 1979 por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.</li> 
                <li>Resolución 2013 1986 por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.</li> 
                <li>Resolución 1792 1990 por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.</li> 
                <li>Resolución 1401 2007 por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.</li> 
                <li>Resolución 2346 2007 por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.</li> 
                <li>Resolución 2646 2008 por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.</li> 
                <li>Resolución 0652 2012 por la cualquier se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas y se dictan otros disposiciones.</li> 
                <li>Resolución 1409 2012 por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.</li> 
                <li>Resolución 0312 2019 por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.</li> 

              .tarjeta.color-secundario--borde.p-4(titulo="Decretos")
                h4 Decretos
                p Decreto-Ley 1295 1994 por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
              .tarjeta.color-secundario--borde.p-4(titulo="Leyes")
                h4 Leyes
                p Ley 1010 2006 por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.
            //- LineaTiempoD.color-secundario
            //-   p.text-small(numero="1" titulo="Códigos") Código sustantivo del trabajo. 1951. Regulación de las relaciones laborales.
              
            //-   p.text-small(numero="2" titulo="Resoluciones") Resolución 2400 1979 por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 2013 1986 por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 1792 1990 por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 1401 2007 por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 2346 2007 por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 2646 2008 por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 0652 2012 por la cualquier se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas y se di tan otros disposiciones.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 1409 2012 por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.
              //- p.text-small(numero="2" titulo="Resoluciones") Resolución 0312 2019 por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.
                
              p.text-small(numero="3" titulo="Decretos") Decreto-Ley 1295 1994 por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
              p.text-small(numero="4" titulo="Leyes") Ley 1010 2006 por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.

    p.mt-3(data-aos="fade-left") En lo relacionado con la legislación sobre SST es posible identificar elementos importantes como la #[b Resolución 1792 de 1990], que regula lo referente a la exposición al ruido, o la #[b Resolución 2646 de 2008], que se enfoca en el riesgo psicosocial, el cual hasta ese entonces no se registraba dentro de los factores de riesgo. Al analizar en detalle cada una de las normas existentes, es posible establecer que estas se han presentado como respuesta a problemáticas expuestas por los trabajadores, las cuales a través de ejercicios de participación ciudadana y legislación se han logrado reglamentar para el bienestar de empleadores y empleados.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Tipos de riesgo
    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/3.png', alt='Texto que describa la imagen')
      .col-md-8.mb-5
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          p Uno de los elementos primordiales de la Seguridad y Salud en el Trabajo es el de los riesgos, en este caso laborales, ya que todas las actividades humanas sin importar su carácter implican algún tipo de riesgo durante su ejecución. Así las cosas, un riesgo se define como la combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por éstos (Ministerio de Trabajo, 2016). Teniendo en cuenta el riesgo como un factor que hace parte de la vida, la SST se encarga de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo.
    p.mb-5(data-aos="fade-left") La normatividad vigente en materia de SST identifica 5 clases de riesgo, los cuales definen el valor de la cotización que el trabajador debe pagar a la aseguradora de riesgos laborales (ARL). Estas 5 clases de riesgo son las siguientes:

    .titulo-sexto.color-acento-contenido.offset-1
      h5 Tabla 4
      span #[em Clases de riesgos laborales]

    .row.justify-content-center 
      .col-md-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")
              tr
                th Clase de riesgo
                th Tarifa
                th Actividades
            tbody
              tr
                td.text-center I
                td.text-center 0,522 %
                td Financieras, trabajos de oficina, administrativos, centros educativos, restaurantes.
              tr
                td.text-center II
                td.text-center 1,044 %
                td Algunos procesos manufactureros como fabricación de tapetes, tejidos, confecciones.
              tr
                td.text-center III
                td.text-center 2,436 %
                td Procesos manufactureros como la fabricación de agujas, alcoholes y artículos de cuero.
              tr
                td.text-center IV
                td.text-center 4,350 %
                td Fabricación de aceites, cervezas, vidrios, procesos de galvanización y transportes.
              tr
                td.text-center V
                td.text-center 6,960 %
                td Areneras, manejo de asbesto, bomberos, manejo de explosivos, construcción y explotación petrolera.
    
    p(data-aos="fade-left") Como en todo proceso con empresas aseguradoras, los mayores niveles de riesgo implican mayor monto en el pago de las pólizas. Es por esto que los trabajadores de las áreas del petróleo, los explosivos o la construcción deben cancelar pólizas que equivalen al 6,960 % de su ingreso base de cotización (IBC), mientras que un empleado de riesgo I (trabajos de oficina, administrativos) paga sobre el 0,522 % de su IBC. 
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Elementos de protección personal y colectiva
    .row.justify-content-center.align-items-center
      .col-md-4.mb-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/4.png', alt='Imagen decorativa')
      .col-md-8
        .cajon.p-4.mb-3(style="background-color:#FFFAD0")
          p(data-aos="fade-left") Una parte esencial de la SST es la protección de la salud de los trabajadores frente a los posibles riesgos asociados con su labor, por lo que la identificación de los riesgos y la gestión necesaria para su mitigación se constituye en su esencia.
          p(data-aos="fade-left") Dentro de la gestión de los riesgos se toman medidas de todo tipo, las cuales se enfocan en evitar que ocurran accidentes que puedan afectar a los trabajadores y demás personal presente en las instalaciones. Estas medidas pueden significar la eliminación de un peligro, su sustitución, la implementación de controles de ingeniería, los controles administrativos o la utilización de los EPP (elementos de protección personal).

    .row.justify-content-center.mt-5 
      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/5.png', alt='Imagen decorativa')
          h5.text-center Casco con barbuquejo
          p Casco de seguridad dieléctrico tipo i y ii clase e, con ajuste de rachet, tafilete en nylon, 4 apoyos, incluye barbuquejo de 4 apoyos, no ventilado especial para trabajo en alturas.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/6.png', alt='Imagen decorativa')
          h5.text-center Gafas de seguridad 
          p Elaboradas en policarbonato, con filtro UV. Protegen contra impactos moderados, ideales para la operación de maquinaria agrícola y la realización de labores manuales donde exista riesgo de partículas voladoras.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/7.png', alt='Imagen decorativa')
          h5.text-center Tapabocas desechables termosellado
          p Buenas propiedades mecánicas y repelencia a los líquidos.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/8.png', alt='Imagen decorativa')
          h5.text-center Tapabocas Kn95
          p Cómodo, plegable y ergonómico, 5 capas de filtración reforzada. Fibra de polipropileno termosellado.

    .row.justify-content-center.mt-5
      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/9.png', alt='Imagen decorativa')
          h5.text-center Tapabocas industrial con doble filtro
          p Especial para aplicación de sustancias desinfectantes y plaguicidas. Ajustable con filtros removibles al terminar su vida útil.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/10.png', alt='Imagen decorativa')
          h5.text-center Overol de seguridad ignífugo
          p Resistencia garantizada contra la llama. Protección contra el calor convectivo y radiante. Cinta reflectante para mayor seguridad.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/11.png', alt='Imagen decorativa')
          h5.text-center Arnés de seguridad
          p Equipo de protección para prevenir la caída del personal que labora en alturas. Obligatorio para trabajos como poda de árboles, reparaciones locativas y mantenimiento de infraestructura.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/12.png', alt='Imagen decorativa')
          h5.text-center Traje fitosanitario
          p Ideal para aplicación de productos desinfectantes y plaguicidas. Material: tejido microporoso.

    .row.justify-content-center.mt-5      
      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/13.png', alt='Imagen decorativa')
          h5.text-center Delantal industrial en PVC
          p Protección frente a la humedad. Liviano, fácil de llevar.
          
      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/14.png', alt='Imagen decorativa')
          h5.text-center Guantes tipo vaqueta
          p Guante corto reforzado en palma para anticorte. Especial para trabajos en soldadura e industria. Manipulación de herramientas, equipos y cuerdas.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/15.png', alt='Imagen decorativa')
          h5.text-center Guantes de nitrilo
          p Guantes de material sintético para labores delicadas. Protección frente a agentes externos.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/16.png', alt='Imagen decorativa')
          h5.text-center Guantes de caucho - látex
          p Protección para la realización de diversas labores de aseo y desinfección de áreas. Manipulación de animales enfermos.

    .row.justify-content-center.mt-5
      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/17.png', alt='Imagen decorativa')
          h5.text-center Botas de seguridad punteras
          p Suela en poliuretano, cuello impermeable, puntera de seguridad, dieléctrica.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/18.png', alt='Imagen decorativa')
          h5.text-center Bota de caucho
          p Especial para proteger del agua y el lodo. Liviana, flexible. Caña alta.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/19.png', alt='Imagen decorativa')
          h5.text-center Protector auditivo
          p Diadema acolchada. Diseñado para aislar los oídos del usuario de las fuentes de ruido.

      .col-md-6.mb-3
        .cajon.p-4.mb-3(style="background-color:#DBF9BD; width:100%; height:100%")
          figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/20.png', alt='Imagen decorativa')
          h5.text-center Careta para esmerilar
          p Visor en policarbonato con suspensión escualizable de ajuste. Banda anti - sudor.
    
    p.mt-5(data-aos="fade-left") Cada uno de los elementos empleados en la actividad productiva, dentro de sus manuales de operación o fichas técnicas, definen el tipo de protección personal que se debe usar para hacer una manipulación segura. Es importante identificar las hojas de seguridad o etiquetas informativas sobre las formas de uso y el equipo de protección personal que se debe utilizar en determinadas faenas.

    h3 Elementos de protección colectiva

    p.mb-3(data-aos="fade-left") Así como existen elementos para la protección personal, es decir, para cada individuo, en la gestión de riesgos también es posible emplear elementos de protección colectiva, los cuales se encargan de proteger de forma simultánea a varios trabajadores frente a algún determinado riesgo.
    p.mb-3(data-aos="fade-left") Entre los elementos de protección colectiva más comúnmente empleados se encuentran los siguientes:

    .row.justify-content-center.mb-3
      .col-10
        .row.justify-content-center.align-items-center
          .col-md-4.mb-2
            figure.mb-3(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/21.jpg', alt='Imagen decorativa')
          .col-md-8
            .cajon.p-3.mb-3(style="background-color:#FFFAD0")
              <li>Escaleras y pasamanos.</li>
              <li>Barreras de protección contra el calor.</li>
              <li>Redes para caídas.</li>
              <li>Extintores de incendios.</li>
              <li>Vallas contra caída de objetos.</li>
              <li>Sistemas de aireación de áreas.</li>
              <li>Sistemas de insonorización.</li>
              <li>Delimitación de áreas - cercos perimetrales.</li>
              <li>Señalizaciones e indicativos.</li>
    
    p(data-aos="fade-left") Parte de la gestión de riesgos consiste en la identificación de los riesgos colectivos y en el desarrollo de las acciones necesarias para minimizar estas situaciones en los ambientes de trabajo. Igualmente, estas actividades deben combinarse con la capacitación a los trabajadores y la inducción y reinducción permanente sobre las medidas de autocuidado.
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_4 4.4 Métodos de prevención de accidentes, incidentes y enfermedades laborales
    p(data-aos="fade-left") Para identificar los métodos de prevención de accidentes, incidentes y enfermedades laborales es primordial identificar cada uno de estos conceptos.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 2
      span #[em Diferencia entre accidente, incidente y enfermedad laboral]

    .row.justify-content-center 
      .col.desktop
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/22.png', alt='En la figura, se definen conceptualmente las principales diferencias que hay entre los términos: accidente, incidente y enfermedad laboral.')

    .row.justify-content-center 
      .col.movil
        figure.mb-3(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/23.png', alt='En la figura, se definen conceptualmente las principales diferencias que hay entre los términos: accidente, incidente y enfermedad laboral.')

    .row.justify-content-center.mt-3.mb-3 
      p(data-aos="fade-left") En vista de que tanto accidentes como incidentes son sucesos repentinos, no hay forma de predecir su ocurrencia, pero sí es posible tomar las precauciones necesarias para prevenirlos, esto quiere decir, identificar los riesgos y actuar en consecuencia para mitigarlos, teniendo en cuenta el ciclo de mejora continua o ciclo PHVA (Planear – Hacer – Verificar – Actuar).
      p(data-aos="fade-left") A continuación, algunas recomendaciones para la prevención de accidentes, incidentes y enfermedades laborales.

    h3.mb-5 Recomendaciones para la prevención de accidentes, incidentes y enfermedades laborales

    .row.justify-content-center.align-items-center 
      .col-md-4.mb-3
        figure.mb-3(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/24.png', alt='')
      .col-md-8.mb-3
        .tarjeta.p-4.mb-3.text-white(style="background-color:#3B5620")
          h5 Prevención de accidentes
          <li>Realizar jornadas de capacitación e inducción al personal sobre temas de SST.</li>
          <li>Conocer los manuales de operación y fichas técnicas de equipos, herramientas e insumos.</li>
          <li>Utilizar los equipos de protección personal de manera correcta.</li>
          <li>Identificar los riesgos potenciales.</li>
          <li>Contar con personal capacitado para el desarrollo de determinadas labores técnicas (electricidad, plomería, trabajo en altura).</li>
        .tarjeta.p-4.mb-3(style="background-color:#FFF59D")
          h5 Prevención de incidentes
          <li>Identificar puntos críticos y posibles riesgos para la integridad de las personas.</li>
          <li>Apegarse a los protocolos establecidos para el desarrollo de actividades dentro de la empresa pecuaria.</li>
          <li>Generar una cultura de la seguridad y la responsabilidad.</li>
          <li>Realizar jornadas de inducción y reinducción al personal en temas de SST.</li>
        .tarjeta.p-4.mb-3.text-white(style="background-color:#1B3F5E")
          h5 Prevención de enfermedades laborales
          <li>Evitar malas posturas en el desarrollo de la actividad laboral.</li>
          <li>Evitar movimientos repetitivos.</li>
          <li>Realizar pausas activas.</li>
          <li>Utilizar equipos de protección personal.</li>
          <li>Acudir periódicamente a los chequeos médicos de rutina.</li>
          <li>Seguir protocolos de bioseguridad.</li>
          <li>Informar a sus superiores sobre condiciones inseguras en el puesto de trabajo o en áreas de la empresa pecuaria.</li>
    
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_5 4.5 Condiciones inseguras

    .cajon-b.color-primario.p-3.mb-5
      p(data-aos="fade-left").mb-0 En las actividades laborales, indistintamente del sector económico, existen lo que se conoce como condiciones inseguras, las cuales se definen como aquellas situaciones que se presentan en el lugar de trabajo y se caracterizan por la presencia de riesgos no controlados que pueden generar accidentes. Igualmente, además de las condiciones inseguras, existen los actos inseguros como los que se encuentran a continuación, los cuales son acciones u omisiones cometidas por las personas; estas posibilitan que se produzcan accidentes y se hacen por: impericia, imprudencia o negligencia. (ARL Positiva, 2018). 

    .row.justify-content-center
      .col-10
        .row.justify-content-center.align-items-center
          .col-md-5.mb-3
            figure.mb-3(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/25.jpg', alt='')
          .col-md-7.mb-3
            .cajon.p-4.mb-3(style="background-color:#FFFAD0")
              <li>Falta de equipos de protección.</li>
              <li>Daños en equipos o herramientas.</li>
              <li>Daños en instalaciones locativas.</li>
              <li>Problemas eléctricos, exposición de cables o instalaciones.</li>
              <li>Restricciones de espacio para los trabajadores.</li>
              <li>Falta de ventilación y aireación.</li>
              <li>Atmósferas concentradas.</li>
              <li>Falta de equipos de protección colectiva.</li>
              <li>Desorden y suciedad en el entorno de trabajo.</li>
    p.mt-3(data-aos="fade-left") Es deber del trabajador reportar estas condiciones inseguras al empleador a fin de que se tomen las medidas correspondientes. Igualmente, se deben reportar los actos inseguros, ya que la combinación de estos dos elementos puede resultar en situaciones extremadamente peligrosas para el trabajador, sus compañeros y la integridad de la unidad productiva.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_6 4.6 Programa de capacitación en primeros auxilios

    p.mb-3(data-aos="fade-left") Dentro de las unidades productivas pecuarias es normal que se presenten accidentes, pues a pesar de hacer una muy buena gestión de riesgos existen situaciones fortuitas que pueden afectar la salud de los trabajadores, por lo que es necesario contar con programas y políticas empresariales dedicadas a la atención de estas emergencias, como lo es la atención en primeros auxilios.
    p.mb-5(data-aos="fade-left") Para el personal de la empresa pecuaria, es fundamental el conocimiento sobre cómo actuar frente a determinadas situaciones, ya que las acciones que se tomen en esos primeros segundos tras la ocurrencia del accidente pueden significar la diferencia entre la vida y la muerte. En este orden de ideas, es absolutamente recomendable desarrollar un programa de capacitación en primeros auxilios que contenga como mínimo los siguientes aspectos:


    .row.justify-content-center 
      .col-md-10.desktop 
        ImagenInfografica.color-secundario.mb-5(data-aos="flip-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/26.svg', alt='En la infografía relacionada con el programa de primeros auxilios, se indican las acciones principales a que hay lugar cuando se debe aplicar este tipo de programas, teniendo en cuenta: el botiquín, los signos vitales, reanimación cardiopulmonar RCP, obstrucción de vías aéreas, infarto, hemorragia, heridas, quemaduras y fracturas. Así como de las intoxicaciones.')
              

          .tarjeta.color-acento-botones.p-3(x="23.5%" y="11.3%" numero="")
            .h5.mb-2 Botiquín
            p Elementos que se deben tener en el botiquín y modo de empleo.
          .tarjeta.color-acento-botones.p-3(x="80.3%" y="11.3%" numero="")
            .h5.mb-2 Signos vitales
            p Identificación de signos vitales: pulso, temperatura, frecuencia respiratoria, presión arterial.
          .tarjeta.color-acento-botones.p-3(x="8.7%" y="30%" numero="")
            .h5.mb-2 Reanimación cardiopulmonar RCP
            p Utilidad - cuándo emplearla - métodos de aplicación - manejo de desfibrilador automático.
          .tarjeta.color-acento-botones.p-3(x="88.5%" y="30.6%" numero="")
            .h5.mb-2 Intoxicaciones
            p Identificación de sustancias tóxicas - manejo.
          .tarjeta.color-acento-botones.p-3(x="8.7%" y="61.3%" numero="")
            .h5.mb-2 Obstrucción de vías aéreas
            p Identificación de obstrucciones - aplicación de maniobra #[i Heimlich].
          .tarjeta.color-acento-botones.p-3(x="88.4%" y="63.2%" numero="")
            .h5.mb-2 Hemorragias
            p Tipos de hemorragias - tratamiento - aplicación de torniquetes.
          .tarjeta.color-acento-botones.p-3(x="23.5%" y="88.9%" numero="")
            .h5.mb-2 Heridas, quemaduras y fracturas
            p Identificación - manejo - inmovilización.
          .tarjeta.color-acento-botones.p-3(x="73.5%" y="88.9%" numero="")
            .h5.mb-2 Infarto
            p Cómo identificarlo - qué hacer - cómo actuar frente a un infarto.

    .row.justify-content-center 
      .col-md-10.movil 
        figure
          img(src='@/assets/curso/temas/tema4/27.svg', alt='En la infografía relacionada con el programa de primeros auxilios, se indican las acciones principales a que hay lugar cuando se debe aplicar este tipo de programas, teniendo en cuenta: el botiquín, los signos vitales, reanimación cardiopulmonar RCP, obstrucción de vías aéreas, infarto, hemorragia, heridas, quemaduras y fracturas. Así como de las intoxicaciones.')

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
