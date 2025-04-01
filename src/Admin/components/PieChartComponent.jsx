import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const data = {
    labels: ["Students", "Teachers", "Admins"],
    datasets: [
      {
        label: "Users",
        data: [1200, 80, 10], // Example values
        backgroundColor: ["#6366F1", "#10B981", "#F59E0B"], // Colors for each section
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "User Distribution" },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
