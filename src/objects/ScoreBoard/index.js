import './style.css'
import VsPlayer from '../../components/VsPlayer';
import PlayerName from "../../components/PlayerName"
import PlayerScore from '../../components/PlayerScore';
import ArrowDown from '../../components/ArrowDown';

function ScoreBoard() {
  return `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName("Player1")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore(2)}
      ${PlayerName("Player2")}
    </header>
    `;
}

export default ScoreBoard;