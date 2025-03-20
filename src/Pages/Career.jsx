import { Helmet } from "react-helmet";
import { useState } from "react";

const Career = () => {
  const [filter, setFilter] = useState("All");

  const careerPaths = [
    {
      title: "Engineering",
      icon: "💻",
      description:
        "Explore careers in software development, civil engineering, mechanical design, and more.",
      category: "Science",
    },
    {
      title: "Medical & Health Sciences",
      icon: "🩺",
      description:
        "Become a doctor, nurse, pharmacist, or medical researcher to serve humanity.",
      category: "Science",
    },
    {
      title: "Business & Entrepreneurship",
      icon: "📈",
      description:
        "Build your own startup, or pursue management roles in finance, marketing, or sales.",
      category: "Commerce",
    },
    {
      title: "Creative Arts & Design",
      icon: "🎨",
      description:
        "Dive into graphic design, filmmaking, animation, and digital content creation.",
      category: "Arts",
    },
    {
      title: "Information Technology",
      icon: "🖥️",
      description:
        "Focus on web development, cybersecurity, data science, and AI technologies.",
      category: "Science",
    },
    {
      title: "Education & Research",
      icon: "📚",
      description:
        "Become a teacher, professor, or researcher in various academic fields.",
      category: "Arts",
    },
  ];

  const filters = ["All", "Science", "Commerce", "Arts"];

  const filteredCareers =
    filter === "All"
      ? careerPaths
      : careerPaths.filter((career) => career.category === filter);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Career Paths | GVN Secondary School</title>
        <meta
          name="description"
          content="Explore diverse career opportunities for students at GVN Secondary School and discover your passion."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Explore Your Future Career Paths</h1>
        <p className="mt-3 text-lg">
          Discover the limitless possibilities that await you after graduation.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex justify-center my-6 space-x-4">
        {filters.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition duration-300`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Career Cards */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCareers.map((career, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 text-center"
          >
            <div className="text-6xl">{career.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-600 mt-4">
              {career.title}
            </h3>
            <p className="text-gray-700 mt-2">{career.description}</p>
          </div>
        ))}
      </div>

      {/* Student Testimonials */}
      <div className="bg-blue-50 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          What Our Alumni Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-700 italic">
              "GVN School guided me toward becoming a successful software
              engineer. The support from teachers was incredible!"
            </p>
            <h3 className="text-blue-600 font-bold mt-2">- Rajesh K.</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-700 italic">
              "The career counseling sessions helped me find my passion in
              business management."
            </p>
            <h3 className="text-blue-600 font-bold mt-2">- Priya S.</h3>
          </div>
        </div>
      </div>

      {/* Career Counseling Section */}
      <div className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold">Need Career Guidance?</h2>
        <p className="mt-2">
          Book a one-on-one career counseling session with our experts.
        </p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold cursor-pointer">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default Career;
