import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, PointElement, ArcElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, BarElement, PointElement, ArcElement, LinearScale, Title, CategoryScale);

const ChartRenderer = ({ data, chartType, chartTitle, chartData }) => {
  const chartConfig = {
    labels: chartData.map((row) => row[0]),
    datasets: [
      {
        label: chartTitle,
        data: chartData.map((row) => row[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartConfig} />;
      case 'bar':
        return <Bar data={chartConfig} />;
      case 'pie':
        return <Pie data={chartConfig} />;
      default:
        return null;
    }
  };

  return <div>{renderChart()}</div>;
};

export default ChartRenderer;