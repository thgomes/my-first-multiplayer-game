export default function renderScreen(screen, game, requestAnimationFrame, currentPlayerId, scoreList) {
  const context = screen.getContext('2d')
  context.fillStyle = 'white'
  context.clearRect(0, 0, 16, 16)

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId]
    context.fillStyle = '#6272a4'
    context.fillRect(player.x, player.y, 1, 1)
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId]
    context.fillStyle = '#f1fa8c	';
    context.fillRect(fruit.x, fruit.y, 1, 1)
  }

  const currentPlayer = game.state.players[currentPlayerId]

  if (currentPlayer) {
    context.fillStyle = '#ff79c6'
    context.fillRect(currentPlayer.x, currentPlayer.y, 1, 1)
  }

  updateScoreList(scoreList, game)
  
  requestAnimationFrame(() => {
    renderScreen(screen, game, requestAnimationFrame, currentPlayerId, scoreList)
  })
}

function updateScoreList(scoreList, game) {
  let scoreListInnerHTML = `
    <h2>SCORE</h2>
    <ul>
  `

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId]
    scoreListInnerHTML = scoreListInnerHTML + `
      <li>
        <span>${playerId}</span>
        <span>${player.points}</td>
      </li>
    `
  }

  scoreListInnerHTML + `</ul>`

  scoreList.innerHTML = scoreListInnerHTML
}