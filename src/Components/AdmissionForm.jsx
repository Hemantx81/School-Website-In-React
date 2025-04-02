import { useState } from "react";

// const [message, setMessage] = useState("");
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    course: "",
    name: "",
    email: "",
    phone_number: "",
    // address: "",
    studied_at: "",
    parent_name: "",
    parent_number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/admission_registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Check if response is OK (Status: 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse response JSON
      console.log("Success:", data); // Check the actual response
      alert("Form submitted successfully!"); // Show a success message
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-10 gap-2">
      {/* Left Side: Enlarged Image Section */}
      <div className="w-full md:w-3/5 flex justify-center">
        <img
          src="https://www.premiercollege.edu.np/enroll/images/banner.jpg?refresh=true"
          alt="Admissions"
          className="w-4/5 md:w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Smaller Form Section */}
      <div className="w-full md:w-2/5 p-6 border border-gray-300 shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-5">
          Apply Now for Admission
        </h2>
        {/* {message && <p className="text-center text-green-600">{message}</p>} */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applying For */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Applying For
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Choose...</option>
              <option value="Science">Science (+2)</option>
              <option value="Management">Management (+2)</option>
              <option value="Humanities">Humanities (+2)</option>
              <option value="BBM">BBM</option>
              <option value="BSW">BSW</option>
              <option value="BBS">BBS</option>
              <option value="MBS">MBS</option>
              <option value="CA">CA</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* phone_number */}
          <div>
            <label className="block text-gray-700 font-semibold">
              phone_number
            </label>
            <input
              type="tel"
              name="phone_number"
              pattern="[0-9]{10}"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="phone_number Number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Address */}
          {/* <div>
            <label className="block text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Current Address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div> */}

          {/* Studied School */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Studied School
            </label>
            <input
              type="text"
              name="studied_at"
              value={formData.studied_at}
              onChange={handleChange}
              required
              placeholder="Studied School"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Parent's Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Parent's Name
            </label>
            <input
              type="text"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              required
              placeholder="Parent's Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Parent's phone_number */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Parent's phone_number
            </label>
            <input
              type="tel"
              name="parent_number"
              pattern="[0-9]{10}"
              value={formData.parent_number}
              onChange={handleChange}
              required
              placeholder="Parent's  Number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold p-2 rounded-lg hover:bg-purple-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
