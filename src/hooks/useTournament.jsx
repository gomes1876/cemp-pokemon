import { useState } from "react";

function useTournament() {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);

  const calcularRodadas = (jogadores) => Math.ceil(Math.log2(jogadores)) + 1;

  const maxRounds = calcularRodadas(
    players.filter((p) => !p.disqualified).length
  );

  const addPlayer = (name) => {
    if (!players.find((p) => p.name === name)) {
      setPlayers([
        ...players,
        { name, points: 0, disqualified: false, opponents: [], byeCount: 0 },
      ]);
    }
  };

  const disqualifyPlayer = (playerName) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((p) =>
        p.name === playerName ? { ...p, disqualified: true } : p
      )
    );

    setMatches((prevMatches) =>
      prevMatches.filter(
        (m) => m.player1 !== playerName && m.player2 !== playerName
      )
    );
  };

  const generateMatches = (recreate = false) => {
    if (currentRound >= maxRounds && !recreate) return;

    const activePlayers = players.filter((p) => !p.disqualified);
    if (activePlayers.length < 2) return;

    if (!recreate && currentRound < maxRounds) {
      setCurrentRound((prevRound) => prevRound + 1);
    }

    const shuffled = [...activePlayers].sort(() => Math.random() - 0.5);
    const newMatches = [];
    const usedPlayers = new Set();

    for (let i = 0; i < shuffled.length; i++) {
      if (usedPlayers.has(shuffled[i].name)) continue;

      for (let j = 0; j < shuffled.length; j++) {
        if (i === j || usedPlayers.has(shuffled[j].name)) continue;

        newMatches.push({
          player1: shuffled[i].name,
          player2: shuffled[j].name,
          result: null,
        });

        usedPlayers.add(shuffled[i].name);
        usedPlayers.add(shuffled[j].name);
        break;
      }
    }

    if (usedPlayers.size < activePlayers.length) {
      const remainingPlayers = shuffled
        .filter((p) => !usedPlayers.has(p.name))
        .sort((a, b) => a.byeCount - b.byeCount);

      const byePlayer = remainingPlayers[0];
      newMatches.push({
        player1: byePlayer.name,
        player2: "BYE",
        result: "p1",
      });

      setPlayers((prevPlayers) =>
        prevPlayers.map((p) =>
          p.name === byePlayer.name ? { ...p, byeCount: p.byeCount + 1 } : p
        )
      );
    }

    setMatches(newMatches);
  };

  const setMatchResult = (index, result) => {
    setMatches((prevMatches) =>
      prevMatches.map((match, i) =>
        i === index ? { ...match, result } : match
      )
    );
  };

  const ranking = [...players]
    .filter((p) => !p.disqualified)
    .sort((a, b) => b.points - a.points);

  return {
    players,
    matches,
    currentRound,
    maxRounds,
    addPlayer,
    disqualifyPlayer,
    generateMatches,
    setMatchResult,
    ranking,
  };
}

export default useTournament;
