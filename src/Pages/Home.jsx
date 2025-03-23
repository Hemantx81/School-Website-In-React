import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FAQ from "../Components/Faq";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-white p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Welcome to School Name
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Shaping young minds with passion and excellence.
              </p>
              <Link to="/admissions">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2024/05/17/08/07/pupil-8767681_1280.jpg')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-white p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Excellence in Education
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                A place where learning meets creativity.
              </p>
              <Link to="/about">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2024/05/31/14/46/ai-generated-8800717_1280.jpg')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-white p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Holistic Learning Environment
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Developing well-rounded individuals.
              </p>
              <Link to="/facilities">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Explore Facilities
                </button>
              </Link>
            </div>
          </div>

          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2012/09/10/05/10/steinbach-56641_1280.jpg')",
            }}
          >
            <div className="bg-transparent bg-opacity-50 text-white p-10 rounded-lg text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                Join Our School Community
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                Enroll today and start your journey with us.
              </p>
              <Link to="/contact">
                <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">About Our School</h2>
          <p className="text-lg text-gray-700 mb-12">
            We are a renowned institution that focuses on holistic development,
            academic excellence, and extra-curricular engagement.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {[
            {
              title: "Academic Excellence",
              text: "Strong foundation in all subjects.",
            },
            {
              title: "Modern Facilities",
              text: "State-of-the-art learning spaces.",
            },
            {
              title: "Extracurricular Activities",
              text: "Sports, arts, and clubs for growth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              {
                name: "Science Stream",
                desc: "Physics, Chemistry, Biology & Mathematics",
              },
              {
                name: "Commerce Stream",
                desc: "Accounting, Economics & Business Studies",
              },
              {
                name: "Arts Stream",
                desc: "History, Political Science & Sociology",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-blue-50 shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{course.name}</h3>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              { title: "How to Excel in Studies?", date: "March 1, 2025" },
              { title: "Why Extracurriculars Matter?", date: "March 5, 2025" },
              {
                title: "Tips for College Applications",
                date: "March 10, 2025",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500">{blog.date}</p>
                <Link
                  to="/blog"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">What Our Students Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                text: "This school changed my life!",
                name: "Hari Thapa, 12th Grade",
              },
              {
                text: "I've gained confidence and knowledge!",
                name: "Nisha Chaudhary, 10th Grade",
              },
              {
                text: "The teachers at this school went above and beyond to make learning enjoyable and meaningful. I am a better person because of this experience.!",
                name: "Arun Sharma, 12th Grade",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 shadow-xl rounded-lg p-6 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <p className="text-yellow-600 font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Join Us?</h2>
        <p className="text-lg mb-8">
          Apply today and start your journey with us.
        </p>
        <Link to="/admissions">
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </Link>
      </section>
      <FAQ />
    </div>
  );
};

export default Home;
