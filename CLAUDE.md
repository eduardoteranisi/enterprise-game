# Enterprise Tycoon

## Objetivo do projeto

Este é um projeto de **estudo**. O objetivo principal é aprender e praticar
fluxo de trabalho com **git worktrees**, **Pull Requests** e o próprio
**Claude Code** trabalhando em paralelo em diferentes partes do código.

O jogo em si — um simulador simples de gestão de empresa (dinheiro,
funcionários, projetos) — é secundário. Ele existe para dar contexto real
a features que possam ser desenvolvidas de forma isolada, cada uma em sua
própria worktree/branch/PR.

## Stack

- [Vite](https://vite.dev/) + TypeScript (template `vanilla-ts`)
- Canvas puro (`CanvasRenderingContext2D`) para renderização
- Sem framework de UI por enquanto (sem React/Vue/etc.)
- Sem bibliotecas de state management — estado global fica em `src/core`

## Estrutura de pastas

```
src/
  core/        # game loop (requestAnimationFrame), estado global, setup do canvas
  economy/     # lógica financeira da empresa (caixa, receitas, despesas)
  employees/   # contratação, folha de pagamento, produtividade
  ui/          # renderização de HUD/telas e interação do usuário
  save/        # persistência de estado (save/load do jogo)
  main.ts      # ponto de entrada, conecta os módulos ao game loop
```

## Convenção: módulos isolados

Cada feature deve viver isolada no seu módulo (`economy`, `employees`, `ui`,
`save`, etc.) sempre que possível, evitando acoplamento direto entre módulos
de domínio diferente. Comunicação entre módulos deve passar pelo estado
global em `src/core`, não por imports cruzados entre módulos de feature.

O motivo dessa convenção é **facilitar trabalho em paralelo usando git
worktrees**: se cada feature/módulo for razoavelmente independente, é mais
fácil abrir uma worktree por feature, trabalhar nela sem conflitos com
outras em andamento, e abrir PRs pequenos e focados.

## Estado atual

Apenas a base técnica está pronta: canvas full-screen com um game loop
funcionando (um quadrado se movendo, só para validar o loop). Ainda não há
lógica de jogo implementada nos módulos `economy`, `employees`, `ui` ou
`save`.
