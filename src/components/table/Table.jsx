import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { iplData } from '../../data/ipl';
import useStyles from './TableStyle';
import Dashboard from '../dashboard/dashboard'
import Cards from '../cards/Cards';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  // { field: 'city', headerName: 'City', width: 130 },
  { field: 'date', headerName: 'Date', type: 'date', width: 130 },
  { field: 'team1', headerName: 'Team1', width: 130 },
  { field: 'team2', headerName: 'team2', width: 130 },
  // { field: 'toss_winner', headerName: 'Toss winner', width: 130 },
  // { field: 'toss_decision', headerName: 'Toss Decision', width: 130 },
  { field: 'result', headerName: 'result', width: 130 },
  { field: 'winner', headerName: 'winner', width: 130 },
  { field: 'win_by_runs', headerName: 'Win By Runs', type: 'number', width: 90, },
  // { field: 'win_by_wickets', headerName: 'Win By Wickets:', type: 'number', width: 90, },
  // { field: 'player_of_match', headerName: 'Player Of Match', width: 130 },
  // { field: 'venue', headerName: 'Venue', width: 130 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

export default function Table() {

  const classes = useStyles();
  const initialData = iplData.slice(0,15)
  const [dashboardData, setDashboardData] = useState(initialData)
  const [cardData, setCardData] = useState([])

  const renderCardData = (data) => {
    setCardData(data.row)
  }

  const renderPageNo = (n) => {
    let initialSliceNo = n*7;
    let finalSliceNo = n*7 + 7;
    const data = iplData.slice(initialSliceNo,finalSliceNo)
    setDashboardData(data)
  }

  return (
    <div className={classes.tableStyle}>
      <Cards data={cardData} />
      <DataGrid
        onRowClick={renderCardData}
        onPageChange={renderPageNo}
        rows={iplData}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        className={classes.table}
        sx={{ minHeight: 500 }}
      />
      <Dashboard data={dashboardData} />
    </div>
  );
}
