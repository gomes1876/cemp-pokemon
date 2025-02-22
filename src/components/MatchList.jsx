import React from "react";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";

function MatchList({ matches, setMatchResult, currentRound }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Typography variant="h2" gutterBottom>
        Partidas - Rodada {currentRound}
      </Typography>
      {matches.map((match, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography>
            {match.player1} vs {match.player2}{" "}
            {match.player2 === "BYE" && (
              <span style={{ color: "#388E3C" }}>
                (Vitória por bye - 3 pontos)
              </span>
            )}
          </Typography>
          {match.player2 !== "BYE" && (
            <FormControl sx={{ minWidth: 200, mt: 1 }}>
              <InputLabel sx={{ color: "#FFFFFF" }}>Resultado</InputLabel>
              <Select
                value={match.result || ""}
                onChange={(e) => setMatchResult(index, e.target.value)}
                label="Resultado"
              >
                <MenuItem value="">Selecionar resultado</MenuItem>
                <MenuItem value="p1">{match.player1} venceu</MenuItem>
                <MenuItem value="p2">{match.player2} venceu</MenuItem>
                <MenuItem value="draw">Empate</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>
      ))}
    </motion.div>
  );
}

export default MatchList;
