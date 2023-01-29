import "./style.css"
import CardGame from "../../components/CardGame"

function BoardGame(amountCards = 2) {
  const $htmlCardGame = CardGame()
  const $htmlContent = $htmlCardGame.repeat(amountCards)
  return `
    <section class="board-game">
      ${$htmlContent}
    </section>
    `
}

export default BoardGame