function MatchList({ matches, setMatchResult, currentRound }) {
  return (
    <div>
      <h2>Partidas - Rodada {currentRound}</h2>
      {matches.map((match, index) => (
        <div key={index}>
          {match.player1} vs {match.player2}
          {match.player2 === "BYE" ? (
            <span> (Vitória por bye - 3 pontos)</span>
          ) : (
            <select
              onChange={(e) => setMatchResult(index, e.target.value)}
              value={match.result || ""}
            >
              <option value="">Selecionar resultado</option>
              <option value="p1">{match.player1} venceu</option>
              <option value="p2">{match.player2} venceu</option>
              <option value="draw">Empate</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
}

export default MatchList;
