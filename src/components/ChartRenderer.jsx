import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const ChartRenderer = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Annotated Data',
        data: data.map(point => point.y),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartRenderer;