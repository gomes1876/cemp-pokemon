function PlayerList({ players, disqualifyPlayer }) {
  return (
    <div>
      <h2>Jogadores ({players.filter((p) => !p.disqualified).length})</h2>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} - {player.points} pontos (BYEs: {player.byeCount}){" "}
            {!player.disqualified ? (
              <button onClick={() => disqualifyPlayer(player.name)}>
                Desclassificar
              </button>
            ) : (
              <span>(Desclassificado)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
