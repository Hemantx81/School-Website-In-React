const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r ${color}`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-600 text-4xl">{icon}</div>
        <div>
          <h3 className="text-gray-600 text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
