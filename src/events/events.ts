import type { GameState } from '../core/state'

const EVENT_CHECK_INTERVAL_SECONDS = 8
const EVENT_TRIGGER_CHANCE = 0.4

interface EventDefinition {
  message: string
  minAmount: number
  maxAmount: number
}

const POSSIBLE_EVENTS: EventDefinition[] = [
  { message: 'Bônus de contrato', minAmount: 200, maxAmount: 800 },
  { message: 'Imprevisto', minAmount: -500, maxAmount: -100 },
]

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

export function updateEvents(state: GameState, deltaSeconds: number): void {
  state.eventTimer += deltaSeconds

  if (state.eventTimer < EVENT_CHECK_INTERVAL_SECONDS) {
    return
  }

  state.eventTimer = 0

  if (Math.random() > EVENT_TRIGGER_CHANCE) {
    return
  }

  const definition = POSSIBLE_EVENTS[Math.floor(Math.random() * POSSIBLE_EVENTS.length)]
  const amount = Math.round(randomBetween(definition.minAmount, definition.maxAmount))

  state.cash += amount
  state.lastEvent = {
    message: definition.message,
    amount,
    timestamp: performance.now(),
  }
}
