import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

function Ranking({ ranking }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Typography variant="h2" gutterBottom>
        Ranking
      </Typography>
      <List>
        {ranking.map((player, index) => (
          <ListItem key={player.name}>
            <ListItemText
              primary={`${index + 1}. ${player.name} - ${player.points} pontos`}
            />
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
}

export default Ranking;
