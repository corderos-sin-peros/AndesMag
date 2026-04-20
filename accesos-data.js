/* accesos-data.js
   Fuente de datos para la sección Accesos de Andes Magazine.
   El campo `status` y `statusSince` son los candidatos a reemplazar
   con un fetch al Cordillera Agent cuando el endpoint esté disponible.
   ------------------------------------------------------------------ */

const ACCESOS = {

  ejes: [
    {
      key: 'mapocho',
      label: 'Eje Mapocho',
      river: 'Río Mapocho',
      color: '#4d9bb5',
      desc: 'Sube por el cajón del Mapocho hacia los centros de alta montaña del sector oriente de Santiago.',
    },
    {
      key: 'maipo',
      label: 'Cajón del Maipo',
      river: 'Río Maipo',
      color: '#3daa7a',
      desc: 'El cajón más extenso de la Región Metropolitana. El Maipo y sus afluentes estructuran el acceso a cuatro subcuencas cordilleranas.',
    },
  ],

  roads: [

    /* ───────────── G-19 ───────────── */
    {
      id: 'G-19',
      slug: 'la-parva',
      name: 'Camino a La Parva',
      shortname: 'La Parva',
      eje: 'mapocho',
      river: 'Río Mapocho',
      tuicion: 'DPR Metropolitana',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 82,
      sourceUrl: 'https://dprmeta.mop.gob.cl',
      distanciaSantiago: '33 km',
      altitudFin: 2820,
      cierreEstacional: 'Mayo — Octubre',
      dependeDe: ['G-21'],
      mx: 126, my: 80,
      ficha: {
        construccion: 'c. 1950',
        longitud: '~12 km desde bifurcación G-21',
        superficie: 'Asfalto / ripio',
        pendiente: '~8%',
        altitudInicio: 2400,
        altitudFin: 2820,
      },
      historia: [
        'El camino a La Parva se desprende del G-21 (Farellones) a unos 2.400 msnm, ascendiendo por la vertiente norte del cerro Colorado hacia el centro de ski privado La Parva. Su trazado fue habilitado a mediados del siglo XX de forma simultánea al desarrollo del corredor de Farellones, consolidándose como uno de los tres ramales que comparten el acceso desde El Arrayán.',
        'A diferencia del G-21, que concentra mayor tráfico recreativo y público, el G-19 opera principalmente como vía de servicio al centro de ski. Esto condiciona su cierre estacional —en verano, la actividad es mínima— y genera una asimetría en la inversión en mantenimiento respecto del tránsito real que soporta en épocas no invernales.',
        'El camino no cuenta con infraestructura pública de acceso a la montaña. La discusión sobre el uso social del corredor durante temporada estival es parte del debate más amplio sobre acceso recreativo en el sector.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-11-03', status: 'abierto', nota: 'Reapertura temporada estival' },
        { fecha: '2025-06-01', status: 'cerrado', nota: 'Cierre temporada invierno' },
        { fecha: '2025-04-12', status: 'cerrado', nota: 'Mantención de calzada' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo / concesionario',
          items: [
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Centro de ski La Parva', desc: 'Operador privado con concesión de uso en el predio cordillerano. Beneficiario directo del camino como acceso a sus instalaciones. Ejerce influencia informal sobre la política de cierres y habilitación del corredor.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPR Metropolitana — MOP', desc: 'Dirección de Vialidad con tuición sobre el camino. Responsable del mantenimiento, señalética y decisiones de cierre por condiciones climáticas o estructurales.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'CONAF — Área Protegida Yerba Loca', desc: 'El corredor colinda con el Área de Protección de la Cuenca Yerba Loca. CONAF no tiene tuición sobre el camino, pero su rol en la gestión territorial es relevante para cualquier decisión de habilitación recreativa.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Comunidad de esquiadores y montañistas', desc: 'El corredor G-19 / G-21 / G-251 es la vía de acceso al cluster de ski más importante del país, concentrando alta presión de uso en temporada alta.', tension: null },
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Habitantes y trabajadores del corredor', desc: 'Servicios, guardias y personal de mantención que dependen del acceso vial. Los cierres no planificados afectan directamente la operación laboral en el sector.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'no', nota: 'No existe. El parking es de La Parva, privado y tarifado.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'Sin infraestructura pública en el acceso.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Puntos informales de detención en el ascenso, sin habilitación formal.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Solo en instalaciones privadas del centro de ski.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Señalética vial básica. Sin información de ruta ni señalética recreativa.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles en el tramo público del camino.' },
      ],
      infraNota: 'El G-19 concentra la mayor brecha entre uso social real y habilitación pública del corredor Farellones. Toda la infraestructura de soporte al visitante es privada y está condicionada al consumo dentro del centro de ski.',
      presupuesto: [
        { año: 2026, monto: 142, estado: 'programada' },
        { año: 2025, monto: 98, estado: 'ejecutada' },
        { año: 2024, monto: 115, estado: 'ejecutada' },
      ],
      presupuestoMax: 160,
      presupuestoNota: 'Fuente: Programa de Inversiones DPR Metropolitana, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

    /* ───────────── G-21 ───────────── */
    {
      id: 'G-21',
      slug: 'farellones',
      name: 'Camino a Farellones',
      shortname: 'Farellones',
      eje: 'mapocho',
      river: 'Río Mapocho',
      tuicion: 'DPR Metropolitana',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 88,
      sourceUrl: 'https://dprmeta.mop.gob.cl',
      distanciaSantiago: '33 km',
      altitudFin: 2460,
      cierreEstacional: 'Eventual por nevazón',
      dependeDe: [],
      mx: 155, my: 69,
      ficha: {
        construccion: 'c. 1940',
        longitud: '~19 km desde El Arrayán',
        superficie: 'Asfalto',
        pendiente: '~9%',
        altitudInicio: 950,
        altitudFin: 2460,
      },
      historia: [
        'El G-21 es el camino cordillerano de mayor tráfico de la Región Metropolitana. Desde El Arrayán asciende el cajón del Mapocho hasta el pueblo de Farellones, sirviendo como tronco principal del que se desprenden los accesos a La Parva (G-19) y Valle Nevado (G-251).',
        'Construido en la década de 1940 para dar acceso a los primeros centros de ski de Chile, el G-21 fue durante décadas el único camino pavimentado que llegaba sobre los 2.000 msnm en la RM. Su trazado incluye varios puntos de curvas cerradas y riesgo de nevazón que hacen frecuentes los cierres de emergencia en invierno.',
        'Es el camino del corredor con mayor presupuesto de mantención y la única ruta con sistemas de control de acceso durante temporadas de alta demanda, aunque ese control ha sido históricamente inconsistente.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-07-20', status: 'cerrado', nota: 'Nevazón — cierre de emergencia (12h)' },
        { fecha: '2025-07-09', status: 'abierto', nota: 'Reapertura tras mantención' },
        { fecha: '2025-07-07', status: 'cerrado', nota: 'Mantención programada' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo / concesionario',
          items: [
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Asociación de centros de ski G-21', desc: 'La Parva, Valle Nevado y Farellones tienen interés directo en la continuidad del camino tronco. En temporada de ski ejercen presión para mantener el corredor abierto incluso en condiciones límite.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPR Metropolitana — MOP', desc: 'Tuición directa. Es el camino con mayor inversión del corredor por volumen de tráfico y número de usuarios.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Usuarios recreativos y residentes de Farellones', desc: 'El G-21 es el acceso a uno de los pocos poblados de alta montaña de la RM. Sus residentes permanentes dependen del camino para conectividad cotidiana, no solo para ski.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'parcial', nota: 'Área informal en Farellones. Sin habilitación formal.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe infraestructura de recepción en el corredor público.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Puntos de detención informales. Algunos con vistas hacia Santiago.' },
        { nombre: 'Alimentación / cafetería', estado: 'parcial', nota: 'Oferta privada en Farellones, no en el corredor del camino.' },
        { nombre: 'Señalética pública', estado: 'parcial', nota: 'Señalética vial y de velocidad. Sin información recreativa.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles en el corredor.' },
      ],
      infraNota: 'Pese a ser el camino más transitado del corredor cordillerano de la RM, el G-21 carece de infraestructura pública pensada para el visitante recreativo. La inversión ha priorizado la calzada sobre la habilitación del acceso.',
      presupuesto: [
        { año: 2026, monto: 210, estado: 'programada' },
        { año: 2025, monto: 178, estado: 'ejecutada' },
        { año: 2024, monto: 195, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPR Metropolitana, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

    /* ───────────── G-251 ───────────── */
    {
      id: 'G-251',
      slug: 'valle-nevado',
      name: 'Camino a Valle Nevado',
      shortname: 'Valle Nevado',
      eje: 'mapocho',
      river: 'Río Mapocho',
      tuicion: 'DPR Metropolitana',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 80,
      sourceUrl: 'https://dprmeta.mop.gob.cl',
      distanciaSantiago: '46 km',
      altitudFin: 3025,
      cierreEstacional: 'Abril — Noviembre',
      dependeDe: ['G-21'],
      mx: 183, my: 56,
      ficha: {
        construccion: 'c. 1988 (apertura Valle Nevado)',
        longitud: '~9 km desde Farellones',
        superficie: 'Asfalto',
        pendiente: '~10%',
        altitudInicio: 2460,
        altitudFin: 3025,
      },
      historia: [
        'El camino a Valle Nevado fue habilitado en la década de 1980 en paralelo al desarrollo del centro de ski internacional del mismo nombre. Es el camino de mayor altitud del corredor Mapocho, alcanzando más de 3.000 msnm.',
        'A diferencia de La Parva y Farellones, Valle Nevado fue diseñado desde el origen como destino de clase internacional, lo que condicionó tanto la calidad del camino como la concentración de inversión privada en sus instalaciones, en detrimento de la infraestructura pública.',
        'El corredor cierra antes y abre después que los demás ramales del sector, dado que es el que alcanza mayor cota y está más expuesto a nevazones. En temporada no invernal es el acceso a zonas de trekking y alta montaña de gran potencial recreativo con muy poca infraestructura de apoyo.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-11-15', status: 'abierto', nota: 'Reapertura tardía por nevada persistente' },
        { fecha: '2025-04-20', status: 'cerrado', nota: 'Cierre anticipado temporada 2025' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo / concesionario',
          items: [
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Valle Nevado S.A.', desc: 'Centro de ski con mayor integración vertical del corredor. Opera hotel, ski, restaurantes y toda la infraestructura de la cota superior. Tiene el mayor interés en el acceso continuo durante temporada de ski.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPR Metropolitana — MOP', desc: 'Tuición sobre el camino, aunque la inversión proporcionalmente es menor dado el menor tráfico en temporada no invernal.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Montañistas y trekkers', desc: 'El sector de Valle Nevado es punto de partida de rutas de alta montaña relevantes. El acceso estival está subutilizado por falta de infraestructura pública.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'no', nota: 'Solo parking privado de Valle Nevado, tarifado.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Puntos informales. El trayecto ofrece vistas excepcionales a la cordillera sin habilitación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Solo en instalaciones privadas del resort.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Señalética vial básica únicamente.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles fuera de instalaciones privadas.' },
      ],
      infraNota: 'El G-251 tiene el mayor potencial recreativo estival del corredor Mapocho —las cotas sobre 3.000 msnm ofrecen paisajes de alta montaña excepcionales— y simultáneamente la peor habilitación pública para aprovecharlo.',
      presupuesto: [
        { año: 2026, monto: 88, estado: 'programada' },
        { año: 2025, monto: 72, estado: 'ejecutada' },
        { año: 2024, monto: 80, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPR Metropolitana, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

    /* ───────────── G-25 ───────────── */
    {
      id: 'G-25',
      slug: 'camino-al-volcan',
      name: 'Camino al Volcán',
      shortname: 'El Volcán',
      eje: 'maipo',
      river: 'Río Maipo',
      tuicion: 'DPP Cordillera',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 85,
      sourceUrl: 'https://dppcordillera.dpp.gob.cl',
      distanciaSantiago: '72 km',
      altitudFin: 1800,
      cierreEstacional: 'Eventual por aluviones o nevazón',
      dependeDe: [],
      mx: 182, my: 190,
      ficha: {
        construccion: 'c. 1945',
        longitud: '~48 km desde San José de Maipo',
        superficie: 'Asfalto / ripio',
        pendiente: '~3%',
        altitudInicio: 700,
        altitudFin: 1800,
      },
      historia: [
        'El G-25 es el camino tronco del Cajón del Maipo, siguiendo el curso del río Maipo hacia la alta cordillera. Desde San José de Maipo asciende hasta el sector de Volcán, donde se convierte en el punto de partida de acceso a los glaciares y alta montaña del extremo sur de la RM.',
        'A lo largo de su recorrido atraviesa una secuencia de comunidades cordilleranas —San Alfonso, San Gabriel, Baños Morales— que dependen de él para conectividad cotidiana, más allá del uso recreativo. Es el camino de mayor valor territorial del corredor sur.',
        'El camino es también el acceso a la zona de mayor riesgo aluvional de la RM. El aluvión de 2017 en el río Maipo —que contaminó el agua de Santiago durante días— demostró la fragilidad del sistema y la dependencia de toda la ciudad en este corredor.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-06-14', status: 'cerrado', nota: 'Alerta preventiva por crecida del Maipo (8h)' },
        { fecha: '2024-08-22', status: 'cerrado', nota: 'Nevazón — cierre por 24h' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo',
          items: [
            { tipo: 'Turismo', tipoCss: 'prod', nombre: 'Operadores turísticos del Cajón del Maipo', desc: 'Hoteles, cabañas, restaurantes y operadores de turismo aventura que dependen del acceso continuo. Son el actor productivo más distribuido y con menor poder individual para influir en la política de cierres.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición vial del G-25 y de todos los ramales del Cajón del Maipo. La DPP Cordillera tiene jurisdicción sobre una extensión significativa de territorio con recursos limitados.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'ONEMI / SENAPRED', desc: 'En eventos de riesgo climático o aluvional, SENAPRED tiene prerrogativa para solicitar cierres preventivos del corredor.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Comunidades residentes del Cajón del Maipo', desc: 'Son los usuarios más vulnerables al cierre del camino. Para los residentes permanentes de San Alfonso, San Gabriel y Baños Morales, el G-25 es la única vía de salida y abastecimiento.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'parcial', nota: 'Áreas informales en Baños Morales y Volcán.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'Sin infraestructura formal de recepción de visitantes.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Varios puntos de detención informales con vistas al cajón.' },
        { nombre: 'Alimentación / cafetería', estado: 'parcial', nota: 'Oferta privada en San Alfonso y Baños Morales.' },
        { nombre: 'Señalética pública', estado: 'parcial', nota: 'Señalética vial básica. Información turística informal en algunos tramos.' },
        { nombre: 'Baños públicos', estado: 'parcial', nota: 'Disponibles en algunas localidades intermedias.' },
      ],
      infraNota: 'El G-25 es el camino con mayor infraestructura de soporte del corredor sur, aunque en su mayoría es privada y de carácter turístico-comercial. La habilitación pública para el acceso recreativo no planificado es insuficiente para la demanda actual.',
      presupuesto: [
        { año: 2026, monto: 185, estado: 'programada' },
        { año: 2025, monto: 162, estado: 'ejecutada' },
        { año: 2024, monto: 140, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPP Cordillera, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

    /* ───────────── G-345 ───────────── */
    {
      id: 'G-345',
      slug: 'camino-al-alfalfal',
      name: 'Camino al Alfalfal',
      shortname: 'Alfalfal',
      eje: 'maipo',
      river: 'Río Colorado',
      tuicion: 'DPP Cordillera',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 79,
      sourceUrl: 'https://dppcordillera.dpp.gob.cl',
      distanciaSantiago: '65 km',
      altitudFin: 1600,
      cierreEstacional: 'Eventual por condiciones de río Colorado',
      dependeDe: ['G-25'],
      mx: 174, my: 158,
      ficha: {
        construccion: 'c. 1990 (obra central hidroeléctrica)',
        longitud: '~14 km desde bifurcación G-25',
        superficie: 'Ripio / tierra compactada',
        pendiente: '~6%',
        altitudInicio: 900,
        altitudFin: 1600,
      },
      historia: [
        'El camino al Alfalfal fue construido como acceso de servicio a la central hidroeléctrica del mismo nombre, operada por AES Andes (ex Gener). Sigue el curso del río Colorado, afluente del Maipo, y fue diseñado primariamente para vehículos pesados de obra.',
        'La central Alfalfal es parte de un sistema de embalses y túneles que incluye también la central El Volcán, aprovechando el desnivel del río Colorado para generación eléctrica. Esta función productiva condiciona el carácter del camino: su mantención responde a las necesidades operativas de AES Andes, no al uso recreativo.',
        'Pese a no ser una ruta recreativa habilitada, el corredor es utilizado por kayakistas, pescadores y montañistas que acceden a la cuenca del Colorado. El acceso es informalmente tolerado pero sin infraestructura ni regulación.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-09-05', status: 'cerrado', nota: 'Restricción temporal AES Andes — mantenimiento de central (3 días)' },
        { fecha: '2024-12-10', status: 'cerrado', nota: 'Crecida del río Colorado' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo / energético',
          items: [
            { tipo: 'Energía', tipoCss: 'prod', nombre: 'AES Andes (ex Generadora Metropolitana)', desc: 'Opera la central hidroeléctrica Alfalfal. Comparte con Aguas Andinas la característica de ser un privado concesionado que controla fácticamente el acceso a un corredor de infraestructura pública.', tension: 'Tensión: los cierres por "mantenimiento de central" no tienen criterios públicos ni plazo de anticipación obligatorio.' },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición formal sobre el camino, aunque en la práctica la decisión de acceso está condicionada por la operación de AES Andes.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Kayakistas y pescadores del río Colorado', desc: 'El Colorado es uno de los ríos de mayor nivel técnico para kayak de la RM. Su acceso es informal y disputado con la operación hidroeléctrica.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'no', nota: 'No habilitado. Solo área de maniobras de AES Andes.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe.' },
        { nombre: 'Miradores', estado: 'no', nota: 'Sin habilitación. El cañón del Colorado es escénicamente excepcional pero no tiene infraestructura de observación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'No disponible en el corredor.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Señalética de AES Andes (privada). Sin información recreativa.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles.' },
      ],
      infraNota: 'El G-345 es el camino más deshabilitado del corredor sur. Toda su infraestructura responde a las necesidades de la central hidroeléctrica. El potencial recreativo de la cuenca del Colorado —kayak, trekking, pesca— está totalmente desaprovechado desde el punto de vista de la infraestructura pública.',
      presupuesto: [
        { año: 2026, monto: 52, estado: 'programada' },
        { año: 2025, monto: 44, estado: 'ejecutada' },
        { año: 2024, monto: 38, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPP Cordillera, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

    /* ───────────── G-455 ───────────── */
    {
      id: 'G-455',
      slug: 'embalse-el-yeso',
      name: 'Camino al Embalse El Yeso',
      shortname: 'El Yeso',
      eje: 'maipo',
      river: 'Río Yeso',
      tuicion: 'DPP Cordillera',
      status: 'cerrado',
      statusSince: '2026-04-02',
      respaldo: 'Resolución DPP Cordillera',
      confianza: 75,
      sourceUrl: 'https://dppcordillera.dpp.gob.cl/2026/04/02/cierre-del-acceso-vehicular-al-embalse-el-yeso-prohiben-ingreso-desde-abril-hasta-agosto-por-condiciones-climaticas-y-seguridad',
      distanciaSantiago: '68 km',
      altitudFin: 2475,
      cierreEstacional: 'Abril — Agosto',
      dependeDe: ['G-25'],
      mx: 171, my: 224,
      cierreDetalle: {
        fechaCierre: '2026-04-02',
        motivoDeclarado: 'Condiciones climáticas y seguridad',
        reaberturaEstimada: 'Agosto 2026',
        quienDeclara: 'DPP Cordillera / Aguas Andinas',
      },
      notaContexto: 'El motivo declarado mezcla dos causas de distinta naturaleza: "condiciones climáticas" (temporal, verificable) y "seguridad" (discrecional, sin criterio público definido). El patrón histórico muestra que el cierre ocurre todos los años en el mismo período, independiente del clima. Esto sugiere que el factor estructural es la política de protección del embalse, no las condiciones de cada temporada.',
      ficha: {
        construccion: 'c. 1969 (obra del embalse, CORFO)',
        longitud: '~25 km desde San Alfonso',
        superficie: 'Ripio / tierra',
        pendiente: '~4%',
        altitudInicio: 900,
        altitudFin: 2475,
      },
      historia: [
        'El camino al embalse El Yeso nació como vía de servicio para la construcción del embalse homónimo, concluido en 1969 por CORFO como parte de la infraestructura de agua potable del Gran Santiago. Desde su origen, el camino tuvo una función productiva: no fue concebido como acceso recreativo ni como vía pública de montaña, sino como corredor de operación para una obra hidráulica de interés nacional.',
        'El embalse tiene una capacidad de 250 millones de m³ y es la reserva estratégica de agua potable de la Región Metropolitana: en situaciones de crisis —aluviones, contaminación del Maipo— provee hasta el 40% del consumo de Santiago. Esta función lo convierte en infraestructura crítica, argumento central que usa Aguas Andinas para justificar el cierre periódico al acceso vehicular.',
        'Tras la privatización del servicio de agua potable en 1999, Aguas Andinas heredó no solo la operación del embalse sino también el control fáctico sobre el acceso al camino. Aunque la tuición vial corresponde a DPP Cordillera, en la práctica es Aguas Andinas quien determina la política de acceso mediante declaraciones de zona de protección. La tensión entre este control privado sobre infraestructura pública y el derecho de acceso ciudadano a la montaña es estructural y no resuelta.',
      ],
      historial: [
        { fecha: '2026-04-02', status: 'cerrado', nota: 'Cierre temporada otoño-invierno' },
        { fecha: '2025-09-15', status: 'abierto', nota: 'Reapertura primavera-verano' },
        { fecha: '2025-04-05', status: 'cerrado', nota: 'Cierre temporada otoño-invierno' },
        { fecha: '2024-10-01', status: 'abierto', nota: 'Reapertura con restricción vehicular parcial' },
        { fecha: '2024-04-08', status: 'cerrado', nota: 'Cierre temporada otoño-invierno' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo — actor dominante',
          items: [
            { tipo: 'Concesión crítica', tipoCss: 'key', nombre: 'Aguas Andinas S.A.', desc: 'Operadora del embalse El Yeso desde la privatización del servicio de agua potable en 1999. Ejerce control fáctico sobre el acceso al camino bajo el argumento de protección de zona de captación. Su concesión incluye el derecho a restringir actividades que puedan afectar la calidad del agua, lo que en la práctica se extiende al cierre vehicular.', tension: 'Tensión: empresa privada concesionada que controla el acceso a infraestructura pública y territorio cordillerano sin obligación de justificar cierres ante la ciudadanía.' },
          ],
        },
        {
          grupo: 'Nivel productivo — otros usos',
          items: [
            { tipo: 'Minería', tipoCss: 'prod', nombre: 'Concesiones mineras en cuenca alta del Yeso', desc: 'Existen concesiones mineras activas en la cuenca alta del río Yeso (verificar en SERNAGEOMIN). Aunque no operan directamente sobre el camino G-455, su presencia agrega una capa de interés productivo que compite con el uso recreativo.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tiene tuición vial sobre el G-455 y es quien emite formalmente las resoluciones de cierre. En la práctica actúa en coordinación con Aguas Andinas, que define los criterios. La DPP no cuenta con criterios propios de apertura/cierre publicados para este camino.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DGA — Dirección General de Aguas', desc: 'Organismo regulador de los derechos de agua. La concesión de Aguas Andinas sobre el embalse pasa por la DGA. Sin embargo, la DGA no regula el acceso físico al corredor vial.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Deportistas, montañistas y kayakistas', desc: 'El embalse El Yeso es uno de los cuerpos de agua más accesibles y escénicos de la Región Metropolitana. Su uso para kayak, trekking y paisajismo era habitual antes de la intensificación de los cierres.', tension: null },
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Comunidades locales del Cajón del Maipo', desc: 'Habitantes de San José de Maipo, San Alfonso y sectores intermedios dependen del corredor para actividades cotidianas, turismo local y conectividad en emergencias. Los cierres estacionales prolongados afectan directamente su economía y movilidad.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'parcial', nota: 'Área informal a orilla del embalse cuando está abierto. Sin habilitación formal.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe infraestructura de recepción de visitantes.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'El embalse en sí es un mirador natural. Puntos informales sin habilitación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Sin servicio en el tramo del embalse. Última opción en San Alfonso (~20 km).' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Solo señalética de restricción de Aguas Andinas. Sin información de ruta.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles en todo el tramo del embalse.' },
      ],
      infraNota: 'El G-455 es el acceso con mayor brecha entre potencial recreativo y habilitación real del corredor. La ausencia de inversión pública refuerza el argumento de Aguas Andinas: sin infraestructura, el acceso masivo es inmanejable. Es un círculo vicioso que conviene a la empresa y perjudica al ciudadano.',
      presupuesto: [
        { año: 2026, monto: 87, estado: 'programada' },
        { año: 2025, monto: 64, estado: 'ejecutada' },
        { año: 2024, monto: 71, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPP Cordillera, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación. Nota: inversión un 39% menor al G-19 pese a ser de mayor longitud y dar acceso a infraestructura estratégica nacional.',
    },

    /* ───────────── G-465 ───────────── */
    {
      id: 'G-465',
      slug: 'las-melosas',
      name: 'Camino a Las Melosas',
      shortname: 'Las Melosas',
      eje: 'maipo',
      river: 'Río Maipo',
      tuicion: 'DPP Cordillera',
      status: 'abierto',
      statusSince: '2026-03-01',
      respaldo: 'Continuidad · sin cierres reportados',
      confianza: 77,
      sourceUrl: 'https://dppcordillera.dpp.gob.cl',
      distanciaSantiago: '84 km',
      altitudFin: 1750,
      cierreEstacional: 'Eventual por condiciones del Maipo alto',
      dependeDe: ['G-25'],
      mx: 211, my: 186,
      ficha: {
        construccion: 'c. 1955 (acceso termas)',
        longitud: '~18 km desde Baños Morales',
        superficie: 'Ripio / tierra',
        pendiente: '~5%',
        altitudInicio: 1450,
        altitudFin: 1750,
      },
      historia: [
        'El camino a Las Melosas es el más remoto del corredor monitoreado. Sigue el curso del río Maipo en su tramo superior, hacia la zona de las termas de igual nombre. Su origen como vía habilitada está ligado al turismo termal de mediados del siglo XX, cuando Las Melosas era un destino de veraneo.',
        'El sector perdió relevancia como destino turístico masivo tras el cierre de las termas, pero mantiene valor como acceso a zonas de alta cordillera, glaciares y rutas de alta montaña. Es el punto de partida de ascensos al volcán San José y rutas hacia Argentina.',
        'La condición del camino es la más deteriorada del corredor. Su uso es principalmente por montañistas, excursionistas de alta montaña y algunos ganaderos. La inversión pública es mínima y su infraestructura de soporte es prácticamente inexistente.',
      ],
      historial: [
        { fecha: '2026-03-01', status: 'abierto', nota: 'Continuidad operacional' },
        { fecha: '2025-08-30', status: 'cerrado', nota: 'Daño en calzada por crecida del Maipo alto (5 días)' },
        { fecha: '2025-04-15', status: 'cerrado', nota: 'Baches y derrumbe menor — mantención' },
      ],
      actores: [
        {
          grupo: 'Nivel productivo',
          items: [
            { tipo: 'Ganadería', tipoCss: 'prod', nombre: 'Arrieros y ganaderos del Maipo alto', desc: 'El camino es utilizado para veranadas en la alta cordillera. Es el único sector del corredor donde el uso productivo tradicional (ganadería extensiva) convive con el uso recreativo moderno sin mediación de grandes empresas.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición vial. Es el camino con menor inversión relativa del corredor sur, pese a ser el de mayor extensión en territorio de alta montaña.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Montañistas y andinistas', desc: 'El G-465 es el acceso a ascensos al volcán San José y rutas de travesía hacia Argentina. Tiene alta relevancia para la comunidad andinista pero muy baja visibilidad pública.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'parcial', nota: 'Área informal en Las Melosas. Sin habilitación.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Puntos informales. El valle del Maipo alto tiene paisaje de alta calidad sin habilitación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Sin servicio en el corredor. Última opción en Baños Morales.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Sin señalética de ningún tipo en gran parte del recorrido.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles.' },
      ],
      infraNota: 'El G-465 es el camino más desatendido del corredor. Su acceso a uno de los sectores de alta montaña más ricos de la RM —volcán San José, glaciares del Maipo alto— contrasta con la total ausencia de inversión en infraestructura recreativa.',
      presupuesto: [
        { año: 2026, monto: 48, estado: 'programada' },
        { año: 2025, monto: 35, estado: 'ejecutada' },
        { año: 2024, monto: 42, estado: 'ejecutada' },
      ],
      presupuestoMax: 250,
      presupuestoNota: 'Fuente: Programa de Inversiones DPP Cordillera, SAFI-MOP · Estimaciones en base a datos públicos disponibles. Verificación pendiente para publicación.',
    },

  ], // end roads

}; // end ACCESOS
