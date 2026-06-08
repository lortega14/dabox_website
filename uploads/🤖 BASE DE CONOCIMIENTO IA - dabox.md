# 🤖 BASE DE CONOCIMIENTO OPERATIVA — dabox

> **Propósito de este documento.** Este archivo es la **fuente de verdad operativa** para una IA asistente que apoyará a dabox en su lanzamiento operativo y operación diaria. Todo lo que la IA necesita para razonar y ejecutar tareas concretas en **Ventas/Marketing, Cobranza, Atención al Cliente y Compliance** está aquí.
>
> **Cómo usar este documento (instrucciones para la IA):**
> 1. Antes de cualquier acción, identifica el **dominio** (ventas, cobranza, atención, compliance) y la **etapa del cliente** (prospecto, empresa firmada, ahorrador activo, ahorrador con préstamo, baja).
> 2. Aplica siempre el **filtro regulatorio** de la sección 5 antes de generar comunicación externa. Si la pieza usa palabras prohibidas, **detente y reescribe**.
> 3. Cuando ejecutes un SOP, sigue el árbol de decisión paso a paso. **No saltes pasos** sin justificación documentada.
> 4. Si la información necesaria no está aquí, **declara el vacío** y propón al humano (Musa) la decisión a tomar — no inventes.
> 5. Toda comunicación con cliente final usa el **vocabulario de marca** (sección 1.4). Toda comunicación interna puede ser técnica.
>
> **Versión:** 1.0 · **Fecha:** Abril 2026 · **Responsable:** Musa · **Documento maestro de referencia:** `📘 DOCUMENTO MAESTRO — dabox.md`

---

## 📑 Índice

1. [Contexto del negocio (resumen ejecutable)](#1-contexto-del-negocio)
2. [Ventas y Marketing](#2-ventas-y-marketing)
3. [Cobranza (las 3 cobranzas)](#3-cobranza)
4. [Atención al Cliente](#4-atención-al-cliente)
5. [Compliance y Riesgo Regulatorio](#5-compliance-y-riesgo-regulatorio)
6. [Apéndices: plantillas, scripts y checklists](#6-apéndices)
7. [Sistema de marca dabox (visual + voz + tono)](#7-sistema-de-marca-dabox)
8. [Aplicación de marca a secciones operativas (índice cruzado)](#8-aplicación-de-marca-a-las-secciones-operativas-índice-cruzado)

---

## 1. Contexto del negocio

### 1.1 Modelo en una página

| Campo | Valor |
|---|---|
| Qué es dabox | Fintech mexicana que opera **cajas de ahorro digitales B2B2C** para colaboradores de empresas |
| Cliente que paga | La **empresa** (no el colaborador) |
| Usuario final | El **colaborador / ahorrador** |
| Vehículo de inversión | **Compass** (institucional, comisión 0.6% descontada de rendimientos) |
| Figura legal actual | **Una Asociación Civil por empresa** (primera: Ahorra y Recrea AC) |
| Rendimiento al ahorrador | Atado a CETES, neto post-Compass y post-spread dabox (ej. CETES 9.5% → 8.15% al ahorrador) |
| Retiros | Dos ventanas anuales: **julio y diciembre** |
| ICP empresa | 20–250 colaboradores, manufactura y sindicatos, Bajío/SLP en fase 1 |
| Ticket de ahorro típico | $300–$800 MXN/mes por colaborador con salario $8k–$18k |
| Ciclo de venta | 3–6 meses desde primer contacto hasta primera retención de nómina |
| Tagline | **"Hacemos crecer el ahorro de tu gente."** |

### 1.2 Las 4 líneas de ingreso (memorizar)

1. **Startup fee** — $30,000 + IVA, una sola vez, lo paga la empresa al firmar.
2. **Suscripción mensual** — escalonada de $600 a $8,500+ según número de ahorradores activos, la paga la empresa.
3. **Spread sobre rendimiento** — 0.75% del rendimiento neto generado por Compass, descontado del rendimiento del ahorrador.
4. **Comisión por referidos** — 2% sobre créditos o inversiones referidos a terceros (Credian, Lendera, Bitso, GBM+).

### 1.3 Reglas de negocio críticas (no negociables)

- **La empresa matriz nunca aparece** en materiales, pitch, landing, redes sociales o correos de dabox.
- **Nunca se promete rendimiento garantizado**, nunca se usa la palabra "inversión", "captación" o "cuenta de inversión" hacia clientes.
- **Toda aportación se descuenta vía nómina**, nunca se solicita transferencia directa del colaborador a dabox.
- **El colaborador nunca paga** a dabox; todos los cobros van a la empresa.
- **Los retiros solo en julio y diciembre**, salvo regla de emergencia (a definir).
- **Los créditos al ahorrador requieren mínimo 12 meses de antigüedad** ahorrando.

### 1.4 Vocabulario de marca

**SÍ usar (en todo material externo):**
- Caja de ahorro / caja de ahorro empresarial
- Ahorro voluntario automático vía nómina
- Bienestar financiero
- Rendimiento atado a CETES / rendimiento competitivo
- Hacer crecer / mes con mes / sin complicaciones / claro / simple
- Beneficio para tu equipo / tu gente

**NO usar (riesgo regulatorio o de marca):**
- Inversión / cuenta de inversión / instrumento financiero
- Rendimiento garantizado / rendimiento fijo
- Captación / captador
- Banco / cuenta bancaria
- Plazo forzoso / depósito a plazo
- Cualquier mención a la empresa matriz

### 1.5 Personas (decisores y usuarios)

**Persona primaria — "María, Directora de RH"**
- 30–45 años, empresa 80–200 colaboradores
- Dolores: rotación, clima laboral, beneficios sin inflar costo
- Vocabulario: "retención", "clima", "engagement", "carga administrativa"
- Hook: *"Beneficio premium sin costo para la empresa, descuento automático que tu RH no tiene que administrar."*

**Persona alterna — "Carlos, CFO / Director General"**
- Empresa con caja de ahorro tradicional manual
- Dolores: riesgo legal, contabilidad sucia, robos en caja chica, dependencia de una persona
- Vocabulario: "control", "trazabilidad", "auditoría", "responsabilidad fiduciaria"
- Hook: *"Moderniza tu caja de ahorro interna: profesionalízala con marco legal, vehículo institucional y rendimiento auditable."*

**Persona usuario final — "Juan, operario"**
- 25–50 años, salario $10k–$15k
- Dolores: vive al día, deudas chicas, sin colchón de emergencias
- Vocabulario: simple, conversacional, sin tecnicismos
- Hook: *"Ahorra sin pensarlo. Tu empresa te lo descuenta y dabox lo hace crecer."*

---

## 2. Ventas y Marketing

### 2.1 Objetivo del área

Cerrar **6–10 empresas** en los primeros 12 meses, con pipeline 3x sobre la meta (mínimo 30 cuentas activas en seguimiento al cierre del año).

### 2.2 Funnel comercial estandarizado

| Etapa | Definición | Conversión esperada | Duración |
|---|---|---|---|
| **L1 — Lead bruto** | Contacto identificado con datos mínimos (nombre, empresa, rol, correo o LinkedIn) | — | — |
| **L2 — Lead calificado (MQL)** | Cumple ICP (20–250 colaboradores, decisor identificado, industria target) | 30–40% de L1 | 1–2 semanas |
| **L3 — Reunión agendada (SQL)** | Aceptó descubrimiento de 30–45 min | 25–35% de L2 | 1–3 semanas |
| **L4 — Propuesta enviada** | Recibió 1-pager + cotización personalizada | 50–60% de L3 | 2–4 semanas |
| **L5 — Comité técnico iniciado** | Hay reuniones de diseño con la empresa | 40–50% de L4 | 4–8 semanas |
| **L6 — Contrato firmado** | Empresa firma contrato dabox–empresa | 70–80% de L5 | 1–2 semanas |
| **L7 — Primera nómina con retención** | Hay ahorradores activos siendo descontados | 90%+ de L6 | 4–6 semanas |

**Conversión global L1→L7 esperada:** 3–5%. Para cerrar 8 empresas se necesitan **160–270 leads brutos** trabajados al año.

### 2.3 Playbook dual-hook

La IA debe **identificar el hook correcto** antes de lanzar cualquier mensaje. Pregunta de calificación: *"¿La empresa hoy tiene caja de ahorro interna (formal o informal)?"*

#### Hook A — "Moderniza tu caja"
**Aplica cuando:** la empresa YA tiene caja tradicional, manejada en Excel, con tesorero interno o vía préstamos informales.
**Decisor principal:** Dirección General / CFO.
**Mensaje central:** *"Tu caja existe pero te expone a riesgo legal, contable y operativo. dabox la convierte en un esquema profesional, auditable y digital, sin que pierdas la cultura de ahorro que ya tienes."*
**Argumentos de cierre:**
- Trazabilidad y auditabilidad fiscal
- Vehículo institucional (Compass) en lugar de caja chica
- Rendimiento real atado a CETES en lugar de rendimientos cero o crédito interno
- Marco legal con AC formal y comité técnico

#### Hook B — "Beneficio sin costo para tu colaborador"
**Aplica cuando:** la empresa NO tiene caja, busca beneficios para retención/atracción.
**Decisor principal:** RH / Dirección de Personas.
**Mensaje central:** *"Súmale un beneficio que tu equipo va a sentir mes con mes, sin que cueste un peso al colaborador y sin carga administrativa para tu RH."*
**Argumentos de cierre:**
- Retención: cajas de ahorro reducen rotación documentada en estudios
- Cero esfuerzo: descuento automático, layout entregado por dabox
- Diferenciador en paquete de beneficios
- Educación financiera incluida

### 2.4 Guion de descubrimiento (5 preguntas obligatorias)

Tiempo: 30–45 minutos. Aplicar después del pitch corto inicial (≤5 min).

1. *"¿Hoy tienen alguna iniciativa de ahorro o caja interna para los colaboradores? ¿Cómo funciona?"* → Define hook A o B.
2. *"¿Cuántos colaboradores tienen y qué % cobra por nómina vs. honorarios o esquema mixto?"* → Estima ahorradores potenciales y aplicabilidad del descuento.
3. *"¿Qué software de nómina usan?"* (CONTPAQi, Aspel NOI, Runa, Worky, Nominapp, propio) → Define complejidad de integración.
4. *"¿Cuál es el principal reto de RH/Operación hoy: rotación, clima, costos, cumplimiento legal?"* → Define ángulo de venta y mide urgencia.
5. *"¿Quién más en la empresa toma esta decisión, y en qué plazo necesitan tener algo en marcha?"* → Mapea sponsors y define ciclo de venta.

**Salida obligatoria del descubrimiento:**
- Hook (A o B) confirmado
- # estimado de ahorradores potenciales
- Software de nómina y dificultad de retención
- Decisor principal y secundarios identificados
- Fecha objetivo de arranque
- Próximos pasos acordados con responsable y fecha

### 2.5 Calificación BANT adaptada (puntos)

Para que un lead avance a L4 (propuesta), debe acumular **≥ 7 puntos**:

- **Budget (3 pts)**: confirma capacidad de pagar startup fee + suscripción mensual.
- **Authority (3 pts)**: el contacto es decisor o tiene acceso directo al decisor.
- **Need (2 pts)**: hay un dolor articulado (caja informal, rotación, beneficio) que dabox resuelve.
- **Timeline (2 pts)**: arranque en ≤ 6 meses.

Si el lead no llega a 7, se nutre con contenido pero **no se invierte tiempo de venta directa**.

### 2.6 Manejo de objeciones (top 10)

| # | Objeción | Respuesta sugerida |
|---|---|---|
| 1 | *"Ya tenemos caja de ahorro interna, gracias."* | "Perfecto, justo eso es lo que dabox profesionaliza. ¿Tu caja hoy te da rendimiento atado a CETES, trazabilidad fiscal y un comité técnico formal? Si la respuesta es no, estás cargando un riesgo que vale la pena revisar 30 minutos." |
| 2 | *"¿Y si dabox quiebra, qué pasa con el ahorro?"* | "El ahorro nunca está en dabox: vive en Compass, una plataforma institucional. dabox es el operador, no el custodio. Si dabox dejara de operar, los recursos siguen en Compass a nombre de la AC de tu empresa, con su comité técnico para definir el destino." |
| 3 | *"$30,000 de startup fee se ve alto."* | "El startup fee cubre la constitución de la AC, contratos, opinión legal y onboarding. Es un costo único. Compáralo contra honorarios de un despacho legal: una constitución de AC con dictamen normalmente cuesta $40k–$60k aparte. Aquí va incluido." |
| 4 | *"¿Por qué pagar mensualidad si Compass cobra spread?"* | "El spread (0.75%) cubre la operación financiera. La mensualidad cubre el servicio de plataforma, soporte a tu RH, comunicación al colaborador, comité técnico y mantenimiento. Son dos cosas distintas." |
| 5 | *"No tengo ancho de banda en RH para esto."* | "Es exactamente al revés: dabox quita carga a RH. El layout llega prearmado, el alta es digital, las consultas las recibe directamente el ahorrador en su portal. RH solo aprueba el layout una vez al mes." |
| 6 | *"¿Esto está regulado por la CNBV?"* | "Opera bajo figura de Asociación Civil con ahorro voluntario, validada con opinión legal formal. No es captación regulada CNBV porque no hay tasa garantizada y porque cada AC es de los propios ahorradores. Te puedo compartir el marco." |
| 7 | *"Mejor le doy el aumento al colaborador y que él ahorre."* | "El problema no es el dinero, es el hábito. Sin descuento automático, el ahorro se evapora en gastos. dabox hace que el hábito ocurra solo. Estudios de bienestar financiero muestran que descuentos automáticos triplican la tasa de ahorro." |
| 8 | *"¿Por qué el retiro solo es en julio y diciembre?"* | "Para que el ahorro sea ahorro de verdad y no caja chica. Coincide con aguinaldo y vacaciones, los momentos que culturalmente la gente espera. Esto también permite mejores rendimientos porque Compass opera con horizonte estable." |
| 9 | *"Quiero pensarlo."* | "Claro. Para que tu reflexión sea útil, ¿qué información concreta te falta? ¿Es la parte legal, el modelo de costos, el rendimiento, o algo del cómo opera con tu RH?" → Aterriza la duda real. |
| 10 | *"Mándame info y reviso."* | "Te mando un 1-pager con lo esencial. Para que el envío valga, ¿agendamos 20 minutos en 7 días para responderte dudas en vivo? Así no te quedas con preguntas a medias." → Cierre con calendario. |

### 2.7 KPIs comerciales semanales

La IA debe poder generar este reporte cada lunes a partir de los datos del CRM (cuando exista) o de la hoja de seguimiento manual:

- # leads nuevos en la semana
- # MQL nuevos (avance L1→L2)
- # reuniones agendadas (L3)
- # propuestas enviadas (L4)
- # comités técnicos iniciados (L5)
- # contratos firmados (L6)
- Tasa de conversión por etapa (vs. benchmark)
- Pipeline total ponderado (suma de oportunidades x prob. de cierre)
- Velocidad promedio L1→L6 (días)
- Top 5 oportunidades calientes con próximo paso definido

### 2.8 Marketing — tres frentes activos

#### Frente 1 — Outbound LinkedIn (canal propio prioritario)
- **Audiencia:** directores de RH, CFOs, directores generales en empresas 20–250 colaboradores en Bajío/SLP/CDMX, industrias manufactura, logística, retail con operación fabril, sindicatos.
- **Cadencia por prospecto:**
  1. Día 0: solicitud de conexión con nota corta (≤300 caracteres).
  2. Día 3: si conecta, mensaje de valor (no pitch directo) — ver plantilla 6.A.1.
  3. Día 8: pregunta de descubrimiento ligera.
  4. Día 14: invitación a llamada de 20 min.
  5. Día 21: último intento con caso/número concreto.
  6. Día 30: archivar a "nutrición pasiva".
- **Meta:** 30 nuevas conexiones/semana → 3–5 conversaciones reales → 1 reunión.

#### Frente 2 — Contenido educativo (autoridad)
- **Formato:** 1 post LinkedIn/semana + 1 newsletter mensual.
- **Pilares editoriales:**
  - 40% educación financiera para RH (rotación, beneficios, bienestar).
  - 30% explicaciones simples sobre ahorro/CETES/cajas.
  - 20% casos y aprendizajes operativos (anonimizados).
  - 10% cultura/equipo dabox.
- **Regla de oro:** ningún post promete rendimiento, ningún post usa palabras prohibidas (sección 1.4).

#### Frente 3 — Eventos y cámaras (alto contacto)
- Cámaras objetivo: **CANACINTRA** (manufactura), **COPARMEX** (multi-sector), **AMECH** (RH), **SHRM México**, cámaras locales del Bajío.
- **Una intervención por trimestre mínimo** (charla, panel, mesa redonda).
- Sindicatos: priorizar **CROM (en pipeline)** y replicar modelo a otros sindicatos regionales.

### 2.9 Política de bonificación de pilotos (primeros 3 clientes)

Para acelerar tracción y conseguir testimoniales:
- **Startup fee:** waiver del 50–100% (decisión caso por caso, requiere aprobación de Musa).
- **Suscripción:** primeros 3 meses al 50%.
- **Compromiso del piloto:** firma de carta de intención para entregar testimonio en video y referencia activa a 3 empresas en su red al cumplir 6 meses.
- A partir del cliente #4: tarifa completa, sin excepciones.

### 2.10 Activos comerciales obligatorios (estado de creación)

| Activo | Estado | Prioridad |
|---|---|---|
| 1-pager comercial dual (hooks A + B) | ❌ Crear | Alta — semana 1 |
| Deck de pitch (10–12 slides) | ⚠️ Versión actual requiere update | Alta — semana 2 |
| Calculadora de rendimiento simple (Excel/web) | ❌ Crear | Media — semana 3 |
| FAQ para RH (10 preguntas) | ❌ Crear | Alta — semana 2 |
| Carta de presentación para sindicatos | ❌ Crear | Media — semana 4 |
| Caso de éxito #1 (al cerrar piloto) | ⏳ Esperando cierre | Alta — al activarse |
| Video testimonial RH (1 min) | ⏳ Esperando piloto | Alta — al activarse |

---

## 3. Cobranza

dabox tiene **tres flujos de cobranza simultáneos** que la IA debe distinguir siempre. Cada uno tiene calendario, contraparte y árbol de escalamiento distinto.

| # | Cobranza | Quién paga | A quién se cobra | Frecuencia | Riesgo si falla |
|---|---|---|---|---|---|
| 3A | **B2B (suscripción + startup fee)** | Empresa cliente | dabox (factura emitida por dabox) | Mensual + única | Pérdida de MRR, riesgo de baja del cliente |
| 3B | **Aportaciones vía nómina** | Colaborador (descontado por empresa) | AC de la empresa, depositada a Compass | Quincenal o mensual | Hueco en estado de cuenta del ahorrador, queja, churn |
| 3C | **Créditos referidos** | Ahorrador con préstamo | Aliado financiero (Credian/Lendera), con descuento por nómina | Quincenal o mensual | Default → impacta acuerdo con aliado y comisión 2% |

---

### 3A · Cobranza B2B (suscripción y startup fee)

**Objetivo:** lograr **DSO ≤ 15 días** y morosidad B2B < 5% del MRR.

#### 3A.1 Reglas de facturación

- **Startup fee** ($30,000 + IVA): se factura **al firmar contrato**, plazo de pago **15 días naturales**. Sin pago, no se inicia constitución de AC.
- **Suscripción mensual**: se factura el **día 1 de cada mes** por adelantado, plazo de pago **10 días naturales**. Aplica desde el mes en que entra el primer ahorrador con retención.
- **CFDI 4.0** con uso correcto (G03 — gastos en general) y método de pago según política del cliente.
- **Tarifa escalonada se recalcula cada mes** según número de ahorradores activos al cierre del mes anterior.

#### 3A.2 Calendario de cobranza B2B (estándar)

| Día | Acción | Canal | Responsable |
|---|---|---|---|
| -2 (antes del corte) | Recordatorio amistoso de factura próxima | Email | Operación / IA |
| 0 | Emisión de factura y envío | Email + WhatsApp | Operación |
| +5 | Recordatorio suave si no hay confirmación de programación de pago | Email | Operación / IA |
| +10 (vencimiento) | Aviso de vencimiento, solicitud de fecha de pago | Email + Llamada | Operación |
| +15 | Escalamiento a contacto directo de RH/Finanzas con copia a sponsor inicial | Email + Llamada | Comercial dueño de la cuenta |
| +20 | Notificación formal de morosidad, pausa de servicios accesorios (no aportaciones) | Carta formal por email | Musa o Legal |
| +30 | Carta de pre-resolución, oferta de plan de pagos a 60 días | Carta formal | Legal |
| +45 | Resolución del contrato según cláusula. Las aportaciones del colaborador NO se interrumpen, pero se notifica a la AC y se inicia transición | Notificación legal | Legal + Musa |

> **Regla crítica:** la cobranza B2B **nunca afecta el ahorro del colaborador**. Las aportaciones siguen llegando a Compass hasta que la empresa formalmente solicita baja. Lo que se pausa es el servicio dabox (portal, soporte, comité técnico).

#### 3A.3 Plantillas de mensajes (3 niveles de tono)

**Nivel 1 — Amistoso (días -2, +5):**
> Hola [nombre], pasando a recordarte que la factura del mes [mes] de tu suscripción dabox sale hoy/vence el [fecha]. Si necesitas que la enviemos a un correo distinto o ajustar algún dato fiscal, escríbeme y lo resolvemos en el mismo día. ¡Gracias!

**Nivel 2 — Profesional firme (días +10, +15):**
> Hola [nombre], te escribo porque la factura [folio] con vencimiento [fecha] aún figura como pendiente en nuestros registros. ¿Podrías compartirnos la fecha programada de pago? Si hubo algún tema con la factura (datos, retención, monto), me avisas y lo corregimos hoy mismo. Quedo al pendiente.

**Nivel 3 — Formal de morosidad (días +20+):**
> Estimado/a [nombre], conforme al contrato dabox–[empresa] firmado el [fecha], la suscripción correspondiente al mes [mes] presenta un retraso de [n] días. Solicitamos formalmente la regularización del pago a más tardar el [fecha límite]. De no recibir el pago o un acuerdo formal de plan de pagos, dabox iniciará el proceso descrito en la cláusula [X] del contrato. Reiteramos que las aportaciones del personal a la AC no se ven afectadas por esta gestión. Quedamos en espera de su confirmación.

#### 3A.4 Reglas de planes de pago

- Plan de pagos máximo **60 días** desde primer vencimiento, partido en **2 exhibiciones**.
- Sin descuentos. Mantenimiento de tarifa íntegra; se pueden eliminar moratorios si el plan se cumple.
- Requiere firma de **Convenio Modificatorio de Pago** (formato legal preexistente).

#### 3A.5 KPIs de cobranza B2B

- **DSO (Days Sales Outstanding):** ≤ 15 días.
- **Aging buckets:** % facturas vigentes / 1–30 / 31–60 / 60+.
- **Morosidad >30 días:** ≤ 5% del MRR. Si supera 8%, escalamiento automático a Musa.
- **Tasa de pre-resolución (clientes que llegan a día +30):** ≤ 2%.

---

### 3B · Cobranza de aportaciones vía nómina

Esta es la cobranza más sensible: si falla, el ahorrador ve hueco en su estado de cuenta y la confianza se rompe en una nómina.

**Objetivo:** **100% de coincidencia** entre el layout enviado a la empresa y el monto recibido en cuenta de la AC, dentro de los **3 días hábiles** posteriores al pago de nómina.

#### 3B.1 Flujo estándar quincenal/mensual

| Día | Acción | Responsable |
|---|---|---|
| Día -5 (antes de nómina) | Generación del **layout único de retención** con base en altas/bajas/cambios de monto del periodo. Envío a contacto de Nómina/RH. | Operación dabox |
| Día -3 | Confirmación de recepción y aplicación del layout por parte de RH/Nómina. Si no hay confirmación, llamada. | Operación |
| Día 0 (pago de nómina) | La empresa retiene el monto acordado de cada colaborador participante. | Empresa |
| Día +1 a +3 | La empresa transfiere el monto agregado a la cuenta de la AC en el banco operador. | Empresa |
| Día +3 | dabox concilia: monto recibido vs. monto del layout, ahorrador por ahorrador. | Operación |
| Día +5 | dabox dispersa los recursos a Compass para inversión. | Operación |
| Día +7 | Confirmación a cada ahorrador en su portal/email del depósito aplicado. | Sistema / Operación |

#### 3B.2 Tipos de discrepancia y resolución

| Discrepancia | Causa común | Acción |
|---|---|---|
| **Faltante total (no llegó nada)** | Empresa no procesó pago, problema bancario, layout no aplicado | Llamada inmediata a contacto de Nómina + Finanzas. Sin transferencia en 48h, escalar a sponsor del cliente. Comunicar a ahorradores con plantilla de "demora administrativa" (sin culpar a la empresa explícitamente). |
| **Monto recibido ≠ monto del layout** | Diferencia por altas/bajas no informadas, variación salarial | Conciliación detallada por colaborador. Si el faltante es < 2% se ajusta en siguiente nómina con notificación al ahorrador afectado. Si es > 2%, requiere comprobante de la empresa antes de dispersar. |
| **Colaborador no aparece en layout pero sí en BD dabox** | Baja no notificada, error de alta | Bloqueo temporal de aportación, contacto con RH para confirmar status, comunicación al ahorrador en 48h. |
| **Colaborador aparece en layout pero no en BD dabox** | Alta nueva no procesada por dabox | Procesar alta retroactiva si tiene contrato firmado. Si no, devolver el monto en próximo ciclo y notificar a la empresa. |

#### 3B.3 SLA con la empresa (debe estar en contrato)

- **Layout entregado por dabox:** 5 días hábiles antes del corte de nómina.
- **Confirmación de RH:** 48 horas tras recepción.
- **Transferencia del monto agregado:** ≤ 3 días hábiles después del pago de nómina.
- **Notificación de altas/bajas/cambios:** ≤ 2 días hábiles antes del corte.

#### 3B.4 KPIs de cobranza de aportaciones

- **Tasa de coincidencia layout↔depósito:** ≥ 99%.
- **Días promedio entre nómina y dispersión a Compass:** ≤ 5.
- **# discrepancias por mes por empresa:** ≤ 2.
- **Tiempo medio de resolución de discrepancia:** ≤ 48 horas.

#### 3B.5 Comunicación al ahorrador en caso de retraso

> Hola [nombre], queremos avisarte con transparencia que tu aportación de la nómina del [fecha] está en proceso administrativo y se reflejará en tu cuenta dabox a más tardar el [fecha estimada]. No has perdido nada: el monto se aplica con la fecha original para fines de rendimiento. Cualquier duda, escríbenos a [canal]. — Equipo dabox.

---

### 3C · Cobranza de créditos referidos (caja + aliado financiero)

**Importante:** dabox **NO origina ni cobra el crédito directamente**. dabox es **el referidor y co-administrador** del descuento por nómina. El cobro lo opera el aliado financiero (Credian / Lendera) con el respaldo del descuento por nómina y, en caso de mora, con el ahorro acumulado del ahorrador como colateral parcial.

**Objetivo:** mantener mora vencida (>30 días) por debajo de **3%** de la cartera referida, para preservar el acuerdo de comisión 2% con aliados.

#### 3C.1 Reglas de originación (filtros previos al crédito)

Para que un ahorrador califique a crédito conjunto:
- Antigüedad mínima como ahorrador: **12 meses**.
- Saldo mínimo de ahorro: **2x el monto solicitado** o tope definido por aliado.
- Sin retiros adelantados en los últimos 6 meses.
- Aprobación del **comité técnico de la AC** (no es automático).
- Aprobación crediticia del aliado (buró, capacidad de pago).
- Capacidad de pago: cuota total descontada (ahorro + crédito) **≤ 30% del salario neto**.

#### 3C.2 Flujo de cobranza estándar

| Día | Acción | Responsable |
|---|---|---|
| -3 | Generación de layout de descuentos al aliado | Aliado |
| -3 | dabox revisa que ningún ahorrador esté duplicado en aportación + crédito > 30% del salario | dabox |
| 0 | Pago de nómina, retención aplicada | Empresa |
| +3 | Aliado recibe transferencia agregada del crédito | Aliado |
| +3 | Aliado concilia y aplica pago por ahorrador | Aliado |
| +5 | dabox recibe reporte de aplicación y morosos del aliado | dabox |
| +7 | dabox calcula su comisión 2% sobre el cobrado vigente | dabox |

#### 3C.3 Árbol de escalamiento de morosidad

| Días de atraso | Etapa | Acción del aliado | Acción de dabox |
|---|---|---|---|
| 1–7 | Recordatorio | Notificación amistosa al ahorrador | Ninguna |
| 8–15 | Cobranza preventiva | Llamada del aliado | Notificación al comité técnico de la AC |
| 16–30 | Cobranza administrativa | Gestión formal del aliado, plan de pagos | Comité técnico evalúa congelar nuevos retiros del ahorrador |
| 31–60 | Cobranza extrajudicial | Aliado activa cláusula de cobro contra ahorro | Comité técnico autoriza aplicación de ahorro como pago parcial |
| 61–90 | Cobranza judicial | Aliado inicia proceso legal | dabox apoya con información, no es contraparte legal |
| 90+ | Castigo de cartera | Aliado castiga | dabox marca al ahorrador como inelegible para futuro crédito; reporta a comité técnico para definir si conserva membresía como ahorrador |

#### 3C.4 Reglas de protección al ahorrador (no negociables)

- **Nunca se puede embargar el 100% del ahorro** sin autorización expresa firmada del ahorrador en el contrato de crédito.
- **El aliado no tiene acceso directo a Compass.** dabox media: el aliado solicita formalmente la aplicación, comité técnico aprueba, dabox ejecuta.
- **El ahorrador siempre recibe notificación 5 días antes** de cualquier aplicación de su ahorro a la deuda.
- En caso de baja laboral del ahorrador moroso: se aplica primero la liquidación que la empresa entregue (parte proporcional), luego se evalúa el resto contra el ahorro.

#### 3C.5 KPIs de cobranza de crédito

- **Tasa de mora vencida >30 días:** ≤ 3%.
- **Tasa de castigo:** ≤ 1.5% anual.
- **Cuota / ingreso del ahorrador:** ≤ 30%.
- **Tiempo medio resolución de mora <30 días:** ≤ 10 días.
- **Comisión 2% cobrada vs. devengada:** ≥ 95%.

#### 3C.6 Acuerdos formales requeridos con aliados

Antes de operar la línea 3C, deben estar firmados:
- Contrato de referidos con comisión 2% (Credian, Lendera, otros).
- Contrato de crédito conjunto caja–aliado–ahorrador (3 partes).
- Convenio de aplicación de ahorro como pago contra mora.
- Layout único de descuento conjunto (ahorro + crédito).
- Acuerdo de servicio (SLA) sobre reportes de cartera, mora y pagos.

> **Estado actual:** estos contratos están en el plan legal pendiente. La línea 3C no debe activarse comercialmente hasta tenerlos firmados.

---

## 4. Atención al Cliente

dabox tiene **dos clientes simultáneos** y un **servicio diferente para cada uno**:
- **Empresa cliente** (RH/Finanzas/CFO): servicio consultivo, B2B, con cuenta dedicada.
- **Ahorrador final** (colaborador): servicio masivo, B2C, con canales digitales y empáticos.

**Promesa central:** *"Cliente feliz y siempre informado, sin fricción."*

### 4.1 Principios de atención (los 5 mandamientos)

1. **Transparencia radical.** Si pasa algo malo, lo decimos primero nosotros, nunca el ahorrador se entera por un tercero.
2. **Lenguaje humano.** Sin tecnicismos hacia el ahorrador. Hacia la empresa: profesional pero claro.
3. **Tiempos respetados.** SLA público, cumplido, y reportado.
4. **Resolución en primer contacto.** Meta: 70% de los tickets se cierran en la primera interacción.
5. **Cero promesas que no podemos cumplir.** Especialmente sobre rendimientos y plazos de retiro.

### 4.2 Canales de atención

| Canal | Para quién | Horario | SLA primer respuesta |
|---|---|---|---|
| **WhatsApp Business** (línea dabox) | Empresa + Ahorrador | L–V 9:00–19:00 | 30 min (hábil) |
| **Email soporte@dabox.mx** | Empresa + Ahorrador | 24/7 | 4 horas hábiles |
| **Portal del ahorrador (chat in-app)** | Ahorrador | L–V 9:00–19:00 | 30 min (hábil) |
| **Llamada directa al éxito de cliente** | Empresa (cuenta dedicada) | L–V 9:00–18:00 | Devolución mismo día hábil |
| **Teléfono general dabox** | Empresa + Ahorrador | L–V 9:00–18:00 | Inmediato (con buzón fuera de horario) |
| **Crisis / urgencia** | Ambos | 24/7 | 1 hora (canal alterno con Musa) |

### 4.3 SLAs de resolución (no de primera respuesta)

| Tipo de caso | SLA resolución | Escalamiento si excede |
|---|---|---|
| Consulta informativa (saldo, fechas, política) | 4 horas hábiles | — |
| Cambio de datos personales del ahorrador | 24 horas hábiles | — |
| Discrepancia en aportación / saldo | 48 horas hábiles | Operación → Musa |
| Solicitud de retiro programado (julio/diciembre) | 5 días hábiles antes de la ventana | — |
| Solicitud de retiro de emergencia (cuando aplique) | 7 días hábiles | Comité técnico |
| Queja formal | 5 días hábiles para acuse + 15 días para resolución | Legal |
| Crisis de retención de nómina | 24 horas | Musa + Legal |
| Solicitud de baja del ahorrador | 5 días hábiles | — |

### 4.4 Estructura de tickets (taxonomía)

La IA categoriza cada interacción usando esta taxonomía. Todo ticket debe tener: **categoría + subcategoría + severidad + estado**.

**Categorías:**
- A · Consulta de saldo / rendimientos
- B · Aportaciones (alta, baja, cambio monto, layout, retención)
- C · Retiros (programados, emergencia)
- D · Datos personales / acceso al portal
- E · Créditos referidos
- F · Educación financiera
- G · Quejas o reclamaciones
- H · Reportes para empresa (RH/Finanzas)
- I · Comité técnico (gobernanza)
- J · Otros

**Severidad:**
- **S1 (crítica):** afecta múltiples ahorradores o pone en riesgo legal/regulatorio. Escalamiento inmediato.
- **S2 (alta):** afecta a 1 ahorrador con impacto monetario.
- **S3 (media):** consulta o cambio sin impacto monetario inmediato.
- **S4 (baja):** consulta informativa.

### 4.5 Atención al ahorrador final — top 15 FAQ con respuesta lista

| # | Pregunta | Respuesta lista para usar |
|---|---|---|
| 1 | *"¿Cómo veo mi saldo?"* | Entra al portal del ahorrador en `portal.dabox.mx`, inicia sesión con tu correo y contraseña. En la sección "Mi ahorro" verás saldo total, aportaciones del mes y rendimientos acumulados. Si no tienes acceso, escríbenos por WhatsApp y te lo activamos en minutos. |
| 2 | *"¿Cuándo puedo retirar?"* | Hay dos ventanas de retiro al año: **julio** y **diciembre**. Te avisamos por correo y WhatsApp 30 días antes para que decidas si retiras parcial, total o nada. Fuera de esas fechas el ahorro queda generando rendimiento. |
| 3 | *"¿Cuánto rinde mi ahorro?"* | Tu rendimiento está atado a CETES. Por ejemplo, si CETES paga 9.50%, tú ves alrededor de 8.15% neto al año (ya con descuentos de plataforma). Es transparente y mes con mes lo ves en tu portal. **No es rendimiento garantizado**, depende de cómo se mueva CETES. |
| 4 | *"¿Quién tiene mi dinero?"* | Tu dinero vive en **Compass**, una plataforma institucional de inversión, a nombre de la Asociación Civil de tu empresa. dabox lo opera y administra, pero no es el custodio. |
| 5 | *"¿Esto es seguro?"* | Sí. Tres capas de protección: (1) figura legal de Asociación Civil con comité técnico que rinde cuentas; (2) vehículo institucional Compass; (3) tu empresa tiene contrato firmado con dabox. Tu ahorro es tuyo, separado de las finanzas de dabox. |
| 6 | *"¿Cuánto cuesta?"* | Para ti, **nada**. La empresa paga el servicio. Tú solo aportas y ganas. |
| 7 | *"¿Y si dejo la empresa?"* | Tu ahorro es tuyo. En la siguiente ventana de retiro (julio o diciembre) puedes retirarlo. Si necesitas hacerlo antes por finiquito, hay un proceso especial; contáctanos. |
| 8 | *"¿Puedo aumentar mi aportación?"* | Sí. Solicítalo a tu RH o por nuestro portal/WhatsApp. El cambio aplica desde la siguiente nómina, siempre que no rebase 30% de tu salario neto sumando otros descuentos. |
| 9 | *"¿Puedo bajar o pausar mi aportación?"* | Sí. Notifícalo al menos 3 días antes del corte de nómina. Aplica desde la siguiente quincena. |
| 10 | *"¿Puedo pedir un préstamo?"* | A partir del **mes 12 como ahorrador activo** y con saldo suficiente, puedes solicitar un crédito a través de un aliado financiero (cuando esté disponible en tu empresa). Se descuenta también por nómina. Pregúntanos si ya está activo. |
| 11 | *"No veo mi aportación de esta nómina, ¿qué pasó?"* | Las aportaciones se reflejan **3–7 días después del pago de nómina**. Si pasaron 7 días y no la ves, escríbenos con tu nombre completo y RFC para revisar al detalle. |
| 12 | *"Olvidé mi contraseña."* | Ve a `portal.dabox.mx`, da clic en "¿Olvidaste tu contraseña?". Si no recibes el correo en 5 minutos, revisa spam. Si sigue sin llegar, te ayudamos por WhatsApp. |
| 13 | *"¿Cómo cambio mi correo o teléfono?"* | Por el portal en "Mi cuenta > Datos personales". Si no puedes acceder, mándanos por WhatsApp tu nombre, RFC y el dato nuevo y lo actualizamos en 24 horas hábiles. |
| 14 | *"¿Esto es regulado por la CNBV?"* | Operamos bajo figura de Asociación Civil con ahorro voluntario, validada legalmente. No es captación bancaria. Tu ahorro está a nombre de la AC de tu empresa, no de un banco. |
| 15 | *"¿Cómo pongo una queja?"* | Escríbenos a `quejas@dabox.mx` o por WhatsApp con la palabra "queja". Te damos folio en 24 horas y resolución en máximo 15 días hábiles, conforme a nuestra política de quejas. |

### 4.6 Atención a la empresa cliente — playbook de Customer Success

Cada empresa tiene un **Customer Success Manager (CSM)** asignado. En el equipo inicial, esto puede ser una persona compartida con ventas o el propio Musa para los primeros 3–5 clientes.

#### 4.6.1 Cadencia de contacto

| Cadencia | Actividad | Quién |
|---|---|---|
| Semanal (mes 1–3 post-firma) | Check-in operativo, resolución de fricciones de onboarding | CSM ↔ RH |
| Quincenal (mes 4–12) | Reporte de adopción, ahorradores activos, monto acumulado | CSM ↔ RH |
| Mensual | Comité técnico de la AC | dabox + RH + sponsor |
| Trimestral | **Business Review**: KPIs, satisfacción, oportunidades de expansión, roadmap próximo trimestre | CSM ↔ Director sponsor |
| Anual | Renovación, ajuste de tarifa por bloque de ahorradores, plan año siguiente | CSM ↔ Decisor |

#### 4.6.2 Reporte mensual a la empresa (template fijo)

La IA debe poder generar este reporte cada mes a partir de los datos del periodo:

1. **Resumen ejecutivo** (3 bullets máximo): qué pasó este mes.
2. **Adopción**: # ahorradores activos, % vs. plantilla total, altas y bajas del mes.
3. **Aportaciones**: monto total aportado, ticket promedio, comparación contra mes anterior.
4. **Saldo y rendimientos**: AUM acumulado, rendimiento del mes, rendimiento acumulado.
5. **Operación**: # tickets atendidos, % en SLA, top 3 razones de contacto.
6. **Próximo mes**: cambios, comunicaciones programadas, fechas relevantes.
7. **Recomendaciones de dabox a la empresa** (acciones para mejorar adopción).

#### 4.6.3 Métricas de salud por cuenta (semáforo)

| Métrica | Verde | Amarillo | Rojo |
|---|---|---|---|
| Adopción (% colaboradores activos) | ≥ 40% | 20–39% | <20% |
| Tasa de retención de ahorradores (12 meses) | ≥ 85% | 70–84% | <70% |
| Días promedio entre nómina y dispersión | ≤ 5 | 6–10 | >10 |
| Tickets críticos (S1) por mes | 0 | 1 | ≥2 |
| NPS del ahorrador | ≥ 50 | 20–49 | <20 |
| Mora B2B en suscripción | 0 días | 1–15 | >15 |

Si **2 o más métricas en rojo**: la cuenta entra en plan de **Customer Recovery** con sesión de intervención del CSM + Musa en menos de 7 días.

### 4.7 Política de quejas y reclamaciones

dabox debe tener una **política formal de atención de quejas** (requerimiento de buenas prácticas y, si en el futuro se regula, de la CONDUSEF). Estructura:

1. **Recepción**: cualquier canal genera un folio único en 24 horas.
2. **Acuse**: respuesta de recepción al cliente en 24 horas con folio.
3. **Investigación**: evidencia, registros, escuchas, conciliaciones. Máximo 10 días hábiles.
4. **Resolución**: respuesta formal escrita al cliente con explicación, evidencia y, si aplica, compensación. Máximo 15 días hábiles.
5. **Documentación**: bitácora interna con folio, naturaleza, decisión, tiempo de resolución y aprendizaje.
6. **Reporte mensual a Musa**: top causas de queja, tasa de resolución, tiempo promedio.

### 4.8 NPS y feedback continuo

- **NPS al ahorrador:** trimestral, vía WhatsApp y email. 1 pregunta + 1 abierta.
- **CSAT post-resolución:** automático tras cierre de cada ticket.
- **NPS a la empresa:** semestral, con CSM presente para conversar el resultado.
- **Meta inicial NPS ahorrador:** 50+ en mes 6, 60+ en mes 12.
- **Meta inicial NPS empresa:** 60+ en mes 6, 70+ en mes 12.

### 4.9 Onboarding del ahorrador (primeros 90 días, momento de la verdad)

| Día | Hito | Acción |
|---|---|---|
| Día 0 | Empresa firma contrato | — |
| Día 7 | Comunicación de empresa a colaboradores | Email + reunión informativa (con apoyo de dabox) |
| Día 10 | Apertura de inscripción | Portal de alta digital + sesión presencial opcional con dabox |
| Día 15 | Cierre de inscripción de la primera ola | Confirmación al ahorrador con bienvenida personalizada |
| Día 30 | Primera nómina con retención | Email "tu primer ahorro está en marcha" |
| Día 35 | Saldo visible en portal | Notificación push/email "ya puedes ver tu saldo" |
| Día 45 | Primer contenido de educación financiera | Email/WhatsApp con tip + invitación a webinar opcional |
| Día 60 | Segundo descuento, segunda nómina | Notificación de saldo |
| Día 90 | NPS y check-in cualitativo | Email + posibilidad de subir aportación |

### 4.10 Crisis y comunicación de incidentes

Cuando ocurra un incidente con impacto al ahorrador (ej. retraso > 7 días en una aportación, error en saldo, caída del portal), seguir este protocolo:

1. **Contención (≤ 1 hora):** identificar alcance, ahorradores afectados, riesgo legal/reputacional. Avisar a Musa.
2. **Comunicación interna (≤ 2 horas):** alinear mensaje con Operación, Legal y CSM.
3. **Comunicación al cliente empresa (≤ 4 horas):** notificación al sponsor con plan de acción.
4. **Comunicación al ahorrador (≤ 24 horas):** mensaje proactivo, transparente, con plazo de resolución.
5. **Resolución y compensación si aplica.**
6. **Post-mortem (≤ 7 días):** documento interno con causa raíz, impacto, acciones correctivas.

---

## 5. Compliance y Riesgo Regulatorio

> **Disclaimer crítico para la IA.** Esta sección sintetiza el marco normativo relevante con base en el modelo declarado (AC con ahorro voluntario). **No sustituye la opinión legal formal** que ya existe ni el criterio del abogado interno. Cualquier acción con impacto regulatorio debe validarse con Legal antes de ejecutarse.

### 5.1 Marco regulatorio aplicable (mapa)

| Norma / Autoridad | Por qué nos aplica | Nivel de exposición |
|---|---|---|
| **Asociación Civil (Código Civil federal y local)** | Figura legal de cada caja | Directo — núcleo del modelo |
| **Ley General de Sociedades Civiles** | Régimen corporativo de la AC | Directo |
| **Ley del ISR / CFF (SAT)** | Obligaciones fiscales de la AC y de dabox SA de CV | Directo |
| **CNBV — Ley de Ahorro y Crédito Popular** | Posible riesgo si la operación se interpreta como captación | **Riesgo si rompemos reglas de comunicación** |
| **CONDUSEF** | Atención de quejas si dabox se considera proveedor de servicios financieros | Indirecto, pero sube si crece volumen |
| **LFPIORPI (Ley antilavado)** | Posibles actividades vulnerables si hay operaciones >$ del umbral | Medio — depende de tamaños |
| **LFPDPPP (datos personales)** | dabox trata datos personales sensibles (nómina, saldos) | Directo |
| **Ley Federal del Trabajo** | Descuento por nómina y fondos de ahorro | Directo |
| **NOM-035-STPS** | Bienestar emocional / financiero de colaboradores (relevancia comercial) | Indirecto, palanca de venta |
| **Ley Federal de Protección al Consumidor (PROFECO)** | En materia comercial B2C marginal | Bajo |

### 5.2 Línea roja: ¿somos captación CNBV?

Las cajas operadas como AC con **ahorro voluntario sin tasa garantizada** y con vehículo institucional **NO se consideran captación regulada** bajo el marco actual. Para mantener esa interpretación:

**Reglas de oro de no-captación:**
1. **Nunca prometer rendimiento garantizado.** Siempre se comunica como variable atado a CETES post-comisiones.
2. **Nunca usar lenguaje de "depósito" o "cuenta de inversión".** Usar "aportación" y "saldo de la caja".
3. **El ahorrador es asociado de la AC**, no cliente de un banco. El contrato de ahorrador refleja esto.
4. **El comité técnico de la AC** —no dabox— aprueba reglas de operación, montos máximos, política de retiros y créditos.
5. **dabox cobra a la empresa** (suscripción y startup), nunca capta directo del ahorrador.
6. **Los recursos viven en Compass**, no en cuentas a nombre de dabox.

> **Si una de estas 6 reglas se rompe, hay riesgo de reclasificación a captación regulada CNBV** y exposición potencial a sanciones, multas y suspensión de operaciones.

### 5.3 Comunicación regulatoriamente segura — diccionario

| ❌ NO usar (riesgo) | ✅ Sustituir por |
|---|---|
| "Cuenta de inversión" | "Caja de ahorro" / "tu cuenta de ahorro en la caja" |
| "Inversión" | "Ahorro" / "aportación" |
| "Rendimiento garantizado" | "Rendimiento atado a CETES" / "rendimiento variable" |
| "Tasa fija" | "Rendimiento variable que sigue a CETES" |
| "Captación" | "Administración del ahorro" |
| "Banco / banca" | (no usar; somos caja de ahorro empresarial) |
| "Depósito" | "Aportación" |
| "Producto financiero" | "Servicio de bienestar financiero" |
| "Cliente bancario" | "Ahorrador" |
| "Plazo forzoso" | "Calendario de retiros (julio y diciembre)" |

**Filtro IA obligatorio:** antes de generar cualquier pieza pública (post, email masivo, landing, anuncio), la IA debe **escanear el texto contra esta lista**. Si encuentra un término rojo, debe **detenerse y reescribir** usando el equivalente verde, o pedir validación a Musa.

### 5.4 PLD/AML — controles antilavado básicos

Aunque la AC con ahorro voluntario **no es Actividad Vulnerable per se** bajo LFPIORPI hoy, dabox debe operar con buenas prácticas como si lo fuera, para preparar escala futura:

**Controles mínimos:**
- **KYC del ahorrador** al alta: identificación oficial vigente, CURP, RFC, comprobante de domicilio (cuando aplique). Datos del expediente del trabajador en la empresa pueden alimentar este KYC.
- **Identificación de la empresa cliente**: acta constitutiva, RFC, identificación del representante legal, comprobante de domicilio fiscal.
- **Origen de los recursos**: por definición es nómina, lo cual es bajo riesgo. Se documenta como tal.
- **Monitoreo de transacciones**:
  - Aportaciones por colaborador > $50,000 MXN/mes: revisión manual, validación con empresa.
  - Retiros > $100,000 MXN: doble verificación de identidad, comprobante adicional.
  - Aportaciones extraordinarias en efectivo: **NO PERMITIDO** (toda aportación es vía nómina).
- **Lista negras**: cruce trimestral del padrón de ahorradores y de representantes de empresa contra listas (OFAC, ONU, SAT 69-B).
- **Bitácora de operaciones inusuales**: cualquier evento extraño se documenta, se reporta a Musa y se conserva 5 años.

### 5.5 Datos personales (LFPDPPP)

dabox es **responsable** del tratamiento de datos personales del ahorrador y de la empresa.

**Obligaciones:**
- **Aviso de privacidad** publicado en la landing y entregado al ahorrador en su alta. Debe incluir: identidad del responsable, finalidades primarias y secundarias, transferencias (Compass, aliado financiero), derechos ARCO, y datos de contacto del oficial de privacidad.
- **Oficial de privacidad designado** (puede ser Musa al inicio).
- **Procedimiento ARCO**: canal `privacidad@dabox.mx`. Plazos legales: 20 días hábiles para responder, 15 hábiles para ejecutar acceso/rectificación/cancelación/oposición.
- **Datos sensibles**: salario, saldo, antigüedad. Cifrado en tránsito (TLS) y en reposo (AES-256 mínimo) cuando exista BD.
- **Transferencias a terceros (Compass, aliado)** deben estar declaradas en el aviso y cubiertas por contrato de tratamiento de datos.
- **Conservación**: mientras dure la relación + 5 años post-baja para fines fiscales y legales.

### 5.6 Calendario regulatorio anual (mínimo)

| Frecuencia | Obligación | Responsable |
|---|---|---|
| Mensual | Declaraciones provisionales SAT (ISR e IVA) de dabox SA | Contador externo |
| Mensual | Declaraciones de la AC (régimen no contribuyente) | Contador AC |
| Anual | Declaración anual SAT dabox SA | Contador externo |
| Anual | Asamblea general ordinaria de cada AC | Comité técnico |
| Anual | Auditoría de estados financieros (cuando aplique umbral) | Auditor externo |
| Trimestral | Comité técnico de cada AC: actas firmadas | dabox + comité |
| Trimestral | Reporte de PLD interno: operaciones inusuales, listas negras | Compliance |
| Continuo | Mantener vigentes contratos: empresa–dabox, ahorrador–AC, dabox–Compass, dabox–aliado | Legal |

### 5.7 Matriz de riesgos operativos top 12

| # | Riesgo | Probab. | Impacto | Plan de mitigación |
|---|---|---|---|---|
| 1 | Reclasificación CNBV por mensaje incorrecto | M | Crítico | Filtro IA + revisión Legal de toda pieza pública |
| 2 | Empresa quiebra y deja de transferir aportaciones retenidas | M | Alto | Cláusula contractual de obligación + monitoreo activo de DSO |
| 3 | Compass interrumpe servicio | B | Crítico | Backup de plan B (vehículo alterno identificado) |
| 4 | Fuga / brecha de datos personales | B | Alto | Cifrado, accesos por rol, MFA, auditoría anual |
| 5 | Mora masiva en cartera referida | M | Medio | Filtros estrictos de originación, monitoreo semanal |
| 6 | Conflicto de interés con empresa matriz | M | Medio | Separación operativa documentada, ruptura visual de marca |
| 7 | Default de proveedor (aliado financiero) | B | Alto | Cláusula de portabilidad de cartera, no exclusividad |
| 8 | Reclamación CONDUSEF de ahorrador | M | Medio | Política de quejas formal, archivo de evidencia |
| 9 | Auditoría SAT a AC | M | Medio | Contabilidad limpia desde día 1, contador dedicado |
| 10 | Fraude interno (empleado dabox) | B | Alto | Segregación de funciones, conciliaciones cruzadas, doble firma para movimientos > $100k |
| 11 | Fraude del ahorrador (suplantación de identidad) | M | Medio | KYC robusto, biometría futura, notificación de cambios |
| 12 | Demanda laboral por descuento mal aplicado | B | Medio | Layout siempre con autorización firmada del ahorrador, conservación 5 años |

### 5.8 Documentos legales mínimos vigentes (matriz)

| Documento | Estado actual | Versión | Responsable |
|---|---|---|---|
| Contrato dabox–empresa cliente | ✅ Vigente | — | Legal |
| Contrato ahorrador–AC | ✅ Vigente | — | Legal |
| Estatutos de la AC | ✅ Vigente (Ahorra y Recrea) | — | Legal |
| Acta de comité técnico (template) | ⚠️ Parcial | Pendiente template replicable | Legal |
| Aviso de privacidad | ❌ Pendiente formalizar | — | Legal |
| Contrato préstamo caja–ahorrador | ❌ Pendiente | — | Legal |
| Contrato préstamo conjunto caja–aliado–ahorrador | ❌ Pendiente | — | Legal |
| Política de quejas | ❌ Pendiente | — | Operación + Legal |
| Política de PLD interna | ❌ Pendiente | — | Compliance |
| Manual de marca y do's/don'ts | ❌ Pendiente | — | Marca + Legal |
| Convenio Modificatorio de Pago (B2B) | ❌ Pendiente | — | Legal |
| Contrato de tratamiento de datos con Compass | ⚠️ Validar | — | Legal |

### 5.9 Reglas duras de "lo que dabox no hace" (ética y compliance)

dabox **NO**:
- Garantiza rendimientos.
- Ofrece servicios bancarios.
- Capta directamente del ahorrador.
- Aplica el ahorro como pago de deuda sin autorización expresa del ahorrador.
- Comparte datos personales con la empresa más allá de los necesarios para nómina.
- Promueve el endeudamiento del ahorrador (los créditos los originan terceros, con filtros estrictos).
- Usa el saldo de los ahorradores para financiar su propia operación.
- Interactúa con menores de edad.
- Acepta empresas con actividades regulatoriamente incompatibles (juegos de azar no regulados, sectores sancionados).

### 5.10 Protocolo de "para todo, primero pregunta"

Cuando la IA detecte una situación fuera de los SOPs anteriores, debe pasar este checklist antes de actuar:

1. ¿La acción afecta saldo del ahorrador? → Aprobación de Musa + Legal.
2. ¿La acción genera comunicación pública? → Filtro de vocabulario + revisión humana.
3. ¿La acción involucra datos personales sensibles? → Validar canal, encriptación, autorización.
4. ¿La acción cambia condiciones contractuales con la empresa o el ahorrador? → Convenio modificatorio firmado.
5. ¿La acción podría leerse como captación o promesa de rendimiento? → STOP. Reescribir desde cero.
6. ¿La acción involucra al aliado financiero o al fideicomiso futuro? → Validar contrato vigente.

---

## 6. Apéndices

### 6.A Plantillas comerciales

#### 6.A.1 LinkedIn — solicitud de conexión (Hook B, RH)
> Hola [nombre], vi que diriges RH en [empresa]. Estoy ayudando a empresas medianas a sumar un beneficio de ahorro sin costo para el colaborador y con cero carga para RH. Si te interesa platicar 15 min, con gusto.

#### 6.A.2 LinkedIn — primer mensaje post-conexión (Hook A, CFO)
> Gracias por conectar, [nombre]. Te escribo porque trabajo con CFOs/Direcciones de empresas que ya tienen caja de ahorro interna y la quieren profesionalizar — pasar de Excel y caja chica a un esquema con marco legal, vehículo institucional y rendimiento atado a CETES. ¿Tiene sentido para [empresa]? Te puedo mandar un 1-pager o agendamos 20 min, lo que te acomode.

#### 6.A.3 Email frío — Director General manufactura
> Asunto: Caja de ahorro para [empresa] — sin Excel, sin riesgo legal
>
> [Nombre], te escribo directo. Trabajo con empresas de manufactura en el Bajío que tenían caja de ahorro interna manejada en Excel y la profesionalizaron con dabox: misma cultura de ahorro, pero con AC formal, comité técnico, vehículo institucional y rendimiento atado a CETES. Tu RH deja de cargar el riesgo y tu CFO deja de cargar el dolor de cabeza fiscal.
>
> Sin compromiso: ¿te mando un 1-pager o agendamos 20 min esta o la próxima semana?
>
> Saludos, [Nombre · dabox]

#### 6.A.4 Seguimiento post-reunión
> Asunto: Próximos pasos — dabox · [empresa]
>
> Hola [nombre], gracias por el tiempo de hoy. Resumo lo conversado:
> - Punto de partida: [diagnóstico]
> - Propuesta de valor para ustedes: [hook A o B]
> - Propuesta económica: startup fee $30k + suscripción $[X]/mes, según [Y] ahorradores estimados.
> - Próximos pasos: (1) compartir 1-pager y simulador de rendimiento, (2) reunión con [otro decisor] el [fecha], (3) borrador de contrato cuando avancemos.
>
> Cualquier duda, aquí estoy.

### 6.B Plantillas de cobranza

#### 6.B.1 Recordatorio amistoso B2B (día -2 / día +5)
> Hola [nombre], pasando a recordarte que la factura de tu suscripción dabox del mes [mes] sale hoy / vence el [fecha]. Si necesitas que la enviemos a otro correo o ajustar datos fiscales, escríbeme y lo resuelvo el mismo día. ¡Gracias!

#### 6.B.2 Aviso de vencimiento (día +10)
> Hola [nombre], la factura [folio] con vencimiento [fecha] aún figura como pendiente en nuestros registros. ¿Podrías compartir la fecha programada de pago? Si hubo algún tema con la factura, me dices y lo corrijo hoy.

#### 6.B.3 Notificación formal de morosidad (día +20)
> Estimado/a [nombre], conforme al contrato dabox–[empresa] firmado el [fecha], la suscripción del mes [mes] presenta retraso de [n] días. Solicitamos formalmente la regularización a más tardar el [fecha límite]. De no recibir el pago o un acuerdo de plan de pagos, dabox iniciará el proceso descrito en la cláusula [X]. Reiteramos que las aportaciones del personal a la AC no se ven afectadas por esta gestión. Quedamos en espera.

#### 6.B.4 Comunicación al ahorrador por demora administrativa
> Hola [nombre], queremos avisarte con transparencia que tu aportación de la nómina del [fecha] está en proceso administrativo y se reflejará en tu cuenta dabox a más tardar el [fecha estimada]. No has perdido nada: el monto se aplica con la fecha original para fines de rendimiento. Cualquier duda, escríbenos a [canal]. — Equipo dabox.

### 6.C Plantillas de atención al cliente

#### 6.C.1 Bienvenida al ahorrador (día 15 post-empresa firmada)
> ¡Bienvenido/a a dabox, [nombre]! 🎉
> Tu empresa, [empresa], se sumó a un esquema de ahorro automático que te va a ayudar a hacer crecer tu dinero, mes con mes y sin esfuerzo.
>
> Cómo funciona:
> - Cada nómina, se descuenta el monto que acordaste.
> - Tu ahorro genera rendimiento atado a CETES.
> - Puedes consultar tu saldo cuando quieras en `portal.dabox.mx`.
> - Las ventanas para retirar son **julio y diciembre**.
>
> Cualquier duda, estamos en WhatsApp [número] o por correo a `soporte@dabox.mx`. — Equipo dabox.

#### 6.C.2 Confirmación de primer descuento aplicado (día 35)
> Hola [nombre], tu primera aportación a la caja de ahorro de [empresa] ya está aplicada. Monto: **$[X] MXN**. Saldo actual: **$[X] MXN**.
>
> A partir de ahora, cada nómina sumará a tu ahorro y todo eso genera rendimientos atados a CETES. Puedes ver el detalle en `portal.dabox.mx`. ¡Bien hecho! 💪

#### 6.C.3 Recordatorio de ventana de retiro (junio y noviembre)
> Hola [nombre], el próximo mes abre la ventana de retiro de la caja de ahorro. Tienes tres opciones:
> 1. **Retirar todo**: tu saldo completo a tu cuenta.
> 2. **Retirar parcial**: el monto que tú decidas.
> 3. **Quedarte**: tu ahorro sigue generando rendimientos.
>
> Si quieres retirar, indícanos antes del [fecha tope] respondiendo a este mensaje. Si no nos dices nada, tu ahorro sigue creciendo.

#### 6.C.4 Acuse de queja
> Hola [nombre], recibimos tu queja con folio **[folio]** sobre [tema]. La estamos investigando con prioridad y te daremos respuesta formal en máximo **15 días hábiles**. Si necesitamos más información, te contactamos antes. Lamentamos la situación y queremos resolverla a tu favor. — Equipo dabox.

### 6.D Checklists operativos

#### 6.D.1 Onboarding de empresa nueva (post-firma)
- [ ] Contrato firmado y archivado en sistema legal
- [ ] Startup fee facturado y cobrado
- [ ] Constitución de AC iniciada (notario)
- [ ] Comité técnico designado y primera acta
- [ ] Estatutos firmados y registrados
- [ ] Apertura de cuenta bancaria operativa de la AC
- [ ] Alta de la AC en Compass
- [ ] Definición de tarifa escalonada inicial (banda de ahorradores estimados)
- [ ] Comunicación a colaboradores agendada con RH
- [ ] Sesión informativa con colaboradores realizada
- [ ] Material de inscripción digital activo
- [ ] Layout único de retención entregado a Nómina
- [ ] CSM asignado y reunión semanal en calendario
- [ ] Primera nómina con retención exitosa
- [ ] Primer reporte mensual a RH entregado

#### 6.D.2 Cierre de mes operativo
- [ ] Conciliación bancaria de cuenta operativa AC
- [ ] Conciliación con Compass (saldos por ahorrador)
- [ ] Cálculo de spread dabox del mes
- [ ] Facturación a empresas (suscripción)
- [ ] Reporte mensual a cada empresa cliente
- [ ] Estado de cuenta visible para cada ahorrador
- [ ] KPIs internos actualizados (adopción, AUM, MRR, NPS)
- [ ] Bitácora de quejas y discrepancias actualizada
- [ ] Reporte de PLD interno (operaciones inusuales)
- [ ] Comité técnico mensual (cuando aplique)

#### 6.D.3 Pre-ventana de retiro (junio / noviembre)
- [ ] Comunicación a ahorradores 30 días antes
- [ ] Recordatorio 15 días antes
- [ ] Proyección de salidas vs. liquidez en Compass
- [ ] Aviso a Compass para preparar liquidez
- [ ] Cierre de solicitudes 7 días antes
- [ ] Validación de identidad de cada solicitante
- [ ] Revisión PLD de retiros > $100k
- [ ] Ejecución del retiro y transferencia
- [ ] Confirmación a ahorrador con comprobante
- [ ] Reporte a empresa de retiros aplicados
- [ ] Post-mortem de la ventana (mejoras para la siguiente)

### 6.E Glosario operativo

- **AC**: Asociación Civil. Figura legal de cada caja de ahorro de empresa.
- **AUM**: Assets Under Management. Total ahorrado bajo administración.
- **B2B2C**: Modelo de negocio donde dabox vende a empresa (B2B) que sirve a sus colaboradores (C).
- **Comité técnico**: órgano de gobierno de cada AC; aprueba reglas de operación.
- **Compass**: vehículo de inversión institucional donde vive el ahorro.
- **CSM**: Customer Success Manager. Persona dabox dedicada a una empresa cliente.
- **CETES**: instrumento gubernamental de referencia para rendimiento.
- **DSO**: Days Sales Outstanding. Días promedio de cobro de facturas.
- **Hook A / Hook B**: dos ángulos de venta (modernizar caja existente / sumar beneficio nuevo).
- **ICP**: Ideal Customer Profile.
- **KYC**: Know Your Customer. Identificación obligatoria del cliente.
- **Layout único**: archivo estandarizado para retención de nómina, formato dabox.
- **MRR**: Monthly Recurring Revenue. Ingreso mensual recurrente.
- **NPS**: Net Promoter Score. Métrica de recomendación.
- **PLD/AML**: Prevención de Lavado de Dinero / Anti Money Laundering.
- **Spread dabox**: 0.75% que dabox retiene del rendimiento neto.
- **Startup fee**: $30,000 + IVA, único, al firmar.
- **SLA**: Service Level Agreement.
- **Ventana de retiro**: julio y diciembre.

### 6.F Cómo la IA debe estructurar respuestas a tareas comunes

| Tarea | Estructura sugerida |
|---|---|
| Redactar email comercial | 1 línea de gancho + 2 líneas de problema/solución + 1 propuesta clara + cierre con calendario |
| Manejar objeción | Reconocer + reframe + dato/argumento + pregunta de avance |
| Reportar mes a empresa | Resumen ejecutivo (3 bullets) → Adopción → Aportaciones → Saldo y rendimientos → Operación → Próximo mes → Recomendaciones |
| Generar comunicación al ahorrador | Saludo cálido + qué pasa + qué significa para él/ella + acción si aplica + canal de soporte |
| Diagnosticar discrepancia de cobranza | Identificar tipo (faltante total / monto distinto / colaborador no esperado) + acción inmediata + comunicación al afectado + plazo de resolución |
| Redactar política/SOP | Objetivo + alcance + roles + pasos numerados + KPIs + excepciones |
| Crisis o incidente | Contención → Comunicación interna → Comunicación al cliente empresa → Comunicación al ahorrador → Resolución → Post-mortem |

### 6.G Datos clave de referencia rápida

```
Tagline:                "Hacemos crecer el ahorro de tu gente."
Dominio (a establecer): dabox.mx
Correo (a establecer):  contacto@dabox.mx · soporte@dabox.mx · privacidad@dabox.mx · quejas@dabox.mx
Vehículo:               Compass (0.6% comisión, descontado)
Spread dabox:           0.75%
Startup fee:            $30,000 + IVA
Suscripción mensual:    $600 a $8,500+ + IVA (escalonada)
Comisión referidos:     2% sobre créditos/inversiones a terceros
Retiros:                Julio y diciembre
Antigüedad para crédito: ≥ 12 meses como ahorrador
Cuota máxima:           ≤ 30% del salario neto del ahorrador
ICP empresa:            20–250 colaboradores, manufactura/sindicatos
ICP ahorrador:          Salario $8k–$18k MXN, ticket $300–$800/mes
Meta año 1:             6–10 empresas, 400–1,200 ahorradores, AUM $2.5–4M MXN
```

---

---

## 7. Sistema de marca dabox

> **Lineamientos oficiales — Mini-Brandbook dabox.** Esta sección es la **fuente de verdad visual y verbal** de la marca. Cualquier comunicación, pieza, plantilla o desarrollo digital generado por la IA debe respetar estos lineamientos sin excepciones. Si una pieza no cumple, no sale.

### 7.1 Identidad visual — Sistema de color oficial

dabox tiene **tres colores oficiales** y una paleta extendida de tonos. La proporción manda: el naranja domina, el azul ancla, los grises respiran.

#### Colores primarios

| Rol | HEX | RGB | CMYK | Uso |
|---|---|---|---|---|
| **Naranja Acción** (color principal) | `#FF5A00` | 255, 90, 0 | 0, 79, 100, 0 | CTAs, acentos, datos clave, momentos de "esto es lo importante" |
| **Naranja Cálido** (secundario) | `#FF8125` | 255, 129, 37 | 0, 61, 93, 0 | Fondos, ilustraciones, gradientes con naranja primario |
| **Azul dabox** (institucional) | `#283A7F` | 40, 58, 127 | 99, 90, 18, 5 | Headings, texto principal, elementos de confianza, marco institucional |

#### Paleta extendida (tonos derivados)

Cada color principal tiene tonos pastel y oscuros para crear jerarquía sin sumar colores nuevos:

```
Naranja Acción     ████  #FF5A00   →  acentos críticos, CTA primarios
Naranja Cálido     ▓▓▓▓  #FF8125   →  ilustraciones, hover states
Naranja Crema      ░░░░  #FFB783   →  fondos suaves, tarjetas
Naranja Suave      ░░░░  #FFD9C0   →  badges, fondos de sección
Naranja Pastel     ░░░░  #FFEFE0   →  fondos de bloque, alertas suaves
Azul dabox         ████  #283A7F   →  texto principal, headings
Azul Medio         ▓▓▓▓  #5C6CA8   →  texto secundario, iconografía
Azul Suave         ░░░░  #8E9AC2   →  texto terciario, líneas divisorias
Azul Pastel        ░░░░  #C0C7DC   →  fondos institucionales
Azul Niebla        ░░░░  #E5E8F0   →  fondos sutiles
Negro Texto              #141413   →  para body text largo (alternativa)
Blanco Hueso             #FAF9F5   →  fondos cálidos
```

#### Reglas de proporción (regla 60-30-10)

- **60%** Blanco hueso + Azul Niebla → fondos, espacio en blanco, respiración
- **30%** Azul dabox → headings, texto principal, anclajes institucionales
- **10%** Naranja Acción + Naranja Cálido → CTAs, datos clave, momentos de impacto

> **Si una pieza tiene más de 25% de naranja, está saturada.** Reducir y dejar respirar.

#### Combinaciones aprobadas (do)

- Azul dabox sobre blanco hueso → texto institucional limpio
- Naranja Acción sobre blanco hueso → CTA o dato resaltado
- Blanco hueso sobre Naranja Acción → headline en hero
- Azul dabox sobre Naranja Crema → tarjeta cálida con texto serio
- Naranja Cálido sobre Azul dabox → punto de acento institucional

#### Combinaciones prohibidas (don't)

- Naranja Acción sobre Azul dabox sin separación → vibración visual, ilegible
- Texto en Naranja Cálido sobre fondo blanco → bajo contraste
- Más de 2 colores principales en una sola pieza
- Fondos con gradientes de los 3 colores juntos
- Naranja Acción en bloques grandes de body text (solo para acentos)

### 7.2 Tipografía oficial

**Familia única: Poppins** (con Arial como fallback técnico).

Una sola familia tipográfica, jerarquía por **peso** y **tamaño**, no por mezclar fuentes.

#### Sistema de pesos y usos

| Peso | Estilo | Tamaño base | Uso |
|---|---|---|---|
| Poppins Black (900) | — | 48–64pt | Hero headlines, números clave (montos, %) |
| Poppins ExtraBold (800) | — | 36–48pt | H1, títulos de sección |
| Poppins Bold (700) | — | 24–32pt | H2, subtítulos |
| Poppins SemiBold (600) | — | 18–22pt | H3, énfasis dentro de párrafo |
| Poppins Medium (500) | — | 14–16pt | Subtítulos pequeños, etiquetas |
| Poppins Regular (400) | — | 14–16pt | Body text |
| Poppins Light (300) | — | 12–14pt | Disclaimers, notas al pie |
| Poppins Italic | — | — | Citas, énfasis sutil (uso moderado) |

#### Reglas de jerarquía

- Un solo H1 por pieza (hero o título principal).
- Saltos de tamaño claros: H1 ≥ 1.5x H2 ≥ 1.5x H3.
- Body text **mínimo 14pt** en digital, **mínimo 11pt** en impreso.
- Interlineado body: 1.4–1.6 (lectura cómoda).
- Tracking (espaciado entre letras): 0 o ligeramente positivo en headings, 0 en body.
- Nunca centrar bloques de body text largos. Centrar solo headlines y CTAs.
- Nunca usar más de **2 niveles de jerarquía** en un mismo bloque.

### 7.3 Logo: reglas de uso

#### Versiones permitidas

1. **Logo principal en color**: hexágono naranja + wordmark azul. Para fondos blancos o muy claros.
2. **Logo en blanco**: monocromático blanco. Para fondos de color saturado (Naranja Acción, Azul dabox) o fotografía oscura.
3. **Logo en azul**: monocromático Azul dabox. Para impresión limitada en B/N o fondos crema.
4. **Isotipo solo (hexágono)**: para favicons, avatars de redes, espacios cuadrados pequeños (≤ 64px).

#### Reglas duras

- **Espacio de respeto:** mínimo el ancho del isotipo a cada lado del logo. No texto, no elementos pegados.
- **Tamaño mínimo digital:** 80px de ancho.
- **Tamaño mínimo impreso:** 20mm de ancho.
- **Nunca:**
  - Cambiar los colores del logo.
  - Distorsionar proporciones (estirar, comprimir).
  - Aplicar sombras, glow, outline.
  - Rotar el logo (excepto el isotipo en aplicaciones específicas).
  - Colocar el logo sobre fondos con poco contraste.
  - Sustituir la fuente del wordmark.

### 7.4 Voz y tono de marca

**Arquetipo:** *El aliado experto y cercano* — no es banco, no es tecnología fría, no es paternalista. Es el "buen socio financiero" que explica sin condescendencia.

#### Atributos de voz (siempre presentes)

| Atributo | Significado | En la práctica |
|---|---|---|
| **Cercano** | Trato humano, sin fricción innecesaria | Tuteamos al ahorrador. Hablamos en primera persona plural ("estamos contigo"). |
| **Claro** | Sin tecnicismos cuando hablamos al usuario final | "Tu ahorro" no "tu cuenta de instrumento financiero" |
| **Confiable** | Responsable, transparente, sin promesas vagas | Decimos cuándo algo es variable, cuándo no podemos garantizar |
| **Optimista** | Crecimiento, prosperidad, posibilidad | Lenguaje de avance: crecer, sumar, lograr, llegar |
| **Práctico** | Útil, accionable, sin filosofar de más | Decimos qué hacer, no por qué la vida es complicada |

#### Espectro de tono según audiencia

La voz no cambia, el **tono** sí. Misma persona, registros distintos.

| Audiencia | Tono | Ejemplo |
|---|---|---|
| **Ahorrador (colaborador)** | Cálido, conversacional, simple, motivacional | "Listo, [nombre]. Tu primer ahorro ya está creciendo. 💪 Aquí lo puedes ver siempre que quieras." |
| **RH (María)** | Profesional cálido, empático con la carga operativa | "Sabemos que tu RH no necesita más cosas que administrar. Por eso dabox es básicamente plug-and-play: el layout llega prearmado." |
| **CFO / Director General** | Profesional, claro, datos concretos | "El modelo cubre tres frentes que hoy te exponen: trazabilidad fiscal, marco legal y rendimiento auditable. Sin pasos al frente, tu caja existente se queda como está." |
| **Sindicatos** | Respetuoso, institucional, próximo | "dabox respeta los acuerdos colectivos y suma una herramienta para que el ahorro de los compañeros tenga un vehículo formal y rendimiento real." |
| **Reguladores / legal** | Formal, preciso, neutro | "dabox SA de CV opera como administrador de cajas de ahorro empresariales bajo figura de Asociación Civil, en cumplimiento del marco aplicable." |

#### Voz: reglas duras

- **No "ud."** con el ahorrador. Tuteo siempre.
- **Sí "usted"** en comunicaciones formales con representantes legales, abogados, autoridad.
- Frases cortas. Punto. Una idea por oración.
- Verbos en primera persona plural cuando hablamos como dabox: "te apoyamos", "estamos contigo", "lo resolvemos hoy".
- **Evitar siempre:** condescendencia, paternalismo, jerga financiera innecesaria, urgencia falsa, exclamaciones múltiples ("¡¡¡!!!").
- **Emojis con cabeza:** sí en comunicación al ahorrador (uno por mensaje, ubicación con propósito). No en comunicación a CFO/Legal/autoridad.

#### Diccionario de palabras de marca

**Palabras señal (usar con frecuencia):**
- crecer · ahorrar · tu gente · bienestar · simple · claro · mes con mes
- beneficio · sumar · llegar · acompañar · transparente · justo · sin complicaciones
- tu equipo · tu empresa · tu ahorro · tu paso · tu calma

**Palabras prohibidas (riesgo de marca o regulatorio):**
- inversión · captación · banco · plazo forzoso · rendimiento garantizado
- producto financiero · tasa fija · depósito · cuenta de inversión
- (y todo el resto del diccionario regulatorio de la sección 5.3)

**Palabras a evitar (no prohibidas, pero diluyen marca):**
- "innovador" (sin demostrarlo)
- "líder" (sin serlo)
- "revolucionario", "disruptivo" (palabras vacías)
- "soluciones" (genérico)
- "nuestros estimados clientes" (acartonado)

### 7.5 Sistema de mensajes (jerarquía narrativa)

dabox tiene una **jerarquía de mensajes** que la IA debe respetar al construir cualquier pieza.

```
NIVEL 1 — Tagline (siempre)
"Hacemos crecer el ahorro de tu gente."

NIVEL 2 — Promesa central (en hero, headline, primer slide)
Bienestar financiero integral: ahorro + préstamos + educación.

NIVEL 3 — Pilares de valor (en propuestas, decks, landings)
1. Descuento automático vía nómina (fricción cero)
2. Préstamos respaldados por el ahorro
3. Educación financiera integrada
4. Beneficio empresarial sin costo para el colaborador

NIVEL 4 — Pruebas (en propuestas avanzadas, casos de éxito)
- Vehículo institucional Compass
- Marco legal con AC y comité técnico
- Rendimiento atado a CETES auditable
- Operación digital, sin papeles

NIVEL 5 — Llamada a la acción (cierre de cualquier pieza)
"Conoce dabox" / "Agenda 20 minutos" / "Solicita tu propuesta"
```

**Regla:** una pieza nunca debe romper esta jerarquía. Si vamos a hablar de "vehículo institucional" sin antes haber tocado los pilares, perdemos al lector.

### 7.6 Aplicación de marca por canal

#### 7.6.1 Email

- **Asunto:** ≤ 50 caracteres, sin emojis (salvo casos puntuales con ahorrador), sin caps, sin signos de exclamación múltiples.
- **Saludo:** "Hola [nombre]" (jamás "Estimado cliente" para ahorrador; sí para institucional).
- **Cuerpo:** Lora regular o Poppins regular según plantilla, body 14–16pt.
- **CTA:** Botón con Naranja Acción (`#FF5A00`), texto blanco, Poppins SemiBold.
- **Firma:** Nombre + rol + dabox + dominio + tagline opcional.
- **Pie:** Aviso de privacidad y baja de comunicaciones para envíos masivos.

#### 7.6.2 WhatsApp Business

- Mensajes cortos, 2–4 líneas máximo.
- 1 emoji por mensaje, máximo, con propósito ("✅ listo", "💪 bien hecho", "🎉 bienvenida").
- Cero plantillas que parezcan "spam corporativo": el mensaje debe sentirse de persona a persona.
- Siempre cerrar con canal de respuesta o pregunta abierta.

#### 7.6.3 LinkedIn

- **Posts:** primer línea es gancho. Sin emojis al inicio. Estructura: gancho → 1 dato → 1 reflexión → CTA suave.
- **Solicitud de conexión:** ≤ 300 caracteres, contexto + valor + invitación, sin pitch directo.
- **Tono:** profesional cálido, primera persona singular cuando es Musa hablando, plural cuando es la marca.

#### 7.6.4 Landing y web

- Hero con gradiente Naranja Acción → Naranja Cálido o foto cálida con headline blanco.
- Tagline visible en primer pliegue.
- Bloques de pilares (4 tarjetas) con iconos lineales en Azul dabox.
- CTA principal sticky en navegación: Naranja Acción.
- Tipografía única Poppins, jerarquía clara.
- Pruebas (logos de empresas, números) en el segundo pliegue.

#### 7.6.5 Decks y presentaciones

- Slide 1 (portada): logo + título + subtítulo. Sin texto extra.
- Slide 2 (problema): 1 frase potente, fondo Azul dabox, texto blanco.
- Slide 3 (solución): pilares con iconos en color de marca.
- Slide 4–6: producto, mecánica, rendimiento.
- Slide 7–9: caso o prueba, modelo de negocio.
- Slide 10–12: equipo, roadmap, próximos pasos.
- Última slide: CTA + datos de contacto + tagline.
- Densidad: ≤ 30 palabras por slide.

#### 7.6.6 Documentos comerciales (1-pager, propuesta)

- 1-pager: una sola hoja, jerarquía clara, máximo 6 bloques.
- Propuesta: portada + resumen ejecutivo + propuesta de valor + alcance + economía + plan + términos + cierre.
- Color de fondo blanco hueso, headings Azul dabox, datos clave Naranja Acción.

### 7.7 Imagen y fotografía

**Sí en la fotografía dabox:**
- Personas reales mexicanas, contextos de oficina, fábrica, sindicato, casa.
- Iluminación cálida, natural.
- Edades diversas (25–55), perfiles diversos.
- Manos sobre cuaderno, calculadora, teléfono mostrando portal.
- Equipos colaborando, dirección hablando con su gente.

**No en la fotografía dabox:**
- Stock genérico de "negocios" con personas extranjeras en suite.
- Imágenes de dinero literal (billetes, monedas amontonadas).
- Apretones de manos corporativos clichés.
- Blancos clínicos azules tipo banco.
- Alegrías exageradas (saltos, brazos al cielo).

### 7.8 Iconografía

- **Estilo:** lineal, peso 1.5–2px, esquinas suavemente redondeadas.
- **Color:** Azul dabox para iconos institucionales; Naranja Acción para iconos de acción/destacado; nunca multicolor en un mismo set.
- **Tamaño base:** 24px / 32px / 48px.
- **Set base sugerido:** ahorro (alcancía), nómina (sobre), crecimiento (gráfica al alza), seguridad (escudo), educación (libro abierto), gente (3 personas), tiempo (reloj), retiro (flecha saliendo de caja).
- Mantener coherencia: un set, no mezclar bibliotecas.

### 7.9 Voz de marca aplicada — antes y después

Para entrenar a la IA, ejemplos concretos de **transformación**:

#### Ejemplo 1 — Comunicación al ahorrador

❌ **Mal (frío, regulatorio):**
> Estimado usuario, le informamos que su aportación correspondiente al periodo nominal vigente ha sido procesada exitosamente y reflejada en su cuenta de ahorro institucional.

✅ **Bien (dabox):**
> Hola [nombre], tu aportación de la nómina ya está en tu ahorro. Suma **$[X] MXN** este mes. Lo puedes ver cuando quieras en `portal.dabox.mx`. ¡Bien hecho! 💪

#### Ejemplo 2 — Email comercial a RH

❌ **Mal (genérico, vacío):**
> Estimada Directora, en [empresa de servicios] estamos comprometidos con ofrecer soluciones innovadoras y disruptivas que revolucionen la manera en que las empresas líderes gestionan los beneficios de sus colaboradores.

✅ **Bien (dabox):**
> Hola [nombre], te escribo directo: ayudo a directoras de RH como tú a sumar un beneficio que tu equipo va a sentir mes con mes, sin costo para el colaborador y sin sumar carga a tu RH. ¿Tiene sentido platicar 20 minutos esta o la próxima semana?

#### Ejemplo 3 — Respuesta a queja

❌ **Mal (defensivo, corporativo):**
> Lamentamos los inconvenientes. Su caso ha sido escalado al área correspondiente y será atendido en los tiempos previstos en nuestras políticas internas de servicio.

✅ **Bien (dabox):**
> Hola [nombre], lamentamos lo que pasó y queremos resolverlo a tu favor. Tu queja queda con folio **[folio]**. La estamos investigando hoy y te damos respuesta concreta en máximo 15 días hábiles. Si necesitas algo antes, escríbenos directo aquí.

### 7.10 Plantillas estructurales por pieza

#### 7.10.1 Estructura de email comercial dabox

```
[Asunto: ≤50 caracteres, claro, sin caps, sin "!!!"]

Hola [nombre],

[1 línea de gancho — por qué le escribo a esta persona en concreto]

[2 líneas de problema/solución — qué resuelve dabox para su caso]

[1 línea de propuesta — qué le ofrezco hacer ahora]

[CTA con calendario — 20 min esta o próxima semana]

Saludos,
[Nombre]
dabox
```

#### 7.10.2 Estructura de comunicación al ahorrador

```
[Saludo cálido con nombre]

[Qué pasó / qué pasa — máximo 2 líneas]

[Qué significa para ti — claro, simple]

[Acción si aplica — qué hacer y cuándo]

[Canal de soporte — siempre cerramos con puerta abierta]

— Equipo dabox.
```

#### 7.10.3 Estructura de un post LinkedIn dabox

```
[Línea 1: gancho — pregunta, dato, observación]

[2-3 líneas de contexto / por qué importa]

[1 dato concreto, número, hallazgo]

[1 reflexión / aprendizaje propio]

[CTA suave: "¿qué piensas?", "te interesa platicarlo?"]

#hashtags (3–5 máximo, profesionales)
```

### 7.11 Checklist de calidad antes de publicar (la IA SIEMPRE corre este filtro)

Antes de generar la versión final de cualquier pieza pública o comunicación masiva, la IA verifica:

**Marca visual:**
- [ ] Logo correctamente usado, con espacio de respeto
- [ ] Colores oficiales (sin tonos extraños o cercanos al naranja/azul que no sean de marca)
- [ ] Tipografía Poppins (o fallback Arial declarado)
- [ ] Proporción 60-30-10 respetada
- [ ] Jerarquía tipográfica clara

**Voz y tono:**
- [ ] Tono ajustado a la audiencia (ahorrador / RH / CFO / sindicato / regulador)
- [ ] Tagline o promesa central presente cuando aplica
- [ ] Diccionario de marca: usa palabras señal, evita palabras prohibidas
- [ ] Frases cortas, una idea por oración
- [ ] Cero condescendencia, cero urgencia falsa

**Compliance regulatorio:**
- [ ] Cero palabras prohibidas (sección 5.3)
- [ ] Cero promesas de rendimiento
- [ ] Disclaimer cuando se mencionan números de rendimiento
- [ ] Mención de marca matriz: NO

**Estructura:**
- [ ] CTA claro y único
- [ ] Datos de contacto correctos (dabox.mx)
- [ ] Aviso de privacidad y baja en comunicaciones masivas

Si **una sola** casilla queda sin marcar, la pieza NO sale.

### 7.12 Design tokens y especificaciones técnicas (para producto digital y comunicaciones)

Para que cualquier desarrollador, diseñador o IA generadora produzca piezas consistentes, los lineamientos de marca se traducen en **tokens accionables**.

#### 7.12.1 Tokens de color (CSS variables)

```css
:root {
  /* Primarios */
  --dabox-orange-action:  #FF5A00;  /* Naranja Acción - CTAs, datos clave */
  --dabox-orange-warm:    #FF8125;  /* Naranja Cálido - secundario */
  --dabox-blue:           #283A7F;  /* Azul dabox - institucional */

  /* Naranja extendido */
  --dabox-orange-200:     #FFEFE0;  /* Pastel - fondos de bloque */
  --dabox-orange-300:     #FFD9C0;  /* Suave - badges */
  --dabox-orange-400:     #FFB783;  /* Crema - tarjetas */
  --dabox-orange-500:     #FF8125;  /* Cálido - hover */
  --dabox-orange-600:     #FF5A00;  /* Acción - principal */
  --dabox-orange-700:     #CC4800;  /* Oscuro - hover de CTA */

  /* Azul extendido */
  --dabox-blue-100:       #E5E8F0;  /* Niebla - fondos sutiles */
  --dabox-blue-200:       #C0C7DC;  /* Pastel */
  --dabox-blue-400:       #8E9AC2;  /* Suave - texto terciario */
  --dabox-blue-500:       #5C6CA8;  /* Medio - texto secundario */
  --dabox-blue-700:       #283A7F;  /* dabox - principal */
  --dabox-blue-900:       #1A2655;  /* Oscuro - hover institucional */

  /* Neutros */
  --dabox-bone:           #FAF9F5;  /* Blanco hueso - fondos cálidos */
  --dabox-text:           #141413;  /* Negro texto - body largo */
  --dabox-gray-300:       #E8E6DC;  /* Gris claro - separadores */
  --dabox-gray-500:       #B0AEA5;  /* Gris medio - texto deshabilitado */

  /* Estados (semánticos) */
  --dabox-success:        #788C5D;  /* Verde - confirmaciones */
  --dabox-warning:        #FF8125;  /* Naranja Cálido - advertencias */
  --dabox-danger:         #C0392B;  /* Rojo cuidado - errores */
  --dabox-info:           #5C6CA8;  /* Azul medio - notificaciones */
}
```

#### 7.12.2 Escala tipográfica (para web/app)

```css
:root {
  --font-family-base: 'Poppins', 'Arial', sans-serif;

  /* Escala modular (1.25 - tercera mayor) */
  --font-size-xs:    12px;   /* Notas, disclaimers */
  --font-size-sm:    14px;   /* Captions, labels */
  --font-size-base:  16px;   /* Body */
  --font-size-md:    18px;   /* Body grande */
  --font-size-lg:    22px;   /* H4 */
  --font-size-xl:    28px;   /* H3 */
  --font-size-2xl:   36px;   /* H2 */
  --font-size-3xl:   48px;   /* H1 */
  --font-size-4xl:   64px;   /* Hero */

  /* Pesos */
  --font-weight-light:    300;
  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;
  --font-weight-extrabold: 800;
  --font-weight-black:    900;

  /* Interlineado */
  --line-height-tight:   1.2;
  --line-height-base:    1.5;
  --line-height-relaxed: 1.7;
}
```

#### 7.12.3 Escala de espaciado (8pt grid)

dabox usa **base 8px**. Cada espacio es múltiplo de 8 (con escalones intermedios de 4 cuando se necesite):

```
--space-0:   0px
--space-1:   4px    (micro)
--space-2:   8px    (S)
--space-3:   12px
--space-4:   16px   (M — base)
--space-5:   24px
--space-6:   32px   (L)
--space-7:   48px
--space-8:   64px   (XL — separación de secciones)
--space-9:   96px   (XXL — entre bloques de hero)
```

#### 7.12.4 Bordes, radios y sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Inputs, badges |
| `--radius-md` | 8px | Botones, tarjetas pequeñas |
| `--radius-lg` | 16px | Tarjetas grandes, modales |
| `--radius-xl` | 24px | Bloques hero, CTA destacados |
| `--radius-full` | 9999px | Pills, avatars |
| `--shadow-soft` | `0 2px 8px rgba(40,58,127,0.08)` | Tarjetas en reposo |
| `--shadow-medium` | `0 4px 16px rgba(40,58,127,0.12)` | Hover de tarjetas |
| `--shadow-deep` | `0 8px 32px rgba(40,58,127,0.18)` | Modales, dropdowns |

> **Regla:** las sombras siempre tintadas con Azul dabox (no negro puro). Esto mantiene calidez y coherencia.

#### 7.12.5 Componentes UI base (lenguaje visual)

| Componente | Especificación |
|---|---|
| **Botón primario** | Fondo `#FF5A00`, texto blanco, Poppins SemiBold 16px, padding 12×24, radius 8px, hover `#CC4800` |
| **Botón secundario** | Borde 1.5px `#283A7F`, fondo transparente, texto `#283A7F`, hover fondo `#E5E8F0` |
| **Botón terciario** | Solo texto Azul dabox subrayado al hover |
| **Input** | Borde 1px `#B0AEA5`, focus borde 2px `#FF5A00`, padding 12×16, radius 8px |
| **Card** | Fondo `#FAF9F5`, borde 1px `#E8E6DC`, radius 16px, padding 24px, shadow soft |
| **Badge** | Fondo `#FFEFE0`, texto `#FF5A00`, Poppins Medium 12px, radius full, padding 4×12 |
| **Alert success** | Fondo verde 10%, borde verde, texto verde dark |
| **Alert error** | Fondo rojo 10%, borde rojo, texto rojo dark |
| **Tooltip** | Fondo Azul dabox, texto blanco, radius 8px, max-width 280px |

### 7.13 Accesibilidad y contraste (no opcional)

dabox debe cumplir **WCAG 2.1 AA mínimo** en todo material digital. La accesibilidad no es decorativa: el ICP del ahorrador final tiene alfabetización digital media-baja, y muchos consultarán desde celular en condiciones no ideales.

#### 7.13.1 Pares de color y ratios

| Combinación | Ratio | Cumple |
|---|---|---|
| Azul dabox `#283A7F` sobre blanco hueso `#FAF9F5` | 11.6:1 | AAA ✅ |
| Naranja Acción `#FF5A00` sobre blanco hueso | 3.5:1 | AA solo en texto **18pt+ o 14pt bold** ⚠️ |
| Blanco `#FFFFFF` sobre Naranja Acción `#FF5A00` | 3.5:1 | AA solo en texto 18pt+ ⚠️ |
| Blanco sobre Azul dabox `#283A7F` | 11.0:1 | AAA ✅ |
| Texto `#141413` sobre blanco hueso | 17.5:1 | AAA ✅ |
| Azul Suave `#8E9AC2` sobre blanco | 2.9:1 | ❌ **NO usar para texto** |

**Regla aplicada:** el Naranja Acción **nunca se usa para body text largo**. Solo para CTAs (≥18pt o 14pt bold), datos clave grandes, o sobre fondos que mantengan ≥4.5:1.

#### 7.13.2 Reglas de accesibilidad obligatorias

- **Tamaño mínimo de texto interactivo:** 14pt (16pt recomendado).
- **Tamaño mínimo de área tap:** 44×44 px.
- **Foco siempre visible:** outline 2px Naranja Acción + offset 2px en cualquier elemento interactivo.
- **Nunca color como única señal de información:** mostrar también ícono o texto.
- **Alt text obligatorio** en todas las imágenes informativas. Decorativas: `alt=""` explícito.
- **Estados de carga y error con texto**, no solo spinner.
- **Lenguaje claro:** índice de lectura nivel **secundaria** o menor en todo material al ahorrador (Flesch-Huerta ≥ 60).
- **Soporte de lectores de pantalla:** etiquetas ARIA correctas, jerarquía semántica HTML.

### 7.14 Microcopy del producto (UI text patterns)

El microcopy es donde la marca cobra vida en el día a día. La IA debe seguir estos patrones para cualquier interfaz, notificación o mensaje del sistema.

#### 7.14.1 Patrones por momento

| Momento | Patrón dabox |
|---|---|
| Botón de acción primaria | Verbo en imperativo: *"Ver mi ahorro"*, *"Solicitar retiro"*, *"Confirmar mis datos"* |
| Confirmación de acción | *"Listo, [acción] registrada."* (no "Operación exitosa") |
| Error del sistema | *"Algo no salió como esperábamos. Intenta de nuevo o escríbenos."* (no "Error 500") |
| Error del usuario | *"Falta [dato]. Lo necesitamos para [razón]."* (no "Campo requerido") |
| Carga | *"Calculando tu rendimiento…"* (no "Cargando…") |
| Estado vacío | *"Aquí verás tus aportaciones cuando empiece tu primer descuento por nómina."* |
| Confirmación destructiva | *"¿Seguro que quieres bajar tu aportación a $[X]? Aplica desde tu próxima nómina."* |
| Enviado / completado | *"Listo. Recibirás confirmación en tu correo en 5 minutos."* |
| Sin permiso | *"Esta acción la maneja tu RH. Si necesitas ayuda, escríbenos."* |
| Sesión expirada | *"Tu sesión cerró por seguridad. Inicia de nuevo y seguimos."* |
| Mantenimiento | *"Estamos haciendo mejoras. Volvemos en [tiempo]. Tu ahorro sigue creciendo."* |

#### 7.14.2 Reglas duras de microcopy

- Cero "404", "500", "operación", "transacción", "instrumento".
- Cero "lamentamos los inconvenientes" sin acción concreta después.
- Cero exclamaciones múltiples (`!!!`).
- Cero mayúsculas para énfasis (usar **bold**).
- Siempre proponer **siguiente paso** cuando hay error.
- Siempre **un canal humano** disponible cuando algo falla.

#### 7.14.3 Tono por estado emocional del usuario

| Usuario | Tono dabox |
|---|---|
| Usuario nuevo, ansioso | Cálido, paso a paso, "estamos contigo" |
| Usuario experto | Eficiente, sin preámbulo, datos primero |
| Usuario frustrado | Empático sin lloriqueo, acción concreta inmediata |
| Usuario celebrando | Compartir el momento, sin condescendencia |
| Usuario indeciso | Información clara, opciones acotadas, sin presión |

### 7.15 Movimiento y animación

El movimiento de dabox es **calmado y útil**, nunca decorativo. Refleja "ahorro que crece" — pausado, constante, confiable.

#### 7.15.1 Curvas y duraciones

| Token | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrada de elementos |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transiciones bidireccionales |
| `--duration-fast` | 150ms | Hover, focus, micro-feedback |
| `--duration-base` | 250ms | Entradas/salidas estándar |
| `--duration-slow` | 400ms | Transiciones grandes (modal, drawer) |
| `--duration-slowest` | 600ms | Hero, gráficas de crecimiento |

#### 7.15.2 Principios

- **Una cosa a la vez.** No animar 3 elementos al mismo tiempo.
- **Movimiento corto, tranquilizador.** Nada salta, todo se desliza.
- **Datos crecen.** Saldo y rendimiento aparecen con count-up suave (no instantáneo).
- **Cero rebote (bounce).** Genera juguetón, no encaja con marca financiera.
- **Respeto por `prefers-reduced-motion`.** Animaciones se vuelven instantáneas o lineales mínimas si el usuario lo configura.

### 7.16 Arquitectura de marca y co-branding

dabox interactúa con varios actores. Regla de oro: **dabox siempre es la marca principal en cualquier comunicación al cliente final o decisor**. Compass y aliados se mencionan como **socios de la operación**.

#### 7.16.1 Matriz de relaciones de marca

| Relación | Visibilidad pública | Cómo se nombra | Logo |
|---|---|---|---|
| **dabox ↔ empresa matriz** | **Cero** (regla absoluta) | No se menciona | No aparece nunca |
| **dabox ↔ Compass (vehículo)** | Solo en piezas técnicas/legales | "Vehículo institucional Compass" | Solo en propuesta avanzada y FAQ legal |
| **dabox ↔ Credian/Lendera** | En sección "préstamos" únicamente | "En alianza con [aliado]" | Co-brand en flyer del crédito; nunca en marca principal |
| **dabox ↔ Bitso/GBM+** | Solo si se activa | "lleva tu siguiente paso a [aliado]" | Co-brand en módulo de referido |
| **dabox ↔ AC empresa cliente** | En documentación legal | "Caja de ahorro de [nombre AC]" | Logo AC + dabox como operador |
| **dabox ↔ empresa cliente final** | En materiales internos a colaboradores | "[Empresa] te ofrece dabox" | Co-brand 50/50 en bienvenida |

#### 7.16.2 Co-branding con la empresa cliente (escenario más frecuente)

Cuando se comunica a colaboradores que dabox está disponible:

**Composición visual:**
- Logo de la empresa cliente a la izquierda.
- Separador vertical sutil en `#E8E6DC`.
- Logo dabox a la derecha.
- Ambos al **mismo alto óptico**.

**Mensaje:**
> *"En [Empresa], queremos que tu dinero también trabaje. Por eso sumamos dabox: una caja de ahorro digital que crece mes con mes."*

**No hacer:**
- Mezclar colores de la empresa con los de dabox en un mismo gradiente.
- Usar el logo dabox para "validar" otros productos de la empresa.

#### 7.16.3 Cuando un aliado financiero solicita visibilidad

- **Aceptable:** mención en flyer de crédito ("En alianza con [aliado]").
- **Aceptable:** logo en sección "socios" del portal del ahorrador.
- **No aceptable:** co-headline en materiales de adquisición de empresa cliente.
- **No aceptable:** que el aliado mencione "dabox" en su propio marketing sin aprobación escrita.

### 7.17 Plantillas por momento del cliente (ciclo completo)

Mapa de qué pieza generar en cada hito, con marca correctamente aplicada.

| Momento del cliente | Pieza | Audiencia | Reglas de marca específicas |
|---|---|---|---|
| Pre-prospecto | Post LinkedIn, podcast, evento | RH/CFO en frío | Voz Musa, datos, sin pitch directo |
| Prospecto identificado | Connection request + mensaje 1 | Decisor | ≤300 caracteres, contexto + valor |
| Lead caliente | 1-pager + agenda 20 min | Decisor | Hook A o B según calificación |
| En descubrimiento | Resumen post-call con próximos pasos | Decisor | Email semi-formal, agenda anclada |
| Propuesta | Deck + cotización | Comité de decisión | Slide cover Azul dabox, datos en Naranja Acción |
| Comité técnico iniciado | Acta plantilla + condiciones piloto | Decisor + Legal cliente | Tono institucional |
| Firma cerca | Resumen de términos + checklist | Decisor | Profesional cálido, cero adornos |
| Onboarding empresa | Kit RH (FAQ + comunicación + layouts) | RH | Co-brand empresa-dabox |
| Comunicación a colaboradores | Email + WhatsApp + flyer interno | Colaborador | Tono cálido, simple, co-brand |
| Alta del ahorrador | Bienvenida personalizada | Ahorrador | "Bienvenido [nombre], tu dinero ya empezó a trabajar" |
| Primer descuento aplicado | Notificación + portal | Ahorrador | Celebración mesurada, dato concreto |
| Mensual recurrente | Estado de cuenta + tip educativo | Ahorrador | Mismo formato, predecible |
| Trimestral | Reporte ejecutivo a empresa | RH/CFO | Profesional, datos, recomendaciones |
| Ventana de retiro (jul/dic) | Aviso 30/15/3 días antes | Ahorrador | Recordatorio claro, opciones simples |
| Renovación anual | Business review + propuesta renovación | Decisor | Casos de uso, números, plan próximo año |
| Crisis / incidente | Comunicación de incidente | Empresa + Ahorrador | Transparencia radical, plazo concreto |

### 7.18 Brand health KPIs (cómo medir si la marca está sana)

La marca es **un activo que se mide**. La IA debe poder generar este reporte trimestral.

| KPI | Meta año 1 | Cómo se mide |
|---|---|---|
| **Conocimiento de marca asistido** (en cuentas-objetivo) | ≥ 25% al mes 12 | Encuesta a 100 contactos del ICP cada trimestre |
| **NPS ahorrador** | ≥ 50 | Encuesta trimestral en portal + WhatsApp |
| **NPS empresa cliente** | ≥ 60 | Encuesta semestral en business review |
| **Tasa de respuesta a outbound LinkedIn** | ≥ 8% | Mensajes con respuesta / mensajes enviados |
| **Tasa de apertura de email a empresa** | ≥ 35% | Por campaña |
| **Tasa de click en CTA principal de landing** | ≥ 4% | Sesiones con click / sesiones |
| **Menciones espontáneas en prensa/eventos** | ≥ 1/trimestre desde Q3 | Conteo manual |
| **Consistencia de marca interna** | ≥ 90% | Auditoría mensual: muestra de 20 piezas vs. checklist 7.11 |
| **Adherencia a vocabulario regulatorio** | 100% | Cero piezas con palabras prohibidas (auto-scan) |
| **Tiempo de resolución de queja** | ≤ 5 días hábiles | Promedio mensual |

### 7.19 Anti-patrones (lo que NUNCA debe hacer dabox)

#### Anti-patrón 1 — "Banco-ización"
❌ *"En dabox revolucionamos la banca tradicional con productos financieros innovadores."*
**Por qué falla:** "banca", "productos financieros" son palabras prohibidas. dabox **no es** un banco.
✅ *"En dabox simplificamos el ahorro de tu equipo con una caja digital que crece mes con mes."*

#### Anti-patrón 2 — "Promesa irreal"
❌ *"Garantízale a tus colaboradores un rendimiento del 9.5% anual."*
**Por qué falla:** rendimiento es variable. Garantizarlo expone a riesgo regulatorio crítico.
✅ *"Ofrece a tu equipo un ahorro con rendimiento atado a CETES, transparente y sin letra chiquita."*

#### Anti-patrón 3 — "Genérico startup"
❌ *"Somos una fintech mexicana líder, disruptiva, que está revolucionando el ahorro corporativo con tecnología de punta."*
**Por qué falla:** vacío, sin datos, palabras inflables.
✅ *"dabox opera cajas de ahorro digitales para empresas mexicanas. Hoy administramos ahorros de [N] colaboradores en [N] empresas, con rendimiento atado a CETES."*

#### Anti-patrón 4 — "Paternalismo"
❌ *"Educamos a la gente que no sabe ahorrar para que aprenda a no gastar de más."*
**Por qué falla:** condescendiente, juzga al usuario.
✅ *"Ahorrar es un hábito. dabox lo hace simple: descuento automático, rendimiento real, sin pasos extras."*

#### Anti-patrón 5 — "Stock corporativo"
❌ Imagen: apretón de manos genérico, hombres en traje, sonrisas exageradas.
**Por qué falla:** no refleja al ICP real (operarios, sindicatos, RH de PyMEs mexicanas).
✅ Imagen: equipo mixto en planta, edades diversas, contexto operativo, iluminación natural.

#### Anti-patrón 6 — "Saturación naranja"
❌ Pieza con fondo naranja, headline naranja oscuro, CTA naranja claro, gráficos en gradiente.
**Por qué falla:** rompe regla 60-30-10, sobreestimula.
✅ Fondo blanco hueso, heading Azul dabox, CTA único en Naranja Acción.

#### Anti-patrón 7 — "Pitch sin gancho"
❌ *"Te escribo para presentarte los servicios de dabox, una empresa que ofrece soluciones de bienestar financiero…"*
**Por qué falla:** auto-referencial, sin valor para el lector.
✅ *"Hola [nombre], vi que [empresa] crece su plantilla 20% al año. ¿Cómo retienen a la gente operativa hoy? Te escribo porque ayudo a directoras de RH como tú a sumar un beneficio real sin sumar carga."*

### 7.20 Gobernanza de marca

Para mantener consistencia mientras dabox crece:

- **Brand owner único:** Musa (hasta tener Director de Marketing). Todas las nuevas piezas pasan por su revisión hasta el cliente #5.
- **Repositorio único:** carpeta `DABOX/dabox Premium Package/` es la fuente de verdad para logos, fonts, plantillas. Nada se usa "de la versión vieja en el celular".
- **Bitácora de decisiones de marca:** archivo separado donde se registra toda excepción autorizada.
- **Auditoría mensual:** muestra de 20 piezas publicadas en el mes vs. checklist 7.11. Si <90% cumple, sesión de calibración.
- **Actualización de brandbook:** mínimo 1 vez al año o al cumplir un hito (rebranding, expansión, nueva línea).

---

## 8. Aplicación de marca a las secciones operativas (índice cruzado)

Esta sección es un **índice de cómo aplicar el sistema de marca** a cada actividad de las secciones 2–4. La IA debe usar este mapa como referencia rápida.

| Actividad operativa | Sección original | Lineamiento de marca aplicable |
|---|---|---|
| Plantilla LinkedIn | 6.A.1 / 6.A.2 | Voz "Musa hablando" + tono cálido (7.6.3) |
| Email frío comercial | 6.A.3 | Estructura 7.10.1 + tono CFO o RH (7.4) |
| Cobranza B2B nivel amistoso | 6.B.1 | Tono profesional cálido + frases cortas |
| Cobranza B2B nivel formal | 6.B.3 | Tono institucional, sin palabras prohibidas |
| Comunicación de demora a ahorrador | 6.B.4 / 6.C | Tono cálido con transparencia (7.4 + 7.9 ej. 1) |
| Bienvenida al ahorrador | 6.C.1 | Saludo cálido + emoji 1x + estructura 7.10.2 |
| Acuse de queja | 6.C.4 | Empático, sin defensa corporativa (7.9 ej. 3) |
| Reporte mensual a empresa | 4.6.2 | Tono profesional + datos en Naranja Acción + headings Azul dabox |
| Hero de landing | 2.10 / 7.6.4 | Headline ≤ 12 palabras, gradiente naranja, CTA Naranja Acción |
| Slide de pitch | 2.10 / 7.6.5 | ≤ 30 palabras, una idea por slide, jerarquía limpia |
| Crisis o incidente | 4.10 | Transparencia radical, sin culpas, plazo concreto |
| Material para CFO | 2.3 Hook A | Datos, control, trazabilidad, lenguaje serio cálido |
| Material para RH | 2.3 Hook B | Carga liviana, beneficio, retención, lenguaje empático |
| Material para sindicato | 2.8 Frente 3 | Respeto institucional, "compañeros", colectivo |
| Diseño de portal del ahorrador | 5 Producto | Tokens 7.12, accesibilidad 7.13, microcopy 7.14, movimiento 7.15 |
| Texto de UI / notificación / error | 4 Atención | Patrones 7.14.1, reglas duras 7.14.2, tono según estado emocional 7.14.3 |
| Animación de saldo y crecimiento | Producto | Curvas y duraciones 7.15.1, principios 7.15.2 (sin bounce, count-up) |
| Pieza co-brand con empresa cliente | 4.9 / 7.17 | Composición 7.16.2, mensaje plantilla, mismo alto óptico |
| Comunicación con aliado financiero | 3C | Reglas 7.16.3 — co-brand solo en flyer de crédito |
| Materiales por hito del ciclo de cliente | 7.17 | Tabla por momento (pre-prospecto → renovación) |
| Reporte trimestral de salud de marca | Operación | KPIs 7.18 (NPS, conocimiento, consistencia, adherencia) |
| Validación de pieza ambigua | Cualquiera | Comparar contra anti-patrones 7.19 + checklist 7.11 |
| Excepción autorizada al sistema de marca | Gobernanza | Documentar en bitácora 7.20, autorización Musa |
| Especificación de componente UI | Producto | Componentes UI base 7.12.5 (botón, input, card, badge) |
| Definición de paleta para gráfica | Reportería | Solo paleta extendida 7.1; semánticos solo en estados |

---

**Fin del documento.** Esta base de conocimiento es un organismo vivo. Actualizar al cierre de cada mes con aprendizajes operativos, nuevas plantillas, ajustes de SOP y desviaciones documentadas. Cualquier cambio al sistema de marca (sección 7) requiere validación de Musa antes de aplicarse.x-info:           #5C6CA8;  /* Azul medio - notificaciones */
}
```

#### 7.12.2 Escala tipográfica (para web/app)

```css
:root {
  --font-family-base: 'Poppins', 'Arial', sans-serif;

  /* Escala modular (1.25 - tercera mayor) */
  --font-size-xs:    12px;   /* Notas, disclaimers */
  --font-size-sm:    14px;   /* Captions, labels */
  --font-size-base:  16px;   /* Body */
  --font-size-md:    18px;   /* Body grande */
  --font-size-lg:    22px;   /* H4 */
  --font-size-xl:    28px;   /* H3 */
  --font-size-2xl:   36px;   /* H2 */
  --font-size-3xl:   48px;   /* H1 */
  --font-size-4xl:   64px;   /* Hero */

  /* Pesos */
  --font-weight-light:    300;
  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;
  --font-weight-extrabold: 800;
  --font-weight-black:    900;

  /* Interlineado */
  --line-height-tight:   1.2;  /* headlines */
  --line-height-base:    1.5;  /* body */
  --line-height-relaxed: 1.7;  /* lectura larga */
}
```

#### 7.12.3 Escala de espaciado (8pt grid)

dabox usa **base 8px**. Cada espacio es múltiplo de 8 (con escalones intermedios de 4 cuando se necesite):

```
--space-0:   0px
--space-1:   4px    (micro)
--space-2:   8px    (S)
--space-3:   12px
--space-4:   16px   (M — base)
--space-5:   24px
--space-6:   32px   (L)
--space-7:   48px
--space-8:   64px   (XL — separación de secciones)
--space-9:   96px   (XXL — entre bloques de hero)
```

#### 7.12.4 Bordes, radios y sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Inputs, badges |
| `--radius-md` | 8px | Botones, tarjetas pequeñas |
| `--radius-lg` | 16px | Tarjetas grandes, modales |
| `--radius-xl` | 24px | Bloques hero, CTA destacados |
| `--radius-full` | 9999px | Pills, avatars |
| `--shadow-soft` | `0 2px 8px rgba(40,58,127,0.08)` | Tarjetas en reposo |
| `--shadow-medium` | `0 4px 16px rgba(40,58,127,0.12)` | Hover de tarjetas |
| `--shadow-deep` | `0 8px 32px rgba(40,58,127,0.18)` | Modales, dropdowns |

> **Regla:** las sombras siempre tintadas con Azul dabox (no negro puro). Esto mantiene calidez y coherencia.

#### 7.12.5 Componentes UI base (lenguaje visual)

| Componente | Especificación |
|---|---|
| **Botón primario** | Fondo `#FF5A00`, texto blanco, Poppins SemiBold 16px, padding 12×24, radius 8px, hover `#CC4800` |
| **Botón secundario** | Borde 1.5px `#283A7F`, fondo transparente, texto `#283A7F`, hover fondo `#E5E8F0` |
| **Botón terciario** | Solo texto Azul dabox subrayado al hover |
| **Input** | Borde 1px `#B0AEA5`, focus borde 2px `#FF5A00`, padding 12×16, radius 8px |
| **Card** | Fondo `#FAF9F5`, borde 1px `#E8E6DC`, radius 16px, padding 24px, shadow soft |
| **Badge** | Fondo `#FFEFE0`, texto `#FF5A00`, Poppins Medium 12px, radius full, padding 4×12 |
| **Alert success** | Fondo verde 10%, borde verde, texto verde dark |
| **Alert error** | Fondo rojo 10%, borde rojo, texto rojo dark |
| **Tooltip** | Fondo Azul dabox, texto blanco, radius 8px, max-width 280px |

### 7.13 Accesibilidad y contraste (no opcional)

dabox debe cumplir **WCAG 2.1 AA mínimo** en todo material digital. La accesibilidad no es decorativa: el ICP del ahorrador final tiene alfabetización digital media-baja, y muchos consultarán desde celular en condiciones no ideales.

#### 7.13.1 Pares de color y ratios

| Combinación | Ratio | Cumple |
|---|---|---|
| Azul dabox `#283A7F` sobre blanco hueso `#FAF9F5` | 11.6:1 | AAA ✅ |
| Naranja Acción `#FF5A00` sobre blanco hueso | 3.5:1 | AA solo en texto **18pt+ o 14pt bold** ⚠️ |
| Blanco `#FFFFFF` sobre Naranja Acción `#FF5A00` | 3.5:1 | AA solo en texto 18pt+ ⚠️ |
| Blanco sobre Azul dabox `#283A7F` | 11.0:1 | AAA ✅ |
| Texto `#141413` sobre blanco hueso | 17.5:1 | AAA ✅ |
| Azul Suave `#8E9AC2` sobre blanco | 2.9:1 | ❌ **NO usar para texto** |

**Regla aplicada:** el Naranja Acción **nunca se usa para body text largo**. Solo para CTAs (≥18pt o 14pt bold), datos clave grandes, o sobre fondos que mantengan ≥4.5:1.

#### 7.13.2 Reglas de accesibilidad obligatorias

- **Tamaño mínimo de texto interactivo:** 14pt (16pt recomendado).
- **Tamaño mínimo de área tap:** 44×44 px.
- **Foco siempre visible:** outline 2px Naranja Acción + offset 2px en cualquier elemento interactivo.
- **Nunca color como única señal de información:** mostrar también ícono o texto.
- **Alt text obligatorio** en todas las imágenes informativas. Decorativas: `alt=""` explícito.
- **Estados de carga y error con texto**, no solo spinner.
- **Lenguaje claro:** índice de lectura nivel **secundaria** o menor en todo material al ahorrador (Flesch-Huerta ≥ 60).
- **Soporte de lectores de pantalla:** etiquetas ARIA correctas, jerarquía semántica HTML.

### 7.14 Microcopy del producto (UI text patterns)

El microcopy es donde la marca cobra vida en el día a día. La IA debe seguir estos patrones para cualquier interfaz, notificación o mensaje del sistema.

#### 7.14.1 Patrones por momento

| Momento | Patrón dabox |
|---|---|
| Botón de acción primaria | Verbo en imperativo: *"Ver mi ahorro"*, *"Solicitar retiro"*, *"Confirmar mis datos"* |
| Confirmación de acción | *"Listo, [acción] registrada."* (no "Operación exitosa") |
| Error del sistema | *"Algo no salió como esperábamos. Intenta de nuevo o escríbenos."* (no "Error 500") |
| Error del usuario | *"Falta [dato]. Lo necesitamos para [razón]."* (no "Campo requerido") |
| Carga | *"Calculando tu rendimiento…"* (no "Cargando…") |
| Estado vacío | *"Aquí verás tus aportaciones cuando empiece tu primer descuento por nómina."* (no "Sin datos") |
| Confirmación destructiva | *"¿Seguro que quieres bajar tu aportación a $[X]? Aplica desde tu próxima nómina."* |
| Enviado / completado | *"Listo. Recibirás confirmación en tu correo en 5 minutos."* |
| Sin permiso | *"Esta acción la maneja tu RH. Si necesitas ayuda, escríbenos."* (no "Acceso denegado") |
| Sesión expirada | *"Tu sesión cerró por seguridad. Inicia de nuevo y seguimos."* |
| Mantenimiento | *"Estamos haciendo mejoras. Volvemos en [tiempo]. Tu ahorro sigue creciendo."* |

#### 7.14.2 Reglas duras de microcopy

- Cero "404", "500", "operación", "transacción", "instrumento".
- Cero "lamentamos los inconvenientes" sin acción concreta después.
- Cero exclamaciones múltiples (`!!!`).
- Cero mayúsculas para énfasis (usar **bold**).
- Siempre proponer **siguiente paso** cuando hay error.
- Siempre **un canal humano** disponible cuando algo falla.

#### 7.14.3 Tono por estado emocional del usuario

| Usuario | Tono dabox |
|---|---|
| Usuario nuevo, ansioso | Cálido, paso a paso, "estamos contigo" |
| Usuario experto | Eficiente, sin preámbulo, datos primero |
| Usuario frustrado | Empático sin lloriqueo, acción concreta inmediata |
| Usuario celebrando | Compartir el momento, sin condescendencia ("bien hecho", no "wow eres increíble") |
| Usuario indeciso | Información clara, opciones acotadas, sin presión |

### 7.15 Movimiento y animación

El movimiento de dabox es **calmado y útil**, nunca decorativo. Refleja "ahorro que crece" — pausado, constante, confiable.

#### 7.15.1 Curvas y duraciones

| Token | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrada de elementos (sensación de llegada) |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transiciones bidireccionales |
| `--duration-fast` | 150ms | Hover, focus, micro-feedback |
| `--duration-base` | 250ms | Entradas/salidas estándar |
| `--duration-slow` | 400ms | Transiciones grandes (modal, drawer) |
| `--duration-slowest` | 600ms | Hero, gráficas de crecimiento |

#### 7.15.2 Principios

- **Una cosa a la vez.** No animar 3 elementos al mismo tiempo.
- **Movimiento corto, tranquilizador.** Nada salta, todo se desliza.
- **Datos crecen.** Números importantes (saldo, rendimiento) aparecen con count-up suave (no instantáneo).
- **Cero rebote (bounce) en marca financiera.** Genera sensación juguetona, no encaja con confianza.
- **Respeto por `prefers-reduced-motion`.** Si el usuario tiene reducción de movimiento activada, animaciones se vuelven instantáneas o lineales mínimas.

### 7.16 Arquitectura de marca y co-branding

dabox interactúa con varios actores en su modelo. La regla de oro: **dabox siempre es la marca principal en cualquier comunicación al cliente final o decisor**. Compass y aliados financieros se mencionan únicamente como **socios de la operación**.

#### 7.16.1 Matriz de relaciones de marca

| Relación | Visibilidad pública | Cómo se nombra | Logo |
|---|---|---|---|
| **dabox ↔ empresa matriz** | **Cero** (regla absoluta) | No se menciona en ningún material | No aparece nunca |
| **dabox ↔ Compass (vehículo)** | Solo en piezas técnicas/legales | "Vehículo institucional Compass" | Solo en propuesta avanzada y FAQ legal |
| **dabox ↔ Credian/Lendera (aliados crédito)** | En sección "préstamos" únicamente | "En alianza con [aliado]" | Co-brand en flyer del crédito; **nunca** en marca dabox principal |
| **dabox ↔ Bitso/GBM+ (referidos inversión)** | Solo si se activa | Banner "lleva tu siguiente paso a [aliado]" | Co-brand en módulo de referido |
| **dabox ↔ AC empresa cliente** | En documentación legal | "Caja de ahorro de [nombre AC]" | Logo AC + dabox como operador |
| **dabox ↔ empresa cliente final** | En materiales internos a colaboradores | "[Empresa] te ofrece dabox" | Co-brand 50/50 en bienvenida al colaborador |

#### 7.16.2 Co-branding con la empresa cliente (escenario más frecuente)

Cuando se comunica a los colaboradores de una empresa que dabox está disponible:

**Composición visual:**
- Logo de la empresa cliente a la izquierda.
- Separador vertical sutil en `#E8E6DC`.
- Logo dabox a la derecha.
- Ambos al **mismo alto óptico** (no necesariamente píxeles).

**Mensaje:**
> *"En [Empresa], queremos que tu dinero también trabaje. Por eso sumamos dabox: una caja de ahorro digital que crece mes con mes."*

**No hacer:**
- Mezclar colores de marca de la empresa con los de dabox en un mismo gradiente.
- Usar el logo dabox para "validar" otros productos de la empresa que no sean caja de ahorro.

#### 7.16.3 Cuando un aliado financiero solicita visibilidad

Si Credian/Lendera/etc. piden mayor visibilidad como condición:

- **Aceptable:** mención en flyer de crédito ("Crédito conjunto en alianza con [aliado]").
- **Aceptable:** logo en sección de "socios" del portal del ahorrador.
- **No aceptable:** co-headline en materiales de adquisición de empresa cliente.
- **No aceptable:** que el aliado mencione "dabox" en su propio marketing sin aprobación escrita.

### 7.17 Plantillas por momento del cliente (ciclo completo)

Mapa de qué pieza generar en cada hito, con marca correctamente aplicada.

| Momento del cliente | Pieza | Audiencia | Reglas de marca específicas |
|---|---|---|---|
| Pre-prospecto | Post LinkedIn, podcast, evento | RH/CFO en frío | Voz Musa, datos, sin pitch directo |
| Prospecto identificado | Connection request + mensaje 1 | Decisor | ≤300 caracteres, contexto + valor |
| Lead caliente | 1-pager + agenda 20 min | Decisor | Hook A o B según calificación |
| En descubrimiento | Resumen post-call con próximos pasos | Decisor | Email semi-formal, agenda anclada |
| Propuesta | Deck + cotización | Comité de decisión | Slide cover Azul dabox, datos en Naranja Acción |
| Comité técnico iniciado | Acta plantilla + condiciones piloto | Decisor + Legal cliente | Tono institucional, nada de "marketing" |
| Firma cerca | Resumen de términos + checklist próximos pasos | Decisor | Profesional cálido, cero adornos |
| Onboarding empresa | Kit RH (FAQ + comunicación interna + layouts) | RH | Co-brand empresa-dabox |
| Comunicación a colaboradores | Email + WhatsApp + flyer interno | Colaborador | Tono cálido, simple, co-brand |
| Alta del ahorrador | Bienvenida personalizada | Ahorrador | "Bienvenido [nombre], tu dinero ya empezó a trabajar" |
| Primer descuento aplicado | Notificación + portal | Ahorrador | Celebración mesurada, dato concreto |
| Mensual recurrente | Estado de cuenta + tip educativo | Ahorrador | Mismo formato, predecible, calmante |
| Trimestral | Reporte ejecutivo a empresa | RH/CFO | Profesional, datos, recomendaciones accionables |
| Ventana de retiro (jul/dic) | Aviso 30/15/3 días antes | Ahorrador | Recordatorio claro, opciones simples |
| Renovación anual | Business review + propuesta renovación | Decisor | Casos de uso, números acumulados, plan próximo año |
| Crisis / incidente | Comunicación de incidente | Empresa + Ahorrador | Transparencia radical, plazo concreto |

### 7.18 Brand health KPIs (cómo medir si la marca está sana)

La marca no es solo un logo. Es **un activo que se mide**. La IA debe poder generar este reporte trimestral.

| KPI | Meta año 1 | Cómo se mide |
|---|---|---|
| **Conocimiento de marca asistido** (en cuentas-objetivo) | ≥ 25% al mes 12 | Encuesta a 100 contactos del ICP cada trimestre |
| **NPS ahorrador** | ≥ 50 | Encuesta trimestral en portal + WhatsApp |
| **NPS empresa cliente** | ≥ 60 | Encuesta semestral en business review |
| **Tasa de respuesta a outbound LinkedIn** | ≥ 8% | Mensajes con respuesta / mensajes enviados |
| **Tasa de apertura de email a empresa** | ≥ 35% | Por campaña |
| **Tasa de click en CTA principal de landing** | ≥ 4% | Sesiones que dan click / sesiones totales |
| **Menciones espontáneas en prensa/eventos** | ≥ 1/trimestre desde Q3 | Conteo manual de menciones |
| **Consistencia de marca interna** | ≥ 90% | Auditoría mensual: muestra de 20 piezas vs. checklist 7.11 |
| **Adherencia a vocabulario regulatorio** | 100% | Cero piezas con palabras prohibidas (auto-scan) |
| **Tiempo de resolución de queja** | ≤ 5 días hábiles | Promedio mensual desde tickets |

### 7.19 Anti-patrones (lo que se ve mucho y NUNCA debe hacer dabox)

Para entrenar a la IA con ejemplos negativos contundentes:

#### Anti-patrón 1 — "Banco-ización"
❌ *"En dabox revolucionamos la banca tradicional con productos financieros innovadores."*
**Por qué falla:** "banca", "productos financieros" son palabras prohibidas. dabox **no es** un banco.
✅ *"En dabox simplificamos el ahorro de tu equipo con una caja digital que crece mes con mes."*

#### Anti-patrón 2 — "Promesa irreal"
❌ *"Garantízale a tus colaboradores un rendimiento del 9.5% anual."*
**Por qué falla:** rendimiento es variable, atado a CETES. Garantizarlo expone a riesgo regulatorio crítico.
✅ *"Ofrece a tu equipo un ahorro con rendimiento atado a CETES, transparente y sin letra chiquita."*

#### Anti-patrón 3 — "Genérico startup"
❌ *"Somos una fintech mexicana líder, disruptiva, que está revolucionando el ahorro corporativo con tecnología de punta."*
**Por qué falla:** vacío, sin datos concretos, palabras inflables.
✅ *"dabox opera cajas de ahorro digitales para empresas mexicanas. Hoy administramos ahorros de [N] colaboradores en [N] empresas, con rendimiento atado a CETES."*

#### Anti-patrón 4 — "Paternalismo"
❌ *"Educamos a la gente que no sabe ahorrar para que aprenda a no gastar de más."*
**Por qué falla:** condescendiente, juzga al usuario, posicionamiento "elite vs. masa".
✅ *"Ahorrar es un hábito. dabox lo hace simple: descuento automático, rendimiento real, sin pasos extras."*

#### Anti-patrón 5 — "Stock corporativo"
❌ Imagen: apretón de manos genérico de hombres en traje, fondo blanco azul, sonrisas exageradas.
**Por qué falla:** no refleja al ICP real (operarios, sindicatos, RH de PyMEs mexicanas).
✅ Imagen: equipo mixto en planta, edades diversas, contexto operativo o de oficina mediana, iluminación natural.

#### Anti-patrón 6 — "Saturación naranja"
❌ Pieza con fondo naranja, headline naranja oscuro, CTA naranja claro, gráficos en gradiente de naranjas.
**Por qué falla:** rompe regla 60-30-10, sobreestimula, impide jerarquía.
✅ Fondo blanco hueso, heading Azul dabox, CTA único en Naranja Acción, datos clave en Naranja Acción.

#### Anti-patrón 7 — "Pitch sin gancho"
❌ *"Te escribo para presentarte los servicios de dabox, una empresa que ofrece soluciones de bienestar financiero…"*
**Por qué falla:** auto-referencial, sin valor para el lector, formato de cold-email obvio.
✅ *"Hola [nombre], vi en tu perfil que [empresa] crece su plantilla 20% al año. ¿Cómo retienen a la gente operativa hoy? Te escribo porque ayudo a directoras de RH como tú a sumar un beneficio real sin sumar carga."*

### 7.20 Gobernanza de marca

Para mantener consistencia mientras dabox crece:

- **Brand owner único:** Musa (hasta tener Director de Marketing). Todas las nuevas piezas pasan por su revisión hasta el cliente #5.
- **Repositorio único:** carpeta `DABOX/dabox Premium Package/` es la fuente de verdad para logos, fonts, plantillas. Nada se usa "de la versión vieja en el celular".
- **Bitácora de decisiones de marca:** archivo separado donde se registra toda excepción autorizada (ej. una pieza que rompió el 60-30-10 con justificación).
- **Auditoría mensual:** muestra de 20 piezas publicadas en el mes vs. checklist 7.11. Si <90% cumple, se hace sesión de calibración con el equipo.
- **Actualización de brandbook:** mínimo 1 vez al año o al cumplir un hito (rebranding, expansión, nueva línea de producto).

---

## 8. Aplicación de marca a las secciones operativas (índice cruzado)

Esta sección es un **índice de cómo aplicar el sistema de marca** a cada actividad de las secciones 2–4. La IA debe usar este mapa como referencia rápida.

| Actividad operativa | Sección original | Lineamiento de marca aplicable |
|---|---|---|
| Plantilla LinkedIn | 6.A.1 / 6.A.2 | Voz "Musa hablando" + tono cálido (7.6.3) |
| Email frío comercial | 6.A.3 | Estructura 7.10.1 + tono CFO o RH (7.4) |
| Cobranza B2B nivel amistoso | 6.B.1 | Tono profesional cálido + frases cortas |
| Cobranza B2B nivel formal | 6.B.3 | Tono institucional, sin palabras prohibidas |
| Comunicación de demora a ahorrador | 6.B.4 / 6.C | Tono cálido con transparencia (7.4 + 7.9 ej. 1) |
| Bienvenida al ahorrador | 6.C.1 | Saludo cálido + emoji 1x + estructura 7.10.2 |
| Acuse de queja | 6.C.4 | Empático, sin defensa corporativa (7.9 ej. 3) |
| Reporte mensual a empresa | 4.6.2 | Tono profesional + datos en Naranja Acción + headings Azul dabox |
| Hero de landing | 2.10 / 7.6.4 | Headline ≤ 12 palabras, gradiente naranja, CTA Naranja Acción |
| Slide de pitch | 2.10 / 7.6.5 | ≤ 30 palabras, una idea por slide, jerarquía limpia |
| Crisis o incidente | 4.10 | Transparencia radical, sin culpas, plazo concreto |
| Material para CFO | 2.3 Hook A | Datos, control, trazabilidad, lenguaje serio cálido |
| Material para RH | 2.3 Hook B | Carga liviana, beneficio, retención, lenguaje empático |
| Material para sindicato | 2.8 Frente 3 | Respeto institucional, "compañeros", colectivo |
| Diseño de portal del ahorrador | 5 Producto / Roadmap | Tokens 7.12, accesibilidad 7.13, microcopy 7.14, movimiento 7.15 |
| Texto de UI / notificación / error del sistema | 4 Atención | Patrones 7.14.1, reglas duras 7.14.2, tono según estado emocional 7.14.3 |
| Animación de saldo y crecimiento en portal | Producto | Curvas y duraciones 7.15.1, principios 7.15.2 (sin bounce, count-up) |
| Pieza co-brand con empresa cliente | 4.9 / 7.17 | Composición 7.16.2, mensaje plantilla, mismo alto óptico de logos |
| Comunicación con aliado financiero (Credian/Lendera) | 3C | Reglas 7.16.3 — co-brand solo en flyer de crédito |
| Materiales por hito del ciclo de cliente | 7.17 | Tabla por momento (pre-prospecto → renovación) |
| Reporte trimestral de salud de marca | Operación | KPIs 7.18 (NPS, conocimiento, consistencia, adherencia) |
| Validación de pieza ambigua antes de publicar | Cualquiera | Comparar contra anti-patrones 7.19 + checklist 7.11 |
| Excepción autorizada al sistema de marca | Gobernanza | Documentar en bitácora 7.20, autorización Musa |
| Especificación de componente para desarrollo | Producto | Componentes UI base 7.12.5 (botón, input, card, badge) |
| Definición de paleta para gráfica/dato visualizado | Reportería | Solo paleta extendida 7.1; semánticos solo en estados |

---

**Fin del documento.** Esta base de conocimiento es un organismo vivo. Actualizar al cierre de cada mes con aprendizajes operativos, nuevas plantillas, ajustes de SOP y desviaciones documentadas. Cualquier cambio al sistema de marca (sección 7) requiere validación de Musa antes de aplicarse.





