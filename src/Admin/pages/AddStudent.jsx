import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    dob: "",
    status: "Active",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd handle form submission (e.g., saving data to a database)
    alert("Student added successfully!");
    navigate("/students");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Student</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-gray-600">Name</label>
          <input
            type="text"
            value={studentData.name}
            onChange={(e) =>
              setStudentData({ ...studentData, name: e.target.value })
            }
            className="p-3 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            value={studentData.email}
            onChange={(e) =>
              setStudentData({ ...studentData, email: e.target.value })
            }
            className="p-3 border rounded-md"
          />
        </div>

        {/* Other fields: phone, gender, dob, status... */}

        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
