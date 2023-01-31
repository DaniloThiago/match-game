import "./style.css"
import CardGame from "../CardGame"


function CarFrontback(icon, altIcon) {
  window.cardFrontBack = {}
  window.cardFrontBack.handleClick = (event) => {
    const $cardFrontBack = event.target.closest(".card-front-back")
    $cardFrontBack.classList.toggle('-active')
  }

  return `
    <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `
}

export default CarFrontback;