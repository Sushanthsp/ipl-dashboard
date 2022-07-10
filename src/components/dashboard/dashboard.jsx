import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, } from 'recharts';
import { iplData } from '../../data/ipl';

const winner = [];

iplData.forEach(element => {
  winner[element.winner] = (winner[element.winner] || 0) + 1;
});
const nameValueFirst =[];

for (const [key, value] of Object.entries(winner)) {
  nameValueFirst.push({'name' : key,'value' :value})
}


const COLORS = ['#FF6633', '#FFB399', '#FF33FF', '#99B5CD', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3','#66991A', 
'#FF99E6', '#CCFF1A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Dashboard({ data }) {
const uniqueData = [];

data.forEach(element => {
  uniqueData[element.winner] = (uniqueData[element.winner] || 0) + 1;
});
console.log(uniqueData)
const nameValueSecond =[];

for (const [key, value] of Object.entries(uniqueData)) {
  nameValueSecond.push({'name' : key,'value' :value})
}
console.log(nameValueSecond)

  return (
    <>
      <h3 className="chart-heading" color="#1A374D">Shows winner of the match of that day</h3>
      <ResponsiveContainer width="80%" aspect={3}>
        <LineChart data={data} height={300} margin={{ top: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#E9D5CA' }} />
          <Legend />
          <Line type="monotone" dataKey="winner" stroke="#3330E4" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="win_by_wickets" stroke="#F637EC" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="team1" stroke="#06283D" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="team2" stroke="#371B58" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h3 className="chart-heading" style={{textAlign:'center'}}>Shows number of runs and wickets won by a team on a particular day</h3>
      <ResponsiveContainer width="80%" aspect={3}>
        <AreaChart
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="winner" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="win_by_runs" stroke="#4C3F91" fill="#5584AC" />
          <Area type="monotone" dataKey="win_by_wickets" stroke="#9C19E0" fill="#88E0EF" />
        </AreaChart>
      </ResponsiveContainer>
      <h3 className="chart-heading" style={{textAlign:'center'}}>Shows Percentage of win for a particular team</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart  >
          <Pie
            data={nameValueFirst}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
        </PieChart>
        
      </ResponsiveContainer>
      <h3 className="chart-heading" style={{textAlign:'center'}}>Graph shows percentage of wins for a particular team in seven matches</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart  >
          <Pie
            data={nameValueFirst}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
        </PieChart>
        
      </ResponsiveContainer>

    </>

  )
}

export default Dashboard
