import type { GameState } from '../core/state'

export function renderHud(ctx: CanvasRenderingContext2D, state: GameState): void {
  const formattedCash = Math.floor(state.cash).toLocaleString('pt-BR')

  ctx.font = '20px sans-serif'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(`Cash: R$ ${formattedCash}`, 20, 32)
}
