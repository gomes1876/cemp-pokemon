import { useState } from "react";

function PlayerForm({ addPlayer }) {
  const [newPlayer, setNewPlayer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlayer.trim()) {
      addPlayer(newPlayer);
      setNewPlayer("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="Nome do jogador"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default PlayerForm;
