import React from 'react';
import {LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts';
import './Chart.scss';

export const Chart = (props) => {
  return (
    <div className="Chart">
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={props.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line strokeWidth="3px" dot={false} type="monotone" dataKey="total" stroke="#8884d8" />
          <Line strokeWidth="3px" dot={false} type="monotone" dataKey="positive" stroke="#FF6D6D" />
          <Line strokeWidth="3px" dot={false} type="monotone" dataKey="recovered" stroke="#82ca9d" />
          <Line strokeWidth="3px" dot={false} type="monotone" dataKey="deaths" stroke="#2c2c2c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
