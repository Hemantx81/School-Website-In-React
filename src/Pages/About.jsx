import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | GVN Secondary School</title>
        <meta
          name="description"
          content="Learn more about GVN Secondary School, our mission, faculty, and why we are the best choice for quality education."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Our School</h1>
        <p className="mt-3 text-lg">
          Empowering students for a brighter future.
        </p>
      </div>

      {/* History & Mission */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our History & Mission
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          GVN Secondary School was founded with the vision to provide quality
          education to students, shaping their future with knowledge,
          discipline, and creativity. Our mission is to nurture young minds by
          providing a supportive and enriching learning environment.
        </p>
      </div>

      {/* Why Choose Us? */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Quality Education
              </h3>
              <p className="text-gray-700 mt-2">
                Our curriculum is designed to foster academic excellence and
                critical thinking.
              </p>
            </div>
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Modern Facilities
              </h3>
              <p className="text-gray-700 mt-2">
                Equipped with smart classrooms, science labs, and a digital
                library.
              </p>
            </div>
            {/* Card with hover transition */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Experienced Teachers
              </h3>
              <p className="text-gray-700 mt-2">
                Our faculty consists of highly qualified and passionate
                educators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Team Member with hover transition */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src="https://cdn.pixabay.com/photo/2021/06/04/10/30/man-6309464_1280.jpg"
              alt="Principal"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">John Doe</h3>
            <p className="text-gray-600">Principal</p>
          </div>
          {/* Team Member with hover transition */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src="https://cdn.pixabay.com/photo/2024/07/30/12/36/man-8932177_1280.png"
              alt="Phsyics Teacher"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Jane Smith</h3>
            <p className="text-gray-600">Phsyics Teacher</p>
          </div>
          {/* Team Member with hover transition */}
          <div className="p-6 bg-white shadow-md rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/04/20/36/think-2997856_1280.jpg"
              alt="Chemistry Teacher"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Michael Johnson
            </h3>
            <p className="text-gray-600">Chemistry Teacher</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 italic">
                "GVN School has provided me with the best education and support.
                The teachers truly care about each student!"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">- Sarah P.</h3>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <p className="text-gray-700 italic">
                "The learning environment is fantastic, and the facilities are
                modern and well-equipped!"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">- Daniel R.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold">Join Us Today</h2>
        <p className="mt-2">Be a part of our vibrant learning community.</p>
        <Link to="/admissions">
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold cursor-pointer">
            Apply for Admission
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
