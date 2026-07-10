import type { GameState } from '../core/state'

interface HudItem {
  label: string
  value: string
}

const HUD_HEIGHT = 48
const HUD_PADDING_X = 20
const HUD_ITEM_GAP = 32
const HUD_BACKGROUND = 'rgba(15, 17, 21, 0.75)'
const HUD_TEXT_COLOR = '#f5f5f5'
const HUD_FONT = '600 16px system-ui, sans-serif'

function buildHudItems(state: GameState): HudItem[] {
  const formattedCash = Math.floor(state.cash).toLocaleString('pt-BR')

  return [
    { label: 'Caixa', value: `R$ ${formattedCash}` },
    // Próximos itens (ex: número de funcionários) entram aqui.
  ]
}

export function renderHud(ctx: CanvasRenderingContext2D, state: GameState): void {
  const canvasWidth = ctx.canvas.width
  const items = buildHudItems(state)

  ctx.save()

  ctx.fillStyle = HUD_BACKGROUND
  ctx.fillRect(0, 0, canvasWidth, HUD_HEIGHT)

  ctx.font = HUD_FONT
  ctx.textBaseline = 'middle'
  ctx.fillStyle = HUD_TEXT_COLOR

  let x = HUD_PADDING_X
  const y = HUD_HEIGHT / 2

  for (const item of items) {
    const text = `${item.label}: ${item.value}`
    ctx.fillText(text, x, y)
    x += ctx.measureText(text).width + HUD_ITEM_GAP
  }

  ctx.restore()
}
