/* ═══════════════════════════════════════════════════════════════
   ANDES MAGAZINE — DATA EDITORIAL
   ───────────────────────────────────────────────────────────────
   Modelo simple sin backend. Cada artículo es un objeto en ARTICLES.
   Las plantillas category.html y article.html leen de aquí.

   Para agregar un artículo nuevo: copia un bloque, cambia el `id`
   (debe ser único, en kebab-case) y completa los campos.
   ═══════════════════════════════════════════════════════════════ */

/* ─── CATEGORÍAS ─────────────────────────────────────────────── */
const CATEGORIES = {
  prensa: {
    slug: 'prensa',
    num: '01',
    title: 'Prensa',
    tagline: 'Contingencia, entrevistas y cobertura institucional.',
    description: 'Información pública para entender y decidir sobre la cordillera. Seguimiento a políticas de acceso, actores y decisiones que moldean el uso del territorio andino.'
  },
  cultura: {
    slug: 'cultura',
    num: '02',
    title: 'Cultura',
    tagline: 'Crónicas, expediciones y fotografía.',
    description: 'La vida contemporánea en la cordillera, contada desde adentro. Quienes la habitan, la recorren y la documentan.'
  },
  analisis: {
    slug: 'analisis',
    num: '03',
    title: 'Análisis',
    tagline: 'Ensayo y opinión.',
    description: 'Política de montaña, gobernanza y acceso. Pensamiento largo sobre las condiciones que habilitan —o restringen— el uso social de los Andes.'
  }
};

/* ─── ARTÍCULOS ──────────────────────────────────────────────── */
/* Cada artículo tiene:
   - id            → identificador único en la URL (?id=...)
   - category      → 'prensa' | 'cultura' | 'analisis'
   - title         → titular principal
   - excerpt       → bajada corta (para tarjeta y página de artículo)
   - image         → imagen principal (ruta relativa a assets/)
   - author        → firma
   - date          → fecha legible
   - readingTime   → tiempo estimado ("12 min")
   - tag           → etiqueta secundaria (ej. "Investigación", "Perfil")
   - body          → array de bloques. Cada bloque es uno de:
       { type: 'paragraph', text: '...' }
       { type: 'heading',   text: '...' }
       { type: 'image',     src: '...', caption: '...' }
       { type: 'quote',     text: '...', cite: '...' }
       { type: 'link',      text: '...', href: '...' }   ← link en bloque
     Dentro de 'paragraph' puedes usar HTML inline: <em>, <strong>, <a href="">.
*/

const ARTICLES = [

  /* ═══ PRENSA ═══ */
  {
    id: 'senapred-analfabetismo-montana',
    category: 'prensa',
    title: 'SENAPRED: la desigualdad comunal y el "analfabetismo de montaña" como grandes desafíos del acceso',
    excerpt: 'El Director Regional Metropolitano de SENAPRED detalla la cadena de decisión detrás de los cierres preventivos, la desigualdad de recursos entre municipios y la necesidad de instaurar una cultura de montaña.',
    image: 'assets/images/matiasdonosophoto-45.jpg',
    author: 'Simón Rodríguez',
    date: '15 de abril, 2026',
    readingTime: '9 min',
    tag: 'Entrevista',
    body: [
      { type: 'paragraph', text: 'La administración de las zonas cordilleranas en la Región Metropolitana expone tensiones constantes entre la seguridad pública, la falta de recursos municipales y el derecho al acceso. En entrevista, el Director Regional Metropolitano del Servicio Nacional de Prevención y Respuesta ante Desastres (SENAPRED), <strong>Miguel Muñoz</strong>, detalla la compleja toma de decisiones detrás de los cierres preventivos de rutas y la necesidad de instalar una cultura de montaña en el país.' },
      { type: 'heading', text: 'Quién cierra la cordillera' },
      { type: 'paragraph', text: 'Existe una confusión generalizada sobre la autoridad responsable de restringir el paso hacia la cordillera. SENAPRED opera como un ente coordinador que consolida la información técnica de organismos como la Dirección Meteorológica y SERNAGEOMIN. Con esos datos se emiten alertas tempranas preventivas para advertir sobre precipitaciones con isoterma alta o probabilidades de remociones en masa.' },
      { type: 'paragraph', text: 'Sin embargo, el acto administrativo que prohíbe el tránsito no recae ni en SENAPRED ni en Vialidad del MOP.' },
      { type: 'quote', text: 'Quien principalmente dice que cierra es la Delegación Presidencial Provincial, porque los cierres de camino tienen que ser bajo una resolución.', cite: 'Miguel Muñoz, Director Regional Metropolitano, SENAPRED' },
      { type: 'paragraph', text: 'Ante fenómenos impredecibles como un "núcleo frío en altura" —que genera lluvias intensas y activación repentina de quebradas—, la autoridad política opta por resguardar la vida, asumiendo una postura de cierre generalizado frente a la incertidumbre territorial.' },
      { type: 'heading', text: 'Recursos municipales desiguales' },
      { type: 'paragraph', text: 'El acceso al patrimonio natural también está condicionado por la capacidad económica y logística de cada comuna precordillerana. Mientras los municipios con mayores recursos cuentan con maquinaria propia o alianzas con empresas mineras privadas para despejar vías y mantener los caminos operativos, zonas como San José de Maipo carecen de esa capacidad, lo que obliga a cierres preventivos constantes.' },
      { type: 'image', src: 'assets/images/meson-alto-2.jpg', caption: 'Zona precordillerana de la Región Metropolitana. La capacidad de respuesta varía dramáticamente entre comunas.' },
      { type: 'quote', text: 'Ante una misma alerta técnica, operamos de manera distinta porque las realidades del territorio son opuestas. En Farellones existe una logística instalada: si se cierra el camino, la gente cuenta con refugios y hoteles. En San José de Maipo el nivel de vulnerabilidad es mayor, porque no existe esa infraestructura de respaldo.', cite: 'Miguel Muñoz, SENAPRED' },
      { type: 'heading', text: 'Operadores turísticos irregulares' },
      { type: 'paragraph', text: 'A esa fragmentación se suma el riesgo introducido por la falta de fiscalización comercial. Muñoz advierte sobre el aumento de operadores turísticos irregulares que ignoran las alertas tempranas por intereses económicos, exponiendo gravemente a los visitantes.' },
      { type: 'quote', text: 'Nos enfrentamos a operadores que actúan en la absoluta irregularidad y sin respetar norma alguna. Ante la falta de personal para inspeccionar la zona, vemos cómo se promocionan libremente en internet, prometiendo a los turistas experiencias con vino y quesos a orillas del embalse El Yeso, cuando en realidad son actividades del todo ilegales y de alto riesgo.', cite: 'Miguel Muñoz, SENAPRED' },
      { type: 'paragraph', text: 'Ante la omisión de las advertencias oficiales, SENAPRED termina asumiendo la movilización y el costo logístico de rescates complejos.' },
      { type: 'heading', text: 'Analfabetismo de montaña' },
      { type: 'paragraph', text: 'Para transitar desde una política pública basada en la restricción hacia un modelo que permita el acceso, SENAPRED señala que la clave es la educación formal desde edades tempranas.' },
      { type: 'quote', text: 'Hay personas con experiencia que saben interpretar las señales de la naturaleza, pero la gran mayoría de los visitantes no sabe hacerlo. Nuestro trabajo preventivo debe enfocarse precisamente en ellos: en educar a quienes hoy son verdaderos "analfabetos de montaña".', cite: 'Miguel Muñoz, SENAPRED' },
      { type: 'paragraph', text: 'La autoridad subraya que esa falta de lectura básica del entorno convierte a gran parte de los visitantes ocasionales en usuarios que no saben cómo actuar y, por lo tanto, son más propensos a accidentarse internados en la montaña. Y lo resume con una analogía directa.' },
      { type: 'quote', text: 'Yo siempre digo: no tenemos mar, pero tenemos montaña. No tengo tsunami, tengo remociones en masa, y se muere igual la gente. Hay que tener el mismo ojo que se tiene para los tsunamis, con la diferencia de que en la montaña no puedo poner una sirena.', cite: 'Miguel Muñoz, SENAPRED' },
      { type: 'paragraph', text: 'El cierre constante de los caminos es el resultado de una suma de deficiencias: desigualdad logística y de recursos entre municipios, poca o nula fiscalización a operadores turísticos irregulares, y falta de educación preventiva. Para transitar hacia un modelo de turismo verdaderamente seguro, la solución no radica únicamente en la restricción física temporal, sino en la coordinación institucional y la responsabilidad civil.' },
      { type: 'quote', text: 'A lo mejor hay que crear una política nacional de montaña. Hay que saber cómo trabajar esa temática para ir avanzando.', cite: 'Miguel Muñoz, SENAPRED' },
      { type: 'paragraph', text: 'Esta entrevista abre una serie sobre gobernanza del acceso a la cordillera. Ver también <a href="article.html?id=mop-presupuesto-seguridad">la entrevista al MOP</a> y <a href="article.html?id=mineduc-analfabetismo-montana">al Mineduc</a>.' }
    ]
  },

  {
    id: 'mop-presupuesto-seguridad',
    category: 'prensa',
    title: 'Entre el presupuesto y la seguridad: el MOP sincera la realidad detrás del cierre de la montaña',
    excerpt: 'Las autoridades regionales y provinciales de Vialidad del MOP explican los desafíos presupuestarios, el impacto del cambio climático y los protocolos que determinan el cierre preventivo de los caminos.',
    image: 'assets/images/meson-alto-2.jpg',
    author: 'Simón Rodríguez',
    date: '10 de abril, 2026',
    readingTime: '8 min',
    tag: 'Entrevista',
    body: [
      { type: 'paragraph', text: 'La gestión de la infraestructura vial en las zonas de montaña chilenas enfrenta una tensión constante entre la necesidad ciudadana de acceder a la cordillera y el deber del Estado de garantizar la seguridad pública. En esta entrevista, las máximas autoridades regionales y provinciales de la Dirección de Vialidad del Ministerio de Obras Públicas (MOP) abordaron los desafíos presupuestarios, el impacto del cambio climático y los protocolos que determinan el cierre preventivo de los caminos hacia la alta montaña.' },
      { type: 'heading', text: 'El rol técnico' },
      { type: 'paragraph', text: 'Ante la creencia generalizada de que es el MOP quien decreta los cierres, la institución aclara cómo funciona realmente la cadena de mando. El proceso se basa en mesas de coordinación interinstitucional donde se analizan los pronósticos meteorológicos y las alertas de remoción en masa emitidas por organismos como SENAPRED.' },
      { type: 'quote', text: 'Nosotros, como Vialidad, no cerramos ni abrimos caminos; eso tiene que estar súper claro. Somos el ente técnico que recomienda las medidas en base a las condiciones de la ruta. La decisión final sobre horarios y bloqueos la toma el Ministerio del Interior a través de la Delegación Presidencial.', cite: 'Oliver López, Director Regional Metropolitano de Vialidad' },
      { type: 'paragraph', text: '<strong>Andrés Peralta</strong>, Jefe Provincial de Vialidad Cordillera, enfatiza que, más allá de la afectación indirecta al turismo local, el criterio rector siempre es aislar el peligro.' },
      { type: 'quote', text: 'Entregamos los insumos técnicos y sugerimos acciones. Para nosotros la prioridad absoluta es la seguridad y la vida de las personas.', cite: 'Andrés Peralta, Jefe Provincial Cordillera, MOP' },
      { type: 'heading', text: 'Cambio climático y presupuesto' },
      { type: 'paragraph', text: 'A la dificultad operativa se suma la alteración de los patrones meteorológicos, que ha vuelto impredecible el comportamiento del territorio. Los profesionales del MOP advierten que los aluviones están ocurriendo en sectores donde históricamente no había registros de riesgo.' },
      { type: 'quote', text: 'El cambio climático es una realidad. Lo que habíamos implementado como medidas de seguridad y mitigación durante los últimos veinte años ya no está resultando. Hoy estamos teniendo cotas cero más bajas de lo usual y eventos extremos mucho más frecuentes.', cite: 'Gerardo Galindo, Jefe Provincial de Santiago y Ruta a Farellones, MOP' },
      { type: 'paragraph', text: 'Ese escenario obliga a reevaluar la infraestructura, pero la inversión estatal choca con las barreras del presupuesto público. Los proyectos se ordenan por un criterio de <em>rentabilidad social</em>: las obras de gran envergadura en montaña —ensanchamientos, mallas de contención, nuevos puentes— tienen costos altísimos y compiten por fondos bajo ese criterio, lo que significa que muchos proyectos pueden quedar en espera durante años hasta que se justifique el beneficio directo para un número masivo de usuarios.' },
      { type: 'image', src: 'assets/images/P1110727.jpg', caption: 'Ruta de alta montaña en temporada invernal. La ingeniería cordillerana compite por fondos bajo criterio de "rentabilidad social".' },
      { type: 'paragraph', text: 'Ante esa limitación y la hostilidad del entorno, Galindo detalla la filosofía con la que se instalan las actuales defensas y señaléticas.' },
      { type: 'quote', text: 'Nuestras disposiciones de seguridad en los caminos cordilleranos las diseñamos pensando en el peor escenario posible: un usuario que no conoce la ruta y que transita de noche.', cite: 'Gerardo Galindo, MOP' },
      { type: 'heading', text: 'Turismo irregular y fiscalización' },
      { type: 'paragraph', text: 'Uno de los mayores obstáculos para mantener los caminos habilitados es el comportamiento de visitantes que ignoran las alertas tempranas y el aumento de agencias turísticas que operan informalmente frente a la normativa de seguridad.' },
      { type: 'quote', text: 'El problema radica en los operadores informales. Suben turistas en furgones sin un guía experto ni un prevencionista que advierta sobre la velocidad o el peligro de caída de rocas. Es un riesgo imposible de controlar si no se instalan puntos de fiscalización preventivos, guiados por Carabineros, que exijan el porte y uso de cadenas antes de permitir el ascenso.', cite: 'Andrés Peralta, MOP' },
      { type: 'paragraph', text: 'Como medida para descongestionar las rutas y reducir la accidentabilidad sin frenar el turismo, las autoridades de Vialidad plantean transitar hacia modelos de acceso controlado.' },
      { type: 'quote', text: 'Una propuesta es limitar el ascenso de vehículos particulares durante frentes de mal tiempo. Los turistas llegarían a un punto de estacionamiento seguro en la zona baja y, desde ahí, subirían exclusivamente en vehículos de transporte especializado, con tracción, cadenas y conductores experimentados.', cite: 'Oliver López, Director Regional de Vialidad' },
      { type: 'paragraph', text: 'El diagnóstico técnico sobre el acceso a la montaña está condicionado por factores que superan la simple mantención de las rutas. El cierre constante es la respuesta reactiva ante la ineficacia de las medidas tradicionales frente al cambio climático, los altos costos de la ingeniería de montaña y la falta de regulación sobre el turismo informal. Para superar la lógica de la restricción, la institución plantea que la solución no depende solo de más pavimento, sino de una fiscalización rigurosa del equipamiento vehicular y de un cambio en el modelo que garantice la seguridad de los usuarios sin comprometer la conectividad del territorio.' },
      { type: 'paragraph', text: 'Esta entrevista es parte de una serie sobre gobernanza del acceso a la cordillera. Ver también <a href="article.html?id=senapred-analfabetismo-montana">la entrevista a SENAPRED</a> y <a href="article.html?id=mineduc-analfabetismo-montana">al Mineduc</a>.' }
    ]
  },

  {
    id: 'mineduc-analfabetismo-montana',
    category: 'prensa',
    title: 'La raíz del "analfabetismo de montaña": Mineduc aborda la desconexión del currículo con el territorio',
    excerpt: 'Las restricciones de acceso y la saturación de los rescates son síntomas de un problema más profundo. Autoridades de la División de Educación General detallan las barreras administrativas y curriculares.',
    image: 'assets/images/fito.jpg',
    author: 'Simón Rodríguez',
    date: '05 de abril, 2026',
    readingTime: '8 min',
    tag: 'Entrevista',
    body: [
      { type: 'paragraph', text: 'Las restricciones de acceso a la cordillera y la saturación de los operativos de rescate son solo síntomas de un problema más profundo: la desconexión cultural de la ciudadanía con su territorio. En esta entrevista, autoridades de la División de Educación General del Ministerio de Educación (Mineduc) detallan los desafíos administrativos, curriculares y presupuestarios que hoy impiden que los estudiantes aprendan a convivir de manera segura con el territorio de montaña.' },
      { type: 'heading', text: 'Currículo sobrecargado y falla logística' },
      { type: 'paragraph', text: 'La realidad de la educación de montaña choca directamente con la rigidez del sistema. El Mineduc opera con un currículo nacional altamente demandado y sobrecargado de objetivos de aprendizaje, lo que dificulta la creación de asignaturas específicas para abordar la relación con el territorio local.' },
      { type: 'paragraph', text: 'A eso se suma que llevar a los estudiantes al entorno natural representa un desafío logístico severo que muchas escuelas públicas prefieren evitar.' },
      { type: 'quote', text: 'Para los colegios es muy complejo hacer salidas pedagógicas a terreno. Va el mismo profe, va el inspector, va la profe de básica, va el asistente. No es que contraten un equipo de seguridad, porque todos estos son recursos adicionales. Y la escuela tiene un solo presupuesto.', cite: 'Daniela Williams Canales, Gabinete División de Educación General, Mineduc' },
      { type: 'paragraph', text: 'La normativa exige informar a las autoridades provinciales con diez días de anticipación y activar protocolos estrictos de seguridad. Esa burocracia, sumada al hecho de que los profesores que no asisten deben cubrir a los cursos restantes, genera un estrés institucional que desincentiva el aprendizaje al aire libre.' },
      { type: 'image', src: 'assets/images/Diente-Diablo.jpg', caption: 'Salida escolar en entorno de montaña. Este tipo de actividades exige recursos adicionales que el presupuesto escolar regular no contempla.' },
      { type: 'heading', text: 'Fondos SEP y especialistas externos' },
      { type: 'paragraph', text: 'A pesar de esas barreras, las autoridades señalan que la solución no requiere cambiar la ley, sino utilizar los instrumentos existentes. Hay "oportunidades curriculares" declaradas en objetivos transversales —como el Plan de Formación Ciudadana y el Plan de Seguridad Escolar— que permiten abordar el territorio sin alterar las asignaturas tradicionales.' },
      { type: 'paragraph', text: 'Para sortear la falta de conocimientos técnicos de los docentes en materias de supervivencia o lectura de riesgos, el sistema permite la contratación de profesionales externos. David Leiva, especialista del equipo de Formación Ciudadana, aclara que el modelo otorga autonomía a los sostenedores a través de la Subvención Escolar Preferencial (SEP).' },
      { type: 'quote', text: 'Los colegios contratan con dineros de las subvenciones escolares preferenciales para acompañar a sus niños en términos de seguridad, y la entidad contratada acompaña al profesor para entregarle formación.', cite: 'David Leiva, Formación Ciudadana, Mineduc' },
      { type: 'heading', text: 'Sobrecarga de programas y alianzas' },
      { type: 'paragraph', text: 'La falta de una política territorial unificada a nivel de Estado provoca que las escuelas reciban iniciativas desarticuladas de múltiples ministerios —Deporte, Medio Ambiente, Energía—, colapsando a los equipos directivos a mitad de año.' },
      { type: 'quote', text: 'Todos los ministerios tienen sus propias metas. La escuela termina siendo como un árbol de Pascua al que le cuelgan iniciativas de deporte, ciencia o energía. Como no tienen recursos, aceptan todo, pero a mitad de año colapsan. Empiezan a botar los programas no obligatorios y se genera una tremenda pérdida de recursos financieros, tiempo y desgaste del profesorado.', cite: 'Daniela Williams Canales, Mineduc' },
      { type: 'paragraph', text: 'A esa saturación administrativa se suma la barrera técnica y presupuestaria propia de la geografía.' },
      { type: 'quote', text: 'Una cosa es ser profesor de educación física y otra muy distinta es tener experiencia en montaña. Por capacidades y por un presupuesto único que no permite contratar equipos de seguridad adicionales, para los colegios es muy complejo hacer salidas al territorio natural. Al final, por facilidad, se opta por salidas pedagógicas en espacios controlados y en quietud que todo el mundo ya conoce.', cite: 'Daniela Williams Canales, Mineduc' },
      { type: 'paragraph', text: 'Para que la educación de montaña escale y deje de ser un privilegio de pocos colegios, la Coordinadora de la Unidad de Participación y Formación Ciudadana del Mineduc señala que la clave es formalizar alianzas técnicas que unan ambos mundos.' },
      { type: 'quote', text: 'Hay un universo de docentes que no saben de montaña, pero hay un universo de personas muy especialistas de montaña que no tienen ni idea de educación. Apostar a una lógica de alianzas en temas específicos, donde ustedes son favorecedores de esos procesos, alivia, descomprime y se pueden generar buenas cosas.', cite: 'Coordinadora Unidad de Participación y Formación Ciudadana, Mineduc' },
      { type: 'paragraph', text: 'El diagnóstico para erradicar el "analfabetismo de montaña" trasciende la voluntad de los profesores. La falta de educación territorial es el resultado de un currículo sobrecargado, la burocracia logística que penaliza las salidas a terreno y la desarticulación de los programas estatales. Para transformar la cordillera en un aula segura, la solución institucional apunta a utilizar los instrumentos de gestión escolar vigentes y fomentar alianzas con especialistas técnicos externos que garanticen la seguridad de los estudiantes, aliviando la sobrecarga del sistema público y democratizando el aprendizaje práctico en la naturaleza.' },
      { type: 'paragraph', text: 'Esta entrevista cierra la serie sobre gobernanza del acceso a la cordillera. Ver también <a href="article.html?id=senapred-analfabetismo-montana">la entrevista a SENAPRED</a> y <a href="article.html?id=mop-presupuesto-seguridad">al MOP</a>.' }
    ]
  },

  /* ═══ CULTURA ═══ */
  {
    id: 'sur-morado-septima-ascension',
    category: 'cultura',
    title: 'La séptima de la Sur del Morado: crónica de una cuerda cortada',
    excerpt: 'Febrero de 2003. Carlos Pinto y Diego Vergara firman la séptima ascensión a la pared sur del Morado tras una cuerda partida por la caída de una piedra y un vivac improvisado a 4.200 metros.',
    image: 'assets/images/morado-cumbre.jpg',
    author: 'Redacción Andes, con relato de Diego Vergara Lira',
    date: '16 de abril, 2026',
    readingTime: '13 min',
    tag: 'Crónica',
    body: [
      { type: 'paragraph', text: 'En nuestro viaje por recuperar la historia secreta de los Andes llegamos a conversar con Diego Vergara Lira, andinista chileno que comparte el relato de lo que fue su ascensión en busca de la séptima cumbre de la pared sur del Morado. La recuerda como una de sus aventuras más épicas por la significancia y la vivencia.' },
      { type: 'paragraph', text: 'La cumbre era emblemática: para la época solo la habían escalado seis veces —1961, 1981 (dos veces), 1986, 1994 y 1995—. Habían pasado ocho años del último ascenso, y la habían firmado puras leyendas <em>old school</em>. Solo pensar en la pared le devuelve lo que pasaba por su cabeza el 2003.' },
      { type: 'heading', text: 'La cronología previa' },
      { type: 'paragraph', text: 'Según el registro de Andeshandbook, los ascensos hasta ese verano eran: <strong>César Vásquez y Juan Tangol</strong>, 4 de marzo de 1961, primera ascensión (vía Vásquez); <strong>Alejandro Izquierdo, Dagoberto Delgado y Germán Maccio</strong>, 10 de enero de 1981; <strong>Gino Casassa y Steve Brewer (USA)</strong>, 29 de marzo de 1981 —Casassa ya lo había intentado antes con Francisco Medina, llegando solo hasta el canalón de hielo—; <strong>Buracchio, Montes y Thiele</strong>, 1986, DAV; <strong>Carlos Fuentes y Rodrigo Vivanco</strong>, 1994; <strong>Waldo Farías y Pablo Besser</strong>, febrero de 1995 —primera en el día y primera sin clavos—.' },
      { type: 'paragraph', text: 'Y entonces, febrero de 2003: <strong>Carlos Pinto y Diego Vergara</strong>. Séptima.' },
      { type: 'heading', text: 'La decisión' },
      { type: 'image', src: 'assets/images/morado-topo.png', caption: 'Topo de la pared sur del Morado (cumbre sur, 4.490 m). Graduación no estable, dibujada según las condiciones encontradas durante la 7ª ascensión. Ilustración: Diego Vergara Lira.' },
      { type: 'paragraph', text: 'Todo partió en la tienda Cumbre, donde Diego y Carlos trabajaban. Entre clientes, revisaban la historia de las grandes paredes de los Andes Centrales y se entramparon en la discusión de cuál era la más imponente. Carlos tiraba para lo rocoso, Diego para lo alpino. Cada vez que subían al Cajón veían la pared sur del Morado, y en algún momento dejó de ser discusión: era esa.' },
      { type: 'quote', text: 'La elegimos como la más bella e imponente, también la más difícil. No había otra opción.', cite: 'Diego Vergara Lira' },
      { type: 'paragraph', text: 'Esa noche Diego se quedó en la casa de Carlos. Armaron el rack revisando pieza por pieza qué servía para esa pared, ordenaron el equipo, compartieron con la familia y partieron al alba. Entraron por Baños Morales y remontaron el cajón hasta la base, donde armaron un campamento mirando a la pared.' },
      { type: 'paragraph', text: 'El día siguiente lo dedicaron a estudiar la ruta. Para Diego, el 90% del éxito de un pegue está en el estudio previo. En este caso parecía más bien terapia de mentalización: una canaleta a tres cuartos de la montaña se veía, desde abajo, como el punto de mayor dificultad.' },
      { type: 'paragraph', text: '—Ese debe ser el crux, ¿no? —dijo Carlos.' },
      { type: 'paragraph', text: '—Así parece —respondió Diego.' },
      { type: 'paragraph', text: 'Tras un silencio breve, Diego agregó: —Igual se sube. Un cruce de mirada y la decisión estaba cerrada. Al día siguiente iban por la pared. Al menos por un intento.' },
      { type: 'heading', text: 'Día uno: la roca que pasó a dos metros' },
      { type: 'paragraph', text: '4 AM. Desayuno corto, acarreo concentrado. Hablaban lo justo para moverse. Se montaron en la pared y empezaron a turnarse los largos. Los primeros eran fáciles y avanzaban rápido, en una especie de trance donde la cordada fluye sin dubitar. Carlos y Diego eran cordada hacía tres años: se conocían al revés y al derecho, comunicación pseudo-psíquica, no hacían falta las palabras. Buen complemento: Carlos muy duro en roca; a Diego le gustaba el hielo y el <em>drytooling</em>.' },
      { type: 'paragraph', text: 'Sobre los 3.300 msnm la roca empezó a soltar. Los desprendimientos aumentaban. A la altura de la reunión del largo 12, de pronto, una avalancha de rocas. Se refugiaron tras un pequeño techo. Una piedra del tamaño de un refrigerador pasó a dos o tres metros. El instinto había hecho lo suyo.' },
      { type: 'image', src: 'assets/images/morado-largo-mixto.jpg', caption: 'Comienzo del largo mixto 11–12, en plena sección de escalada mixta antes del crux.' },
      { type: 'heading', text: 'La cuerda cortada' },
      { type: 'paragraph', text: 'Era el turno de Diego. Todavía con el pulso alto por la roca que acababa de pasar, empezó a puntear. Había sido un invierno cargado en los Andes Centrales, con harta acumulación en el valle de las Arenas al pie de la cara este del Morado. La ruta no se había derretido del todo, y Diego entraba en un largo maravilloso de escalada mixta cuando, desde abajo, Carlos empezó a gritar:' },
      { type: 'paragraph', text: '—¡Reeeeeuuuuuu!' },
      { type: 'paragraph', text: '—¡Reuuuuuunión!' },
      { type: 'paragraph', text: 'Una y otra vez. <em>¿Qué habrá pasado?</em>, pensaba Diego. Le quedaban al menos 15 metros de cuerda —escalaban con una de 60—, pero sin dudar hizo caso. Montó reunión en una zona más protegida y empezó a recuperar cuerda para asegurar a su compañero. O al menos eso creía.' },
      { type: 'paragraph', text: 'Lo que no sabía era que la piedra del tamaño de un refrigerador había cortado la cuerda en dos. Carlos, para evitarle a Diego la carga psicológica de escuchar <em>¡se cortó la cuerda!</em> mientras iba <em>freesoleando</em> un largo expuesto de <em>drytooling</em>, optó por pedirle que hiciera reunión. Al mismo tiempo, tomó el cabo cortado, se lo amarró al arnés y <em>freesoleó</em> unos diez metros hasta alcanzar el extremo asegurado. Un nudo simple, y a seguir.' },
      { type: 'paragraph', text: 'Arriba, Diego buscaba alguna señal para entender. Al recuperar notó que la cuerda estaba cortada y que el nudo que había hecho Carlos no pasaría por el asegurador. Improvisó un sistema con <em>prusiks</em> para mantener la tensión, deshizo el nudo, pasó el cabo por el asegurador y siguió recogiendo. Se podía escuchar la respiración de Carlos, concentrado, manteniendo ritmo en una sección expuesta.' },
      { type: 'paragraph', text: 'Al salir del paso, Carlos alzó la vista y se topó con Diego. Ninguno dijo nada. Dos segundos de silencio antes del mar de carcajadas.' },
      { type: 'paragraph', text: '—JAJAJAJA, ¿qué pasó, hueón? —preguntó Diego sin dejar de reír.' },
      { type: 'paragraph', text: '—La roca que nos cayó cortó la cuerda.' },
      { type: 'paragraph', text: '—¡¿Queeé?! JAJAJAJA.' },
      { type: 'image', src: 'assets/images/morado-cuerda-cortada.jpg', caption: 'De vuelta con la cuerda cortada. La cuerda era nueva, la mejor y más ligera del mercado, comprada especialmente para esa escalada.' },
      { type: 'paragraph', text: 'Habían decidido subir con una sola cuerda y llevar un cordín de 60 metros en 7 mm para unir y rapelear. Menos peso, más velocidad. <strong>Hoy no es recomendable: en los Andes Centrales siempre doble, por la caída de rocas.</strong>' },
      { type: 'heading', text: 'El vivac' },
      { type: 'paragraph', text: 'Cerca de las 19:00 de un cálido sábado de febrero de 2003, largo 12, con una cuerda de 60 metros cortada por la mitad y un cordín de 60. Un rato largo quedaron conversando en una terraza que los protegía de desprendimientos. ¿Convenía bajar? Bajar catorce largos con media cuerda y un cordín, con caída de rocas, era una misión mortal. Decidieron en el acto: seguir.' },
      { type: 'paragraph', text: 'Para subir, igual había que pasar la noche en la pared. Desde la terraza se veían los últimos rayos apuntando a la cumbre del Arenas y a la punta Zanzi, rojizas, como de otro planeta. Junto al Morado forman la trilogía del valle del Maipo. Compartieron una sopa —no llevaban anafre—, lo poco que quedaba de comida. No llevaban sacos. Con parkas de pluma, gorro y guantes, durmiendo sobre las cuerdas, al más puro estilo alpino, armaron un vivac improvisado. Desde ahí intercambiaron señas con excursionistas acampando en la laguna del Morado, al pie del glaciar por la cara este.' },
      { type: 'image', src: 'assets/images/morado-vivac.jpg', caption: 'Diego armando el vivac en la pared sur. Parkas de pluma, gorro, guantes, y dormir sobre las cuerdas.' },
      { type: 'heading', text: 'Día dos: cumbre' },
      { type: 'paragraph', text: 'Al amanecer, con el termo, unos amargos mates mañaneros. Sabían que bajar por donde habían subido era más arriesgado que llegar a la cumbre y descender por otro lado. Turno de Carlos: primero de los siete u ocho largos que calculaban hasta la cima. El crux había quedado atrás. De a poco los grados fueron soltando. Los primeros rayos llegaron por el noreste, pero a casi 4.500 msnm la montaña calentaba poco.' },
      { type: 'paragraph', text: 'El día dos fluyó. Escalada más alpina, algunas secciones mixtas, mayormente hielo y travesía. Se desamarraron y siguieron en simultáneo por largos de quinto, después cuarto. Al final, una roca con un pasito. La cumbre parecía estar al otro lado.' },
      { type: 'paragraph', text: 'Carlos se aventuró a mirar. Sigiloso, buscó con el piolet una fisura pequeña. Dos pasos, y al salir gritó:' },
      { type: 'paragraph', text: '—¡CUUUUMBRE!' },
      { type: 'image', src: 'assets/images/morado-cumbre.jpg', caption: 'Carlos Pinto y Diego Vergara en la cumbre sur del Morado, 4.490 m. Séptima ascensión a la pared sur.' },
      { type: 'paragraph', text: 'Diego siguió a su compañero. Se abrazaron en la cima de la pared riendo y cantando. Buscaron el libro de cumbre, conmocionados por los relatos que encontraron. Escribieron la crónica de su aventura y marcaron un hito en la escalada nacional. <strong>Séptima ascensión a la pared sur del Morado.</strong> Hasta entonces, una leyenda que parecía inalcanzable para escaladores aficionados detrás de un sueño.' },
      { type: 'quote', text: 'Habían pasado ocho años del último ascenso. La habían escalado puras leyendas old school.', cite: 'Diego Vergara Lira' },
      { type: 'paragraph', text: 'Este relato abre una serie de crónicas sobre grandes paredes de los Andes Centrales. Continúa en <a href="category.html?cat=cultura">Cultura</a>.' }
    ]
  },

  {
    id: 'ski-montana-andes-chilenos',
    category: 'cultura',
    title: 'Ski de montaña en los Andes chilenos: las rutas imperdibles',
    excerpt: 'Notas sobre los itinerarios más interesantes del esquí de montaña en Chile, de la Super C en Portillo a los fiordos de Magallanes. Una conversación con Raimundo De Andraca.',
    image: 'assets/images/ski-aproximacion.jpg',
    author: 'Redacción Andes, con Raimundo De Andraca',
    date: '12 de abril, 2026',
    readingTime: '12 min',
    tag: 'Guía',
    body: [
      { type: 'paragraph', text: 'Junto a Raimundo De Andraca —deportista que ha empujado el límite del esquí de montaña en la región abriendo líneas e itinerarios inéditos— conversamos sobre el presente del esquí de montaña en los Andes chilenos, algo de su pasado y el futuro próximo. Partimos por los Andes Centrales, sin duda el esquí de montaña más vertical y con el potencial de exploración más cercano a la civilización, y fuimos viajando al sur hasta el extremo del continente.' },
      { type: 'paragraph', text: 'Se conoce como <strong>Andes Centrales</strong> el territorio de la cordillera entre Chile y Argentina que va desde el cerro Aconcagua (6.961 msnm), la cumbre más alta del continente, hasta el sur del Glaciar Universidad, la superficie de glaciar más extensa después de los Campos de Hielo patagónicos.' },
      { type: 'paragraph', text: 'Tanto el esquí de travesía como el esquí de montaña han tenido un rápido crecimiento en los últimos años, acelerado tras la pandemia cuando las estaciones se clausuraron por completo. No solo hubo sofisticación en la tecnología —las fijaciones de pin y los splitboard revolucionaron el esquí en los Andes— sino también en los estudios de avalanchas y toma de decisiones en terreno.' },
      { type: 'heading', text: '¿Qué es el esquí de montaña?' },
      { type: 'paragraph', text: '<em>Esquí de montaña</em>, <em>ski mountaineering</em> o <em>extreme skiing</em> es la disciplina que combina montañismo invernal con <em>freeride</em>. Generalmente se suben altas cumbres y se utiliza tanto equipo de <em>ski touring</em> como de montañismo o escalada: skis, crampones, piolets, arneses, cuerdas, empotradores, entre otros. Exige conocimiento técnico alto y capacidad física. La exposición es alta por los riesgos objetivos —no controlables— inherentes al deporte.' },
      { type: 'paragraph', text: 'En esta nota cubrimos exclusivamente los itinerarios clásicos del esquí de montaña, no del esquí de travesía.' },
      { type: 'image', src: 'assets/images/ski-aproximacion.jpg', caption: 'Aproximación en esquí de montaña. Andes Centrales.' },
      { type: 'heading', text: 'Andes Centrales' },
      { type: 'paragraph', text: 'En las cercanías del Aconcagua se encuentra probablemente la nieve más seca y helada de la región. Y si hablamos de clásicos, hay que partir por el más clásico de todos: <strong>la Super C (3.961 msnm)</strong>, la ruta más famosa del esquí de montaña en el hemisferio sur. Su reputación viene del acceso: desde la cima del andarivel Roca Jack del centro de esquí Portillo se inicia un ascenso de 800 m hasta entrar al <em>couloir</em>, con 1.150 m de desnivel. Un itinerario que debería estar en todo <em>checklist</em> de los fanáticos del <em>steep skiing</em>, siempre que haya experiencia previa en esquí avanzado de montaña.' },
      { type: 'paragraph', text: 'El segundo destino —y quizás el más explorado en los últimos años— son los distintos valles del <strong>Cajón del Maipo</strong>. Punto de encuentro para montañismo invernal y estival: esquí de travesía, esquí de montaña, escalada en hielo y mixta, a veces todas combinadas en un solo itinerario.' },
      { type: 'paragraph', text: 'Entre las rutas abiertas recientemente destacamos el <strong>descenso del Morado (4.647 msnm)</strong>, el <strong>descenso del Punta Yamakawa (4.967 msnm)</strong>, el <strong>descenso del glaciar San Francisco (4.345 msnm)</strong> y el <strong>descenso de la cara sur del cerro Loma Larga (5.400 msnm)</strong>, varios aún sin repetición. Entre los clásicos que todo esquiador de montaña debería visitar están los <strong>canalones del Arenas (4.366 msnm)</strong> a la entrada del valle, las distintas líneas del <strong>cerro Unión (3.658 msnm)</strong> —que ofrece un itinerario más extenso para quienes quieren introducirse en rutas grandes— y el <strong>enlace portezuelo a la laguna del Morado</strong>, para quienes prefieren la travesía entre valles.' },
      { type: 'image', src: 'assets/images/loma-larga-cara-sur.jpeg', caption: 'Cara sur del cerro Loma Larga (5.400 msnm), Cajón del Maipo. Uno de los descensos más exigentes de los Andes Centrales.' },
      { type: 'paragraph', text: 'En el <strong>Valle Arenas</strong> —uno de los múltiples del Cajón del Maipo, quizás el más explorado en esquí de montaña— hay aún un sinfín de líneas por explorar. De ahí saltamos al <strong>valle de la Engorda</strong>, a los pies del volcán San José (5.895 msnm), y al <strong>embalse del Yeso</strong> con su clásica y estética línea de <strong>Punta Negra (4.127 msnm)</strong>.' },
      { type: 'image', src: 'assets/images/ski-couloir-descenso.png', caption: 'Descenso técnico en couloir. Andes Centrales.' },
      { type: 'paragraph', text: 'Continuamos hacia el sur, por la Región de O\u2019Higgins, en el extremo inferior de los Andes Centrales. Recientemente, dos expediciones se adentraron al interior de las altas cumbres del <strong>glaciar Universidad</strong>, históricamente cerrado por ser territorio privado. Destacamos el <strong>primer descenso de la cara este del cerro Altos del Arriero (4.990 msnm)</strong>, que dio origen al documental <em>Deep Andes, Glaciar Universidad</em> de The North Face, y el <strong>descenso del volcán Palomo (4.860 msnm)</strong>, registrado en el documental <em>Andes Indómito</em>. Vale la pena mencionar que los dueños del lugar trabajan en un proyecto llamado <strong>Glaciares de Colchagua</strong> que busca abrir estos espacios al turismo de montaña.' },
      { type: 'paragraph', text: 'A medida que viajamos al sur la cordillera se achica. Hay lugares increíbles en destinos como la <strong>Laguna de Teno</strong> y el <strong>valle Las Trancas</strong>, pero son clásicos más bien del esquí de travesía o <em>ski touring</em>, no del esquí de montaña.' },
      { type: 'heading', text: 'La zona de los volcanes: Araucanía y Los Ríos' },
      { type: 'paragraph', text: 'Al norte de la Araucanía, vecino al volcán Antuco y la laguna del Laja, está el <strong>macizo de la Sierra Velluda (3.585 msnm)</strong>. Su <strong>cara este</strong> ofrece un descenso que está ganando fama como uno de los más extremos del sur del país, con pendientes de hasta 55°. Un proyecto de esquí vertical cada vez más relevante en las montañas sureñas.' },
      { type: 'paragraph', text: 'Si hablamos de <strong>esquí de montaña en el sur de Chile</strong>, hablamos prácticamente de <em>esquiar volcanes rodeados de bosques nativos milenarios, con vista a múltiples lagos</em>.' },
      { type: 'paragraph', text: 'En el corazón de la Araucanía, esquiar el <strong>volcán Villarrica (2.847 msnm)</strong>, el <strong>Llaima (3.125 msnm)</strong> o el <strong>Lanín (3.710 msnm)</strong> es una aventura no tan demandante técnicamente, más bien física. A pesar de no ser montañas técnicas, hay riesgos: frío por vientos cambiantes —como el <em>puelche</em>, fuerte viento del Atlántico—, zonas de hielo y grietas que han terminado en accidentes fatales. El más clásico es el Villarrica, el volcán más activo de Chile, que con su fumarola en la cima deleita a sus visitantes.' },
      { type: 'paragraph', text: 'Más al sur, en Los Ríos, se cambian las araucarias ancestrales por alerces. Entre los imperdibles: <strong>el volcán Osorno (2.652 msnm)</strong> con su vista majestuosa, el <strong>volcán Puyehue (2.240 msnm)</strong> —donde se puede esquiar el cráter, que acumula toda la nieve arrastrada por el viento— y el <strong>cerro Tronador (3.491 msnm)</strong>, una aventura con muy pocas exploraciones en esquí.' },
      { type: 'heading', text: 'Patagonia' },
      { type: 'paragraph', text: 'La última gran macrozona de esquí de montaña es la Patagonia. Comienza en la provincia de Palena (Los Lagos) y abarca toda la región de Aysén y Magallanes. Para llegar hay múltiples formas: ferry por el lado chileno, caminos en mal estado por el lado argentino, o avión hasta el aeropuerto de Balmaceda en Coyhaique.' },
      { type: 'paragraph', text: 'En las cercanías de Coyhaique, en la villa Cerro Castillo, el deporte blanco llegó para quedarse y las posibilidades de apertura de nuevas líneas siguen existiendo. <strong>Al interior de la cordillera de Castillo, el terreno para esquí de montaña es increíble</strong>, con rutas para todos los niveles. En el <strong>valle Neozelandés</strong> se accede a la <strong>Punta Duff</strong>, el <strong>cerro Chocolate</strong> y el <strong>cerro Castillo (2.675 msnm)</strong>, con líneas sostenidas. El <strong>portezuelo Ibáñez</strong>, a unos 32 km de la villa Cerro Castillo, se posiciona como uno de los destinos más relevantes de la zona: a diferencia del valle Neozelandés, se puede llegar en auto hasta la base.' },
      { type: 'image', src: 'assets/images/ski-campos-hielo.jpg', caption: 'Esquí en zona austral, con vista a campos de hielo. Una de las experiencias más remotas del continente.' },
      { type: 'paragraph', text: 'Mucho menos explorados son los <strong>Campos de Hielo Norte</strong> y <strong>Campos de Hielo Sur</strong>, con los míticos cerros que han marcado el montañismo mundial. La zona conocida como <em>El Circo de los Altares</em>, con el cerro Torre (3.133 msnm), el Chaltén y el Fitz Roy (3.406 msnm), ha visto aumentar la actividad de esquí en los últimos años, con un potencial gigantesco.' },
      { type: 'paragraph', text: 'En el extremo más austral se encuentran los <strong>fiordos de la Patagonia</strong>, que no tienen nada que envidiarle a los noruegos, en los <strong>Andes Fueguinos</strong> de la región de Magallanes. El esquí en esta zona es extremadamente remoto: hay que navegar entre fiordos y aventurarse en expediciones de exploración con climas inestables por la cercanía al mar. Una verdadera aventura.' },
      { type: 'heading', text: 'Sobre responsabilidad y exploración' },
      { type: 'paragraph', text: 'A medida que viajamos al sur, la cordillera de los Andes va disminuyendo en tamaño. El punto más alto está en el Aconcagua a 6.961 msnm; en la Patagonia, la cumbre máxima es el monte San Valentín a 4.053 msnm. Pero las condiciones a menor altura en la Patagonia pueden ser comparables a situaciones de alta montaña en los Andes Centrales. Lo mismo ocurre con la zona de los volcanes en el Wallmapu.' },
      { type: 'quote', text: 'Los riesgos objetivos están fuera de nuestro control: avalanchas, caídas de rocas, seracs, grietas. Hacemos un llamado a practicar este deporte desde una perspectiva responsable.', cite: 'Raimundo De Andraca' },
      { type: 'paragraph', text: 'Educándonos sobre el tema y aplicando esos conocimientos se evitan riesgos innecesarios. Hacemos también un llamado a explorar, a salir de la zona de confort y buscar nuevos itinerarios, rutas y aventuras en las montañas indómitas de los Andes.' },
      { type: 'paragraph', text: 'Sobre la tensión entre acceso y propiedad privada que hace posible —o imposible— muchas de estas rutas, ver nuestro ensayo <a href="article.html?id=ski-travesia-propiedad">Ski de travesía y la tensión entre acceso público y propiedad privada</a>.' }
    ]
  },

  {
    id: 'hambre-de-hielo-buracchio',
    category: 'cultura',
    title: 'Hambre de hielo: el casi primer ascenso al Buracchio',
    excerpt: 'María Paz "Pachi" Ibarra relata una de sus primeras expediciones en Campos de Hielo Sur: un vivac aéreo, un alfajor perdido, una tormenta que destrozó las carpas y cinco días en una cueva esperando que pasara.',
    image: 'assets/images/buracchio-pared-hielo.jpg',
    author: 'Redacción Andes, con relato de María Paz Ibarra',
    date: '08 de abril, 2026',
    readingTime: '11 min',
    tag: 'Crónica',
    body: [
      { type: 'quote', text: '¿Hemos vencido a un enemigo? A ninguno, excepto a nosotros mismos. ¿Hemos ganado un reino? No, y no obstante sí. Hemos logrado una satisfacción completa, hemos materializado. Luchar y comprender, nunca el uno sin el otro, esta es la ley.', cite: 'George Mallory' },
      { type: 'paragraph', text: 'En esta edición de nuestra serie <em>La historia secreta de los Andes</em> tuvimos el placer de hablar con una gran montañista y escaladora chilena, reconocida por sus hazañas y por mantener la humildad como pilar. <strong>María Paz "Pachi" Ibarra</strong> —escaladora, alpinista y guía de montaña, especializada en guiados en Antártica y expediciones en altura— nos relata una de sus primeras expediciones en Campos de Hielo: el casi primer ascenso al <strong>Cerro Buracchio</strong>, con escasa experiencia a cuestas. El hambre por lo desconocido es lo que más la ha impulsado a lo largo de su trayectoria, y en este relato rescatamos una de las historias más anecdóticas que la ayudaron a forjar su carácter y su amor por el hielo.' },
      { type: 'paragraph', text: 'Desde pequeña, Pachi tuvo una conexión especial con la naturaleza, inculcada por su padre, con quien subía cerros de la Región Metropolitana. En sus últimos años de colegio comenzó a subir montañas más grandes de la zona, impulsada por un primo mayor, y fue en la universidad donde conformó, junto a los compañeros del curso de montañismo, un grupo llamado <em>Cumbres Australes</em>. Con ellos realizó diversos intentos a un macizo inexplorado en los Campos de Hielo Sur.' },
      { type: 'paragraph', text: 'El intento significó viajar a Patagonia en tres oportunidades. Expediciones largas, de unos 30 días cada una, sometidos a frío extremo, fuertes vientos y tormentas blancas, donde tuvieron que aplicar todas sus técnicas de supervivencia para salir ilesos de un lugar tan inhóspito.' },
      { type: 'heading', text: 'Campos de Hielo Sur, primer intento' },
      { type: 'paragraph', text: 'Todo comenzó con un grupo de universitarios: Pachi, Camilo, Fiore, Seba y Vivi. Como cualquier estudiante, no tenían recursos ni presupuesto para financiar la logística de una expedición de esta envergadura. La barrera monetaria no fue suficiente: a punta de motivación fabricaron sus propios trineos y planificaron meticulosamente cada menú para llevar lo justo y necesario al precio más bajo posible. Pastas orientales, galletas Fruna, desayuno Nestum.' },
      { type: 'paragraph', text: 'La cordada sabía que ascender a ese macizo no era cualquier cosa —un cerro técnico en una zona extremadamente remota—, pero lo que no sabía era que la cercanía a la costa chilena hacía las condiciones meteorológicas particularmente inestables, con tormentas y vientos inesperados. La primera oportunidad fue en el verano de 2002, desde El Chaltén. Atravesaron los Campos de Hielo Sur con muy mal clima, atentos a cualquier ventana. Salieron pocos rayos de luz y no pudieron avanzar mucho. De ese primer intento se llevaron grandes aprendizajes de los 35 días inmersos en gigantes valles de hielo, y un reconocimiento del terreno de cara a un posible retorno.' },
      { type: 'image', src: 'assets/images/buracchio-trineo-tormenta.jpeg', caption: 'Travesía por los Campos de Hielo Sur con trineos casero y viento blanco.' },
      { type: 'heading', text: 'La revancha' },
      { type: 'paragraph', text: 'En los meses de invierno de ese mismo año fueron por la revancha. A pesar de que las temperaturas eran más bajas y las horas de luz más escasas, el clima era más estable. Tenían la ruta marcada en el GPS y la información recopilada del intento anterior. Se adentraron al valle de hielo y empezaron a esperar la ventana. Mientras tanto exploraban los alrededores, abrían huella en la ruta y compartían en las carpas, ansiosos por el día del ascenso.' },
      { type: 'image', src: 'assets/images/buracchio-campamento-atardecer.jpg', caption: 'Campamento base en los Campos de Hielo Sur. Al fondo, el macizo del Fitz Roy al atardecer.' },
      { type: 'paragraph', text: 'Decidieron que Pachi y Camilo irían a atacar la cumbre: eran los más fuertes y experimentados del grupo. Llegó el día. Con apenas dos años de escalada en el cuerpo, se montaron en la ruta y empezaron a puntear los largos. Una mezcla de adrenalina e incertidumbre —diminutos seres sobre un semejante pedazo de hielo—.' },
      { type: 'paragraph', text: 'La vía era cara sur, lo que significó muy pocas horas de sol, mucho frío y hielo azul. Terminaron demorando más de lo planeado. Tuvieron que improvisar un diminuto y aéreo vivac a mitad del cerro, donde compartieron una larga noche con el saco colgando. A pesar de la situación, ambos escaladores estaban tranquilos y en paz. Era como si hubiesen nacido para vivir esa experiencia.' },
      { type: 'image', src: 'assets/images/buracchio-vivac-aereo.jpeg', caption: 'Pachi en el vivac aéreo, colgada en la pared de hielo a mitad de cerro.' },
      { type: 'heading', text: 'El alfajor que voló' },
      { type: 'paragraph', text: 'Al día siguiente el foco estaba en la eficiencia. Intentaron progresar lo más rápido posible, pero los cortos días de invierno los obligaron a pasar otra noche en la pared. Esta vez, en un vivac más refugiado, en una especie de trinchera al costado del cerro. Tras una segunda noche helada, la cordada estaba mentalizada para atacar la cumbre.' },
      { type: 'paragraph', text: 'Los últimos metros se veían intimidantes: una sección técnica, una pared de hielo desplomada, a diez largos del suelo, en medio de los Campos de Hielo Sur. Algo nervioso, Camilo se aventuró en lo que parecía el último o penúltimo largo. Escalaba en una sección exigente cuando, en un paso, cayó. El golpe repentino de la cuerda sobre la reunión hizo volar trágicamente la última fuente de energía que les quedaba: <strong>un preciado alfajor, guardado especialmente para la cumbre</strong>.' },
      { type: 'paragraph', text: 'Ya nada hacía sentido sin el alfajor cumbrero. Justo entonces, el resto del grupo les avisó por radio desde el campamento base: venía una gran tormenta, las carpas corrían riesgo, tenían que bajar cuanto antes. En la pared estaban protegidos de los vientos, pero sin dudarlo hicieron caso a sus amigos y comenzaron el descenso. Diez rapeles en simultáneo y con un solo tornillo cada uno.' },
      { type: 'heading', text: 'Cinco días en una cueva' },
      { type: 'paragraph', text: 'Una vez en el pie de vía, se pusieron los esquís e intentaron volver al campamento base. Avanzaron algunos metros, pero las ráfagas de viento blanco los botaban y les impedían ver hacia dónde ir. Por alguna razón el GPS dejó de funcionar. Les tomó prácticamente toda la noche encontrar al resto de sus amigos. Entre gritos y señas llegaron a una cueva donde se refugiaron los siguientes cinco días.' },
      { type: 'paragraph', text: 'Las carpas ya no existían. Estaban mojados, con frío y hambre, refugiados en una cueva diminuta esperando que terminara la tormenta. Al quinto día salieron debiluchos y tiritando. Hicieron un retorno rápido, ya sin provisiones, chupando los últimos restos de miel para obtener algo de energía. Lo que les había tomado diez días en llegar al campamento base lo hicieron de vuelta en tres, llegando apenas a El Chaltén con congelaciones en los pies y un cansancio inimaginable.' },
      { type: 'image', src: 'assets/images/buracchio-grupo-campamento.jpg', caption: 'El grupo en los Campos de Hielo Sur, con el macizo al fondo. La amistad de cordada como pilar de la expedición.' },
      { type: 'heading', text: 'Lo que queda' },
      { type: 'paragraph', text: 'Así concluyó la expedición al cerro Buracchio: no lograron la cumbre, las carpas fueron destrozadas, pasaron frío, hambre, miedo e incertidumbre por su vida. No obstante, Pachi remarca que ha sido una de las experiencias más significativas que le ha tocado vivir. En los momentos donde la vida se comienza a apagar, <em>es el optimismo y la sintonía del grupo lo que mantiene la chispa viva</em>. Historias que guarda en su memoria, y profundos lazos que guarda en su corazón.' },
      { type: 'paragraph', text: 'Muchos escaladores y montañistas nos remarcan lo crucial de la cordada al estar en montañas extremas. Es ahí donde se conoce a las personas de verdad: en las buenas y en las malas, transparentes y sin prejuicios, con el amor fundamental de estar rodeados de la simplicidad del monte y enfrentar los desafíos y riesgos que trae.' },
      { type: 'quote', text: 'El romanticismo puro de planificar una ascensión simplemente por amor al arte, por la estética de su ruta, o porque es posible. Eso hace que la amistad de montaña sea única.', cite: 'Andes Magazine' },
      { type: 'paragraph', text: 'Este relato es parte de la serie <em>La historia secreta de los Andes</em>. Otras entregas en <a href="category.html?cat=cultura">Cultura</a>.' }
    ]
  },

  {
    id: 'aconcagua-solitario-georgette-mell',
    category: 'cultura',
    title: 'Al alcance de la altura: Aconcagua en solitario',
    excerpt: 'Georgette Mell nunca había pasado los seis mil metros. Salía de una lesión, no tenía equipo y decidió ir sola al Aconcagua. Una crónica sobre la delgada línea entre superar los propios límites y hacer algo descabellado.',
    image: 'assets/images/aconcagua-cumbre.jpg',
    author: 'Redacción Andes, con relato de Georgette Mell',
    date: '01 de abril, 2026',
    readingTime: '10 min',
    tag: 'Crónica',
    body: [
      { type: 'paragraph', text: 'Mujeres ambiciosas, empoderadas y fuertes, sin miedo, que luchan por sus sueños. En este capítulo de <em>La historia secreta de los Andes</em> hablamos con <strong>Georgette Mell</strong>, montañista y geóloga de profesión, que nos llamó la atención por su independencia y su gusto por probarse sola. Nos relata su experiencia en el Aconcagua: su primer cerro sobre los seis mil metros, y en solitario.' },
      { type: 'paragraph', text: 'Con una vida nómade, Georgette ha estado desde pequeña inmersa en la naturaleza: los animales, los montes, el campo. Inquieta e intrigada siempre por salir y explorar. Una energía constante por destacarse, ponerse desafíos y salir de la zona de confort. En edad escolar fue la primera cadete mujer del cuerpo de bomberos de su pueblo, y en la universidad empezó a acercarse a las ramas y cursos de montañismo.' },
      { type: 'image', src: 'assets/images/aconcagua-aproximacion.jpg', caption: 'Aproximación al Parque Provincial Aconcagua. "Iba justa, pitilla", recuerda Georgette.' },
      { type: 'heading', text: 'La idea' },
      { type: 'paragraph', text: 'La idea nació al regreso de un intercambio universitario: el Aconcagua como desafío personal, como forma de probarse autónoma y superar sus propios límites. Pero para probarse de verdad, tenía que ser en solitario.' },
      { type: 'paragraph', text: 'Probar la altura era algo que le llamaba la atención: sentía que lo iba a lograr, y era el cerro de altura significativa más cercano y accesible por logística.' },
      { type: 'quote', text: 'Viví malas experiencias y casi siempre rebotaba en los cerros de altura porque otras personas se apunaban. Quería probarme netamente yo.', cite: 'Georgette Mell' },
      { type: 'paragraph', text: 'Sería su primer seis mil, el cerro más alto que habría hecho, y con muy poca experiencia en altura. Venía saliendo de una lesión de coxis, no se sentía preparada físicamente y tampoco tenía mucho equipo de montaña. La suma de todo eso trajo inseguridades: <em>¿qué estoy haciendo?, ¿será una locura?</em>' },
      { type: 'heading', text: '¿Dónde está la línea?' },
      { type: 'paragraph', text: '¿Ir o no ir? ¿Cuál es la línea que separa superar los propios límites de hacer algo descabellado? A veces uno mismo no puede trazar esa línea, pero los cercanos sí ven las capacidades que uno no ve. Por eso a veces basta un pequeño empujón —una sola frase: <em>"tú puedes, anda"</em>—.' },
      { type: 'paragraph', text: 'En plena duda, su madre le hizo una pregunta simple: <em>"¿qué es lo que realmente te limita?"</em>. Fue lo justo y necesario para tomar la decisión. A preparar, planificar y comprar lo que el presupuesto permitiera. <em>No era mucho. Iba justa. Pitilla.</em>' },
      { type: 'heading', text: 'Plaza de Mulas' },
      { type: 'paragraph', text: 'Entre viaje y papeleo protocolar, llegó al parque. Contrató media mula, que solo la acompañaba hasta el segundo campamento. Un pegue exigente, y más en solitario.' },
      { type: 'quote', text: 'La gente me preguntaba si había hecho cerros antes. Les mentía un poco sobre mi experiencia.', cite: 'Georgette Mell' },
      { type: 'image', src: 'assets/images/aconcagua-plaza-mulas.jpg', caption: 'Plaza de Mulas, campamento base del Aconcagua. La última pared con conexión al mundo antes de subir.' },
      { type: 'paragraph', text: 'Llegó al primer campamento sin mayores dificultades —las mulas portearon casi todo el peso— y montó con algo de esfuerzo. El viento soplaba fuerte e impedía prender la cocinilla para la cena. Alrededor, los otros grupos —en su mayoría guías con clientes— tenían toldos protegidos y cenas gourmet. <em>¿Qué hago acá?</em>, pensaba.' },
      { type: 'paragraph', text: 'Al día siguiente decidió cambiar el pensamiento: <em>"ya estaba ahí, había que seguir de la mejor manera"</em>. Empezó el trayecto al siguiente campamento y en el camino fue conociendo y compartiendo con distintas cordadas. No tenía recursos para el mejor equipo, pero una de las cocineras del campamento le prestó una buena parka para que lograra la ascensión.' },
      { type: 'heading', text: 'Nido de Cóndores y Berlín' },
      { type: 'paragraph', text: 'En cerros de altura anteriores Georgette se había aclimatado bien, y esta vez no fue la excepción. Pero la precariedad del equipo hizo que el ascenso fuera de mucho esfuerzo.' },
      { type: 'paragraph', text: 'El siguiente campamento —<strong>Nido de Cóndores</strong>— fue probablemente el más terrorífico. Tuvo que luchar contra ráfagas de viento que amenazaban con llevarse la carpa, soportando fríos intensos y usando todas sus herramientas para que no se le congelaran manos y pies.' },
      { type: 'quote', text: 'Cabeza fría y aperrar no más.', cite: 'Georgette Mell' },
      { type: 'image', src: 'assets/images/aconcagua-campamento-alto.jpg', caption: 'Campamento alto en el Aconcagua. Carpa ligera, frío intenso y viento.' },
      { type: 'paragraph', text: 'El siguiente era ya a seis mil metros: <strong>campamento Berlín</strong>. Nunca había estado tan alto. El frío se volvió factor limitante. Llegó a un punto en que no sabía qué más hacer para generar calor: durmió con absolutamente toda la ropa que tenía, sola, en momentos llorando del dolor en manos y pies. Una situación desesperante, pero logró encontrarse serena y soportar.' },
      { type: 'heading', text: 'Día de cumbre' },
      { type: 'paragraph', text: 'Salió de la carpa entre las 3 y las 4 de la madrugada. Grandes ráfagas de viento, con toda la ropa de expedición puesta para hacerlo soportable, empezó a caminar sin parar. Como caballo de carrera: hacía tanto frío que no le daban ganas de detenerse, así que siguió casi sin pausas.' },
      { type: 'quote', text: 'Tenía pensado que había una cueva muy cerca de la cumbre. Pensaba que al llegar a esa cueva no podía devolverme, que ya estaría muy cerca. Seguí y seguí y no llegaba a esa cueva, hasta que de repente estaba en la cumbre. ¿Estoy aquí? ¡Llegué! No lo podía creer.', cite: 'Georgette Mell' },
      { type: 'image', src: 'assets/images/aconcagua-llegando-cumbre.jpg', caption: 'Llegando a la cumbre del Aconcagua. Primer seis mil en solitario.' },
      { type: 'paragraph', text: 'Llegó a la cumbre así, sin más, sorpresiva. Alrededor de las ocho o nueve de la mañana. Su primer seis mil, completamente sola y autónoma. Lo había logrado.' },
      { type: 'quote', text: 'Estaba muy alto. Verdaderamente alto, tan alto que lograba divisar la curvatura de la Tierra. Me puse a llorar de la emoción. Día precioso y despejado. Lo había logrado.', cite: 'Georgette Mell' },
      { type: 'image', src: 'assets/images/aconcagua-cumbre.jpg', caption: 'En la cumbre del Aconcagua (6.961 msnm), con la caja y los banderines de cumbre. Enero de 2018.' },
      { type: 'heading', text: 'El descenso' },
      { type: 'paragraph', text: 'Empezó a bajar con una sonrisa que no se le podía sacar. Lo que subió en siete días lo descendió en uno, casi trotando, con las pantorrillas a punto de explotar pero con el alma satisfecha. Una experiencia inolvidable, que le aumentó de manera exponencial la autoconfianza en sus propias capacidades —justo a partir de los momentos de desconfianza—.' },
      { type: 'quote', text: 'Uno puede más de lo que cree. La burbuja en la que uno vive es la mayor limitante. Uno se ahoga en un vaso de agua.', cite: 'Georgette Mell' },
      { type: 'paragraph', text: 'No siempre todo resulta como uno espera. Si fuera así, tan fácil, ¿qué aprenderíamos? El aprendizaje viene de ir resolviendo los problemas del camino: cuando algo no funciona, y estamos solos, necesitamos ser autosuficientes. Uno siempre puede más de lo que la mente cree. Así, Georgette subió —sin mucha experiencia— su primer seis mil, y en solitario.' },
      { type: 'paragraph', text: 'Este relato es parte de la serie <em>La historia secreta de los Andes</em>. Otras entregas en <a href="category.html?cat=cultura">Cultura</a>.' }
    ]
  },

  {
    id: 'estado-de-flow-cuernos-diablo',
    category: 'cultura',
    title: 'En estado de flow: la apertura de una vía nueva en los Cuernos del Diablo',
    excerpt: 'Dos años, tres viajes y nueve largos para abrir una ruta en una aguja inexplorada de Quimza Cruz, Bolivia. Andrea Cáceres y Oscar Marín cuentan cómo perdieron el rumbo, lo encontraron, y lo llamaron Estado de Flow.',
    image: 'assets/images/flow-cumbre.jpg',
    author: 'Redacción Andes, con relato de Andrea Cáceres',
    date: '25 de marzo, 2026',
    readingTime: '12 min',
    tag: 'Crónica',
    body: [
      { type: 'paragraph', text: 'Cuando son pequeños y el mundo es nuevo, todos los niños sueñan lo que quieren ser cuando crezcan: astronauta, bailarina, buzo táctico, guerrera, futbolista, doctora, presidente. Es característico de los niños soñar en grande. Saben poco del mundo al que vinieron y absorben del entorno en el que se desarrollan, pero la capacidad de soñar y de perseguir esos sueños persiste, acompaña a los adultos y los inspira a seguir caminos aunque no sean fáciles.' },
      { type: 'paragraph', text: 'La <strong>"Andreita"</strong>, como le decían sus amigos y su familia, desde pequeña fue muy observadora. Empezó a cuestionarse lo común: <em>¿qué voy a hacer, qué estudiaré, a qué me dedicaré?</em> Observando la rutina de la vida adulta, no podía dejar de sentir una tristeza, o más bien depresión, por un futuro que ya no se regía por la fantasía de su cabeza sino por la realidad. Tenía ciertas cosas claras: no sabía lo que haría, pero sabía lo que no quería hacer. Y la intriga le consumía: <em>¿habrá algo más que estar entre cuatro paredes?</em>' },
      { type: 'paragraph', text: 'En su interior, de a poco, se forjaba la respuesta. Cuatro paredes eran demasiado. Una sola pared le bastaba. Entre una pared y el resto del mundo.' },
      { type: 'heading', text: 'Andrea' },
      { type: 'paragraph', text: 'En este capítulo de <em>La historia secreta de los Andes</em> hablamos con <strong>Andrea Cáceres</strong>, reconocida montañista y escaladora chilena, guerrera hambrienta y apasionada por las grandes paredes, con un afecto especial por las que aún son desconocidas e inexploradas. Esa búsqueda es una motivación que la ha llevado lejos en viajes que —sin importar el resultado— siempre significan una enseñanza.' },
      { type: 'paragraph', text: 'Actualmente estudia para guía UIAGM, y nos relata la apertura de una ruta hermosa en <strong>Los Cuernos del Diablo</strong>, en Quimza Cruz, Bolivia. Junto a su compañero <strong>Oscar Marín</strong> concretaron la vía en su tercer intento.' },
      { type: 'heading', text: 'El bus fantasma a Viloco' },
      { type: 'paragraph', text: 'La historia empieza con un <em>rock trip</em> a Bolivia, al sector conocido como <strong>El Edén</strong>, donde por un bajo precio les entregaron chapas, taladros y toda la ferretería necesaria para abrir vías. En ese primer viaje conocieron escaladores de todos lados, y entre una conversación y otra se repetía un nombre que despertó la curiosidad: <strong>Quimza Cruz</strong>. El nombre salía una vez y otra, por distintos personajes. Se configuraba como ese lugar del que todos habían escuchado pero pocos habían conocido. La intriga y la misticidad fueron suficientes. Cambiaron los planes.' },
      { type: 'paragraph', text: 'La fama tenía razón: era un sector difícil de llegar. Había que tomar un bus hacia un pueblo minero llamado <strong>Viloco</strong>, cerca de la columna central de los Andes bolivianos, muy difícil de encontrar e incluso desconocido para la misma gente local.' },
      { type: 'quote', text: 'Preguntábamos a las personas dónde podíamos tomar el bus a Viloco, preguntábamos a los taxis por el paradero, dábamos las direcciones que nos conseguíamos… y nadie sabía. Era un bus medio fantasma, no existía mucha información de ese lugar.', cite: 'Andrea Cáceres' },
      { type: 'paragraph', text: 'Finalmente llegaron a Viloco, y desde ahí caminaron unas dos horas hasta el campamento base <strong>Kuchumocoya</strong>, con acceso a una infinidad de rocas y caminatas. El objetivo inicial era escalar multilargos ya abiertos. Tras el descanso, empezaron a aproximar por los valles. La poca información sobre Quimza Cruz se les empezaba a agotar: las fotos no coincidían con las paredes del valle, los relatos no se reflejaban en el entorno. De a poco aceptaron que no sabían dónde estaban. Se habían metido en un valle desconocido. Estaban perdidos.' },
      { type: 'heading', text: 'Primer intento: tres largos' },
      { type: 'paragraph', text: 'A pesar de no saber dónde estaban, las ganas de escalar estaban intactas. Al contrario: el gusto de la exploración sonreía complaciente. Los temores eran pequeños comparados con la pasión de atacar una pared por descubrir. Parados en medio del valle, en las entrañas de los Andes, divisaron su objetivo: una gran pared al costado oeste de los Cuernos del Diablo, una montaña rocosa que termina en una punta afilada. La pared caía desde la cima de una inmensa y estética aguja hasta el suelo del valle en que se habían perdido.' },
      { type: 'image', src: 'assets/images/flow-vista-abajo.jpg', caption: 'Mirada al valle desde los primeros largos. La pared cae directo al suelo del valle donde se habían perdido.' },
      { type: 'paragraph', text: 'Se prepararon, y con gran emoción empezaron a abrir una línea donde se veía una fisura con algo de nieve y hielo en el comienzo. Con largos de 70 metros, ocupando la cuerda por completo, lograron abrir tres largos por primera vez.' },
      { type: 'heading', text: 'Segundo intento: el frío' },
      { type: 'paragraph', text: 'De vuelta en Chile, encantados con la ruta, se prometieron volver. Al año siguiente regresaron a Bolivia a continuar la vía que les quitaba el sueño. El inicio del viaje fue más fácil: ya conocían Viloco y tenían un objetivo claro. Organizaron un calendario de dos semanas para avanzar y terminar la ruta.' },
      { type: 'paragraph', text: 'El terreno estaba nevado. Mala fecha para el objetivo. El frío se volvió factor predominante y aumentó la dificultad considerablemente. Igual enfrentaron la pared y lograron abrir un largo más, pero la roca estaba a tan baja temperatura que Andrea y Oscar sentían que las manos se les iban a quedar pegadas. Decidieron bajar, escalar otras agujas del sector y volver a Chile.' },
      { type: 'heading', text: 'Tercer intento: 2019' },
      { type: 'paragraph', text: 'La persistencia y la constancia son dos conceptos que caracterizan a estos dos escaladores. En 2019 volvieron por tercera vez. Querían terminar la ruta, finiquitarla: era hermosa, estética. Llegaron a ir directo al grano. Esta vez contaban con diez días y más ganas que nunca. Los primeros cuatro días: aproximar y aclimatar. Los siete siguientes: escalar y completar.' },
      { type: 'paragraph', text: 'Había bastante viento al inicio, pero no tanta nieve como el año anterior. Iban entusiasmados, apostando a la suerte para empezar el día cinco. Y todo se alineó perfecto: el día cinco desapareció el viento. Se levantaron temprano en la madrugada, se pusieron arnés, fisureros, cintas, ordenaron la cuerda, se amarraron el 8, y empezó la escalada.' },
      { type: 'paragraph', text: 'Subieron lo más rápido posible hasta el último largo abierto. Aún con nieve en la terraza, hacía frío y el sol todavía no los alcanzaba. Decidieron avanzar hasta una pequeña punta de roca donde los primeros rayos empezaban a posarse. Con el calor del sol comieron algo y se prepararon para abrir los largos nuevos.' },
      { type: 'image', src: 'assets/images/flow-oscar-terraza.jpg', caption: 'Oscar en la terraza alta, donde el sol los alcanzó por primera vez en la jornada. Al fondo, la cordillera boliviana.' },
      { type: 'heading', text: 'La fisura de palma y el offwidth' },
      { type: 'paragraph', text: 'Oscar empezó el siguiente largo inexplorado: una fisura ancha y vertical, muy linda y dura a la vez. Estaban ya a 5.000 msnm y el sol había salido casi por completo.' },
      { type: 'image', src: 'assets/images/flow-fisura-ancha.jpg', caption: 'Oscar puntea la fisura ancha y vertical, a 5.000 msnm. "Muy linda y dura a la vez".' },
      { type: 'paragraph', text: 'Luego vino el turno de Andrea: un <em>offwidth</em> numerado con un número 6. Las fisuras <em>off-width</em> son más anchas que una mano pero no lo suficientemente anchas para que entre una pierna o la parte superior del cuerpo; un tipo de fisura muy difícil de dominar porque exige movimientos físicamente incómodos.' },
      { type: 'quote', text: 'Me tocaba el siguiente largo, un offwidth de 6, ¡lo que más me cuesta! Una chimenea gigante que me permitía ir corriendo el número hasta donde se pudo, obviamente con esa sensación de miedo constante pero concentrada al máximo.', cite: 'Andrea Cáceres' },
      { type: 'image', src: 'assets/images/flow-offwidth.jpg', caption: 'El offwidth de 6: una chimenea vertical entre dos paredes de granito.' },
      { type: 'paragraph', text: 'Después del <em>offwidth</em> se aproximaban muchos sistemas de fisuras, estéticos y hermosos, casi todos de palma. Empezaron a escalar cómodos: el calor del movimiento y los rayos del sol les permitieron fluir fácil mientras avanzaban hacia la cumbre. Sintieron que bailaban sobre la pared. Hicieron dos largos más y llegaron muy cerca de la cima.' },
      { type: 'image', src: 'assets/images/flow-palma-fisura.jpg', caption: 'Fisuras de palma hacia la cumbre. "Sintieron que bailaban sobre la pared".' },
      { type: 'heading', text: 'El lajón inesperado' },
      { type: 'paragraph', text: 'Faltaba un tramo para la cumbre cuando miraron hacia arriba y vieron una placa lisa y sellada. Querían llegar a la cima, pero ya no tenían chapas. Calmadamente empezaron a resignarse. Así son las cosas en la montaña: no todo es éxito. Se dijeron <em>"bueno, será"</em> y sin mayores complicaciones se relajaron, comieron unas galletas y se pusieron a disfrutar de la vista, rodeados de cóndores volando alrededor.' },
      { type: 'paragraph', text: 'Cuando era hora de descender, prepararon los rapeles y empezaron a bajar poco a poco. Hasta que divisaron, hacia la derecha, un gran lajón que conectaba con la cumbre. Anonadados, los dos saltaron del entusiasmo. Podían hacerlo. Pusieron reversa y se prepararon para escalar de nuevo.' },
      { type: 'paragraph', text: 'Subieron por el lajón, que para su fortuna era una pasada fácil y rápida hasta la cumbre. No lo podían creer. Finalmente, después de dos años y tres intentos, habían terminado la ruta hasta la cima de los Cuernos del Diablo. <strong>Nueve largos abiertos en total, todos hermosos, todos nuevos, todos ascendidos por primera vez.</strong>' },
      { type: 'image', src: 'assets/images/flow-cumbre.jpg', caption: 'Andrea y Oscar en la cumbre de los Cuernos del Diablo (5.200 msnm), mayo de 2019. Al fondo, la cordillera de Quimza Cruz.' },
      { type: 'paragraph', text: 'Empezaron a reír, inundados de una felicidad indescriptible. Disfrutaban en la cima, incrédulos de la hazaña, del viaje, de todo lo que había sido: el tiempo, el esfuerzo, la preparación, la dedicación, los relatos de escaladores, los buses fantasma, los valles desconocidos. Lo habían logrado de la manera más perfecta. A la ruta la llamaron <strong><em>"Estado de Flow"</em></strong>.' },
      { type: 'heading', text: 'La ficha' },
      { type: 'paragraph', text: '<strong>Cuernos del Diablo</strong>, cara sur-oeste. 5.200 msnm. Ruta <em>Estado de Flow</em>, 9 largos, 350 metros. Dificultad 5.10+ / 5.9R. Rack: doble hasta el #3, simple #4 al #6, micros, 15 cintas runners, 2 cuerdas de 70 metros. Reuniones de rapel equipadas con cordines y maillones. Aperturistas: Andrea Cáceres F. y Oscar Marín M., mayo de 2019.' },
      { type: 'quote', text: 'Pasión, entusiasmo, consistencia y persistencia a lo que uno ama. He aquí donde las posibilidades son infinitas.', cite: 'Andes Magazine' },
      { type: 'paragraph', text: 'Este relato es parte de la serie <em>La historia secreta de los Andes</em>. Otras entregas en <a href="category.html?cat=cultura">Cultura</a>.' }
    ]
  },

  /* ═══ ANÁLISIS ═══ */
  {
    id: 'ski-travesia-propiedad',
    category: 'analisis',
    title: 'Ski de travesía y la tensión entre acceso público y propiedad privada',
    excerpt: '¿De quién es la nieve? Los límites invisibles de la montaña chilena y lo que revelan sobre nuestro modelo de territorio.',
    image: 'assets/images/P1110727.jpg',
    author: 'Equipo editorial',
    date: '05 de abril, 2026',
    readingTime: '14 min',
    tag: 'Ensayo',
    body: [
      { type: 'paragraph', text: 'Una nevada cae sobre una ladera. La ladera pertenece a un propietario. La nevada, en cambio, no pertenece a nadie: es un fenómeno meteorológico. ¿Entonces de quién es la nieve acumulada sobre esa ladera?' },
      { type: 'paragraph', text: 'La pregunta suena absurda hasta que uno llega con los skis al pie del cerro y encuentra un portón. El portón es legal. La nieve, técnicamente, no está regulada. Pero el acceso sí.' },
      { type: 'heading', text: 'El ski de travesía como caso límite' },
      { type: 'paragraph', text: 'A diferencia del ski de pista, que opera sobre infraestructura privada y acepta sus reglas, el ski de travesía depende de terrenos abiertos, glaciares, rutas informales. Es decir: depende de la <em>no-infraestructura</em>.' },
      { type: 'paragraph', text: 'Cuando esa no-infraestructura se privatiza, la disciplina deja de existir. Literalmente. No hay dónde esquiar.' },
      { type: 'quote', text: 'El ski de travesía no compite con la propiedad privada: compite con la imposibilidad de transitar.', cite: 'Federación de Ski y Andinismo' },
      { type: 'heading', text: 'Modelos comparados' },
      { type: 'paragraph', text: 'Noruega resolvió esta tensión en 1957 con la <em>Friluftsloven</em>, ley que consagró el derecho de uso recreativo sobre terrenos no cultivados. Escocia avanzó en 2003. Austria tiene acuerdos federales por valle.' },
      { type: 'paragraph', text: 'Ninguno de estos países eliminó la propiedad privada. Simplemente separó <em>propiedad</em> de <em>tránsito</em>. En Chile, esa distinción no existe.' },
      { type: 'image', src: 'assets/images/meson-alto-2.jpg', caption: 'Sector apto para ski de travesía con acceso actualmente restringido.' },
      { type: 'paragraph', text: 'Seguimos esta discusión en nuestra serie de <a href="category.html?cat=analisis">Análisis</a>.' }
    ]
  },

  {
    id: 'gobernanza-montana',
    category: 'analisis',
    title: 'Gobernanza de montaña: por qué Chile necesita una',
    excerpt: 'El uso productivo tiene reglas. El uso social, no. Argumento por una institucionalidad específica para la cordillera.',
    image: 'assets/images/fito.jpg',
    author: 'Equipo editorial',
    date: '25 de marzo, 2026',
    readingTime: '11 min',
    tag: 'Opinión',
    body: [
      { type: 'paragraph', text: 'Chile regula el uso minero de la cordillera con un código específico. Regula el uso del agua con otro. Regula la energía, las concesiones, los embalses. Cada uso productivo tiene una institucionalidad con atribuciones, procedimientos y plazos.' },
      { type: 'paragraph', text: 'El uso social, recreativo y cultural de la cordillera no tiene ninguna. <strong>No existe un Servicio Nacional de Montaña. No existe una política pública unificada.</strong>' },
      { type: 'heading', text: 'El costo de la ausencia' },
      { type: 'paragraph', text: 'Sin institucionalidad, las decisiones se toman caso a caso: un municipio abre un sendero, un privado lo cierra, una federación intermedia, un ministerio responde. El resultado es inestable por diseño.' },
      { type: 'quote', text: 'No se trata de más Estado. Se trata de Estado claro.', cite: 'Andes Magazine' },
      { type: 'paragraph', text: 'Un servicio público de montaña no tendría que crear nuevos derechos: tendría que coordinar los existentes. Catastrar servidumbres. Estandarizar criterios de riesgo. Mediar en conflictos de acceso. Llevar estadística.' },
      { type: 'paragraph', text: 'La cordillera chilena tiene 4.300 kilómetros y cero instituciones dedicadas. Esa cifra, por sí sola, es el argumento.' }
    ]
  }

];
