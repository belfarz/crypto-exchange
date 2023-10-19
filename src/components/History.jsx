import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';

  import moment from "moment";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  

export default function History() {
    const { id } = useParams();
    const [chart, setChart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchChart = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
                setChart(response.data.prices); // Assuming prices is the property containing chart data in the response
                console.log(response.data.prices)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchChart();
    }, [id]);

    const coinChartData = chart.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

    const options = {
        responsive: true
      }

      const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
        datasets: [
          {
            fill: true,
            label: id,
            data: coinChartData.map(val => val.y),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: '#7d2ae8',
          }
        ]
      }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Render your chart component using the `chart` state variable here

    return (
        <div className='w-full md:w-2/3 lg:w-2/3'>
        <Line options={options} data={data} />
        </div>
    );
}
