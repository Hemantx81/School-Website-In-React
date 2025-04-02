import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const TableComponent = ({ data, onEdit, onDelete, onApprove }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Student ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Course</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Studied At</th>
            <th className="p-3 text-left">Phone Number</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.course}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.studied_at}</td>
              <td className="p-3">{student.phone_number}</td>
              <td className="p-3">
                <span
                  className={`${
                    student.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {student.status}
                </span>
              </td>
              <td className="p-3 space-x-2">
                <button
                  className="text-green-500"
                  onClick={() => onApprove(student.id)}
                  disabled={student.status === "Approved"}
                >
                  <FaCheck />
                </button>
                <button
                  className="text-blue-500"
                  onClick={() => onEdit(student)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(student.id)}
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

export default TableComponent;
