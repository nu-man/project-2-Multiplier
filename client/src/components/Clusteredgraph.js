import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChartComponent = () => {
  // Sentiment data
  const sentimentData = [
    { name: "Humalog", positive: 193, negative: 73, neutral: 32 },
    { name: "Novolog", positive: 100, negative: 60, neutral: 23 },
    { name: "Ozempic", positive: 82, negative: 59, neutral: 19 },
    { name: "Diabeta", positive: 0, negative: 0, neutral: 0 },
    { name: "Victoza", positive: 54, negative: 26, neutral: 3 },
    { name: "Apidra", positive: 50, negative: 25, neutral: 12 },
    { name: "Byetta", positive: 34, negative: 30, neutral: 8 },
    { name: "Trulicity", positive: 22, negative: 10, neutral: 3 },
    { name: "Asparat", positive: 0, negative: 0, neutral: 0 },
    { name: "Fiasp", positive: 6, negative: 4, neutral: 0 },
    { name: "Glucophage", positive: 34, negative: 14, neutral: 5 },
    { name: "Levemir", positive: 87, negative: 43, neutral: 13 },
    { name: "Glimepride", positive: 1, negative: 2, neutral: 0 },
    { name: "Actos", positive: 137, negative: 70, neutral: 32 },
    { name: "Jardiance", positive: 128, negative: 67, neutral: 14 },
    { name: "Invoka", positive: 42, negative: 59, neutral: 14 },
    { name: "Basalgar", positive: 0, negative: 0, neutral: 0 },
    { name: "Glyburide", positive: 39, negative: 22, neutral: 12 },
    { name: "Glimpepiride", positive: 0, negative: 0, neutral: 0 },
    { name: "Amaryl", positive: 7, negative: 9, neutral: 1 },
  ];

  // Transform sentiment data into chart data
  const labels = sentimentData.map(item => item.name);
  const positiveData = sentimentData.map(item => item.positive);
  const negativeData = sentimentData.map(item => item.negative);
  const neutralData = sentimentData.map(item => item.neutral);

  const data = {
    labels,
    datasets: [
      {
        label: 'Positive',
        data: positiveData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negative',
        data: negativeData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Neutral',
        data: neutralData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    indexAxis: 'y', // This makes the chart horizontal
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const datasetLabel = context.dataset.label || '';
            const value = context.raw;
            return `${datasetLabel}: ${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <Bar
      data={data}
      options={options}
    />
  );
}

export default HorizontalBarChartComponent;
