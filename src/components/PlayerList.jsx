import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

function PlayerList({ players, disqualifyPlayer }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" gutterBottom>
        Jogadores ({players.filter((p) => !p.disqualified).length})
      </Typography>
      <List>
        {players.map((player) => (
          <ListItem
            key={player.name}
            sx={{ bgcolor: player.disqualified ? "#FFEBEE" : "inherit" }}
          >
            <ListItemText
              primary={`${player.name} - ${player.points} pontos (BYEs: ${player.byeCount})`}
              secondary={player.disqualified ? "(Desclassificado)" : ""}
            />
            {!player.disqualified && (
              <Button
                variant="outlined"
                color="error"
                onClick={() => disqualifyPlayer(player.name)}
              >
                Desclassificar
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
}

export default PlayerList;
