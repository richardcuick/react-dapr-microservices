import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Line 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Line 2',
      data: [30, 40, 50, 60, 70, 80, 90],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      tension: 0.1
    }
  ]
};

const LineChart = () => (
  <div className="max-w-screen-lg mx-auto mt-8">
    <Line data={data} />
  </div>
);   

export default LineChart;
