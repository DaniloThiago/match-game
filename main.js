import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import BoardGame from "./src/objects/BoardGame"
import PlayerName from "./src/components/PlayerName"

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $playerName1 = PlayerName('Player 1')
const $playerName2 = PlayerName('Player 2')
$root.insertAdjacentHTML("beforeend", $playerName1 + $playerName2 + $htmlBoardGame)