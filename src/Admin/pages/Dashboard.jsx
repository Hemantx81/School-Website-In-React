import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import DashboardCard from "../components/DashboarCard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Dashboard Cards - Only Visible on Dashboard Page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Students"
          value="1,200"
          icon={<FaUserGraduate />}
          color="from-purple-500 to-purple-700"
        />
        <DashboardCard
          title="Total Teachers"
          value="80"
          icon={<FaChalkboardTeacher />}
          color="from-blue-500 to-blue-700"
        />
        <DashboardCard
          title="New Admissions"
          value="50"
          icon={<FaUsers />}
          color="from-green-500 to-green-700"
        />
        <DashboardCard
          title="Pending Applications"
          value="30"
          icon={<FaClipboardList />}
          color="from-red-500 to-red-700"
        />
      </div>
    </div>
  );
};

export default Dashboard;
