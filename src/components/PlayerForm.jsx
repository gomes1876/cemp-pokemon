import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 4 }}>
        <TextField
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
          placeholder="Nome do jogador"
          variant="outlined"
          size="small"
          sx={{
            mr: 2,
            width: "70%",
            "& .MuiInputBase-input::placeholder": {
              color: "#FFFFFF", // Placeholder branco
              opacity: 1,
            },
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Adicionar
        </Button>
      </Box>
    </motion.div>
  );
}

export default PlayerForm;
