import { useState } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TeacherTable from "../components/TeacherTable";
// Reusable Table Component

const Teachers = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Sample teacher data
  const teachers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      subject: "Mathematics",
      status: "Active",
    },
    {
      id: 2,
      name: "Mark Smith",
      email: "mark@example.com",
      subject: "Science",
      status: "Inactive",
    },
  ];

  // Search filter for teachers
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Teachers</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search teachers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-1/3"
        />
      </div>

      {/* Add New Teacher Button */}
      <button
        onClick={() => navigate("/teachers/addteacher")}
        className="bg-blue-500 text-white p-3 rounded-md mb-4"
      >
        Add New Teacher
      </button>

      {/* Teachers Table */}
      <TeacherTable data={filteredTeachers} type="teachers" />
    </div>
  );
};

export default Teachers;
