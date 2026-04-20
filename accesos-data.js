/* accesos-data.js
   Fuente de datos para la sección Accesos de Andes Magazine.
   El campo `status` y `statusSince` son los candidatos a reemplazar
   con un fetch al Cordillera Agent cuando el endpoint esté disponible.
   ------------------------------------------------------------------
   Actualizado con investigación documental: Historia, actores
   productivos y proyectos públicos de siete rutas cordilleranas RM.
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
        // No hay fecha oficial en fuentes abiertas. El Club de Ski La Parva data de 1972;
        // el corredor se consolidó en ese ciclo de desarrollo invernal privado.
        construccion: 'No especificado (mediados s. XX)',
        longitud: '~12 km desde bifurcación G-21',
        superficie: 'Asfalto / ripio',
        pendiente: '~8%',
        altitudInicio: 2400,
        altitudFin: 2820,
      },
      historia: [
        'El camino a La Parva se desprende del G-21 a unos 2.400 msnm, ascendiendo hacia el centro de ski privado del mismo nombre. No existe en fuentes oficiales abiertas una fecha precisa de habilitación del ramal: la historia oficial de La Parva describe el lugar como pueblo de montaña con más de 1.200 refugios y condominios, y el Club de Ski La Parva indica fundación en 1972. La lectura más prudente sitúa la consolidación del camino dentro del ciclo de desarrollo privado e invernal del sector, posterior a Farellones.',
        'Su uso evolucionó desde acceso a un centro de ski y segunda vivienda a un corredor de servicios intramontaña para condominios, clubes y operación turística de invierno. A diferencia del G-21, el componente de residencia estacional privada es más fuerte que el de paso troncal; la identidad del sistema está asociada a refugios y comunidad de ski más que a hotelería integrada o a un poblado de uso mixto.',
        'El camino no cuenta con infraestructura pública de acceso a la montaña. En materia presupuestaria, aparece en 2023 una licitación municipal de Lo Barnechea por UF 81.261 para "restauración de pavimentos ruta G-19"; sin embargo, la documentación no permite determinar con certeza si ese monto cubre el ramal alto al centro de ski o tramos del mismo código en cotas menores de la comuna. El presupuesto específico del camino alto a La Parva queda, por rigor, no especificado.',
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
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Condominios y residencia estacional', desc: 'Más de 1.200 refugios y condominios privados dependen del corredor para acceso. Constituyen el uso dominante del territorio y condicionan la lógica de mantención y apertura del camino, incluso fuera de temporada de ski.', tension: null },
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
        { año: 2023, monto: 81261, unidad: 'UF', estado: 'licitada', nota: 'Licitación municipal Lo Barnechea "restauración pavimentos ruta G-19". Cobertura exacta del ramal alto no confirmada.' },
      ],
      presupuestoNota: 'Fuente: Acuerdos de Concejo de Lo Barnechea, noviembre 2023 · El código G-19 aparece en una licitación municipal por UF 81.261 IVA incluido; sin embargo, no es posible asegurar que corresponda íntegramente al ramal alto Camino a La Parva. Verificación pendiente en Mercado Público y SECPLA Lo Barnechea.',
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
        // Trazado de Farellones: 1937 (crónicas municipales Lo Barnechea).
        // Consolidación vial para centros de ski: década de 1940.
        construccion: 'c. 1937–1940s',
        longitud: '~19 km desde El Arrayán (31,48 km en concesión)',
        superficie: 'Asfalto',
        pendiente: '~9%',
        altitudInicio: 950,
        altitudFin: 2460,
      },
      historia: [
        'El G-21 es el camino cordillerano de mayor tráfico de la Región Metropolitana. La evidencia más sólida disponible sitúa el trazado de Farellones en 1937, según crónicas publicadas por la municipalidad de Lo Barnechea, y la habilitación del complejo Farellones/El Colorado como destino con servicios en 1941, con el primer andarivel construido en 1948. El corredor fue durante décadas el único camino pavimentado que llegaba sobre los 2.000 msnm en la RM, y hoy sirve como tronco del que se desprenden los accesos a La Parva (G-19) y Valle Nevado (G-251).',
        'El corredor partió como acceso deportivo estacional y se transformó en la espina dorsal del "Centro Cordillera" de Lo Barnechea, donde conviven poblado, centros de ski, departamentos, turismo y minería. El PLADECO y el PLADETUR comunal reconocen que la principal fuente de desarrollo económico del sector proviene de los centros de ski, la minería y el turismo, y que la vía de acceso principal es la G-21. Esto incluye a Anglo American, cuya operación en Los Bronces utiliza la G-245, ramal cuyo mejoramiento inicial —1,1 km— quedó incorporado al contrato de concesión del G-21.',
        'La concesión "Mejoramiento Ruta G-21" fue adjudicada por DS MOP N°19 de 2019 con presupuesto oficial de UF 2.308.000 + IVA y 31,48 km de longitud. Contemplaba rectificación de curvas, nueva calzada de tres pistas en parte alta, áreas de emergencia, miradores, paraderos y obras en G-245 hacia Los Bronces. La concesión fue extinguida anticipadamente en 2023; la Dirección General de Concesiones mantiene hoy una segunda concesión en cartera por alrededor de US$150 millones.',
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
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Centros de ski del corredor (La Parva, Valle Nevado, Farellones/El Colorado)', desc: 'La continuidad del camino tronco es condición de existencia del negocio de ski. En temporada de invierno ejercen presión para mantener el corredor abierto incluso en condiciones límite; son el actor privado con mayor influencia sobre la política vial del corredor.', tension: null },
            { tipo: 'Minería', tipoCss: 'prod', nombre: 'Anglo American / Mina Los Bronces', desc: 'La operación en Los Bronces utiliza la G-245 como ramal de acceso desde el G-21. El mejoramiento de 1,1 km de la G-245 quedó incorporado al contrato de concesión del G-21 (DS MOP N°19/2019). Anglo American gestiona sus flujos de transporte para no superar los viajes diarios ambientalmente aprobados, lo que condiciona la capacidad disponible del corredor.', tension: 'Tensión: el camino tronco público sirve simultáneamente al turismo de ski y a la logística minera pesada, con presiones de capacidad no siempre compatibles.' },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPR Metropolitana — MOP / Dirección General de Concesiones', desc: 'Tuición directa y mayor inversión del corredor por volumen de tráfico. La concesión fue adjudicada por DS MOP N°19 de 2019, extinguida en 2023, y una segunda concesión (~US$150M) está en cartera activa.', tension: null },
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
        { nombre: 'Miradores', estado: 'parcial', nota: 'La concesión DS 2019 incluía miradores formales; no se ejecutaron antes de la extinción anticipada en 2023.' },
        { nombre: 'Alimentación / cafetería', estado: 'parcial', nota: 'Oferta privada en Farellones, no en el corredor del camino.' },
        { nombre: 'Señalética pública', estado: 'parcial', nota: 'Señalética vial y de velocidad. Sin información recreativa.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles en el corredor.' },
      ],
      infraNota: 'Pese a ser el camino más transitado del corredor cordillerano de la RM, el G-21 carece de infraestructura pública pensada para el visitante recreativo. La concesión extinguida contemplaba miradores, paraderos y áreas de emergencia que no llegaron a ejecutarse.',
      presupuesto: [
        { año: 2019, monto: 2308000, unidad: 'UF', estado: 'adjudicada', nota: 'Concesión DS MOP N°19/2019 · UF 2.308.000 + IVA · extinguida anticipadamente 2023.' },
        { año: 2026, monto: 150000000, unidad: 'USD', estado: 'en cartera', nota: 'Segunda concesión en cartera — Dirección General de Concesiones MOP.' },
      ],
      presupuestoNota: 'Fuente: Dirección General de Concesiones MOP, informe ejecutivo contrato G-21, diciembre 2023 · G-21 es el corredor con mayor densidad presupuestaria confirmada: concesión adjudicada UF 2.308.000 + IVA (2019), extinguida 2023, y segunda concesión ~US$150M en cartera activa. El contrato incluía 31,48 km y mejoras sobre G-245 hacia Los Bronces.',
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
        // Valle Nevado inaugurado en 1988 (historia oficial del centro).
        // El camino G-251 se habilitó en ese mismo ciclo; no hay acto público separado.
        construccion: 'c. 1988 (inauguración Valle Nevado)',
        longitud: '~9 km desde Farellones',
        superficie: 'Asfalto',
        pendiente: '~10%',
        altitudInicio: 2460,
        altitudFin: 3025,
      },
      historia: [
        'La referencia más sólida para el G-251 es la historia oficial de Valle Nevado, que fija su inauguración en 1988. A diferencia de Farellones o La Parva, Valle Nevado fue desde el origen una operación planificada de hotelería y ski de clase internacional, lo que condicionó el estándar del camino y la concentración de inversión privada en sus instalaciones. No se encontró un acto público de apertura del camino separado del proyecto turístico, por lo que la fecha corresponde al ciclo de apertura del complejo.',
        'El corredor nació orientado a un destino internacional de ski, no a un poblado histórico. Su evolución ha sido menos "de pueblo a turismo" y más "de resort de nieve a operación de montaña con potencial estival", aunque la evidencia pública disponible sigue concentrada en el invierno. En 2023 el concejo de Lo Barnechea discutió el cierre de tramos del G-21 y la extensión del G-251 en torno al Mirador de los Tres Valles, por razones de seguridad vial, lo que muestra que el corredor es parte activa de la gestión municipal contemporánea.',
        'No se encontró presupuesto autónomo para el G-251 como proyecto separado. La ruta depende funcionalmente de G-21: la concesión vial (DS MOP N°19/2019, extinguida 2023) llegaba hasta la intersección con G-251 y fue diseñada para mejorar el acceso a los centros invernales incluyendo Valle Nevado. Existen estudios municipales que proponen mejoras de perfil e interconexión en el sistema Farellones–Valle Nevado, pero sin monto ejecutado visible en las fuentes públicas consultadas.',
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
            { tipo: 'Privado', tipoCss: 'prod', nombre: 'Valle Nevado S.A.', desc: 'Centro de ski con mayor integración vertical del corredor. Opera hotel, ski, restaurantes y toda la infraestructura de la cota superior. Tiene el mayor interés en el acceso continuo durante temporada de ski. Su peso económico condiciona la discusión de seguridad, estacionamientos, mantención y apertura.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPR Metropolitana — MOP', desc: 'Tuición sobre el camino. La inversión proporcionalmente es menor dado el menor tráfico en temporada no invernal. El G-251 no tiene proyectos presupuestarios autónomos identificados; depende del mejoramiento del G-21.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'Municipalidad de Lo Barnechea', desc: 'En 2023 el concejo discutió el cierre de tramos del G-21 y la gestión del Mirador de los Tres Valles en el G-251 por razones de seguridad vial. El municipio tiene un rol creciente en la gobernanza del corredor alto.', tension: null },
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
        { nombre: 'Miradores', estado: 'parcial', nota: 'El Mirador de los Tres Valles es punto de alta demanda; sin habilitación formal pública. Discutido en concejo municipal 2023.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Solo en instalaciones privadas del resort.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Señalética vial básica únicamente.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles fuera de instalaciones privadas.' },
      ],
      infraNota: 'El G-251 tiene el mayor potencial recreativo estival del corredor Mapocho —las cotas sobre 3.000 msnm ofrecen paisajes de alta montaña excepcionales— y simultáneamente la peor habilitación pública para aprovecharlo. No existen proyectos presupuestarios autónomos identificados para este ramal.',
      presupuesto: [
        // Sin presupuesto autónomo identificado. Dependencia de concesión G-21 (extinguida 2023).
      ],
      presupuestoNota: 'No se identificó presupuesto autónomo para G-251 en fuentes públicas consultadas. El ramal depende del mejoramiento del G-21 (concesión DS MOP N°19/2019, extinguida 2023). Para mayor granularidad: revisar BIP en Planeamiento MOP y actas SECPLA Lo Barnechea. Fuentes: Concesiones MOP, informe ejecutivo G-21 dic. 2023; actas concejo Lo Barnechea 2023.',
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
        // No hay acto único de "apertura". Es un corredor histórico prevehicular:
        // recuas, carruajes y ferrocarril a El Volcán; la ruta vehicular actual
        // no tiene fecha exacta en fuentes abiertas.
        construccion: 'No especificado (corredor histórico prevehicular)',
        longitud: '~48 km desde San José de Maipo',
        superficie: 'Asfalto / ripio',
        pendiente: '~3%',
        altitudInicio: 700,
        altitudFin: 1800,
      },
      historia: [
        'G-25 no nace como acceso turístico, sino como el eje histórico de movilidad del valle alto del Maipo. El plan de acción ZOIT de San José de Maipo afirma que este corredor corresponde a un camino "de antaño" recorrido por animales montureros, carruajes y también por el ferrocarril cuya línea llegaba hasta El Volcán. La memoria del plan regulador comunal confirma la relación histórica entre localidades como San Gabriel, la estación ferroviaria y el camino al Volcán. La fecha precisa de habilitación de la ruta vehicular actual queda no especificada en fuentes públicas abiertas.',
        'Su función cambió de corredor territorial y ferroviario-histórico a columna vertebral del turismo de montaña del Cajón del Maipo. Hoy articula el acceso a Baños Morales y al Monumento Natural El Morado —CONAF describe el G-25 como la ruta oficial pavimentada para llegar al Morado—, así como a varios ramales productivos de infraestructura hídrica y energética. El corredor es también estratégicamente sensible: el aluvión de 2017 en el río Maipo demostró que un evento en esta cuenca puede comprometer el agua potable de toda la ciudad.',
        'El actor productivo más extendido es el tejido turístico del valle —alojamientos, gastronomía, turismo aventura—, pero su influencia es difusa. A diferencia de G-455 o G-345, no hay un solo actor empresarial que capture el acceso. En materia presupuestaria, el MOP programó en 2019 el diseño de ingeniería para la "Reposición Ruta G-25 sector San José de Maipo–San Gabriel" con monto estimado de licitación de $533,3 millones; en 2022 aparece ejecución acumulada sobre ese BIP, y en programaciones 2024–2026 la iniciativa sigue en ejecución. El Plan Maestro de Infraestructura Turística perfila también un "Mejoramiento a Ruta Escénica G-25, sector Las Vizcachas–San Gabriel", todavía sin ejecución.',
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
            { tipo: 'Turismo', tipoCss: 'prod', nombre: 'Operadores turísticos del Cajón del Maipo', desc: 'Hoteles, cabañas, restaurantes y operadores de turismo aventura que dependen del acceso continuo. Son el actor productivo más distribuido y con menor poder individual para influir en la política de cierres. La ZOIT los reconoce como el motor económico principal del corredor.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición vial del G-25 y de todos los ramales del Cajón del Maipo. La inversión documentada se concentra en seguridad, reposición y resiliencia, no en infraestructura de acceso recreativo.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'CONAF — Monumento Natural El Morado', desc: 'CONAF describe el G-25 como la ruta oficial pavimentada de acceso al Monumento Natural El Morado. La unidad de CONAF tiene injerencia sobre el uso del corredor en el tramo final hacia el área protegida.', tension: null },
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
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'Sin infraestructura formal de recepción de visitantes. Proyecto MOP/Subturismo perfilado, sin ejecución.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'Varios puntos de detención informales con vistas al cajón.' },
        { nombre: 'Alimentación / cafetería', estado: 'parcial', nota: 'Oferta privada en San Alfonso y Baños Morales.' },
        { nombre: 'Señalética pública', estado: 'parcial', nota: 'Señalética vial básica. El MOP reportó nueva señalética vial en 2024.' },
        { nombre: 'Baños públicos', estado: 'parcial', nota: 'Disponibles en algunas localidades intermedias.' },
      ],
      infraNota: 'El G-25 es el camino con mayor infraestructura de soporte del corredor sur, aunque en su mayoría es privada y de carácter turístico-comercial. Los proyectos de ruta escénica y mejoramiento están perfilados en el Plan Maestro MOP/Subturismo pero sin ejecución material confirmada.',
      presupuesto: [
        { año: 2019, monto: 533.3, unidad: 'M CLP', estado: 'licitada', nota: 'Diseño ingeniería reposición San José de Maipo–San Gabriel. Ejecución acumulada registrada en 2022.' },
      ],
      presupuestoNota: 'Fuente: Planeamiento MOP, contratos por licitar abril-junio 2019; programaciones presupuestarias 2022 y 2024–2026 · Reposición San José de Maipo–San Gabriel: monto estimado licitación $533,3 millones. En paralelo, el Plan Maestro MOP/Subturismo perfila ruta escénica y equipamiento turístico, pero varios proyectos aparecen sin ejecución. La inversión documentada prioriza reposición y seguridad, no infraestructura recreativa.',
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
        // G-345 es un corredor energético de larga data:
        // Maitenes (1923), Alfalfal (1991), Alto Maipo (2010s).
        // Fecha de habilitación como camino público no especificada en fuentes abiertas.
        construccion: 'No especificado (origen energético: Maitenes 1923, Alfalfal 1991)',
        longitud: '~14 km desde bifurcación G-25',
        superficie: 'Ripio / tierra compactada',
        pendiente: '~6%',
        altitudInicio: 900,
        altitudFin: 1600,
      },
      historia: [
        'G-345 es un corredor energético de larga data, no un camino de origen recreativo. AES Andes sitúa la central Maitenes en San José de Maipo desde 1923; la central Alfalfal entró en operación en 1991; y el proyecto Alto Maipo intensificó el uso productivo del corredor en los años 2010. Documentos corporativos y ambientales ubican Maitenes, Alto Maipo y Alfalfal sobre la propia G-345. El año exacto de habilitación del camino como vía pública no aparece especificado en fuentes abiertas.',
        'Su cambio de uso ha sido parcial: sigue siendo ante todo un acceso funcional a centrales y faenas energéticas, pero también se ha ido volviendo un acceso de montaña hacia Río Olivares, senderos y paisaje de alta cordillera. AES Andes tiene su base operativa del proyecto Alto Maipo en el ex campamento Maitenes, sobre la G-345, y el SEA registra rutas de transporte del proyecto por G-25 y G-345. El uso productivo pesado no es marginal: es constitutivo del corredor.',
        'En materia presupuestaria, el dato más concreto es la conservación periódica 2018 del tramo G-345 cruce G-25–Los Maitenes (km 13,9 al 23,0), adjudicada por $1.272.789.721. El Plan Maestro MOP perfila proyectos de ruta escénica, senderos interpretativos y centro de visitantes para Río Olivares, reconociendo el potencial recreativo de la cuenca del Colorado; sin embargo, esos perfiles siguen mayoritariamente a nivel de prefactibilidad sin ejecución material.',
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
            { tipo: 'Energía', tipoCss: 'prod', nombre: 'AES Andes — Centrales Maitenes (1923), Alfalfal (1991) y proyecto Alto Maipo', desc: 'Opera el sistema de centrales sobre la G-345 desde 1923. El uso productivo pesado —transporte de equipos, operación de centrales, faenas— es constitutivo del corredor. Los cierres por "mantenimiento de central" no tienen criterios públicos ni plazos de anticipación obligatorios.', tension: 'Tensión: privado concesionado que controla fácticamente el acceso a un corredor de infraestructura pública sin obligación de transparencia ante la ciudadanía.' },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición formal sobre el camino. La conservación periódica 2018 (tramo km 13,9–23,0) por $1.272.789.721 es el hito presupuestario más claro identificado.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Kayakistas y pescadores del río Colorado', desc: 'El Colorado es uno de los ríos de mayor nivel técnico para kayak de la RM. Su acceso es informal y disputado con la operación hidroeléctrica. El cañón del Colorado es escénicamente excepcional pero sin infraestructura de observación.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'no', nota: 'No habilitado. Solo área de maniobras de AES Andes.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'No existe. El Plan Maestro MOP perfila un centro de visitantes en Río Olivares, sin ejecución.' },
        { nombre: 'Miradores', estado: 'no', nota: 'Sin habilitación. El cañón del Colorado es escénicamente excepcional pero no tiene infraestructura de observación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'No disponible en el corredor.' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Señalética de AES Andes (privada). Sin información recreativa.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles.' },
      ],
      infraNota: 'El G-345 es el camino más deshabilitado para uso público del corredor sur. Toda su infraestructura responde a las necesidades de las centrales hidroeléctricas. Los proyectos turísticos de Río Olivares del Plan Maestro MOP siguen en prefactibilidad.',
      presupuesto: [
        { año: 2018, monto: 1272.8, unidad: 'M CLP', estado: 'ejecutada', nota: 'Conservación periódica tramo G-345 cruce G-25–Los Maitenes, km 13,9 al 23,0.' },
      ],
      presupuestoNota: 'Fuente: Planeamiento MOP, contratos MOP iniciados octubre 2018 · Conservación periódica tramo G-345 (km 13,9–23,0): $1.272.789.721. En paralelo, el Plan Maestro MOP perfila ruta escénica, senderos interpretativos y centro de atención al visitante en Río Olivares; esos proyectos están a nivel de perfil/prefactibilidad, sin ejecución material confirmada.',
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
        quienDeclara: 'DPP Cordillera',
        coordinadoCon: 'Delegación, Vialidad, Carabineros, Transportes, Aguas Andinas, Etex Group',
      },
      notaContexto: 'El cierre 2026 fue coordinado por la DPP Cordillera con Aguas Andinas y un conjunto de organismos públicos. El motivo declarado mezcla "condiciones climáticas" (temporal, verificable) y "seguridad" (discrecional, sin criterio público definido). El patrón histórico muestra que el cierre ocurre todos los años en el mismo período, independiente del clima. Esto sugiere que el factor estructural es la política de protección del embalse —infraestructura crítica para el agua de Santiago—, no las condiciones de cada temporada.',
      ficha: {
        // El embalse El Yeso fue inaugurado en 1967 (historia corporativa Aguas Andinas).
        // El camino es ramal de servicio asociado a esa obra; fecha exacta no especificada.
        construccion: 'No especificado (asociado al embalse inaugurado en 1967)',
        longitud: '~25 km desde San Alfonso',
        superficie: 'Ripio / tierra',
        pendiente: '~4%',
        altitudInicio: 900,
        altitudFin: 2475,
      },
      historia: [
        'El camino al embalse El Yeso nació como vía de servicio para la construcción del embalse homónimo, inaugurado en 1967 según la historia corporativa de Aguas Andinas. Desde su origen, el camino tuvo una función productiva: no fue concebido como acceso recreativo ni como vía pública de montaña, sino como corredor de operación para una obra hidráulica de interés nacional. El embalse tiene una capacidad de 250 millones de m³ y es la reserva estratégica de agua potable de la Región Metropolitana: en situaciones de crisis —aluviones, contaminación del Maipo— provee hasta el 40% del consumo de Santiago.',
        'Pasó de acceso de servicio hidráulico a uno de los atractivos turísticos más visibles de la RM. La ZOIT San José de Maipo destaca al embalse como postal clásica y atractivo regional, aunque advierte también problemas de turismo descontrolado. Esa transformación es decisiva: el corredor sigue sirviendo a infraestructura crítica, pero ahora soporta una demanda recreativa masiva para la cual nunca fue diseñado.',
        'Tras la privatización del servicio de agua potable en 1999, Aguas Andinas heredó la operación del embalse y el control fáctico sobre el acceso al camino. El cierre anual 2026 fue coordinado por la DPP Cordillera con la Delegación, Vialidad, Carabineros, Transportes, Aguas Andinas y Etex Group. En lo formal, el acto administrativo es público; en lo fáctico, la operación de infraestructura crítica da a Aguas Andinas una influencia muy superior a la de un usuario ordinario del corredor. La tensión entre ese control privado y el derecho de acceso ciudadano a la montaña es estructural y no resuelta.',
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
            { tipo: 'Concesión crítica', tipoCss: 'key', nombre: 'Aguas Andinas S.A.', desc: 'Operadora del embalse El Yeso desde la privatización del servicio de agua potable en 1999. Ejerce control fáctico sobre el acceso al camino bajo el argumento de protección de zona de captación. Coordina formalmente el cierre anual con DPP Cordillera, Vialidad, Carabineros, Transportes y Etex Group.', tension: 'Tensión: empresa privada concesionada que controla el acceso a infraestructura pública y territorio cordillerano sin obligación de justificar cierres ante la ciudadanía mediante criterios transparentes.' },
          ],
        },
        {
          grupo: 'Nivel productivo — otros usos',
          items: [
            { tipo: 'Minería', tipoCss: 'prod', nombre: 'Concesiones mineras en cuenca alta del Yeso', desc: 'Existen concesiones mineras activas en la cuenca alta del río Yeso (verificar en catastro SERNAGEOMIN). Aunque no operan directamente sobre el camino G-455, su presencia agrega una capa de interés productivo que compite con el uso recreativo.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tiene tuición vial sobre el G-455 y emite formalmente las resoluciones de cierre, coordinando con Aguas Andinas. La DPP no cuenta con criterios propios de apertura/cierre publicados para este camino.', tension: null },
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DGA — Dirección General de Aguas', desc: 'Regulador de los derechos de agua. La concesión de Aguas Andinas sobre el embalse pasa por la DGA. Sin embargo, la DGA no regula el acceso físico al corredor vial.', tension: null },
          ],
        },
        {
          grupo: 'Nivel social y recreativo',
          items: [
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Deportistas, montañistas y kayakistas', desc: 'El embalse El Yeso es uno de los cuerpos de agua más accesibles y escénicos de la RM. Su uso para kayak, trekking y paisajismo era habitual antes de la intensificación de los cierres.', tension: null },
            { tipo: 'Sociedad civil', tipoCss: 'civil', nombre: 'Comunidades locales del Cajón del Maipo', desc: 'Habitantes de San José de Maipo, San Alfonso y sectores intermedios dependen del corredor para actividades cotidianas, turismo local y conectividad en emergencias. Los cierres estacionales prolongados afectan directamente su economía y movilidad.', tension: null },
          ],
        },
      ],
      infra: [
        { nombre: 'Estacionamiento público', estado: 'parcial', nota: 'Área informal a orilla del embalse cuando está abierto. Sin habilitación formal.' },
        { nombre: 'Centro de bienvenida', estado: 'no', nota: 'Proyecto MOP/Subturismo "Construcción Centro de Información y Servicios Turísticos en Embalse El Yeso" perfilado, aún sin ejecución.' },
        { nombre: 'Miradores', estado: 'parcial', nota: 'El embalse en sí es un mirador natural. Puntos informales sin habilitación.' },
        { nombre: 'Alimentación / cafetería', estado: 'no', nota: 'Sin servicio en el tramo del embalse. Última opción en San Alfonso (~20 km).' },
        { nombre: 'Señalética pública', estado: 'no', nota: 'Solo señalética de restricción de Aguas Andinas. Sin información de ruta.' },
        { nombre: 'Baños públicos', estado: 'no', nota: 'No disponibles en todo el tramo del embalse.' },
      ],
      infraNota: 'El G-455 es el acceso con mayor brecha entre potencial recreativo y habilitación real del corredor. La ausencia de inversión pública refuerza el argumento de Aguas Andinas: sin infraestructura, el acceso masivo es inmanejable. Es un círculo vicioso que conviene a la empresa y perjudica al ciudadano.',
      presupuesto: [
        { año: 2021, monto: 1951.9, unidad: 'M CLP', estado: 'ejecutada', nota: 'Obras seguridad vial y mitigación derrumbes y desprendimientos de talud, km 0,0 al 23,0. Adjudicado a FLESAN.' },
        { año: 2021, monto: 214.1, unidad: 'M CLP', estado: 'ejecutada', nota: 'Asesoría inspección fiscal, obras km 0,0 al 23,0.' },
      ],
      presupuestoNota: 'Fuente: Planeamiento MOP, contratos iniciados enero 2021; DPP Cordillera; Plan Maestro MOP/Subturismo · Contrato obras seguridad vial y mitigación taludes G-455 km 0–23: $1.951.904.522 (FLESAN) + asesoría fiscal $214,1M. En paralelo, el Plan Maestro MOP/Subturismo perfila un "Centro de Información y Servicios Turísticos en Embalse El Yeso" y rutas escénicas en el valle del Yeso, pero figuran sin ejecución. Nota: el embalse fue inaugurado en 1967 (no 1969 como aparecía en versiones previas de este archivo).',
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
        // Las fuentes no entregan fecha única de habilitación del camino.
        // AES Andes registra Queltehues (1928) y Volcán (1944) en G-465 km 3:
        // el corredor se consolidó primero como soporte hidroeléctrico.
        construccion: 'No especificado (soporte hidroeléctrico: Queltehues 1928, Volcán 1944)',
        longitud: '~18 km desde Baños Morales',
        superficie: 'Ripio / tierra',
        pendiente: '~5%',
        altitudInicio: 1450,
        altitudFin: 1750,
      },
      historia: [
        'El G-465 combina tres capas históricas: soporte energético, acceso al valle alto y uso recreativo/andinista. AES Andes registra en San José de Maipo la entrada en operación de la central Queltehues en 1928 y de Volcán en 1944; documentos corporativos ubican ambas centrales en la ruta G-465 km 3. Esto sugiere que el corredor se consolidó primero como soporte al complejo hidroeléctrico histórico y luego como acceso al Maipo alto. La fecha exacta de habilitación del camino como vía pública queda no especificada en fuentes abiertas.',
        'El sector perdió relevancia como destino turístico masivo tras el cierre de las termas de Las Melosas, pero mantiene valor como acceso a zonas de alta cordillera, glaciares y rutas de alta montaña. Es punto de partida de ascensos al volcán San José y rutas de travesía hacia Argentina. La ZOIT vigente de San José de Maipo incluye a Las Melosas como unidad turística priorizada y propone la creación de ruta escénica en la G-465, reconociendo el uso recreativo aunque sigue subordinado a un corredor con ADN productivo.',
        'En materia presupuestaria, hay dos hitos claros. El puente El Cristo en la ruta G-465 fue licitado en 2011, adjudicado en 2012 por aproximadamente $929,5 millones; la cuenta pública municipal de 2013 reporta para esa obra una ejecución de $1.094 millones. Adicionalmente, en 2017 el MOP licitó una conservación por obras de emergencia que agrupó G-25, G-465 y G-455 con monto estimado de $2.000 millones, lo que confirma que Las Melosas entra al radar presupuestario principalmente por vulnerabilidad y conectividad, no por equipamiento turístico.',
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
            { tipo: 'Energía', tipoCss: 'prod', nombre: 'AES Andes — Centrales Queltehues (1928) y Volcán (1944)', desc: 'Ambas centrales están ubicadas en G-465 km 3. El corredor surgió históricamente como soporte a este complejo. En lo formal, la ruta es pública; en lo práctico, toda operación de centrales, mantenciones y seguridad condiciona el uso del corredor.', tension: null },
            { tipo: 'Ganadería', tipoCss: 'prod', nombre: 'Arrieros y ganaderos del Maipo alto', desc: 'El camino es utilizado para veranadas en la alta cordillera. Es el único sector del corredor donde el uso productivo tradicional (ganadería extensiva) convive con el uso recreativo moderno sin mediación de grandes empresas.', tension: null },
          ],
        },
        {
          grupo: 'Nivel estatal / tuición vial',
          items: [
            { tipo: 'Estado', tipoCss: 'state', nombre: 'DPP Cordillera — MOP', desc: 'Tuición vial. Es el camino con menor inversión relativa del corredor sur pese a ser el de mayor extensión en territorio de alta montaña. Los hitos presupuestarios documentados son el puente El Cristo (2011–2012) y la conservación de emergencia 2017.', tension: null },
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
      infraNota: 'El G-465 es el camino más desatendido del corredor. Su acceso a uno de los sectores de alta montaña más ricos de la RM —volcán San José, glaciares del Maipo alto— contrasta con la total ausencia de inversión en infraestructura recreativa. La ZOIT lo reconoce como unidad turística priorizada, pero eso no se ha traducido en proyectos ejecutados.',
      presupuesto: [
        { año: 2012, monto: 929.5, unidad: 'M CLP', estado: 'ejecutada', nota: 'Reposición puente El Cristo. Adjudicado 2012; cuenta pública 2013 reporta ejecución final $1.094M.' },
        { año: 2017, monto: 2000, unidad: 'M CLP', estado: 'ejecutada', nota: 'Conservación por obras de emergencia — paquete G-25 + G-465 + G-455. Monto estimado conjunto.' },
      ],
      presupuestoNota: 'Fuente: Planeamiento MOP, contratos por licitar abril-junio 2011; noviembre 2011; cuenta pública municipal San José de Maipo 2013 · Reposición puente El Cristo: licitada 2011, adjudicada 2012 (~$929,5M), ejecución final reportada $1.094M. Conservación emergencia 2017 (paquete G-25/G-465/G-455): ~$2.000M estimados. El origen del corredor como soporte a las centrales Queltehues (1928) y Volcán (1944) explica su ADN productivo y la baja prioridad en inversión recreativa.',
    },

  ], // end roads

}; // end ACCESOS
