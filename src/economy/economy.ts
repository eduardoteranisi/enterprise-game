import type { GameState } from '../core/state'

export const CASH_INCOME_PER_SECOND = 50

export function updateEconomy(state: GameState, deltaSeconds: number): void {
  state.cash += CASH_INCOME_PER_SECOND * deltaSeconds
}
