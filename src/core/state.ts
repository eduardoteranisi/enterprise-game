export interface Employee {
  name: string
  salaryPerSecond: number
}

export interface GameState {
  cash: number
  employees: Employee[]
}

const INITIAL_CASH = 10_000

export function createInitialState(): GameState {
  return {
    cash: INITIAL_CASH,
    employees: [{ name: 'Ana Silva', salaryPerSecond: 5 }],
  }
}
