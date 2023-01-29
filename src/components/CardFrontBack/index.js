import CardGame from "../CardGame";

function CarFrontback() {
  return `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame()}
    </article>
  `
}

export default CarFrontback;