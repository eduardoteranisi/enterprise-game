export interface GameState {
  cash: number
}

const INITIAL_CASH = 10_000

export function createInitialState(): GameState {
  return {
    cash: INITIAL_CASH,
  }
}
