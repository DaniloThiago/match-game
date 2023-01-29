import "./style.css"
import CardGame from "../CardGame"

function CarFrontback() {
  return `
    <article class="card-front-back">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("js", "Logo do JavaScript")}
      </div>
    </article>
  `
}

export default CarFrontback;