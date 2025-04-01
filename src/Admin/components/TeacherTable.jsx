import { FaEdit, FaTrash } from "react-icons/fa";

const TeacherTable = ({ data, type }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">
              {type === "teachers" ? "Teacher ID" : "Student ID"}
            </th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            {type === "teachers" && <th className="p-3 text-left">Subject</th>}
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              {type === "teachers" && <td className="p-3">{item.subject}</td>}
              <td className="p-3">
                <span
                  className={`${
                    item.status === "Active" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3 space-x-2">
                <button
                  className="text-blue-500"
                  onClick={() => alert(`Edit ${type}`)} // Navigate to edit page
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => alert(`Delete ${type}`)} // Delete teacher
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
