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
        <Box><Paper elevation={5} className={classes.noData}><Typography className={classes.paper}> Click on any cell to know score </Typography></Paper></Box> : <Paper elevation={15} className={classes.cardStyle}>
          <Box className={classes.data}>
            <Box className={classes.left}>
              <Typography className={classes.Team}><span className={classes.match}>Match:</span>  {team1} <span className={classes.span}>vs</span>  {team2}</Typography>
              <Typography className={classes.won}>won by <span className={classes.span}> {win_by_runs} </span>runs and <span className={classes.span}> {win_by_wickets} </span> wickets</Typography>
            </Box>
            <Box className={classes.verticalLine}></Box>
            <Box className={classes.right}>
              <Typography className={classes.result}><span className={classes.match}>Winner: </span><span className={classes.span}> {winner}</span></Typography>
              <Typography className={classes.Date}><span className={classes.match}>Date:</span> <span className={classes.span}> {date}</span></Typography>
            </Box>
          </Box>
          <Box className={classes.verticalLineMarin}></Box>
          <Box className={classes.player}>
          <span className={classes.match}>Man of Match </span><span className={classes.span}> {player_of_match}</span>
          </Box>
        </Paper>}
    </Box>
  );
}
