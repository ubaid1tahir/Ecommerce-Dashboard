import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
ArcElement,
Legend
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
)
const LineChart = () => {
  const labels = ["abc", "abc2", "abc3", "abc4"]

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: "Sales"
      }
    }
  }

  const data = {
    labels : getPreviousFourYears(),
    datasets: [
      {
        label: "Sales",
        data: [1.1,1.4, 0.3, 1.0],
        borderColor: "rgba(107,70,193,0.5)",
        backgroundColor: "#6b46c1"
      }
    ]
  }
  return (
    <div className='rounded-sm md:w-1/2 md:h-1/2'>
      <Line data={data} options={options} />
    </div>
  )
}

export const DoughnutChart = () => {

  const data = {
    labels : ["Order placed", "Pending orders"],
    datasets: [
      {
        label: "Orders",
        data: [20, 3],
        borderColor: ["rgb(107,70,193)","rgb(12,43,129)"],
        backgroundColor: ["rgba(62, 12, 171,0.3)", "rgba(12,43,129,0.3)"],
        borderWidth: 1
      }
    ]
  }

  return (
    <div className='rounded-sm mx-auto size-72 mt-4 md:mt-0'>
      <Doughnut data={data}/>

    </div>
  )
}

const getPreviousFourYears = () => {
  let labels = []
  let currentYear = new Date().getFullYear() - 4
  for(let i = 0; i<4;i++){
    labels.push(currentYear)
    currentYear++;
  }
  
  return labels;
}

getPreviousFourYears()
export default LineChart
