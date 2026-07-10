export type UpdateFn = (deltaSeconds: number) => void
export type RenderFn = () => void

export function startGameLoop(update: UpdateFn, render: RenderFn): void {
  let lastTime = performance.now()

  const tick = (now: number) => {
    const deltaSeconds = (now - lastTime) / 1000
    lastTime = now

    update(deltaSeconds)
    render()

    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}
