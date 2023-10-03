export default {
  global: {
    componenteFormativo:
      'Monitoreo de programas de alimentación, sanidad y reproducción animal.',
    descripcionCurso:
      'Para los consumidores de productos pecuarios la calidad es sumamente importante y, en consecuencia, todas las actividades en la unidad productiva deben estar en función de ella. Es así como el monitoreo de los procesos que se dan al interior de las explotaciones contribuye a que estas sean más eficientes, sostenibles y logren productos acordes con las exigencias del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan Sanitario preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Bioseguridad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de plagas y vectores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Limpieza y desinfección de instalaciones y equipos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Manual de bioseguridad',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Productos de limpieza y desinfección',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de Alimentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programa de Reproducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características de los Reproductores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de manejo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Celo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Monta natural',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Inseminación artificial',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa Seguridad y Salud en el Trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Interpretación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de riesgo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Elementos de protección personal y colectiva',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Métodos de prevención de accidentes, incidentes y enfermedades laborales',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Condiciones inseguras',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Programa de capacitación en primeros auxilios',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normativa Ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Recolección y clasificación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manejo y desactivación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Transporte interno y disposición de residuos peligrosos y no peligrosos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Parámetros técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos y características',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos de cálculo',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Tipos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Características',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Registros y Documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Tipos',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Formatos',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Inventarios',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Listas de chequeo',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Técnica de diligenciamiento',
            hash: 't_9_5',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_20_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protocolo',
      referencia: 'Fundación Alpina (2014). Protocolo de ordeño en bovinos.',
      tipo: 'Cartilla ilustrativa sobre protocolos',
      link: 'https://issuu.com/fundacionalpina/docs/1',
    },
    {
      tema: 'Control de plagas y vectores',
      referencia:
        'Federación Nacional de Avicultores, Ministerio de Agricultura y Desarrollo Rural (2016). Control de plagas en granjas avícolas. Video [YouTube].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BImTIOu3rQo',
    },
    {
      tema: 'Control de plagas y vectores',
      referencia:
        'Asociación Colombiana de Porcicultores, Fondo Nacional de la Porcicultura (2017). Control de plagas en granjas porcícolas. Video [YouTube].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cOguzwS1yyA',
    },
    {
      tema: 'Manual de bioseguridad',
      referencia:
        'Resolución 3651 de 2014. [Instituto Colombiano Agropecuario ICA]. –Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de posturay/o levante y se dictan otras disposiciones. 13 de noviembre de 2014.',
      tipo: 'Resolución del ICA',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx ',
    },
    {
      tema: 'Manual de bioseguridad',
      referencia:
        'Resolución 2640 de 2007. [Instituto Colombiano Agropecuario ICA]. Por la cual se reglamenta las Condiciones sanitarias y de inocuidad en la producción primaria de ganado porcino destinado al sacrificio para consumo humano. 28 de septiembre de 2007.',
      tipo: 'Resolución ICA',
      link: 'https://www.porkcolombia.co/resolucion-ica-2640-de-2007/',
    },
    {
      tema: 'Manual de bioseguridad',
      referencia:
        'Resolución 02341 de 2007. [Instituto Colombiano Agropecuario ICA].   Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. 23 de agosto de 2007 https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
      tipo: 'Resolución ICA',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      tema: 'Inseminación artificial',
      referencia:
        'TvAgro (2018). Cómo realizar el proceso de inseminación artificial en bovinos. Video [YouTube].   https://www.youtube.com/watch?v=13Y-oGONdBA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=13Y-oGONdBA',
    },
    {
      tema: 'Elementos de protección personal y colectiva',
      referencia:
        'Elearning group (2017). Equipo de protección personal. Video [YouTube].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=B0SFi5WxWPs ',
    },
    {
      tema: 'Elementos de protección personal y colectiva',
      referencia:
        'Fundación tecnológica colombo-germana (2015). Clasificación, etiquetado y manipulación de productos químicos. Video [YouTube].   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YOYfaGCXoyM',
    },
    {
      tema: 'Manejo y desactivación',
      referencia:
        'Federación Nacional de Avicultores de Colombia FENAVI - Ministerio de Agricultura y Desarrollo Rural (2016). Compostaje de mortalidad. Video [YouTube]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fd5mo5Pr1pQ',
    },
    {
      tema: 'Manejo y desactivación',
      referencia:
        'Corporación Campo Limpio (2021). Programa de manejo de envases vacíos. Video [YouTube]. ',
      tipo: 'Página web',
      link: 'https://campolimpio.org/#residuos',
    },
    {
      tema: 'Parámetros técnicos',
      referencia:
        'Itza Ortiz, M. (2020). Parámetros productivos en la avicultura. Bm Editores.',
      tipo: 'Página Web',
      link:
        'https://bmeditores.mx/avicultura/parametros-productivos-en-la-avicultura/',
    },
    {
      tema: 'Plan de mejoramiento',
      referencia:
        'LTeam Formación Virtual (2018). Ciclo PHVA.  Video [YouTube]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jE5gx6NLP68',
    },
    {
      tema: 'Plan de contingencia',
      referencia:
        'Fondo para el Financiamiento del Sector Agropecuario FINAGRO (2019). Riesgos agropecuarios. Video [YouTube].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=on3TD-HDG_k',
    },
    {
      tema: 'Registros y documentación.',
      referencia:
        'Federación Nacional de Avicultores de Colombia FENAVI, Ministerio de Agricultura y Desarrollo Rural, Italcol (2020). Manejo de registros productivos. Video [YouTube].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UQpdmbqynfU',
    },
    {
      tema: 'Listas de chequeo',
      referencia:
        'Instituto Colombiano Agropecuario ICA (2019). Lista de chequeo para predios productores de porcinos con destino al sacrificio.',
      tipo: 'Documento PDF',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/listado-de-predios-certificados-en-bpg/forma-3-519-lista-de-chequeo-predios-productores-d.aspx',
    },
    {
      tema: 'Comunicación',
      referencia:
        'González P. (2021). ¿Cuáles son los elementos de la comunicación? ',
      tipo: 'Página Web',
      link:
        'https://www.unprofesor.com/lengua-espanola/cuales-son-los-elementos-de-la-comunicacion-2447.html',
    },
  ],
  glosario: [
    {
      termino: 'Profiláctico',
      significado:
        'Es toda medida que se emplea antes de que el problema aparezca.',
    },
    {
      termino: 'Patógenos',
      significado:
        'Organismos microscópicos con la capacidad de producir enfermedades.',
    },
    {
      termino: 'Filtros sanitarios',
      significado:
        'Puntos de control de ingreso o dentro de la unidad productiva donde se toman medidas para erradicar el virus mediante el lavado de pies y manos.',
    },
    {
      termino: 'Pendulantes',
      significado:
        'Que tienen movimiento oscilatorio o bien movimiento de péndulo.',
    },
    {
      termino: '<i>Chimball</i>',
      significado:
        'Dispositivo que se coloca en la cabeza del animal (macho calentador o hembra androgenizada) para que identifique las hembras que están en celo.',
    },
    {
      termino: 'Anatomopatológicos',
      significado:
        'Residuos provenientes de amputaciones, extirpaciones y otros tipos de escenarios.',
    },
    {
      termino: 'Guardianes',
      significado:
        'Recipientes de plástico debidamente rotulados en los que se empacan residuos cortopunzantes.',
    },
  ],
  referencias: [
    {
      referencia: 'ARL Colmena. (2013). Guardián de seguridad.',
      link:
        'https://www.colmenaseguros.com/arl/gestion-conocimiento/material-educativo/Boletines/JUNIO-2013-GUARDIANES-DE-SEGURIDAD.pdf',
    },
    {
      referencia:
        'ARL Sura (2018). Accidentes e incidentes de trabajo, importancia de la investigación de ambos.',
      link:
        'https://www.arlsura.com/index.php/component/content/article/59-centro-de-documentacion-anterior/gestion-de-la-salud-ocupacional-/326--sp-27016',
    },
    {
      referencia: 'Carder (2017). Normatividad de residuos peligrosos.',
      link:
        'https://www.unilibre.edu.co/pereira/images/gaga/residuos-peligrosos.pdf',
    },
    {
      referencia:
        'ICA (2007). Condiciones sanitarias y de inocuidad en la producción primaria de ganado porcino.',
      link: 'https://www.porkcolombia.co/resolucion-ica-2640-de-2007/',
    },
    {
      referencia:
        'ICA (2007). Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino.',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      referencia:
        'FAO (2021). Buenas Prácticas Agropecuarias (BPA) en la producción de ganado de doble propósito bajo confinamiento con caña panelera como parte de la dieta.',
      link: 'https://www.fao.org/3/a1564s/a1564s03.pdf',
    },
    {
      referencia: 'FAO (2007). Buenas prácticas en la alimentación animal.',
      link:
        'https://www.ica.gov.co/getattachment/1dbd9a0e-d689-4ac0-98bc-a82953c99f62/Publicacion-31.aspx',
    },
    {
      referencia:
        'FAO (2010). La situación de los recursos zoogenéticos mundiales para la alimentación y la agricultura.',
      link: 'https://www.fao.org/3/a1250s/a1250s.pdf',
    },
    {
      referencia:
        'Fenavi (2021). Resolución 30292 de 2017. Por medio de la cual se establecen medidas sanitarias diferenciadas para el control y erradicación de la enfermedad de Newcastle notificable en Colombia.',
      link:
        'https://fenavi.org/documentos/resolucion-30292-de-2017/#:~:text=Por%20medio%20de%20la%20cual,de%20Newcastle%20notificable%20en%20Colombia',
    },
    {
      referencia:
        'Ministerio de trabajo (2016). Sistema de gestión de la seguridad y salud en el trabajo (SG-SST). ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
    {
      referencia: 'Ministerio de Salud de Colombia (2021). Enfermedad laboral.',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/RiesgosLaborales/Paginas/enfermedad-laboral.aspx',
    },
    {
      referencia:
        'Metodología para el análisis de riesgos según ISO 9001. (s.f.).',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2019/04/metodologia-para-el-analisis-de-riesgos-segun-iso-9001/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Sánchez Suárez',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Beatriz Eugenia Agudelo Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Ecosistema de Recursos Educativos Digitales RED',
        },
        {
          nombre: 'Angela María Zapata Guzmán',
          cargo: 'Diseñadora Instruccional',
          centro: 'Ecosistema de Recursos Educativos Digitales RED',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
