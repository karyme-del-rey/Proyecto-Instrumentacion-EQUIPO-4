# Guion de Presentación - Equipo 4

## Instrumentación Industrial - Columna de Absorción con Chaqueta Térmica

**Duración estimada: 25-30 minutos**

---

## Distribución de Participantes

| Integrante | Diapositivas | Tema | Duración |
|---|---|---|---|
| **Rafael David Gallo Díaz** | 1 - 4 | Introducción y Proceso | ~5 min |
| **Azalia Lopez Paz** | 5 - 7 | Diagramas y Variables de Control | ~4 min |
| **Dulce María Martínez Alamilla** | 8 - 10 | Instrumentación: Presión, Temperatura, Nivel | ~5 min |
| **Carlos Alexis Pareja Hernández** | 11 - 13 | Instrumentación: Flujo, Válvulas, Bomba | ~5 min |
| **Barbara Ramírez Paz** | 14 - 16 | Lazos de Control PID | ~4 min |
| **Karyme Zenderos Ramírez** | 17 - 22 | Instalación, Puesta en Marcha, Calibración, Cierre | ~6 min |

---

## RAFAEL DAVID GALLO DÍAZ

### Diapositiva 1 — Portada

> Buenos días/tardes, ingeniero y compañeros. Somos el equipo 4 del grupo 5IV81. Mi nombre es Rafael David Gallo Díaz y junto con mis compañeros Azalia, Dulce María, Carlos Alexis, Barbara y Karyme, les presentaremos nuestro proyecto final de Instrumentación Industrial.
>
> Nuestro proyecto consiste en el diseño de un sistema completo de control e instrumentación para una columna de absorción con chaqueta térmica.

### Diapositiva 2 — Contenido

> A lo largo de esta presentación cubriremos los siguientes puntos: primero describiremos el proceso y sus diagramas, luego las cuatro variables de control que manejamos. Después detallaremos toda la instrumentación seleccionada, los lazos de control PID, y finalmente los procedimientos de instalación, puesta en marcha y calibración, junto con la normativa que respalda nuestras decisiones.

### Diapositiva 3 — Objetivo

> El objetivo de este proyecto es diseñar un sistema integral de instrumentación y control para una columna de absorción con chaqueta térmica. Esto implica la selección fundamentada de instrumentos para medir y controlar las cuatro variables críticas: temperatura, presión, nivel y flujo.
>
> Además, diseñamos tres lazos de control PID cerrados y establecimos procedimientos de instalación, puesta en marcha y calibración, todo apegado a normas internacionales como ISA, API, IEC y ASME.

### Diapositiva 4 — Descripción del Proceso

> Nuestra columna de absorción es una operación unitaria de transferencia de masa donde se pone en contacto un gas con un líquido en contracorriente. La columna cuenta con una chaqueta térmica para regular la temperatura del proceso.
>
> Las condiciones de operación son: un flujo de líquido de entrada de 80 litros por minuto, un flujo de vapor de salida de 130 litros por minuto, una presión de operación de 2.5 bar manométricos y una temperatura objetivo de 40 grados Celsius. El fluido de proceso son mezclas de agua y solvente con una conductividad mínima mayor a 5 microsiemens por centímetro.
>
> Ahora le cedo la palabra a mi compañera Azalia.

---

## AZALIA LOPEZ PAZ

### Diapositiva 5 — PFD

> Gracias, Rafael. En el Diagrama de Flujo de Proceso identificamos 9 líneas principales. Las líneas L1 y L2 corresponden a la entrada y salida de líquido respectivamente. L3 y L4 son la entrada y salida de vapor. Las líneas L5 y L6 alimentan y drenan la chaqueta térmica. La L7 es la línea de recirculación de la bomba, la L8 es la línea de alivio de presión, y la L9 es la línea de drenaje.
>
> El sistema incluye la columna principal, la chaqueta térmica, un tanque de acumulación, una bomba centrífuga y las válvulas de alivio.

### Diapositiva 6 — DTI

> En el Diagrama de Tubería e Instrumentación, o DTI, utilizamos la simbología conforme a la norma ISA-5.1. Cada instrumento está identificado funcionalmente; por ejemplo, TIT significa Transmisor Indicador de Temperatura, PCV es Válvula de Control de Presión, y PSV es Válvula de Seguridad de Presión.
>
> El sistema maneja señales analógicas de 4-20 miliamperes como comunicación primaria, con protocolo HART como comunicación digital secundaria. En total, el DTI muestra más de 30 instrumentos individuales.

### Diapositiva 7 — Variables de Control

> Manejamos cuatro variables de control principales. La temperatura, con un set-point de 40°C, se controla mediante la chaqueta térmica. La presión se regula a 2.5 bar mediante válvulas de alivio y control. El nivel se monitorea de forma continua con un sistema de recirculación por bomba. Y el flujo se mide en dos rangos: 80 litros por minuto para el líquido de entrada y 130 litros por minuto para el vapor de salida.
>
> Ahora Dulce María nos explicará la instrumentación seleccionada para cada variable.

---

## DULCE MARÍA MARTÍNEZ ALAMILLA

### Diapositiva 8 — Instrumentación de Presión

> Gracias, Azalia. Para la medición de presión seleccionamos cuatro tipos de instrumentos. Como indicador local utilizamos el manómetro Bourdon WIKA 232.50, con rango de 0 a 6 bar y clase de precisión 1.0.
>
> Para la transmisión de señal elegimos el Siemens SITRANS P DS III, que proporciona señal de 4-20 mA con protocolo HART y tiene una precisión de ±0.075%.
>
> El controlador es el Siemens TIA Portal corriendo en un PLC S7-1500 con algoritmo PID. Las alarmas se gestionan a través del sistema SCADA Siemens WinCC, que permite registro y tendencias en tiempo real.

### Diapositiva 9 — Instrumentación de Temperatura

> Para temperatura, el sensor primario es el Siemens SITRANS TS100, que es un RTD de platino PT100 con conexión a 3 hilos y clase A según IEC 60751. El transmisor es el SITRANS TH320, montado en cabezal DIN-B, que convierte la señal a 4-20 mA.
>
> Como indicador local en campo usamos el bimetálico industrial WIKA A53, y para proteger el sensor del contacto directo con el fluido, instalamos el termopozo WIKA TW10 de acero inoxidable 316, diseñado según ASME PTC 19.3.
>
> El lazo completo va desde el sensor TE, pasando por el transmisor TIT, al PLC, y finalmente a la válvula de control SAMSON 3241.

### Diapositiva 10 — Instrumentación de Nivel

> Para nivel tenemos un sistema más completo. El transmisor principal es el Endress+Hauser Levelflex FMP54, que funciona por radar guiado con una precisión de ±2 milímetros. El indicador digital es el Siemens SITRANS RD100 con pantalla LCD, y como indicador visual local tenemos el Kobold BNA, un indicador magnético bicolor para lectura directa.
>
> Los switches de nivel son VEGA VEGASWING 63, del tipo horquilla vibratoria, con certificación SIL 2. Tenemos uno para nivel alto y otro para nivel bajo. Las alarmas se señalizan con torres Patlite LR6 que combinan señal luminosa LED y audible.
>
> Le paso la palabra a Carlos Alexis para continuar con flujo, válvulas y el sistema de bombeo.

---

## CARLOS ALEXIS PAREJA HERNÁNDEZ

### Diapositiva 11 — Instrumentación de Flujo

> Gracias, Dulce María. Para la medición de flujo seleccionamos dos tecnologías diferentes según el tipo de fluido.
>
> Para líquidos utilizamos el flujómetro electromagnético Endress+Hauser Promag P 300, que opera bajo el principio de la Ley de Faraday. Tiene una precisión de ±0.5% de lectura más 1 milímetro por segundo, y lo instalamos en 5 puntos: la entrada de líquido, la entrada y salida de chaqueta, la salida de líquido, y la recirculación de la bomba. El requisito mínimo es que el fluido tenga una conductividad mayor a 5 microsiemens.
>
> Para el vapor de salida utilizamos el flujómetro vórtex Prowirl F 200 de Endress+Hauser, que funciona por el principio de desprendimiento de Von Kármán. Tiene una precisión de ±1% y es ideal para fluidos de baja densidad como el vapor, ya que no tiene partes móviles y opera hasta 250°C y 40 bar.

### Diapositiva 12 — Válvulas

> El sistema cuenta con tres tipos de válvulas. Las válvulas de alivio son 3 unidades PSV con resorte cargado, diseñadas según API 520, con presiones de set entre 10 y 400 PSIG, construidas en acero inoxidable 316.
>
> Para control tenemos dos modelos: la Fisher EZ tipo globo con actuador neumático para el control de presión, y la SAMSON 3241 con posicionador digital para el control de temperatura.
>
> Finalmente, contamos con más de 12 válvulas de aislamiento de diferentes tipos: bola de Flow-Tek, compuerta de KITZ, globo de Velan y mariposa de Worcester, todas necesarias para permitir el mantenimiento sin parar el proceso completo.

### Diapositiva 13 — Sistema de Bombeo

> La bomba seleccionada es la Flowserve Durco Mark 3 ISO, una bomba centrífuga con variador de frecuencia. Sus especificaciones principales son: capacidad máxima de 475 metros cúbicos por hora, cabeza máxima de 150 metros, y presión máxima de 25 bar.
>
> Utiliza un sello mecánico doble según API 682, lo que garantiza la compatibilidad con solventes orgánicos. El variador de frecuencia es fundamental porque es el elemento final de control del lazo de nivel: al variar la velocidad de la bomba, controlamos el nivel en el tanque de acumulación.
>
> Ahora Barbara nos explicará cómo funcionan los tres lazos de control.

---

## BARBARA RAMÍREZ PAZ

### Diapositiva 14 — Lazo de Control de Nivel

> Gracias, Carlos. Diseñamos tres lazos de control PID cerrados. Empezando con el lazo de nivel: el sensor es el Levelflex FMP54 de Endress+Hauser, que transmite la señal al PLC Siemens S7-1500 donde corre el algoritmo PID.
>
> El elemento final de control es el variador de frecuencia de la bomba Flowserve. Cuando el nivel sube por encima del set-point, el controlador aumenta la velocidad de la bomba para drenar más rápido. Si baja, reduce la velocidad. Este esquema es eficiente energéticamente porque ajusta el consumo de la bomba a la demanda real.

### Diapositiva 15 — Lazo de Control de Presión

> El segundo lazo es el de presión. El sensor es el SITRANS P DS III que envía la señal de 4-20 mA al PLC. El controlador PID compara la presión medida con el set-point de 2.5 bar y genera la señal de salida hacia la válvula de control Fisher EZ.
>
> La válvula tiene un actuador neumático que regula la apertura para mantener la presión estable. Adicionalmente, las válvulas de alivio PSV actúan como protección independiente en caso de que la presión supere los límites seguros.

### Diapositiva 16 — Lazo de Control de Temperatura

> El tercer lazo controla la temperatura. El sensor PT100 SITRANS TS100 mide la temperatura y el transmisor TH320 convierte la señal para el PLC. El algoritmo PID compara la medición con el set-point de 40°C.
>
> El elemento final es la válvula SAMSON 3241 con posicionador digital, que controla el flujo de fluido térmico a través de la chaqueta. Si la temperatura sube, la válvula abre para permitir más flujo de enfriamiento; si baja, cierra parcialmente.
>
> Los tres lazos operan de forma simultánea e independiente, garantizando la estabilidad del proceso. Ahora Karyme cerrará con los procedimientos operativos.

---

## KARYME ZENDEROS RAMÍREZ

### Diapositiva 17 — Instalación Típica

> Gracias, Barbara. Definimos procedimientos de instalación específicos para cada tipo de instrumento. Para presión y temperatura, los sensores se montan a la misma altura del punto de medición, con los termopozos insertados un tercio del diámetro de la tubería, y siempre con válvulas de bloqueo para mantenimiento.
>
> Para nivel, el montaje es lateral en el tanque con conexiones bridadas. Los switches de alto y bajo se ubican en los puntos críticos. Para flujo, es indispensable respetar tramos rectos de 5 diámetros aguas arriba y 3 diámetros aguas abajo del sensor, además de garantizar el aterrizaje eléctrico.
>
> En general, todo el cableado es apantallado de 4-20 mA, con protección IP65 o IP67, y cada punto de medición se identifica según ISA-5.1.

### Diapositiva 18 — Puesta en Marcha

> La puesta en marcha la dividimos en tres fases. La primera es la verificación pre-operacional, donde hacemos inspección visual del montaje, verificamos conexiones eléctricas, alimentación, y comparamos los tag numbers contra el DTI.
>
> En la segunda fase realizamos las pruebas de lazo: verificamos cada lazo individualmente, simulamos señales de 4-20 mA, probamos que las alarmas disparen correctamente y verificamos las válvulas de alivio.
>
> La tercera fase es el arranque inicial: llenado gradual del sistema, ajuste fino de los parámetros PID, prueba de los lazos en modo automático y verificación de que todos los set-points se mantengan estables.

### Diapositiva 19 — Calibración

> Cada tipo de instrumento tiene su procedimiento de calibración específico. Para presión usamos dead-weight testers y calibradores digitales bajo la norma ASME B40.100. Para temperatura, baños secos y termómetros de referencia según IEC 60751 Clase A.
>
> La calibración de nivel se hace in-situ con nivel real y mapeo de eco falso. Para flujo verificamos el cero y la impedancia de los electrodos. Las válvulas de control se someten a stroke test con precisión de ±1% según ANSI/FCI 70-2, y las válvulas de alivio pasan por pop pressure test y reseat test conforme a API 527.

### Diapositiva 20 — Normativa

> Todo nuestro proyecto está respaldado por normativa internacional. Utilizamos ISA-5.1 para la simbología, API 520 y 521 para las válvulas de alivio, ASME B31.3 para tubería de proceso, las normas IEC 60534, 60751 y 61511 para instrumentación y seguridad funcional, y API 610 y 682 para la bomba y sus sellos mecánicos, entre otras.

### Diapositiva 21 — Conclusiones

> En conclusión, diseñamos un sistema integral que cubre las cuatro variables críticas del proceso. Cada instrumento fue seleccionado con base en criterios técnicos de precisión, rango y compatibilidad, así como en la normativa aplicable.
>
> Los tres lazos PID de nivel, presión y temperatura garantizan la estabilidad operativa, y los procedimientos de instalación, puesta en marcha y calibración aseguran que el sistema funcione correctamente desde el primer día.
>
> Este proyecto demuestra la integración entre el diseño de proceso, la selección de instrumentación y los sistemas de control automatizado.

### Diapositiva 22 — Cierre

> Con esto concluimos nuestra presentación. Quedamos a su disposición para cualquier pregunta que tenga, ingeniero. Muchas gracias por su atención.

---

## Notas para el Equipo

1. **Practicar la transición** entre cada integrante para que sea fluida.
2. **Conocer el contenido de los demás** por si el profesor hace preguntas cruzadas.
3. **Mantener contacto visual** con el profesor y la audiencia, no leer el guion textualmente.
4. **Señalar las diapositivas** cuando mencionen datos específicos, diagramas o instrumentos.
5. **Tiempo total**: Apuntar a 25 minutos de presentación + 5 minutos de preguntas.
6. **Cada quien** debe poder explicar su sección con sus propias palabras; este guion es una guía, no un texto para memorizar.
