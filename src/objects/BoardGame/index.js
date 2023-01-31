import "./style.css"
import cards from "./data"
import CarFrontback from "../../components/CardFrontBack"

function BoardGame(amountCards = 2) {
  const htmlCardList = cards.map((card) => CarFrontback(card.icon, cards.altIcon))
  const $htmlCards = htmlCardList.join('')
  return `
    <section class="board-game">
      ${$htmlCards}
    </section>
    `
}

export default BoardGame