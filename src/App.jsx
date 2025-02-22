import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import useTournament from "./hooks/useTournament";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import Ranking from "./components/Ranking";
import "./App.css";
import { theme } from "./config/theme";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            Campeonato Pokémon TCG
          </Typography>
        </motion.div>

        <PlayerForm addPlayer={addPlayer} />
        <PlayerList players={players} disqualifyPlayer={disqualifyPlayer} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => generateMatches()}
            disabled={currentRound >= maxRounds}
            sx={{ mr: 2, mt: 2 }}
          >
            Gerar Nova Rodada ({currentRound}/{maxRounds})
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => generateMatches(true)}
            sx={{ mt: 2 }}
          >
            Recriar Rodada Atual
          </Button>
        </motion.div>

        <MatchList
          matches={matches}
          setMatchResult={setMatchResult}
          currentRound={currentRound}
        />
        <Ranking ranking={ranking} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
