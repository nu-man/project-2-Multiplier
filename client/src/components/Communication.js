import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SentimentAnalysis = () => {
  const [keyword, setKeyword] = useState('');
  const [sentimentData, setSentimentData] = useState(null);

  const fetchSentimentData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/analyze', { keyword });
      setSentimentData(response.data);
    } catch (error) {
      console.error('Error fetching sentiment data:', error);
    }
  };

  const chartData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: `Sentiment Analysis for "${keyword}"`,
        data: [
          sentimentData?.Positive || 0,
          sentimentData?.Negative || 0,
          sentimentData?.Neutral || 0,
        ],
        backgroundColor: ['green', 'red', 'grey'],
      },
    ],
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword (e.g., Ozempic)"
      />
      <button onClick={fetchSentimentData}>Analyze Sentiment</button>
      
      {sentimentData && (
        <div style={{ width: '600px', margin: '0 auto' }}>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
