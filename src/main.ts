import './style.css'
import { setupCanvas } from './core/canvas'
import { startGameLoop } from './core/gameLoop'
import { createInitialState } from './core/state'
import { updateEconomy } from './economy/economy'
import { renderHud } from './ui/hud'

const canvas = document.querySelector<HTMLCanvasElement>('#game-canvas')!
const ctx = setupCanvas(canvas)
const state = createInitialState()

// Proof of concept: a square moving left to right, just to confirm
// the game loop (requestAnimationFrame) works.
const square = {
  x: 0,
  y: 0,
  size: 60,
  speed: 200, // px/s
  color: '#4f9eff',
}

function update(deltaSeconds: number): void {
  updateEconomy(state, deltaSeconds)

  square.x += square.speed * deltaSeconds
  square.y = canvas.height / 2 - square.size / 2

  if (square.x > canvas.width) {
    square.x = -square.size
  }
}

function render(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = square.color
  ctx.fillRect(square.x, square.y, square.size, square.size)

  renderHud(ctx, state)
}

startGameLoop(update, render)
