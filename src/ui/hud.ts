import type { GameState } from '../core/state'
import { HIRE_COST } from '../core/state'

interface HudItem {
  label: string
  value: string
}

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

const HUD_HEIGHT = 48
const HUD_PADDING_X = 20
const HUD_ITEM_GAP = 32
const HUD_BACKGROUND = 'rgba(15, 17, 21, 0.75)'
const HUD_TEXT_COLOR = '#f5f5f5'
const HUD_FONT = '600 16px system-ui, sans-serif'

const HIRE_BUTTON_WIDTH = 180
const HIRE_BUTTON_HEIGHT = 32
const HIRE_BUTTON_COLOR = '#4f9eff'
const HIRE_BUTTON_LABEL = `Contratar (R$ ${HIRE_COST})`

function buildHudItems(state: GameState): HudItem[] {
  const formattedCash = Math.floor(state.cash).toLocaleString('pt-BR')

  return [
    { label: 'Caixa', value: `R$ ${formattedCash}` },
    { label: 'Funcionários', value: String(state.employees.length) },
  ]
}

export function getHireButtonRect(canvasWidth: number): Rect {
  return {
    x: canvasWidth - HIRE_BUTTON_WIDTH - HUD_PADDING_X,
    y: (HUD_HEIGHT - HIRE_BUTTON_HEIGHT) / 2,
    width: HIRE_BUTTON_WIDTH,
    height: HIRE_BUTTON_HEIGHT,
  }
}

export function isPointInHireButton(canvasWidth: number, x: number, y: number): boolean {
  const rect = getHireButtonRect(canvasWidth)
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height
}

function renderHireButton(ctx: CanvasRenderingContext2D): void {
  const rect = getHireButtonRect(ctx.canvas.width)

  ctx.fillStyle = HIRE_BUTTON_COLOR
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height)

  ctx.fillStyle = HUD_TEXT_COLOR
  ctx.textAlign = 'center'
  ctx.fillText(HIRE_BUTTON_LABEL, rect.x + rect.width / 2, rect.y + rect.height / 2)
  ctx.textAlign = 'left'
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

  renderHireButton(ctx)

  ctx.restore()
}
