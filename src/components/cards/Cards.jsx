import * as React from 'react';
import useStyles from './CardsStyle';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

export default function Cards({ data }) {
  const { team1, team2, win_by_runs, win_by_wickets, winner, date, player_of_match } = data;
  const classes = useStyles();
  return (
    <Box>
      {data.length === 0 ? 
      <Box><Paper elevation={5} className={classes.noData}><Typography className={classes.paper}>Click on any cell to know score</Typography></Paper></Box> : <Paper elevation={5} className={classes.cardStyle}>
        <Box className={classes.data}>
          <Box className={classes.left}>
            <Typography className={classes.Team}>{team1} vs {team2}</Typography>
            <Typography className={classes.won}>won by {win_by_runs} and {win_by_wickets} wickets</Typography>
          </Box>
          <Box className={classes.right}>
            <Typography className={classes.result}>{winner}</Typography>
            <Typography className={classes.Date}>{date}</Typography>
          </Box>
        </Box>
        <Box className={classes.player}>
          {player_of_match}
        </Box>
      </Paper>}
    </Box>
  );
}
