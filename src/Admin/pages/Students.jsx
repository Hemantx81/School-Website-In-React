import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";
// Custom Table component

const Students = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Sample student data
  const students = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
  ];

  // Search filter for students
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Students</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-1/3"
        />
      </div>

      {/* Add New Student Button */}
      <button
        onClick={() => navigate("/students/add")}
        className="bg-blue-500 text-white p-3 rounded-md mb-4"
      >
        Add New Student
      </button>

      {/* Students Table */}
      <TableComponent data={filteredStudents} />
    </div>
  );
};

export default Students;
