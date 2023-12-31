
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Orders received',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Order 1',
            data: [40, 10, 20, 50, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
            
        },
        {
            label: 'Order 2',
            data: [43, 40, 30, 23, 35],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}
