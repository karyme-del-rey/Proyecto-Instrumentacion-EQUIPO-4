INSTITUTO POLITECNICO NACIONAL
ESCUELA SUPERIOR DE INGENIERIA 
QUIMICA E INDUSTRIAS EXTRACTIVAS
ACADEMIA DE DISEÑO E INGENIERIA DE APOYO 

SISTEMA DE CONTROL E INSTRUMENTACIÓN PARA UNA COLUMNA DE ABSORCIÓN. 


GRUPO: 5IV81      NÚMERO DE EQUIPO: 4

INTEGRANTES:

•	GALLO DÍAZ RAFAEL DAVID 
•	LOPEZ PAZ AZALIA
•	MARTÍNEZ ALAMILLA DULCE MARÍA
•	PAREJA HERNANDEZ CARLOS ALEXIS
•	RAMIREZ PAZ BARBARA
•	ZENDEROS RAMÍREZ KARYME

PROFESOR: ING. JOSÉ IGNACIO RAUDA RODRÍGUEZ


 

 




Fecha de entrega: 27 de mayo de 2026
ÍNDICE
DIAGRAMA DE FLUJO DE PROCESOS.	4
DIAGRAMA DE TUBERIA DE INSTRUMENTACIÓN (DTI)	5
DIAGRAMA DE BLOQUES.	6
LISTA DE COMPONENTES DE BLOQUES.	7
SELECCIÓN DE INSTRUMENTOS Y ESPECIFICACIONES DE INSTRUMENTOS.	10
INDICADORES DE PRESIÓN.	10
INDICADORES DE TEMPERATURA.	11
INDICADORES DE NIVEL.	13
INSTALACION TIPICA DE LOS INSTRUMENTOS.	28
PUESTA EN OPERACIÓN Y CALIBRACION DE INSTRUMENTOS .	44




















 
DIAGRAMA DE FLUJO DE PROCESOS.
















 
DIAGRAMA DE TUBERIA DE INSTRUMENTACIÓN (DTI) 
DIAGRAMA DE BLOQUES.








LISTA DE COMPONENTES DE BLOQUES.
Válvulas de aislamiento	12	Válvulas de bola o compuerta acero inoxidable	En todas las líneas principales: LIQUID INLET, JACKET INLET, JACKET RELIEF, PUMP RECYCLE, LIQUID OUTLET, VAPOR OUTLET	Para aislamiento y mantenimiento, resistentes a la corrosión y fáciles de operar.
Bomba de reciclaje	1	Bomba centrífuga con variador de velocidad.	Línea de reciclaje (PUMP RECYCLE)	Ajuste eficiente del flujo reciclado, adaptable a variaciones de proceso.
LI (Level Indicator)	1	Indicador digital local conectado a transmisor 4–20 mA	Zona lateral del recipiente, asociado al LT-2	Se recomienda un indicador digital porque permite lectura continua, precisa y fácil interpretación operacional del nivel del tanque. Facilita monitoreo en tiempo real y supervisión del proceso.
LT (Level Transmitter)	1	Transmisor de nivel tipo radar guiado	Parte lateral/superior del recipiente principal	El radar guiado presenta alta precisión, baja sensibilidad a cambios de presión y temperatura y buena estabilidad en recipientes cerrados. Además requiere poco mantenimiento y funciona adecuadamente en fluidos de proceso industriales.
LG (Level Gauge)	1	Indicador de nivel magnético tipo bypass	Costado externo del tanque
	El indicador magnético proporciona visualización directa sin contacto con el fluido, mayor seguridad que el vidrio convencional y mejor resistencia a presión y temperatura. Además permite lectura local aun sin energía
LS (Level Switch)	2	Interruptor de nivel tipo flotador magnético o vibratorio	Uno ubicado en nivel alto y otro en nivel bajo del recipiente	Los interruptores de nivel permiten detección puntual de condiciones críticas. Son adecuados para generar acciones ON/OFF y alarmas de seguridad debido a su rápida respuesta y simplicidad operacional.
LAH (Level Alarm High)	1	Alarma luminosa y sonora conectada al LS de alto nivel	Asociada a la parte superior operativa del tanque	La alarma de nivel alto permite advertir condiciones de sobrellenado que podrían ocasionar derrames, sobrepresión o afectaciones operativas.
LAL (Level Alarm Low)	1	Alarma luminosa y sonora conectada al LS de bajo nivel para alarmas	Asociada a la zona inferior operativa del tanque	La alarma de bajo nivel protege al sistema contra vaciado excesivo, cavitación de bombas y operación en seco.
Válvulas de control (PCV, TCV)	2	Válvulas globo con actuadores neumáticos	1. Línea de vapor (PCV)
2. Entrada de chaqueta (TCV)	Controle preciso de presión de vapor y temperatura de la chaqueta. Cada válvula tiene función y ubicación específica distinta.


Panel de Control Integrado
Sistema de control	Instrumentos incluidos	Ubicación en el tablero	Justificación
Control de presión	Transmisores y controladores de presión (PI, PIT, PIC)	Panel de presión con indicadores y alarmas.	Para monitorear y controlar la presión en tanque, chaqueta y líneas de alivio, asegurando operación segura.
Control de Temperatura	Sensores PT100, transmisores y controladores (TE, TI, TIT, TIC)	Panel de temperatura con visualización y control.	
Control térmico vital para mantener condiciones óptimas en tanque y chaqueta.
Control de nivel	Transmisores radar/ultrasónicos, interruptores de nivel (LS, LI, LT, LAL, LG)	Panel de nivel con alarmas y visualización	Para evitar sobrellenado o vaciado, garantizando operación continua y segura.
Control de flujo	Medidores de flujo electromagnéticos (FT)	Panel de flujo con indicadores y control de válvulas.	Control y monitoreo de caudales críticos en entrada y salida para equilibrio y eficiencia del proceso.
Control de bomba	Control de arranque/parada y variador de velocidad	Panel de bombas integrado	Para ajustar el flujo reciclado según la demanda, optimizando energía y proceso.
Alarmas de seguridad	Alarmas visuales y sonoras para presión, temperatura y nivel.	Panel de alarmas integrado	Para respuesta rápida ante condiciones anómalas, mejorando la seguridad y confiabilidad.
 
SELECCIÓN DE INSTRUMENTOS Y ESPECIFICACIONES DE INSTRUMENTOS.
INDICADORES DE PRESIÓN.
	TRANSMISOR INDICADOR DE PRESIÓN.
NOMBRE: Transmisor indicador de presión (PIT)	
UBICACIÓN DEL EQUIPO: Instalado en la línea de alivio. 
FUNCION: Instrumento que mide la presión de un proceso, transmite esa señal 
hacia un sistema de control y además muestra localmente el valor medido 
mediante una pantalla o indicador integrado.
MODELO:  Siemens SITRANS P DS III
CARACTERISTICAS: Mide presión manométrica, absoluta o diferencial, la salida 
de señal es de 4-20 mA, la precisión es alta, es configurable para software o 
comunicador HART, está elaborado de acero inoxidable 316L o aleaciones 
resistentes y es apto para zonas peligrosas.
RANGO DE OPERACIÓN: 2.5 bar manométrica 
CANTIDAD: 2
	ALARMA DE PRESIÓN ALTA.
NOMBRE: Alarma de presión alta (PAH)
UBICACIÓN DEL EQUIPO: Instalado en un panel de alarmas integrado.
FUNCION: Dispositivo o función que genera una señal de alarma cuando 
la presión supera un valor límite previamente establecido.
SOFTWARE: Siemens WinCC
CARACTERISTICAS: Cuenta con la capacidad de poder supervisar procesos 
industriales en tiempo real, gestión de alarmas y eventos, tendencias 
históricas, generación de reportes y registro de eventos y auditorias. 
RANGO DE OPERACIÓN: 2.5 bar manométrica
CANTIDAD: 2
	CONTROL DE PRESIÓN.
NOMBRE: Control de presión (PIC)	
UBICACIÓN DEL EQUIPO: Instalado en el control de presión. 
FUNCION: Equipo que compara la presión medida con un valor de 
referencia (set point) y envía señales correctivas a un elemento final de
control, como una válvula, para mantener la presión deseada en el proceso.
MODELO: Siemens TIA Portal
CARACTERISTICAS: Programación de PLCs, configuración de redes industriales, 
diagnóstico de línea del sistema y gestión completa de proyectos de automatización 
RANGO DE OPERACIÓN: 2.5 bar manométrica
CANTIDAD: 3
	INDICADOR DE PRESIÓN. 
NOMBRE: Indicador de presión (PI)
UBICACIÓN DEL EQUIPO: Instalado en el tanque.
FUNCION: Instrumento destinado únicamente a mostrar visualmente el 
valor de presión del proceso, ya sea de forma analógica o digital, sin realizar 
acciones de control.
MODELO: Manómetro bourdon inoxidable 316 WIKA 232.50
CARACTERISTICAS: Alcanza temperaturas en el proceso de hasta 100°C (si es instalado correctamente), es compatible con gases y liquidos industriales, conexiones estándar, fácil instalación y remplazo en campo.
RANGO DE OPERACIÓN: 2.5 bar manométrica
CANTIDAD: 1


INDICADORES DE TEMPERATURA.
	INDICADOR DE TEMPERATURA.
NOMBRE: Indicador de temperatura (TI)
UBICACIÓN DEL EQUIPO: Instalado en el tanque 
FUNCION: Dispositivo que muestra localmente o remotamente 
la temperatura medida en un proceso industrial.
MODELO: WIKA A53 bimetálico industrial 
CARACTERISTICAS: Carcasa de acero inoxidable 316, montaje inferior, 
compatible con termowell TW10 (diámetro típico 6 mm o 8 mm), 
compatibilidad química con solventes de hidrocarburos o ligeros. 
RANGO DE OPERACIÓN: 40°C 
CANTIDAD: 2
	TRANSMISOR INDICADOR DE TEMPERATURA. 
NOMBRE: Transmisor indicador de temperatura (TIT)
UBICACIÓN DEL EQUIPO: Instalado en la entrada y/o salida de la chaqueta.
FUNCION: Instrumento que mide la temperatura, transmite la señal 
estandarizada al sistema de control y simultáneamente presenta la lectura 
localmente mediante un display o indicador incorporado.
MODELO: Siemens SITRANS TH320
CARACTERISTICAS: Trabaja con un rango de 4-20 mA, convierte señal TS100 en señal de control industrial, montaje cabeza tipo DIN y su configuración es HART.
RANGO DE OPERACIÓN: 40°C
CANTIDAD: 1
	SENSOR DE TEMPERATURA.
NOMBRE: Sensor de temperatura (TE)
UBICACIÓN DEL EQUIPO: Instalado en el elemento del tanque
FUNCION: Elemento primario encargado de detectar la temperatura 
del proceso y convertirla en una señal física medible.
MODELO: Siemens SITRANS TS100
CARACTERISTICAS: Su configuración es de tres hilos (recomendado industrial), 
rango de temperatura -50 a 250°C, elaborado con acero inoxidable 316L y es 
 utilizado en zonas explosivas. 
RANGO DE OPERACIÓN: 40°C
CANTIDAD: 1
	THERMOWELL.
NOMBRE: Thermowell (TW)
UBICACIÓN DEL EQUIPO: Instalado en el tanque.
FUNCION: Dispositivo mecánico que aloja y protege al sensor de 
temperatura del contacto directo con el fluido del proceso. Permite retirar 
el sensor sin detener la operación ni despresurizar la línea.
MODELO: WIKA TW10
CARACTERISTICAS: Elaborado de acero inoxidable 316, conexiones de ½’’ NPT 
o rosca industrial equivalente, longitud de intersección típica de 100-200 mm 
(dependiendo del tanque), su función es la protección mecánica del sensor, es 
resistente a la presión del tanque + el flujo interno y se puede cambiar este 
sensor sin parar el proceso.
RANGO DE OPERACIÓN: 40°C
CANTIDAD: 1









INDICADORES DE NIVEL.
LI-2 — Indicador de nivel
NOMBRE: Indicador de nivel. 
UBICACIÓN EN EL EQUIPO: montado en panel local o tablero cercano al recipiente. 
FUNCIÓN: mostrar continuamente el nivel medido por el transmisor LT-2 para monitoreo operacional. 
MODELO PROPUESTO: Siemens SITRANS RD100 
Características del modelo
	RANGO: configurable para señales 4–20 mA. 
	PRECISIÓN: ±0.1 %. 
	MATERIAL: carcasa de policarbonato/aluminio. 
	PANTALLA O LECTURA: display LCD digital. 
	SALIDA O SEÑAL: lectura de señal analógica 4–20 mA. 
	PROTECCIÓN: IP65. 
	CANTIDAD: 1 por recipiente. 

INSTALACIÓN
	Panel local, gabinete de control o tablero de instrumentación.
	El equipo se conecta eléctricamente al LT-2 mediante señal 4–20 mA. Debe colocarse en una zona visible para el operador y protegido contra vibraciones y humedad excesiva.

JUSTIFICACIÓN DEL MODELO SELECCIONADO
El SITRANS RD100 es adecuado porque ofrece; alta compatibilidad con señales industriales estándar, lectura clara y estable, fácil integración con transmisores de nivel y buena confiabilidad operacional.
Además, su grado de protección IP65 permite uso industrial en ambientes de planta con presencia moderada de polvo y humedad.

LT-2 — Transmisor de nivel
NOMBRE: Transmisor de nivel. 
Ubicación en el equipo: parte superior lateral del recipiente principal. 
FUNCIÓN: medir continuamente el nivel del líquido y enviar señal al sistema de control. 
MODELO PROPUESTO: Endress+Hauser Levelflex FMP54 

Características del modelo
	RANGO: hasta 45 m. 
	PRECISIÓN: ±2 mm. 
	MATERIAL: acero inoxidable 316L. 
	PANTALLA O LECTURA: display digital local. 
	SALIDA O SEÑAL: 4–20 mA/HART. 
	PROTECCIÓN: IP66/IP68. 
	CANTIDAD: 1 por recipiente. 

INSTALACIÓN
El transmisor se instala en la parte superior del recipiente mediante conexión bridada o roscada. La sonda guiada debe quedar alineada verticalmente dentro del tanque evitando contacto con agitadores, serpentines o paredes internas. Requiere alimentación eléctrica y conexión al sistema de control.

JUSTIFICACIÓN DEL MODELO SELECCIONADO
El Levelflex FMP54 se selecciona porque; el radar guiado presenta alta precisión, no depende de densidad o conductividad del fluido, tolera variaciones de presión y temperatura y requiere poco mantenimiento.



LG-7 — Indicador visual de nivel
NOMBRE: Indicador visual de nivel. 
UBICACIÓN EN EL EQUIPO: costado externo del recipiente. 
FUNCIÓN: permitir visualización directa del nivel real del líquido dentro del tanque. 
MODELO PROPUESTO: Kobold BNA Magnetic Level Indicator 
Características del modelo
•	RANGO: configurable según altura del recipiente. 
•	PRECISIÓN: ±10 mm aprox. 
•	MATERIAL: acero inoxidable 316. 
•	PANTALLA O LECTURA: flotador magnético bicolor. 
•	SALIDA O SEÑAL: opcional con reed switch o transmisor. 
•	PROTECCIÓN: IP65. 
•	CANTIDAD: 1 por recipiente. 

INSTALACIÓN
Se instala externamente al tanque mediante conexiones superior e inferior tipo bypass. El fluido entra al cuerpo del indicador y mueve un flotador magnético interno que refleja el nivel sobre la escala visual.

JUSTIFICACIÓN DEL MODELO SELECCIONADO
El indicador magnético Kobold es más seguro que un visor de vidrio convencional porque; evita contacto directo del operador con el fluido, soporta mayores presiones y temperaturas y reduce riesgo de ruptura.
Además, permite lectura local continua incluso sin suministro eléctrico.

LS-1 / LS-9 — Interruptor de nivel
Nombre: Interruptor de nivel. 
Ubicación en el equipo: uno en nivel alto y otro en nivel bajo del recipiente. 
Función: detectar niveles críticos y activar alarmas o acciones de control ON/OFF. 
Modelo propuesto: VEGA VEGASWING 63 
Características del modelo
•	Rango: detección puntual. 
•	Precisión: tipo switch ON/OFF. 
•	Material: acero inoxidable 316L. 
•	Pantalla o lectura: LED indicador de estado. 
•	Salida o señal: relé o transistor. 
•	Protección: IP66/IP68. 
•	Cantidad: 2 por recipiente. 

Instalación
Se instala lateralmente sobre el tanque en los puntos de nivel crítico. El sensor debe quedar orientado directamente hacia el fluido para detectar presencia o ausencia de líquido mediante vibración.
JUSTIFICACIÓN DEL MODELO SELECCIONADO
El VEGASWING 63 es apropiado porque; tiene respuesta rápida, prácticamente no requiere calibración, es resistente a incrustaciones moderadas y funciona con distintos tipos de líquidos.


LAH-1 — Alarma de nivel alto
NOMBRE: Alarma de nivel alto. 
UBICACIÓN EN EL EQUIPO: panel de control o sistema HMI. 
FUNCIÓN: alertar condición de sobrellenado del recipiente. 
MODELO PROPUESTO: Patlite LR6 Signal Tower 

Características del modelo
•	RANGO: señal discreta. 
•	PRECISIÓN: no aplica. 
•	MATERIAL: policarbonato industrial. 
•	PANTALLA O LECTURA: alarma luminosa y sonora. 
•	SALIDA O SEÑAL: visual y audible. 
•	PROTECCIÓN: IP65. 
•	CANTIDAD: 1 por recipiente. 

INSTALACIÓN
Se instala sobre tablero, gabinete o estructura visible de operación. Se conecta eléctricamente al LS-1 o al PLC para activarse automáticamente cuando se alcanza nivel alto.

JUSTIFICACIÓN DEL MODELO SELECCIONADO
La torre Patlite LR6 es ampliamente utilizada en industria debido a; alta visibilidad, buena intensidad luminosa, fácil integración eléctrica y alta confiabilidad. La combinación sonora y visual mejora la seguridad operacional del sistema.



LAL-9 — Alarma de nivel bajo
NOMBRE: Alarma de nivel bajo. 
UBICACIÓN EN EL EQUIPO: panel de control o sistema HMI. 
FUNCIÓN: alertar condición de nivel mínimo o vaciado excesivo. 
MODELO PROPUESTO: Patlite LR6 Signal Tower 

Características del modelo

•	RANGO: señal discreta. 
•	PRECISIÓN: no aplica. 
•	MATERIAL: policarbonato industrial. 
•	PANTALLA O LECTURA: alarma luminosa y sonora. 
•	SALIDA O SEÑAL: visual y audible. 
•	PROTECCIÓN: IP65. 
•	CANTIDAD: 1 por recipiente.

INSTALACIÓN
Se instala en el panel de control y se conecta al LS-9 o PLC. Se activa automáticamente cuando el nivel desciende por debajo del límite mínimo establecido.

JUSTIFICACIÓN DEL MODELO SELECCIONADO
Se seleccionó este modelo porque; proporciona aviso inmediato al operador, tiene alta durabilidad industrial, es fácilmente identificable en planta y permite prevenir daños asociados a operación en seco o cavitación de bombas.


VÁLVULA DE ALIVIO (PSV-1, PSV-2 Y PSV-3)
UBICACIÓN DEL EQUIPO: Instalado en el tanque, Chaqueta y en línea de Alivio.
FUNCIÓN: Válvula de alivio de resorte
MODELO: Elevación completa con resorte, API 520
CARACTERÍSTICAS: WCB (Acero al carbono), Acero inoxidable 304  (incluye disco, asiento y guía)
RANGO DE OPERACIÓN: De 10 a 400 PSIG (0,7 a 27,6 BAR)
CANTIDAD: 3
VÁLVULA LIQUID INLET/OUTLET 
UBICACIÓN DEL EQUIPO: Línea de alimentación al tanque (antes de la boquilla de entrada) y Línea de descarga del tanque (después de la boquilla de salida)
FUNCIÓN: Aislar la alimentación de producto al tanque y Aislar la descarga de producto
MODELO: Flow-Tek Serie S19 SS316
CARACTERÍSTICAS: Bola flotante, Full Port, asiento RPTFE/PTFE, ANSI 150, Paso completo, baja pérdida de carga, operación 1/4 vuelta
RANGO DE OPERACIÓN: DN25–DN50, Clase 150, hasta aprox. 20 bar según configuración
CANTIDAD: 2
VÁLVULA JACKET INLET/OUTLET
UBICACIÓN DEL EQUIPO: Entrada de fluido térmico a la chaqueta y salida de fluido térmico de la chaqueta.
FUNCIÓN: Aislar suministro de agua/vapor de calentamiento o enfriamiento y aislar retorno del circuito térmico.
MODELO: KITZ Serie U SS316
CARACTERÍSTICAS: Operación frecuente, asiento PTFE, Full Bore, baja pérdida de presión
RANGO DE OPERACIÓN: ANSI 150, DN25-DN50
CANTIDAD: 2
VÁLVULA VAPOR OUTLET y JACKET RELIEF
UBICACIÓN DEL EQUIPO: Línea de salida de vapor de la chaqueta o tanque y entre la chaqueta y la PSV-2
FUNCIÓN: Aislamiento principal de vapor y permitir mantenimiento de la PSV de chaqueta
MODELO: Velan API 603 SS316
CARACTERÍSTICAS: Apertura total, mínima restricción al flujo y apertura completa, aislamiento seguro
RANGO DE OPERACIÓN: ANSI 150, DN15-DN600
CANTIDAD: 2

VÁLVULA (PUMP RECYCLE)
UBICACIÓN DEL EQUIPO: Línea de recirculación de la bomba

FUNCIÓN: Apertura/cierre de recirculación
MODELO: Worcester Serie 59
CARACTERÍSTICAS: Alta frecuencia de operación
RANGO DE OPERACIÓN: ANSI 150, DN25-DN50
CANTIDAD: 1

VÁLVULA PCV
UBICACIÓN DEL EQUIPO: Línea de vapor de entrada a la chaqueta, aguas arriba del tanque.

FUNCIÓN: Controlar la presión del vapor que ingresa a la chaqueta para mantener la presión de operación estable y evitar sobrepresiones o fluctuaciones térmicas.
MODELO: Fisher Fisher EZ Globe Valve + Actuador 657
CARACTERÍSTICAS: Material SS316, Actuador neumático diafragma-resorte, señal 4-20 mA, ANSI 150, ISA 75.01
RANGO DE OPERACIÓN: 0 a 10 bar, DN25-DN32
CANTIDAD: 1
VÁLVULA TCV
UBICACIÓN DEL EQUIPO: Entrada del fluido de calentamiento/enfriamiento de la chaqueta.

FUNCIÓN: Regular el caudal del fluido térmico para mantener la temperatura del tanque o reactor en el valor establecido por el controlador PID.

MODELO: SAMSON Tipo 3241 + Actuador 3271
CARACTERÍSTICAS: Material SS316 y SS316L, Actuador neumático, señal 4-20 mA, ANSI 150, IEC 60534
RANGO DE OPERACIÓN: -50 °C a 220 °C, DN25-DN32














Bomba de reciclaje 
Bomba centrífuga con variador de velocidad (VFD)
•	Para flujos de 80 LPM con mezcla agua/solventes a baja temperatura (40°C), la bomba centrífuga es la tecnología estándar.
•	El variador de velocidad permite ajuste continuo del caudal reciclado sin necesidad de válvula de estrangulamiento (más eficiente energéticamente).
•	SELLO MECÁNICO: Requiere sello mecánico doble o tipo cartridge para contener solventes inflamables (API 682).
•	MATERIAL CARCASA: Acero inoxidable 316L o fundición nodular con recubrimiento epóxico.
•	NORMA: API 610 (bombas centrífugas para petróleo), ASME B73.1 (bombas de proceso).
•	MODELO: Flowserve Durco Mark 3 ISO

ESPECIFICACIONES DEL MODELO:
1.	Caudales hasta 475 m³/h (2091 gpm) 
2.	Alturas de bombeo hasta 150 m (492 ft) 
3.	PRESIONES hasta 25 bar (362 psi) 
4.	TEMPERATURAS DESDE -40 °C (-40 °F) hasta 300 °C (572 °F) 
5.	RANGO DE TAMAÑOS: desde 25 mm (1 pulgada) hasta 150 mm (6 pulgadas)




Medidor de flujo 
 Asignación por Línea
#	Línea	Instrumento Correcto	Razón
1	Entrada de líquido (LIQUID INLET)	Electromagnético	Fluido conductor, fase líquida, Q=80 LPM
2	Entrada de chaqueta (JACKET INLET)	Electromagnético	Agua de enfriamiento/calefacción, fase líquida
3	Salida de chaqueta (JACKET OUTLET)	Electromagnético	Ídem JACKET INLET
4	Salida de líquidos (LIQUID OUTLET)	Electromagnético	Fase líquida, mezcla agua/solventes
5	Salida de vapor (VAPOR OUTLET)	 Vortex (no electromagnético)	Vapor de baja densidad, requiere tecnología diferente
6	Retorno de bomba (PUMP RECYCLE)	Electromagnético	Fluido en fase líquida

El medidor electromagnético NO puede usarse en la línea de vapor (salida de vapor / VAPOR OUTLET).
Los flujómetros electromagnéticos requieren un fluido conductor de electricidad, fluido continuo y en fase líquida. El vapor tiene conductividad despreciable y baja densidad (0.0017 g/cm³), por lo que la lectura sería errónea o nula.




¿Por qué electromagnético para líquidos?
•	Agua + solventes de hidrocarburos tienen conductividad eléctrica suficiente (>5 μS/cm para agua, mezclas con agua son conductivas).
•	Sin partes móviles por lo que requiere mínimo mantenimiento con solventes que pueden depositar residuos.
•	Cero pérdida de presión permanente a 2.5 bar.
•	No afectado por densidad (0.83 g/cm³), viscosidad ni temperatura (40-80°C).
¿Por qué NO otros para líquidos?
•	Turbina: partes móviles, solventes pueden degradar rodamientos, riesgo de atascamiento.
•	Coriolis: precio 3-5x mayor, justificable solo si se requiere medición de masa simultánea.
•	Ultrasónico: sensible a burbujas de vapor presentes en mezcla líquido/solvente.
¿Por qué Vortex para vapor?
•	Mide directamente el flujo de vapor saturado o sobrecalentado.
•	No requiere conductividad eléctrica.
•	Opera bien con densidades bajas (0.0017 g/cm³) si se cumple el número de Reynolds mínimo.
•	Alternativa: Placa de orificio (más económica, pero mayor caída de presión y menor precisión).
Diámetros Nominales deFlujo
Criterio: Velocidad óptima en tuberías industriales:
•	Líquidos: 1–3 m/s
•	Vapor: 15–30 m/s
•	
CÁLCULO PARA LÍQUIDOS 
(Q = 80 LPM = 1.33×10⁻³ m³/s, v = 2 m/s):
A = Q/v = 1.33×10⁻³ / 2 = 6.65×10⁻⁴ m² 
D = 29 mm                                                 DN 32 (1¼") o DN 40 (1½")
CÁLCULO PARA VAPOR
 (Q = 130 LPM = 2.17×10⁻³ m³/s, v = 20 m/s):
A = Q/v = 2.17×10⁻³ / 20 = 1.08×10⁻⁴ m² 
D = 11.7 mm                                               DN 15 (½") o DN 20 (¾")

Línea	Caudal	DN Recomendado	Instrumento
LIQUID INLET	80 LPM	DN 40 (1½")	Electromagnético
JACKET INLET/OUTLET	Variable	DN 25–40	Electromagnético
LIQUID OUTLET	80 LPM	DN 40 (1½")	Electromagnético
VAPOR OUTLET	130 LPM (vapor)	DN 25–32 (1–1¼")	Vortex
PUMP RECYCLE	< 80 LPM	DN 25 (1")	Electromagnético









Especificaciones Técnicas — Medidor Electromagnético
•	NORMA DE REFERENCIA: IEC 60534, ISA-5.1
•	RANGO DE FLUJO: 0.5 a 200 LPM (cubrir Q=80 LPM con margen)
•	PRECISIÓN: ±0.3% del valor medido
•	TEMPERATURA MÁX. PROCESO: 120°C (supera 80°C de diseño)
•	PRESIÓN MÁX. PROCESO: 10 bar (supera 3.8 bar diseño)
•	CONDUCTIVIDAD MÍNIMA FLUIDO: ≥5 μS/cm
•	SALIDA: 4-20 mA + HART o protocolo digital (Modbus, PROFIBUS)
•	PROTECCIÓN: IP67 o superior (zona con posibles solventes)
•	MATERIAL ELECTRODOS: Hastelloy C o Titanio (resistencia a solventes de hidrocarburos)
•	MATERIAL REVESTIMIENTO: PTFE (resistencia química universal)
•	CERTIFICACIÓN: ATEX/IECEx Zona 1 (solventes inflamables)
•	INSTALACIÓN: 5D aguas arriba, 2D aguas abajo libres de codos y válvulas
•	MODELO: Promag P 300
 ESPECIFICACIONES DEL MODELO:
•	Error de medición máx.
FLUJO VOLUMÉTRICO (ESTÁNDAR): ±0.5 % o.r. ± 1 mm/s (0.04 in/s)
•	RANGO DE MEDICIÓN
4 dm³/min a 9600 m³/h (1 gal/min a 44 000 gal/min)
•	RANGO DE TEMPERATURA DEL MEDIO
Material del recubrimiento PFA: –20 a +150 °C (–4 a +302 °F)
•	MÁX. PRESIÓN DE PROCESO
PN 40, Clase 300, 20K
•	MATERIALES HÚMEDOS Revestimiento: PFA, PTFE
Electrodos: 1.4435 (F316L); aleación C22, 2.4602 (UNS N06022); tántalo; platino; titanio
Especificaciones Técnicas — Medidor Vortex (Vapor)
•	NORMA DE REFERENCIA: AGA Report No. 7, ISA-75.01
•	RANGO DE PRESIÓN: 0–10 bar (supera 3.8 bar diseño)
•	TEMPERATURA MÁX.: 150°C (supera 80°C diseño)
•	PRECISIÓN: ±1% del valor medido
•	COMPENSACIÓN: Con transmisor de PT y TT integrados para flujo másico corregido
•	SALIDA: 4-20 mA + HART
•	MATERIAL CUERPO: Acero inoxidable 316L
•	INSTALACIÓN: 10D aguas arriba, 5D aguas abajo
•	MODELO: Prowirl F 200
ESPECIFICACIONES DEL MODELO:
•	ERROR DE MEDICIÓN MÁX.
Caudal volumétrico (vapor, gas): ±1,00 %
•	RANGO DE MEDICIÓN
Vapor, gas: 0,39 a 28.000 m³/h (0,23 a 17.000 ft³/min)
en función del producto: vapor con 180 °C, 10 bar a (356 °F, 145 psi a); aire con 25 °C, 4,4 bar a (77 °F, 63,8 psi a)
•	RANGO DE TEMPERATURA DEL MEDIO
Estándar: –40 a +260 °C (–40 a +500 °F)
Temperatura alta/baja (opcional): –200 a +400 °C (–328 a +752 °F)
INSTALACION TIPICA DE LOS INSTRUMENTOS.
Instalación de Instrumentos de Presión
Indicador de Presión (PI) — Manómetro WIKA 232.50
Ubicación: Tanque principal (zona superior).
Procedimiento de instalación típica:
1.	Conexión al proceso: Instalar mediante una toma de presión (process connection) roscada ½" NPT soldada a la boquilla del tanque.
2.	Sello de diafragma: Para proteger el manómetro del contacto directo con solventes, instalar un sello de diafragma (diaphragm seal) entre la toma y el manómetro.
3.	Válvula de bloqueo: Colocar una válvula de bola de ½" entre el sello de diafragma y el manómetro para permitir aislamiento y mantenimiento sin despresurizar el tanque.
4.	Sifón (pigtail): Instalar un sifón de tubo en U (pigtail siphon) de acero inoxidable 316 para proteger el elemento Bourdon de temperaturas elevadas.
5.	Orientación de montaje: Montar el manómetro en posición vertical con la carátula hacia el operador. Con conexión inferior (radial) 
6.	Altura: Instalar a la misma altura del punto de toma 
Listado de instalacion:
1.	TANQUE                                                           5. Sello de diafragma
2.	Boquilla ½" NPT (soldada al tanque)          6.  Manómetro WIKA 232.50
3.	Válvula de bloqueo (bola ½")
4.	Sifón pigtail 



Transmisor Indicador de Presión (PIT) — Siemens SITRANS P DS III
Ubicación: Línea de alivio (2 unidades).
Procedimiento de instalación típica:
1.	Toma de proceso: Soldar una toma de presión ½" NPT en la tubería de la línea de alivio, preferiblemente en la parte lateral o superior de la tubería para evitar acumulación de condensados.
2.	Válvula de bloqueo: Instalar una válvula de bola de ½" (manifold de 1 válvula o manifold de 3 válvulas si se requiere calibración en línea).
3.	Manifold de 3 válvulas : Permite aislar el transmisor, ventear y ecualizar sin desmontarlo. Modelo recomendado: Manifold tipo 3-valve en acero inoxidable 316.
4.	Línea de impulso: Tubing de acero inoxidable 316, OD ½" o ¼", longitud mínima entre la toma y el transmisor. Pendiente descendente mínima de 1:12 hacia el punto de drenaje.
5.	Montaje del transmisor: Sobre soporte tipo "L" o "U" atornillado a una estructura, rack de instrumentos o columna. No montar directamente en la tubería de proceso.
6.	Orientación: Montar con el diafragma hacia abajo para facilitar autodrenaje y evitar acumulación de gases.
7.	Conexión eléctrica: Cable HART apantallado 2 hilos, con prensaestopas certificado ATEX. Conectar la pantalla (shield) a tierra en el lado del tablero de control (un solo punto).
Diagrama esquemático de instalación:
1.	LÍNEA DE ALIVIO
2.	Toma ½" NPT (lateral/superior de la tubería)
3.	Válvula de raíz (root valve) — bola ½"
4.	Manifold 3 válvulas (bloqueo, venteo, ecualización)
5.	SITRANS P DS III (montado en soporte/rack
6.	Display local integrad
7.	Señal 4-20 mA HART → PLC / DCS
8.	Drenaje/venteo con tapón
Válvula de Control de Presión (PCV) — Fisher EZ + Actuador 657
Ubicación: Línea de vapor de entrada a la chaqueta.
Procedimiento de instalación típica:
1.	Tramo recto: Proveer mínimo 10D (diámetros) aguas arriba y 5D aguas abajo de tubo recto libre de codos, tees, reductores o válvulas de aislamiento.
2.	Válvulas de aislamiento: Instalar válvulas de compuerta (gate valves) aguas arriba y aguas abajo de la PCV para aislamiento durante mantenimiento.
3.	Bypass manual: Instalar un bypass con válvula globo manual en paralelo a la PCV para operación manual en caso de falla del actuador o mantenimiento de la válvula.
4.	Dirección de flujo: Verificar la flecha de dirección de flujo en el cuerpo de la válvula. Instalar conforme al diseño: generalmente "flow-to-open" o "flow-to-close" según especificación del fabricante y la acción de falla requerida.
5.	Actuador neumático: Conectar la línea de aire de suministro (aire de instrumento, seco y filtrado, típicamente 1.4–6 bar) mediante tubing de cobre o acero inoxidable ¼" OD.
6.	Posicionador: Instalar posicionador electro-neumático (ej. Fisher DVC6200) montado directamente sobre el actuador. Conectar señal 4–20 mA del PLC al posicionador.
7.	Filtro-regulador de aire: Instalar un filtro-regulador de aire comprimido (air filter-regulator, AFR) aguas arriba del actuador para asegurar presión de suministro limpia y estable.
8.	Acción de falla: Configurar la acción de falla segura: falla cerrada (FC) — en caso de pérdida de aire o señal, la válvula cierra para cortar el vapor y evitar sobrecalentamiento de la chaqueta.
9.	Montaje: Válvula montada horizontalmente en la tubería con el actuador hacia arriba. Evitar montaje con el actuador hacia abajo (acumulación de condensados en el actuador).

INSTALACIÓN DE INSTRUMENTOS DE TEMPERATURAThermowell (TW) — WIKA TW10
Ubicación: Tanque principal.
Procedimiento de instalación típica:
1.	Soldadura de la conexión: La conexión del thermowell (½" NPT o bridada) se suelda a la boquilla del tanque durante la fabricación del recipiente. Si se instala en campo, la soldadura debe cumplir ASME B31.3 y realizarse por soldador calificado.
2.	Longitud de inmersión: La punta del thermowell debe quedar sumergida en el fluido a una profundidad mínima de 100 mm dentro del proceso para garantizar contacto térmico adecuado. Longitud típica seleccionada: 150–200 mm.
3.	Orientación: Instalar en posición horizontal o con inclinación de 15° respecto a la horizontal, con la punta apuntando aguas abajo del flujo o hacia la zona de mezcla.
4.	Verificación de frecuencia natural: Verificar que la frecuencia natural del thermowell sea al menos 2.5 veces mayor que la frecuencia de desprendimiento de vórtices (cálculo según ASME PTC 19.3 — Thermowells) para evitar vibración inducida por flujo.
5.	Prueba de presión: Antes de instalar el sensor, realizar prueba hidrostática del thermowell a 1.5 × MAWP del tanque.
6.	Sellante: Aplicar cinta de teflón o sellante industrial en la rosca NPT. Para conexiones bridadas, usar junta (gasket) adecuada.


Sensor de Temperatura (TE) — Siemens SITRANS TS100 (PT100)
Ubicación: Dentro del thermowell TW10 en el tanque.
Procedimiento de instalación típica:
1.	Inserción en el thermowell: Deslizar el sensor PT100 dentro del thermowell hasta que la punta del sensor haga contacto con el fondo del thermowell.
2.	Pasta conductora térmica: Aplicar pasta conductora térmica (thermal compound) en la punta del thermowell para mejorar la transferencia de calor entre el thermowell y el sensor.
3.	Fijación: Asegurar el sensor con la cabeza de conexión (connection head) roscada al thermowell. Verificar que la junta (o-ring o gasket) de la cabeza esté en buen estado.
4.	Configuración de hilos: Conectar en configuración de 3 hilos para compensación de resistencia de cable. Los 3 hilos se conectan a la bornera de la cabeza de conexión.
5.	Cabeza de conexión: Utilizar cabeza tipo DIN B o tipo J de aluminio o acero inoxidable con grado de protección IP65 mínimo.
6.	Cableado al transmisor: Si el transmisor TIT se monta en la cabeza de conexión (head-mount), la conexión es directa. Si el transmisor es remoto, tender cable apantallado de 3 hilos hasta el transmisor.

Transmisor Indicador de Temperatura (TIT) — Siemens SITRANS TH320
Ubicación: Entrada y/o salida de la chaqueta.
Procedimiento de instalación típica:
1.	Montaje tipo head-mount: El SITRANS TH320 se monta directamente en la cabeza de conexión DIN del thermowell/sensor. Esto minimiza la longitud de cable entre sensor y transmisor, mejorando la precisión.
2.	Montaje en rack/soporte (alternativa): Si se prefiere montaje remoto, instalar en un rack de instrumentos cercano al punto de medición. Distancia máxima recomendada entre sensor y transmisor: 30 m para configuración de 3 hilos.
3.	Conexión del sensor: Conectar los 3 hilos del PT100 a las borneras del transmisor según el diagrama de cableado del fabricante.
4.	Conexión de salida: Cable apantallado 2 hilos para señal 4–20 mA HART desde el transmisor al PLC/DCS.
5.	Configuración HART: Configurar rango, unidades (°C), tipo de sensor (PT100), amortiguamiento (damping) y alarma de falla mediante comunicador HART portátil 

Indicador de Temperatura (TI) — WIKA A53 Bimetálico
Ubicación: Tanque principal (2 unidades).
Procedimiento de instalación típica:
1.	Thermowell independiente: Cada TI debe tener su propio thermowell. No compartir thermowell con sensores electrónicos.
2.	Conexión: Rosca ½" NPT inferior (bottom connection) insertada en el thermowell.
3.	Orientación: La carátula debe quedar orientada hacia el operador, legible a distancia. Preferir montaje radial (connection inferior) con ajuste angular de la carátula.
4.	Ventana de lectura: Verificar que la carátula tenga vidrio de seguridad y que el rango del dial cubra la temperatura de operación (40°C) en el tercio medio de la escala para máxima precisión de lectura.
5.	Longitud del vástago: La longitud del vástago del termómetro bimetálico debe coincidir con la longitud del thermowell. 


Válvula de Control de Temperatura (TCV) — SAMSON Tipo 3241
Ubicación: Entrada del fluido térmico a la chaqueta.
Procedimiento de instalación típica:
1.	Tramo recto: Mínimo 10D aguas arriba y 5D aguas abajo.
2.	Válvulas de aislamiento y bypass: Idéntica configuración que la PCV — válvulas de aislamiento de compuerta aguas arriba/abajo + bypass manual con válvula globo.
3.	Actuador neumático SAMSON 3271: Conectar aire de instrumento mediante tubing ¼" OD. Instalar filtro-regulador de aire (AFR).
4.	Posicionador SAMSON 3730: Montado sobre el actuador. Recibe señal 4–20 mA del controlador TIC en el PLC.
5.	Acción de falla: Configurar falla cerrada (FC) — en pérdida de aire o señal, la válvula cierra para cortar fluido térmico y evitar sobrecalentamiento/subenfriamiento descontrolado.
6.	Sentido de flujo: Verificar flecha de flujo en el cuerpo de la válvula. Instalar según el sentido del fluido térmico.
7.	Drenaje: Proveer punto de drenaje aguas abajo de la válvula para permitir vaciado durante mantenimiento.








 INSTALACIÓN DE INSTRUMENTOS DE NIVEL
Transmisor de Nivel Radar Guiado (LT-2) — Endress+Hauser Levelflex FMP54
Ubicación: Parte superior lateral del recipiente principal.
Procedimiento de instalación típica:
1.	Boquilla de montaje: Instalar en una boquilla dedicada en la parte superior del tanque. Conexión bridada (preferida) o roscada según especificación. Diámetro mínimo de boquilla: DN50 (2") para evitar reflexiones de señal.
2.	Longitud de la sonda: La sonda guiada debe extenderse desde la parte superior hasta 50 mm por encima del fondo del tanque. Nunca debe tocar el fondo.
3.	Alineación vertical: La sonda debe quedar perfectamente vertical. Evitar contacto con paredes internas, deflectores, agitadores, serpentines o cualquier estructura interna del tanque.
4.	Distancia a paredes: Mantener una distancia mínima de 200 mm entre la sonda y cualquier pared o estructura interna del tanque.
5.	Zona muerta: Respetar la zona muerta superior (upper blocking distance) especificada por el fabricante, típicamente 50–100 mm desde la brida de montaje.
6.	Puesta a tierra: Conectar la brida del transmisor a la estructura de tierra del tanque.
7.	Conexión eléctrica: Cable HART apantallado 2 hilos. Tender desde el transmisor hasta el tablero de control. Prensaestopas certificado ATEX.
8.	Configuración: Programar mediante display local o HART: distancia vacío (0%), distancia lleno (100%), tipo de medio, constante dieléctrica del fluido.
          


Indicador Visual de Nivel Magnético (LG-7) — Kobold BNA
Ubicación: Costado externo del tanque.
Procedimiento de instalación típica:
1.	Conexiones al tanque: Se conecta al tanque mediante dos boquillas bridadas: una en la parte superior y otra en la parte inferior del rango de medición. Las bridas deben coincidir con el rango operativo de nivel.
2.	Válvulas de aislamiento: Instalar válvulas de bola en ambas conexiones (superior e inferior) para permitir aislamiento del indicador durante mantenimiento sin vaciar el tanque.
3.	Válvula de drenaje: Instalar una válvula de drenaje de ¼" o ½" en la parte inferior del cuerpo del indicador.
4.	Venteo: Instalar una válvula de venteo en la parte superior del cuerpo del indicador.
5.	Verticalidad: El cuerpo del indicador debe quedar perfectamente vertical. Utilizar nivel de burbuja durante la instalación. Desviación máxima: ±1°.
6.	Centro de indicación: El centro de la escala visual debe quedar a una altura cómoda para lectura del operador, idealmente entre 1.2 m y 1.6 m sobre la plataforma.
7.	Orientación del indicador: La escala bicolor (rojo/blanco o verde/rojo) debe quedar orientada hacia la zona de tránsito del operador.







 Interruptor de Nivel (LS-1, LS-9) — VEGA VEGASWING 63
Ubicación: LS-1 en nivel alto, LS-9 en nivel bajo del recipiente.
Procedimiento de instalación típica:
1.	Montaje lateral: Instalar lateralmente sobre el tanque mediante conexión roscada (¾" o 1" NPT) o bridada en los puntos de nivel crítico predefinidos.
2.	LS-1 (nivel alto): Instalar en una boquilla ubicada a la altura correspondiente al nivel alto de alarma (típicamente 80–90% del rango de nivel).
3.	LS-9 (nivel bajo): Instalar en una boquilla ubicada a la altura correspondiente al nivel bajo de alarma (típicamente 10–20% del rango de nivel).
4.	Orientación del sensor: La horquilla vibratoria del VEGASWING 63 debe quedar orientada horizontalmente y completamente sumergida cuando se alcanza el punto de disparo. La punta sensible debe apuntar hacia el interior del tanque.
5.	Longitud de extensión: utilizar una extensión (extension tube) para que la horquilla vibratoria penetre al interior del tanque.
6.	Conexión eléctrica: Cable 2 hilos a la bornera de relé del interruptor. La salida de relé se conecta al PLC para generación de alarmas (LAH-1 y LAL-9).
7.	Prueba funcional post-instalación: Llenar/vaciar el tanque hasta los puntos de disparo y verificar la conmutación del relé con un multímetro.

Indicador de Nivel Digital (LI-2) — Siemens SITRANS RD100
Ubicación: Panel local o tablero cercano al recipiente.
Procedimiento de instalación típica:
1.	Montaje en panel: Montaje empotrado (panel mount) en tablero de instrumentación local mediante recorte de panel estándar (DIN).
2.	Conexión eléctrica: Conectar a la señal de salida 4–20 mA del transmisor LT-2 en configuración serie (loop-powered) o con alimentación externa según modelo.
3.	Configuración: Programar rango de indicación (0–100% nivel o unidades de ingeniería), unidades, alarmas de display (si aplica).
4.	Visibilidad: Instalar a altura de ojos del operador (1.4–1.6 m). Verificar que la pantalla LCD sea legible bajo las condiciones de iluminación del área.

Alarmas de Nivel (LAH-1, LAL-9) — Patlite LR6 Signal Tower
Ubicación: Panel de control o estructura visible.
Procedimiento de instalación típica:
1.	Montaje: Instalar sobre el tablero de control, columna o estructura elevada con visibilidad desde el área de operación. Altura mínima recomendada: 2.0 m sobre nivel de piso.
2.	Conexión eléctrica:
•	LAH-1: Conectar a la salida de relé del LS-1 (nivel alto) o a una salida digital del PLC asignada a la alarma de nivel alto.
•	LAL-9: Conectar a la salida de relé del LS-9 (nivel bajo) o a una salida digital del PLC asignada a la alarma de nivel bajo.
3.	Colores de señalización: Configurar colores según estándar de planta:
•	Rojo: Alarma crítica (nivel alto — sobrellenado).
•	Amarillo/Ámbar: Alarma de advertencia (nivel bajo — riesgo de vaciado).
4.	Señal sonora: Activar la función de buzzer/sirena integrada. Verificar que la intensidad sonora (típicamente 85–90 dB @ 1 m) sea audible en el área de operación.
5.	Botón de reconocimiento (acknowledge): Si el sistema lo permite, configurar un botón de reconocimiento en el panel para silenciar la alarma sonora tras la atención del operador (la señal visual debe permanecer activa hasta que la condición se normalice).

INSTALACIÓN DE INSTRUMENTOS DE FLUJO
Medidor de Flujo Electromagnético — Endress+Hauser Promag P 300
Ubicación: Líneas de LIQUID INLET, JACKET INLET, JACKET OUTLET, LIQUID OUTLET y PUMP RECYCLE.
Procedimiento de instalación típica:
1.	Tramos rectos:
•	Aguas arriba: mínimo 5D (5 diámetros nominales) de tubo recto libre de perturbaciones.
•	Aguas abajo: mínimo 2D de tubo recto.
•	Si hay una válvula de control aguas arriba: mínimo 10D.
2.	Orientación de montaje: El medidor puede instalarse en tubería horizontal, vertical o inclinada. Para garantizar que el tubo de medición esté siempre completamente lleno de líquido:
•	En tubería horizontal: los electrodos deben quedar en posición horizontal (3 y 9 horas) para evitar que burbujas de aire pasen por los electrodos.
•	En tubería vertical: preferir flujo ascendente para garantizar tubo lleno.
3.	Puesta a tierra (grounding): Crítico para medidores electromagnéticos. Conectar los anillos de puesta a tierra (grounding rings) o discos de tierra del sensor a la tubería y al sistema de tierra de la planta. En tuberías con revestimiento interior (lined) o de plástico, los anillos de tierra son obligatorios.
4.	Bridas: Instalar con juntas (gaskets) que no sobresalgan al interior de la tubería. El diámetro interior de la junta debe coincidir con el del medidor.
5.	Válvulas de aislamiento: Instalar válvulas de bola aguas arriba y aguas abajo del medidor para aislamiento durante mantenimiento.
6.	Evitar: No instalar en el punto más alto de la tubería (acumulación de aire). No instalar inmediatamente después de una bomba (pulsaciones/cavitación). No instalar aguas abajo de una descarga libre (tubo parcialmente lleno).
7.	Cableado: Utilizar el cable específico del fabricante entre el sensor y el transmisor. Si sensor y transmisor son remotos, la distancia máxima depende del tipo de cable (típicamente hasta 200 m con cable blindado estándar).
8.	Transmisor: Montar en soporte/rack cercano, protegido de vibración y temperatura excesiva. Conexión 4–20 mA HART al PLC.
Medidor de Flujo Vortex — Endress+Hauser Prowirl F 200
Ubicación: Línea de VAPOR OUTLET.
Procedimiento de instalación típica:
1.	Tramos rectos:
•	Aguas arriba: mínimo 10D de tubo recto.
•	Aguas abajo: mínimo 5D de tubo recto.
•	Estos requisitos son mayores que los del electromagnético porque el vortex es más sensible a perturbaciones de flujo.
2.	Orientación de montaje: Preferir instalación en tubería horizontal con el transmisor hacia arriba. Evitar que el condensado se acumule en el sensor.
3.	Compensación de presión y temperatura: Si el Prowirl F 200 incluye sensores de PT y TT integrados para compensación de flujo másico, verificar que estén correctamente calibrados para las condiciones de operación del vapor.
4.	Aislamiento térmico: No aislar el cuerpo del transmisor electrónico. 
5.	Válvulas de aislamiento: Instalar válvulas de compuerta (no de bola, para evitar turbulencia adicional) aguas arriba y aguas abajo.
6.	Drenaje: Proveer punto de drenaje aguas abajo del medidor para purga de condensado.
7.	Conexión eléctrica: Cable HART apantallado 2 hilos al PLC. Prensaestopas certificado ATEX.
INSTALACIÓN DE VÁLVULAS DE ALIVIO
Válvulas de Alivio de Presión (PSV-1, PSV-2, PSV-3) — API 520
Ubicaciones: PSV-1 en tanque, PSV-2 en chaqueta, PSV-3 en línea de alivio.
Procedimiento de instalación típica:
1.	Boquilla de entrada: Instalar directamente sobre la boquilla del equipo protegido (tanque o chaqueta) sin reducción de diámetro entre la boquilla y la entrada de la PSV. 
2.	Sin válvula de bloqueo de entrada (normalmente): Según ASME VIII y API 520/521, la PSV debe estar conectada directamente al equipo sin válvula de bloqueo intermediaria. Si se requiere una válvula de bloqueo para mantenimiento (CSO — Car Sealed Open), esta debe estar asegurada en posición abierta con cadena y candado, y documentada.
3.	Pérdida de carga en la entrada: La pérdida de carga total en la tubería de entrada (desde el equipo hasta la PSV) no debe exceder el 3% de la presión de ajuste (set pressure) de la válvula.
4.	Tubería de descarga:
•	Dirigir la descarga a un sistema de recolección seguro (cabezal de venteo, quemador, tanque de descarga) o a la atmósfera en zona segura.
•	Soportar adecuadamente la tubería de descarga para absorber las fuerzas de reacción durante el alivio.
•	La contrapresión (back pressure) en la descarga no debe exceder el 10% de la presión de ajuste para PSV convencionales, o según especificación del fabricante para PSV balanceadas.
5.	Drenaje: Instalar un orificio de drenaje (weep hole) en la parte inferior de la tubería de descarga para evitar acumulación de condensado o lluvia.
6.	Orientación: Instalar la PSV verticalmente, con el resorte hacia arriba. Nunca instalar horizontalmente o invertida.
7.	Accesibilidad: Garantizar acceso para inspección, prueba y mantenimiento. Las PSV deben ser accesibles mediante plataforma o escalera.
8.	Placa de identificación: Cada PSV debe tener una placa de identificación con: tag, presión de ajuste, capacidad de alivio, fecha de última prueba.
9.	Sello de integridad: Las PSV deben instalarse con el sello del fabricante intacto. No ajustar la presión de apertura en campo sin autorización.

INSTALACIÓN DE LA BOMBA DE RECICLAJE
Bomba Centrífuga — Flowserve Durco Mark 3 ISO con VFD
Ubicación: Línea de recirculación (PUMP RECYCLE).
Procedimiento de instalación típica:
1.	Cimentación: Instalar sobre base de concreto nivelada con pernos de anclaje. La base debe ser lo suficientemente rígida para evitar vibración. Nivelar con precisión ±0.05 mm/m.
2.	Alineación: Alinear el acoplamiento bomba-motor con indicador de carátula (dial indicator) o alineador láser. Desalineación máxima: ±0.05 mm (angular y paralela). Repetir la alineación después de conectar la tubería y antes del arranque.
3.	Tubería de succión:
•	Mínimo 3D de tubo recto antes de la succión de la bomba.
•	Instalar un reductor excéntrico (no concéntrico) con la parte plana arriba para evitar acumulación de aire.
•	Pendiente ascendente continua desde el tanque hasta la bomba para evitar bolsas de aire.
•	Instalar filtro temporal (strainer) de arranque con malla 40 para proteger la bomba de partículas durante la puesta en marcha. Retirar después de la puesta en marcha.
TUBERÍA DE DESCARGA:
•	Instalar válvula de retención (check valve) inmediatamente después de la bomba.
•	Instalar válvula de aislamiento (bola o compuerta) después de la válvula de retención.
4.	Sello mecánico: Verificar la correcta instalación del sello mecánico API 682 (doble o tipo cartridge). 
5.	Variador de frecuencia (VFD): Instalar el VFD en un gabinete eléctrico ventilado, protegido de humedad y polvo. Distancia máxima recomendada entre VFD y motor: según especificación del fabricante del VFD (típicamente ≤ 100 m con cable apantallado).
6.	Protección del motor: Configurar protecciones en el VFD: sobrecorriente, sobrecalentamiento, subfrecuencia, falla de fase.
7.	Puesta a tierra: Conectar el motor y la bomba a la red de tierra de la planta. Si se usa VFD, conectar la malla del cable motor–VFD a tierra en ambos extremos.





PUESTA EN OPERACIÓN Y CALIBRACION DE INSTRUMENTOS .

PROCEDIMIENTO GENERAL DE PUESTA EN OPERACIÓN
Fase 1 — Verificación Pre-Operativa (Pre-Commissioning)
Antes de energizar cualquier instrumento, realizar las siguientes verificaciones:
#	Actividad	Criterio de Aceptación
1	Inspección visual de montaje	Todos los instrumentos instalados según especificaciones, sin daños visibles
2	Verificación de conexiones de proceso	Todas las tomas, boquillas y válvulas de aislamiento correctamente apretadas y selladas
3	Verificación de cableado eléctrico	Continuidad de cables, aislamiento ≥ 100 MΩ (megger test a 500 VDC), correcta polaridad
4	Verificación de aire de instrumento	Presión de suministro 5–7 bar, seco (punto de rocío < -40°C), libre de aceite
5	Verificación de puesta a tierra	Resistencia de tierra < 10 Ω para cada instrumento
6	Verificación de clasificación de área	Todos los instrumentos en zonas clasificadas tienen certificación ATEX/IECEx correcta
7	Revisión de documentación	Hojas de datos, diagramas de lazo (loop diagrams), procedimientos de calibración disponibles
8	Prueba hidrostática de tuberías	Todas las líneas probadas a 1.5 × presión de diseño, sin fugas


Fase 2 — Verificación de Lazos (Loop Check)
Verificar cada lazo de instrumentación desde el sensor hasta el PLC/DCS y de vuelta al elemento final de control:
1.	Inyectar señal simulada en el transmisor (usando calibrador de lazo) y verificar que la lectura correcta aparezca en:
•	El indicador local (si existe)
•	La pantalla HMI/SCADA (WinCC)
•	El registro del PLC/DCS
2.	Verificar acciones de control: Simular condiciones de alarma y verificar que las alarmas (PAH, LAH, LAL) se activen correctamente.
3.	Verificar elementos finales: Desde el PLC, enviar señal de 4–20 mA a las válvulas de control (PCV, TCV) y verificar que el recorrido (stroke) sea completo y suave de 0% a 100%.
4.	Documentar: Registrar los resultados de cada loop check en el formato de verificación de lazos.
Fase 3 — Puesta en Marcha Inicial (Commissioning)
1.	Llenado inicial: Llenar el tanque con fluido de proceso (o agua limpia para pruebas iniciales) gradualmente mientras se monitorean todos los instrumentos de nivel (LT-2, LG-7, LS-1, LS-9, LI-2).
2.	Arranque de la bomba: Arrancar la bomba de reciclaje a velocidad mínima (VFD al 20–30%) y verificar:
•	Dirección de rotación correcta
•	Ausencia de vibración excesiva (< 4.5 mm/s RMS según ISO 10816)
•	Presión de descarga y caudal dentro de parámetros
•	Sello mecánico sin fugas visibles
3.	Circulación por la chaqueta: Abrir gradualmente la válvula TCV y verificar circulación del fluido térmico. Monitorear TIT en entrada y salida de chaqueta.
4.	Estabilización: Operar el sistema en condiciones de prueba durante mínimo 4 horas verificando estabilidad de todas las variables (P, T, L, F).
5.	Verificación de alarmas en vivo: Durante la prueba, llevar deliberadamente el nivel hasta los puntos de alarma (alto y bajo) para verificar la activación real de LS-1, LS-9, LAH-1 y LAL-9.
6.	Ajuste de controladores PID: Realizar la sintonización (tuning) de los lazos PID de presión (PIC) y temperatura (TIC) mediante el método de respuesta escalón o autotuning del PLC.
CALIBRACIÓN DE INSTRUMENTOS DE PRESIÓN
Manómetro PI — WIKA 232.50
Equipo de calibración: Calibrador de peso muerto (dead weight tester) o calibrador de presión digital portátil (ej. Fluke 700G, Beamex MC6).
Procedimiento:
1.	Aislar el manómetro del proceso cerrando la válvula de bloqueo.
2.	Conectar el calibrador de referencia a la conexión del manómetro (mediante adaptador ½" NPT).
3.	Aplicar presión en 5 puntos distribuidos uniformemente en el rango: 0%, 25%, 50%, 75%, 100% del span (0, 0.625, 1.25, 1.875, 2.5 bar).
4.	Registrar la lectura del manómetro en cada punto, tanto en ascenso como en descenso (verificación de histéresis).
5.	Criterio de aceptación: Error máximo ±1.6% del span (clase 1.6 ASME B40.100). Histéresis máxima ≤ 1% del span.
6.	Si el manómetro no cumple, ajustar el mecanismo Bourdon (puntero) o reemplazar el instrumento.
Frecuencia de calibración: Cada 12 meses o después de un evento de sobrepresión.
Transmisor PIT — Siemens SITRANS P DS III
Equipo de calibración: Calibrador de presión de referencia (exactitud ≥ 4× mejor que la del transmisor) + calibrador de lazo 4–20 mA (ej. Beamex MC6 o Fluke 754).
Procedimiento:
1.	Aislar el transmisor del proceso (cerrar válvulas del manifold, abrir ecualizadora).
2.	Conectar el calibrador de presión a la toma de alta presión del transmisor.
3.	Conectar el calibrador de lazo en serie con la señal 4–20 mA del transmisor.
4.	Aplicar presión en 5 puntos (0%, 25%, 50%, 75%, 100% del rango calibrado).
5.	En cada punto, registrar:
•	Presión de referencia aplicada
•	Lectura del display local del PIT
•	Señal de salida mA medida
6.	Verificar linealidad, cero (zero) y span.
7.	Criterio de aceptación: Error máximo ±0.15% del span (según especificación del SITRANS P DS III). Salida de 4 mA = 0% rango, 20 mA = 100% rango.
8.	Si es necesario, ajustar zero y span mediante comunicador HART o desde el display local del transmisor.
9.	Realizar verificación en ascenso y descenso para comprobar histéresis.
Frecuencia de calibración: Cada 12 meses. Se recomienda verificación trimestral de cero (zero check).
Válvulas de Alivio PSV-1, PSV-2, PSV-3
Equipo de calibración: Banco de prueba de válvulas de alivio (spring-loaded relief valve test bench) certificado.
Procedimiento:
1.	Prueba de pop (set pressure test): Aplicar presión gradualmente hasta que la válvula abra. Registrar la presión de apertura (pop pressure).
2.	Criterio de aceptación (ASME VIII, API 527):
•	Para presiones de ajuste ≤ 4.83 bar (70 psi): tolerancia ±0.14 bar (±2 psi).
•	Para presiones de ajuste > 4.83 bar: tolerancia ±3%.
3.	Prueba de hermeticidad: Con la válvula en posición cerrada al 90% de la presión de ajuste, verificar que no haya fuga visible o burbujeo.
4.	Prueba de reseat: Verificar que la válvula cierre (reseat) a una presión igual o mayor al 93% de la presión de ajuste (blowdown ≤ 7%).
5.	Registrar resultados, resellar la válvula con nuevo sello de integridad y etiquetar con fecha de próxima prueba.
Frecuencia de calibración: Cada 12 meses según API 576, o según regulación local aplicable. Las PSV deben retirarse para prueba en taller certificado.

CALIBRACIÓN DE INSTRUMENTOS DE TEMPERATURA
Sensor PT100 (TE) — Siemens SITRANS TS100
Equipo de calibración: Baño seco (dry block calibrator) o baño de temperatura líquido + termómetro de referencia certificado (ej. Fluke 9142 + Hart Scientific SRT).
Procedimiento:
1.	Retirar el sensor PT100 del thermowell.
2.	Insertar el sensor junto con el termómetro de referencia en el baño de calibración.
3.	Aplicar temperatura en 5 puntos: 0°C, 10°C, 20°C, 30°C, 40°C (cubriendo el rango de operación).
4.	Esperar estabilización (±0.1°C durante 5 minutos) en cada punto.
5.	Medir la resistencia del sensor con un ohmímetro de precisión (4 hilos):
•	0°C → 100.00 Ω
•	10°C → 103.90 Ω
•	20°C → 107.79 Ω
•	30°C → 111.67 Ω
•	40°C → 115.54 Ω (Valores según IEC 60751, α = 0.00385 Ω/Ω/°C, Clase A)
6.	Criterio de aceptación: Error máximo Clase A: ±(0.15 + 0.002 × |T|) °C. A 40°C: ±0.23°C.
7.	Si el sensor está fuera de tolerancia, reemplazar. Los sensores PT100 no se ajustan.
Frecuencia de calibración: Cada 24 meses o ante sospecha de deriva.

Transmisor TIT — Siemens SITRANS TH320
Equipo de calibración: Simulador de resistencia de precisión (decade resistance box) o calibrador de proceso con simulación de RTD (ej. Beamex MC6, Fluke 754).
Procedimiento:
1.	Desconectar el sensor PT100 del transmisor.
2.	Conectar el simulador de resistencia a las borneras del transmisor (3 hilos).
3.	Conectar el calibrador de lazo en serie con la salida 4–20 mA.
4.	Simular 5 valores de resistencia correspondientes a temperaturas de: 0°C (100.00 Ω), 10°C, 20°C, 30°C, 40°C (115.54 Ω).
5.	En cada punto, registrar:
•	Resistencia simulada
•	Lectura del display del TIT
•	Señal mA de salida
6.	Criterio de aceptación: Error del transmisor ±0.1°C (según especificación del TH320). Salida lineal 4–20 mA proporcional al rango configurado.
7.	Si es necesario, ajustar zero, span y linealidad mediante HART.
Frecuencia de calibración: Cada 12 meses.

Indicador Bimetálico TI — WIKA A53
Equipo de calibración: Baño seco o líquido + termómetro de referencia.
Procedimiento:
1.	Retirar el termómetro bimetálico del thermowell.
2.	Sumergir el vástago en el baño de calibración junto con el termómetro de referencia.
3.	Verificar en 3 puntos mínimo: 0°C, 20°C, 40°C.
4.	Criterio de aceptación: Error máximo ±1% del span (clase 1 según EN 13190). Para un rango de 0–100°C: ±1°C.
5.	Si está fuera de tolerancia, ajustar mediante el tornillo de calibración posterior (si el modelo lo permite) o reemplazar.
Frecuencia de calibración: Cada 12 meses.

CALIBRACIÓN DE INSTRUMENTOS DE NIVEL
Transmisor de Nivel Radar Guiado (LT-2) — Endress+Hauser Levelflex FMP54
Equipo de calibración: Configuración in-situ con el tanque (método de calibración húmeda — wet calibration) o mediante HART con datos de referencia.


Procedimiento:
1.	Calibración en vacío (Empty calibration):
•	Con el tanque vacío, configurar mediante HART o display local la distancia de referencia de vacío (0% nivel).
•	Registrar la distancia medida por el radar desde la brida hasta la superficie del fondo/sonda.
2.	Calibración en lleno (Full calibration):
•	Llenar el tanque hasta el nivel máximo operativo (100%).
•	Configurar la distancia de referencia de lleno (100% nivel).
3.	Puntos intermedios (verificación de linealidad):
•	Llenar el tanque a 25%, 50%, 75% y verificar la lectura del transmisor contra una medición de referencia (ej. cinta métrica + referencia visual en el LG-7).
4.	Criterio de aceptación: Error ±2 mm (especificación del FMP54).
5.	Mapeo de eco falso (false echo mapping): Con el tanque vacío, ejecutar la función de mapeo de eco del FMP54 para que el procesador de señal registre y filtre los ecos parásitos de las estructuras internas del tanque.
6.	Verificar que la salida 4–20 mA sea lineal y corresponda al rango de nivel configurado.
Frecuencia de calibración: Cada 24 meses (el radar guiado tiene muy baja deriva). Verificación anual de cero.

Indicador Magnético de Nivel (LG-7) — Kobold BNA
Equipo de calibración: No requiere calibración electrónica. Verificación visual.
Procedimiento:
1.	Verificar que el flotador magnético se mueva libremente dentro del cuerpo del indicador, sin atascos.
2.	Llenar el tanque a un nivel conocido (verificado con LT-2 o cinta métrica) y comparar la indicación visual del LG-7.
3.	Criterio de aceptación: Error de indicación ≤ ±10 mm.
4.	Si el flotador se atasca, desmontar el indicador, limpiar el interior del tubo y verificar estado del flotador magnético y las banderas (flippers) de la escala.
5.	Verificar que las banderas giren correctamente al pasar un imán de referencia a lo largo de la escala.
Frecuencia de verificación: Cada 12 meses o cuando se observe discrepancia con LT-2.

INTERRUPTORES DE NIVEL (LS-1, LS-9) — VEGA VEGASWING 63
Equipo de calibración: Verificación funcional in-situ.
Procedimiento:
1.	LS-1 (nivel alto): Llenar el tanque hasta que el nivel alcance el punto de instalación del LS-1. Verificar la conmutación del relé de salida con un multímetro (continuidad). Verificar que LAH-1 se active.
2.	LS-9 (nivel bajo): Vaciar el tanque hasta que el nivel descienda por debajo del punto de instalación del LS-9. Verificar la conmutación del relé y la activación de LAL-9.
3.	Prueba alternativa (sin modificar nivel): Utilizar la función de autotest integrada del VEGASWING 63 o simular la presencia/ausencia de líquido sumergiendo la horquilla vibratoria en un recipiente con agua.
4.	Criterio de aceptación: Conmutación correcta del relé en el punto de disparo. Tiempo de respuesta ≤ 1 segundo.
5.	Verificación de la frecuencia de vibración: El VEGASWING 63 monitorea internamente la frecuencia de resonancia de la horquilla. Si la frecuencia cambia, puede indicar acumulación de depósitos. Verificar mediante HART o display LED.
Frecuencia de calibración: Cada 6 meses (por ser instrumentos de seguridad) según IEC 61511 o según el SIL (Safety Integrity Level) asignado.
________________________________________
CALIBRACIÓN DE INSTRUMENTOS DE FLUJO
Medidor Electromagnético — Endress+Hauser Promag P 300
Equipo de calibración: El medidor electromagnético no tiene partes que se desgasten mecánicamente ni elementos que deriven con el tiempo. Su calibración primaria se realiza en fábrica en banco de flujo.
Procedimiento de verificación en campo:
1.	Verificación de cero: Con la tubería llena de líquido y el flujo completamente detenido (válvulas cerradas aguas arriba y abajo), verificar que la lectura del medidor sea 0.0 LPM y la salida sea 4.00 mA (si está configurado 4–20 mA con cero vivo).
2.	Ajuste de cero: Si la lectura con flujo cero no es exactamente 0, ejecutar la función de "ajuste de cero automático" del Promag P 300 desde el menú de configuración o mediante HART.
3.	Verificación de señal de bobina: Verificar la corriente de excitación de la bobina (field coil current) mediante la función de diagnóstico del transmisor. Debe estar dentro del rango especificado por el fabricante.
4.	Verificación de integridad de electrodos: Medir la impedancia de los electrodos mediante la función de diagnóstico del Promag. Una impedancia anormalmente alta indica acumulación de depósitos; anormalmente baja indica cortocircuito o desgaste del recubrimiento.
5.	Comparación cruzada: Comparar la lectura del medidor con un método de referencia independiente (ej. medición volumétrica con tanque calibrado, medidor ultrasónico portátil tipo clamp-on).
6.	Criterio de aceptación: Error ≤ ±0.5% del valor medido + 1 mm/s (especificación del Promag P 300).
7.	Frecuencia de verificación: Cada 24 meses. Verificación de cero cada 6 meses. Calibración en banco de flujo certificado: cada 5 años o ante sospecha de error.

Medidor Vortex — Endress+Hauser Prowirl F 200
Equipo de calibración: El sensor vortex no tiene partes móviles ni elementos de desgaste. Calibración primaria en fábrica.
Procedimiento de verificación en campo:
1.	Verificación de cero: Con el flujo detenido, verificar que la lectura sea 0 y la salida 4 mA.
2.	Verificación del K-factor: El K-factor (pulsos por unidad de volumen) se graba en fábrica y no cambia con el uso. Verificar que el valor programado en el transmisor coincida con el certificado de calibración de fábrica.
3.	Verificación de sensores de compensación: Si tiene sensores de presión y temperatura integrados para compensación de flujo másico:
•	Verificar el sensor de presión con un calibrador de presión de referencia.
•	Verificar el sensor de temperatura con un baño de calibración o simulador de RTD.
4.	Comparación cruzada: Comparar con otro medidor de referencia o con balance de masa del proceso.
5.	Criterio de aceptación: Error ≤ ±1% del valor medido para vapor (especificación del Prowirl F 200).
Frecuencia de verificación: Cada 24 meses. Calibración en fábrica: cada 5 años.



CALIBRACIÓN DE VÁLVULAS DE CONTROL
3.6.1 PCV (Fisher EZ + Actuador 657) y TCV (SAMSON Tipo 3241 + Actuador 3271)
Equipo de calibración: Calibrador de lazo 4–20 mA + regulador de presión de aire + indicador de posición o regla milimétrica.
Procedimiento:
1.	Prueba de recorrido (stroke test):
•	Inyectar señal de 4 mA → verificar que la válvula esté en posición 0% (cerrada para FC, abierta para FO).
•	Incrementar señal gradualmente: 8 mA (25%), 12 mA (50%), 16 mA (75%), 20 mA (100%).
•	En cada punto, medir la posición real de la válvula (mediante el indicador de posición del posicionador o medición directa del vástago).
2.	Criterio de aceptación: Error de posición ≤ ±1% del recorrido total en cada punto. Linealidad del recorrido dentro de ±2%.
3.	Tiempo de respuesta: Medir el tiempo que tarda la válvula en moverse de 10% a 90% del recorrido al aplicar un escalón de señal de 4 a 20 mA. Tiempo típico: 2–10 segundos dependiendo del tamaño.
4.	Prueba de hermeticidad de asiento: Con la válvula completamente cerrada y presión de proceso en un lado, verificar la tasa de fuga según la clase de estanqueidad especificada (ANSI/FCI 70-2):
•	Clase IV (metal-metal): fuga ≤ 0.01% Cv
•	Clase V (soft seat): fuga ≤ 5 × 10⁻⁴ mL/min por pulgada de diámetro
5.	Prueba de banco de aire (bench set): Verificar que el actuador desarrolle la fuerza y el recorrido correctos al rango de presión de aire especificado en la placa del actuador.
6.	Calibración del posicionador: Ajustar el posicionador (DVC6200 para Fisher, SAMSON 3730 para SAMSON) para que la señal de entrada 4–20 mA corresponda exactamente al recorrido 0–100%.
Frecuencia de calibración: Cada 12 meses. Prueba parcial de recorrido (partial stroke test) cada 3 meses para válvulas de seguridad.

CALIBRACIÓN DE LA BOMBA DE RECICLAJE
Flowserve Durco Mark 3 ISO + VFD
Procedimiento de puesta en operación y verificación:
1.	Verificación pre-arranque:
•	Verificar nivel de aceite en cojinetes (si aplica).
•	Verificar alineación final (post-tubería).
•	Verificar sentido de rotación (bump test: arranque momentáneo y verificar giro).
•	Verificar que la succión esté inundada y las válvulas abiertas.
•	Purgar aire de la carcasa de la bomba.
2.	Prueba de rendimiento:
•	Operar la bomba a diferentes frecuencias del VFD: 20 Hz, 30 Hz, 40 Hz, 50 Hz.
•	En cada frecuencia, registrar: caudal (FT), presión de succión (PI), presión de descarga (PI), corriente del motor (amperímetro del VFD), vibración.
•	Comparar con la curva de rendimiento del fabricante.
3.	Criterio de aceptación:
•	Vibración ≤ 4.5 mm/s RMS (ISO 10816 Grupo 2).
•	Temperatura de cojinetes ≤ 82°C (180°F).
•	No hay fugas en el sello mecánico.
•	Rendimiento dentro de ±5% de la curva del fabricante.
4.	Configuración del VFD:
•	Frecuencia mínima: 15–20 Hz (evitar operación por debajo del BEP mínimo).
•	Frecuencia máxima: 50–60 Hz.
•	Rampa de aceleración: 5–10 segundos.
•	Rampa de desaceleración: 5–10 segundos.
•	Protecciones: sobrecorriente (110% In), subtensión, sobretensión, falla de fase.
Frecuencia de verificación: Medir vibración y rendimiento cada 6 meses. Inspección completa de sello mecánico cada 12 meses o ante detección de fuga.


