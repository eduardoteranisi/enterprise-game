export interface Employee {
  name: string
  salaryPerSecond: number
}

export interface GameEvent {
  message: string
  amount: number
  timestamp: number
}

export interface GameState {
  cash: number
  employees: Employee[]
  eventTimer: number
  lastEvent: GameEvent | null
}

const INITIAL_CASH = 10_000

export function createInitialState(): GameState {
  return {
    cash: INITIAL_CASH,
    employees: [{ name: 'Ana Silva', salaryPerSecond: 5 }],
    eventTimer: 0,
    lastEvent: null,
  }
}
