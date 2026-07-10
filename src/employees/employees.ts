import type { GameState } from '../core/state'
import { contratarFuncionario } from '../core/state'

export function updateEmployees(state: GameState, deltaSeconds: number): void {
  for (const employee of state.employees) {
    state.cash -= employee.salaryPerSecond * deltaSeconds
  }
}

const CANDIDATE_NAMES = ['Bruno Costa', 'Carla Souza', 'Diego Alves', 'Fernanda Lima', 'Gustavo Melo']

const DEFAULT_SALARY_PER_SECOND = 5

function generateCandidate(state: GameState): { name: string; salaryPerSecond: number } {
  const name = CANDIDATE_NAMES[state.employees.length % CANDIDATE_NAMES.length]
  return { name, salaryPerSecond: DEFAULT_SALARY_PER_SECOND }
}

export function hireEmployee(state: GameState): boolean {
  return contratarFuncionario(state, generateCandidate(state))
}
