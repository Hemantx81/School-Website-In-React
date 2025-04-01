import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import DashboardCard from "../components/DashboarCard";
import ChartComponent from "../components/chartComponent";
import PieChartComponent from "../components/PieChartComponent";
// import ChartComponent from "../components/ChartComponent";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard
          title="Total Students"
          value="1,200"
          icon={<FaUserGraduate />}
        />
        <DashboardCard
          title="Total Teachers"
          value="80"
          icon={<FaChalkboardTeacher />}
        />
        <DashboardCard title="New Admissions" value="50" icon={<FaUsers />} />
        <DashboardCard
          title="Pending Applications"
          value="30"
          icon={<FaClipboardList />}
        />
      </div>

      {/* Chart Section */}
      <div className="bg-black grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent />
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
