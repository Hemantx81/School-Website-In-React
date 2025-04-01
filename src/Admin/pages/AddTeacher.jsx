import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    gender: "Male",
    dob: "",
    status: "Active",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teacher added successfully!");
    navigate("/teachers");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Teacher</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-gray-600">Name</label>
          <input
            type="text"
            value={teacherData.name}
            onChange={(e) =>
              setTeacherData({ ...teacherData, name: e.target.value })
            }
            className="p-3 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            value={teacherData.email}
            onChange={(e) =>
              setTeacherData({ ...teacherData, email: e.target.value })
            }
            className="p-3 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-600">Subject</label>
          <input
            type="text"
            value={teacherData.subject}
            onChange={(e) =>
              setTeacherData({ ...teacherData, subject: e.target.value })
            }
            className="p-3 border rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
