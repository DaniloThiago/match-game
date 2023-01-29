import CardGame from "../CardGame";

function CarFrontback() {
  return `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("js", "Logo do JavaScript")}
    </article>
  `
}

export default CarFrontback;