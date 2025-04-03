import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";
import EditStudentModal from "../components/EditStudentModal"; // Import modal

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Handle Edit - Open modal with selected student data
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  // Handle Delete - Remove student from the database
  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/delete_student/${studentId}/`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete student. Status: ${response.status}`);
      }

      setStudents(students.filter((student) => student.id !== studentId));
      console.log("Student deleted successfully.");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Handle Approve - Update student status to "Approved"
  const handleApprove = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/admission_registration/${studentId}/`,
        {
          method: "PUT",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to approve student. Status: ${response.status}`
        );
      }

      setStudents(
        students.map((student) =>
          student.id === studentId
            ? { ...student, status: "Approved" }
            : student
        )
      );
      console.log("Student approved successfully.");
    } catch (error) {
      console.error("Error approving student:", error);
    }
  };

  // Handle Update - Update the student data in the state after successful update
  const handleUpdate = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setIsModalOpen(false);
  };

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

      {/* Pass data and handlers to TableComponent */}
      <TableComponent
        data={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onApprove={handleApprove}
      />

      {/* Show Edit Modal if needed */}
      {isModalOpen && (
        <EditStudentModal
          student={selectedStudent}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default Students;
