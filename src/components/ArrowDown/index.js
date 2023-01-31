import "./style.css"

function ArrowDown(currentPlayer = 1) {
  return `
    <img
      class="arrow-down"
      data-currentPlayer="${currentPlayer}"
      src="images/arrow-down.png"
      alt="Ícone de seta para baixo">
  `
}

export default ArrowDown