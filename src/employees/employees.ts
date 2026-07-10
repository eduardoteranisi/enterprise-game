import type { GameState } from '../core/state'

export function updateEmployees(state: GameState, deltaSeconds: number): void {
  for (const employee of state.employees) {
    state.cash -= employee.salaryPerSecond * deltaSeconds
  }
}
