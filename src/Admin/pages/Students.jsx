import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";

const Students = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/admissiondata_show/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Students</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search students..."
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

      {/* Pass backend data to TableComponent */}
      <TableComponent data={students} />
    </div>
  );
};

export default Students;
