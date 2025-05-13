
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProgressChart = ({ 
  data, 
  title, 
  description,
  className 
}) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                tick={{ fontSize: 12 }} 
                tickLine={false}
                axisLine={{ stroke: '#f0f0f0' }}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={{ stroke: '#f0f0f0' }}
                domain={[0, 10]}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }} 
              />
              <Line
                type="monotone"
                dataKey="moodScore"
                stroke="#D3E4FD"
                strokeWidth={2}
                dot={{ fill: '#D3E4FD', r: 4 }}
                activeDot={{ r: 6, fill: '#D3E4FD' }}
              />
              {data[0]?.sleepHours !== undefined && (
                <Line
                  type="monotone"
                  dataKey="sleepHours"
                  stroke="#E5DEFF"
                  strokeWidth={2}
                  dot={{ fill: '#E5DEFF', r: 4 }}
                  activeDot={{ r: 6, fill: '#E5DEFF' }}
                />
              )}
              {data[0]?.anxietyLevel !== undefined && (
                <Line
                  type="monotone"
                  dataKey="anxietyLevel"
                  stroke="#FDE1D3"
                  strokeWidth={2}
                  dot={{ fill: '#FDE1D3', r: 4 }}
                  activeDot={{ r: 6, fill: '#FDE1D3' }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
