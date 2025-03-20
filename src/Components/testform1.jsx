import { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    interested_for: "",
    name: "",
    email: "",
    mobile: "",
    address: "",
    schoolname: "",
    pname: "",
    pmobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send the formData to an API here
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-gray-100 p-10">
      <div className="w-full max-w-lg p-6 border border-gray-300 shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-5">
          Apply Now for Admission
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applying For */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Applying For
            </label>
            <select
              name="interested_for"
              value={formData.interested_for}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded"
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
              className="w-full mt-1 p-2 border border-gray-300 rounded"
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
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 font-semibold">Mobile</label>
            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile Number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Current Address"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Studied School */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Studied School
            </label>
            <input
              type="text"
              name="schoolname"
              value={formData.schoolname}
              onChange={handleChange}
              required
              placeholder="Studied School"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Parent's Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Parent's Name
            </label>
            <input
              type="text"
              name="pname"
              value={formData.pname}
              onChange={handleChange}
              required
              placeholder="Parent's Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Parent's Mobile */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Parent's Mobile
            </label>
            <input
              type="tel"
              name="pmobile"
              pattern="[0-9]{10}"
              value={formData.pmobile}
              onChange={handleChange}
              required
              placeholder="Parent's Mobile Number"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold p-2 rounded hover:bg-purple-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
