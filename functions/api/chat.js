// ============================================
// CONFIGURACIÓN DEL NEGOCIO — EDITAR SOLO ESTO
// ============================================
const NEGOCIO = {
  nombre: "JS Competición Granada",
  tipo: "taller de reprogramación y banco de potencia",
  ciudad: "Albolote, Granada",
  direccion: "C. Huétor Vega, 5 (Nave 5), 18220 Albolote, Granada",
  telefono: "692 56 82 16",
  telefono2: "692 56 82 16",
  whatsapp: "34692568216",
  horario: "Lunes a viernes 8:00-16:00. Sábado y domingo cerrado.",
  maps: "https://www.google.com/maps/place/TALLERES+JS+COMPETICI%C3%93N+GRANADA/@37.2205527,-3.6416041,1201m/data=!3m1!1e3!4m6!3m5!1s0xd71fdd21c98cd01:0x341a7bd7e386036c!8m2!3d37.2205527!4d-3.6416041!16s%2Fg%2F11pbdpgvrq",
  valoracion: "4,8 sobre 5 con 446 reseñas en Google",
  servicios: `- Reprogramación de centralita Stage 1 y Stage 2
- Banco de potencia DYNOJET (medición real de potencia y par)
- Electrónica DSG: deslimitación de par
- Instalación de downpipe y sistemas de escape
- Mantenimiento de motor completo: aceite, filtros, bujías
- Diagnóstico y asesoramiento técnico
- Especialistas BMW, MINI y grupo VAG (Volkswagen, Audi, Seat, Škoda)
- Acceso y aparcamiento adaptados`,
  instrucciones_extra: `- Para urgencias, recomienda llamar al teléfono del negocio
- NUNCA des ni inventes un email de contacto: no hay uno confirmado. Usa siempre el teléfono/WhatsApp o la agenda propia.
- NUNCA des una cifra concreta de caballos (CV) o Nm ganados con la reprogramación. Explica que se mide en el banco de potencia DYNOJET y se confirma con el vehículo real.
- Si preguntan por marcas: solo BMW, MINI y grupo VAG (Volkswagen, Audi, Seat, Škoda). No digas que se trabaja con "todas las marcas".`
}
// ============================================
// FIN CONFIGURACIÓN — NO EDITAR LO DE ABAJO
// ============================================

const SYSTEM_PROMPT = `Eres el asistente virtual de ${NEGOCIO.nombre}, ${NEGOCIO.tipo} de confianza en ${NEGOCIO.ciudad} con ${NEGOCIO.valoracion}.

Ayudas a los clientes con:
- Información sobre reprogramación Stage 1/Stage 2, banco de potencia DYNOJET y electrónica DSG
- Orientación sobre su vehículo y qué necesita
- Agendar citas en el taller de forma automática
- Especialistas BMW, MINI y grupo VAG (Volkswagen, Audi, Seat, Škoda)

Servicios principales:
${NEGOCIO.servicios}

Datos de contacto:
- Dirección: ${NEGOCIO.direccion}
- Teléfono / WhatsApp: ${NEGOCIO.telefono}

Horario: ${NEGOCIO.horario}

IDENTIDAD: Habla SIEMPRE en primera persona del plural: "nuestro taller", "te atendemos", "hacemos", "somos". NUNCA uses tercera persona como "el taller", "ellos", "escríbeles".

INTENCIÓN COMERCIAL — MUY IMPORTANTE:
Tu objetivo principal es CERRAR CITAS, no solo responder dudas. Después de cada respuesta informativa, intenta mover al cliente hacia una cita concreta.
Ejemplos de cierre activo:
- Si pregunta por la reprogramación de su modelo: explica Stage 1/Stage 2 y el banco DYNOJET Y di "¿Te busco un hueco esta semana para revisarlo y medir la ganancia real?"
- Si menciona una marca/modelo específico (BMW, MINI, VAG): "Trabajamos con esa marca sin problema. ¿Quieres que te reservemos un hueco esta semana?"
- Si describe síntomas ("humo", "ruido", "no arranca"): da orientación Y di "Eso hay que verlo. ¿Te agendo cita urgente para hoy o mañana?"
- Si ya mostró interés dos veces sin pedir cita: propón directamente "Puedo reservarte hueco ahora mismo, ¿lo hago?"

CITAS — FLUJO OBLIGATORIO:
Antes de buscar huecos, pregunta SIEMPRE qué servicio necesita (reprogramación Stage 1/2, banco de potencia, electrónica DSG, downpipe/escape, mantenimiento, diagnóstico, etc. — de la lista de servicios) si no lo ha dicho ya. No agendes un hueco genérico sin saber para qué es.
Cuando alguien quiera pedir cita, intenta primero reservar aquí mismo: consulta huecos, muestra 3-4 opciones concretas de fecha y hora, pide nombre, TELÉFONO y email, crea la cita.
Solo si el cliente duda o pide hablar con alguien, ofrece el WhatsApp como alternativa: https://wa.me/${NEGOCIO.whatsapp}
Datos obligatorios para la cita: SERVICIO solicitado, nombre completo, TELÉFONO de contacto y email. Si falta cualquiera de estos, pídelo explícitamente y espera la respuesta antes de reservar.
REGLA INQUEBRANTABLE: solo puedes decir que la cita está reservada/confirmada DESPUÉS de recibir success:true como resultado real de la herramienta create_booking. Está PROHIBIDO decir "listo", "confirmado" o similar sin haber ejecutado create_booking con éxito. Si create_booking devuelve un error, dilo con naturalidad y ofrece el WhatsApp como alternativa — nunca finjas que se reservó.
Confirma siempre con día, hora y que recibirán confirmación. Tras confirmar añade el WhatsApp solo para cambios: https://wa.me/${NEGOCIO.whatsapp}
NUNCA menciones "Cal.com", "plataforma" ni ningún software externo. Di siempre "nuestra agenda" o "aquí mismo".

REGLA ANTI-TELÉFONO — MUY IMPORTANTE:
NUNCA respondas con "llámanos al teléfono" como primera opción. Intenta siempre resolver la duda tú mismo con información útil. Solo da el teléfono si: (a) la avería requiere inspección física urgente o parece peligrosa, (b) el cliente lo pide explícitamente, o (c) llevas tres mensajes sin poder ayudar. El teléfono es el último recurso, no el primero.

PREGUNTAS DE SEGUIMIENTO:
Si el cliente describe un síntoma vago o falta información, haz UNA pregunta concreta antes de dar orientación. Ejemplos:
- "¿Qué marca y modelo tienes?"
- "¿Cuánto tiempo llevas notando ese problema?"
- "¿Tienes alguna luz de avería encendida en el salpicadero?"
Esto demuestra que el asistente entiende de coches, no que es un bot genérico.

OBJETIVO DE CONVERSIÓN:
Tu objetivo principal es convertir conversaciones en citas o contactos cualificados cuando sea apropiado y natural. Cuando hayas dado información útil, propón la cita como siguiente paso lógico. NO repitas el cierre más de una vez si el cliente no muestra interés. No resultes agresivo ni repetitivo.

INSTRUCCIONES:
- Habla en español, tono cercano y profesional
- Máximo 3-4 frases por respuesta
- No tenemos tarifas fijas publicadas ni cifras de potencia genéricas. Si preguntan por precio o ganancia de potencia, explica que depende del modelo y el nivel (Stage 1/Stage 2) o del tipo de trabajo, y que se confirma con el diagnóstico o se mide en el banco DYNOJET. Nunca inventes un número.
- Cuando el cliente quiera cita, usa el sistema de agendamiento
${NEGOCIO.instrucciones_extra}

FORMATO ESTRICTO:
- NUNCA uses markdown: sin asteriscos (*), sin ** negrita **, sin ## títulos, sin guiones (-) para listas
- Para énfasis usa MAYÚSCULAS (ej: GRATIS, SIN COMPROMISO, PRESUPUESTO CERRADO)
- Puedes usar emojis cuando sea natural`

const tools = [
  {
    name: "get_available_slots",
    description: "Consulta huecos libres para cita. Úsala cuando el cliente quiera pedir cita.",
    input_schema: {
      type: "object",
      properties: {
        start_date: { type: "string", description: "Fecha inicio en YYYY-MM-DD" },
        end_date: { type: "string", description: "Fecha fin en YYYY-MM-DD (7 días después)" }
      },
      required: ["start_date", "end_date"]
    }
  },
  {
    name: "create_booking",
    description: "Crea la cita cuando el cliente confirmó servicio, hora, nombre, teléfono y email.",
    input_schema: {
      type: "object",
      properties: {
        start_datetime: { type: "string", description: "Fecha y hora ISO 8601 UTC. España verano = UTC+2 (9:00 Madrid = 07:00Z)" },
        attendee_name: { type: "string", description: "Nombre del cliente" },
        attendee_email: { type: "string", description: "Email del cliente" },
        attendee_phone: { type: "string", description: "Teléfono de contacto del cliente" },
        service: { type: "string", description: "Servicio o reparación que solicita el cliente" }
      },
      required: ["start_datetime", "attendee_name", "attendee_email", "attendee_phone", "service"]
    }
  }
]

async function getAvailableSlots(input, calApiKey, eventTypeId) {
  const url = `https://api.cal.com/v2/slots?eventTypeId=${eventTypeId}&start=${input.start_date}&end=${input.end_date}&timeZone=Europe/Madrid`
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${calApiKey}`, 'cal-api-version': '2024-09-04' }
  })
  const data = await res.json()
  if (!res.ok) return { error: 'No se pudieron obtener huecos' }
  const formatted = {}
  for (const [date, slots] of Object.entries(data.data)) {
    formatted[date] = slots.slice(0, 20).map(slot => ({
      time: new Date(slot.start).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }),
      iso: slot.start
    }))
  }
  return { available_slots: formatted }
}

async function createBooking(input, calApiKey, eventTypeId) {
  const res = await fetch('https://api.cal.com/v2/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${calApiKey}`,
      'cal-api-version': '2024-08-13'
    },
    body: JSON.stringify({
      eventTypeId: parseInt(eventTypeId),
      start: input.start_datetime,
      attendee: { name: input.attendee_name, email: input.attendee_email, timeZone: 'Europe/Madrid', language: 'es' },
      metadata: { phone: input.attendee_phone || '', servicio: input.service || '' }
    })
  })
  const data = await res.json()
  if (!res.ok) return { error: 'No se pudo crear la cita', details: data }
  return { success: true, booking_id: data.data.uid, start: data.data.start, title: data.data.title }
}

async function checkRateLimit(kv, ip, sessionId) {
  if (!kv) return true
  const now = new Date()
  const hour = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`
  const day = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}`
  const [ipCount, sessionCount, globalCount] = await Promise.all([
    kv.get(`ip:${ip}:${hour}`).then(v => parseInt(v || '0')),
    kv.get(`session:${sessionId}:${hour}`).then(v => parseInt(v || '0')),
    kv.get(`global:${day}`).then(v => parseInt(v || '0'))
  ])
  if (ipCount >= 12 || sessionCount >= 12 || globalCount >= 300) return false
  await Promise.all([
    kv.put(`ip:${ip}:${hour}`, String(ipCount + 1), { expirationTtl: 3600 }),
    kv.put(`session:${sessionId}:${hour}`, String(sessionCount + 1), { expirationTtl: 3600 }),
    kv.put(`global:${day}`, String(globalCount + 1), { expirationTtl: 86400 })
  ])
  return true
}

export async function onRequestPost(context) {
  const { request, env } = context
  try {
    const { messages, sessionId } = await request.json()
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const allowed = await checkRateLimit(env.RATE_LIMIT_KV, ip, sessionId || 'anon')
    if (!allowed) {
      return Response.json(
        { reply: `Has alcanzado el límite de mensajes por ahora. Para seguir hablando, escríbenos por WhatsApp: https://wa.me/${NEGOCIO.whatsapp}` },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
    }
    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: 'messages array required' }, { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } })
    }
    let currentMessages = [...messages]
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Madrid' })
    const systemWithDate = SYSTEM_PROMPT + `\n\nFECHA ACTUAL: Hoy es ${today}. Úsala para calcular fechas relativas.`
    const MAX_TOOL_ROUNDS = 5
    for (let round = 0; round <= MAX_TOOL_ROUNDS; round++) {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1024,
          system: [{ type: "text", text: systemWithDate, cache_control: { type: "ephemeral" } }],
          messages: currentMessages,
          tools
        })
      })
      const data = await response.json()
      if (!response.ok) return Response.json({ error: data }, { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } })
      if (data.stop_reason !== 'tool_use') {
        const textBlock = data.content.find(b => b.type === 'text')
        return Response.json(
          { reply: textBlock ? textBlock.text : 'Lo siento, hubo un problema.' },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        )
      }
      if (round === MAX_TOOL_ROUNDS) {
        return Response.json(
          { reply: `Estoy teniendo problemas para completar la reserva. Escríbenos directamente por WhatsApp: https://wa.me/${NEGOCIO.whatsapp} 💬` },
          { headers: { 'Access-Control-Allow-Origin': '*' } }
        )
      }
      const toolUse = data.content.find(b => b.type === 'tool_use')
      let toolResult
      if (toolUse.name === 'get_available_slots') {
        toolResult = await getAvailableSlots(toolUse.input, env.CAL_API_KEY, env.CAL_EVENT_TYPE_ID)
      } else if (toolUse.name === 'create_booking') {
        toolResult = await createBooking(toolUse.input, env.CAL_API_KEY, env.CAL_EVENT_TYPE_ID)
      } else {
        toolResult = { error: 'Herramienta no encontrada' }
      }
      currentMessages.push({ role: 'assistant', content: data.content })
      currentMessages.push({
        role: 'user',
        content: [{ type: 'tool_result', tool_use_id: toolUse.id, content: JSON.stringify(toolResult) }]
      })
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}

