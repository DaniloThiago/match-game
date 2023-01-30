import './style.css'
import VsPlayer from '../../components/VsPlayer';
import PlayerName from "../../components/PlayerName"
import PlayerScore from '../../components/PlayerScore';

function ScoreBoard() {
  return `
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PlayerScore(1)}
      ${VsPlayer()}
      ${PlayerScore(2)}
      ${PlayerName("Player2")}
    </header>
    `;
}

export default ScoreBoard;