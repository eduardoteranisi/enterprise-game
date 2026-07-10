export interface Employee {
  name: string
  salaryPerSecond: number
}

export interface GameState {
  cash: number
  employees: Employee[]
}

const INITIAL_CASH = 10_000

export const HIRE_COST = 500

export function createInitialState(): GameState {
  return {
    cash: INITIAL_CASH,
    employees: [{ name: 'Ana Silva', salaryPerSecond: 5 }],
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
