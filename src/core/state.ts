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

export const HIRE_COST = 500

export function createInitialState(): GameState {
  return {
    cash: INITIAL_CASH,
    employees: [{ name: 'Ana Silva', salaryPerSecond: 5 }],
    eventTimer: 0,
    lastEvent: null,
  }
}

export function contratarFuncionario(state: GameState, employee: Employee): boolean {
  if (state.cash < HIRE_COST) {
    return false
  }

  state.cash -= HIRE_COST
  state.employees.push(employee)
  return true
}
