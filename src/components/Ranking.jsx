function Ranking({ ranking }) {
  return (
    <div>
      <h2>Ranking</h2>
      <ol>
        {ranking.map((player) => (
          <li key={player.name}>
            {player.name} - {player.points} pontos
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Ranking;
