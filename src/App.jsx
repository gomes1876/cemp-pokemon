import "./App.css";
import useTournament from "./hooks/useTournament";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import Ranking from "./components/Ranking";

function App() {
  const {
    players,
    matches,
    currentRound,
    maxRounds,
    addPlayer,
    disqualifyPlayer,
    generateMatches,
    setMatchResult,
    ranking,
  } = useTournament();

  return (
    <div className="App">
      <h1>Campeonato Pokémon TCG</h1>

      <PlayerForm addPlayer={addPlayer} />
      <PlayerList players={players} disqualifyPlayer={disqualifyPlayer} />

      <button
        onClick={() => generateMatches()}
        disabled={currentRound >= maxRounds}
      >
        Gerar Nova Rodada ({currentRound}/{maxRounds})
      </button>
      <button onClick={() => generateMatches(true)}>
        Recriar Rodada Atual
      </button>

      <MatchList
        matches={matches}
        setMatchResult={setMatchResult}
        currentRound={currentRound}
      />
      <Ranking ranking={ranking} />
    </div>
  );
}

export default App;
