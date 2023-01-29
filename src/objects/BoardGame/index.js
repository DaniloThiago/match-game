import "./style.css"
import CarFrontback from "../../components/CardFrontBack"

function BoardGame(amountCards = 2) {
  const $htmlCardFrontBack = CarFrontback();
  const $htmlContent = $htmlCardFrontBack.repeat(amountCards)
  return `
    <section class="board-game">
      ${$htmlContent}
    </section>
    `
}

export default BoardGame