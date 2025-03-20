import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Contact Us
      </h2>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Contact Info</h3>
          <p className="mb-4">Feel free to reach out to us anytime.</p>

          <div className="flex items-center space-x-3 mb-3">
            <MapPin size={20} />
            <p>123 School St, City, Country</p>
          </div>

          <div className="flex items-center space-x-3 mb-3">
            <Phone size={20} />
            <p>+123 456 7890</p>
          </div>

          <div className="flex items-center space-x-3">
            <Mail size={20} />
            <p>info@school.com</p>
          </div>

          {/* Google Map Embed */}
          <div className="mt-6">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.048786864224!2d81.61881041873617!3d28.059247147781633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998671beed48441%3A0xeee48c12c19f2206!2sGVN%20Secondary%20School!5e0!3m2!1sen!2snp!4v1741672618033!5m2!1sen!2snp"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
