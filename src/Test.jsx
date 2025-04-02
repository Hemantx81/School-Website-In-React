import { useState, useEffect } from "react";

const Test = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/admissiondata_show/"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAdmissions(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching admissions:", error);
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admission List</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Course</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map((admission) => (
            <tr key={admission.id} className="text-center">
              <td className="border border-gray-300 p-2">{admission.name}</td>
              <td className="border border-gray-300 p-2">{admission.course}</td>
              <td className="border border-gray-300 p-2">{admission.email}</td>
              <td className="border border-gray-300 p-2">
                {admission.phone_number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
