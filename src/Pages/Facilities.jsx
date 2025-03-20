import { Helmet } from "react-helmet";
import { useState } from "react";

const Facilities = () => {
  const [activeFacility, setActiveFacility] = useState(0);

  const facilities = [
    {
      title: "Modern Classrooms",
      icon: "🏫",
      description:
        "Fully equipped with smart boards, projectors, and comfortable seating arrangements.",
      images: [
        "https://via.placeholder.com/600x400?text=Classroom+1",
        "https://via.placeholder.com/600x400?text=Classroom+2",
        "https://via.placeholder.com/600x400?text=Classroom+3",
      ],
    },
    {
      title: "Science Laboratories",
      icon: "🧪",
      description:
        "Well-maintained physics, chemistry, and biology labs for practical learning.",
      images: [
        "https://via.placeholder.com/600x400?text=Lab+1",
        "https://via.placeholder.com/600x400?text=Lab+2",
        "https://via.placeholder.com/600x400?text=Lab+3",
      ],
    },
    {
      title: "Library & Study Hall",
      icon: "📚",
      description:
        "A vast collection of books, journals, and digital resources for research and study.",
      images: [
        "https://via.placeholder.com/600x400?text=Library+1",
        "https://via.placeholder.com/600x400?text=Library+2",
        "https://via.placeholder.com/600x400?text=Library+3",
      ],
    },
    {
      title: "Computer Lab",
      icon: "💻",
      description:
        "High-speed internet and latest software for hands-on IT learning.",
      images: [
        "https://via.placeholder.com/600x400?text=Computer+Lab+1",
        "https://via.placeholder.com/600x400?text=Computer+Lab+2",
        "https://via.placeholder.com/600x400?text=Computer+Lab+3",
      ],
    },
    {
      title: "Sports Complex",
      icon: "⚽",
      description:
        "Basketball court, football ground, and indoor games facilities for physical fitness.",
      images: [
        "https://via.placeholder.com/600x400?text=Sports+1",
        "https://via.placeholder.com/600x400?text=Sports+2",
        "https://via.placeholder.com/600x400?text=Sports+3",
      ],
    },
    {
      title: "Cafeteria",
      icon: "🍽️",
      description:
        "Hygienic and nutritious meals served in a comfortable dining environment.",
      images: [
        "https://via.placeholder.com/600x400?text=Cafeteria+1",
        "https://via.placeholder.com/600x400?text=Cafeteria+2",
        "https://via.placeholder.com/600x400?text=Cafeteria+3",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Facilities | GVN Secondary School</title>
        <meta
          name="description"
          content="Explore the modern facilities provided by GVN Secondary School, including classrooms, labs, and sports amenities."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Our School Facilities</h1>
        <p className="mt-3 text-lg">
          Discover a world-class learning environment that supports academic and
          extracurricular growth.
        </p>
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 text-center cursor-pointer"
            onClick={() => setActiveFacility(index)}
          >
            <div className="text-6xl">{facility.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-600 mt-4">
              {facility.title}
            </h3>
            <p className="text-gray-700 mt-2">{facility.description}</p>
          </div>
        ))}
      </div>

      {/* Image Carousel for Selected Facility */}
      <div className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          {facilities[activeFacility].title} Gallery
        </h3>
        <div className="relative">
          <img
            src={facilities[activeFacility].images[0]}
            alt={facilities[activeFacility].title}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer">
            <button
              onClick={() =>
                setActiveFacility((prev) =>
                  prev === 0 ? facilities.length - 1 : prev - 1
                )
              }
            >
              &#8592; Prev
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer">
            <button
              onClick={() =>
                setActiveFacility((prev) =>
                  prev === facilities.length - 1 ? 0 : prev + 1
                )
              }
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Virtual Tour Video */}
      <div className="max-w-6xl mx-auto py-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">
          Take a Virtual Tour of Our Campus
        </h3>
        <div className="relative w-full h-80">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual virtual tour video URL
            title="YouTube video player"
            className="rounded-lg"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="max-w-6xl mx-auto py-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Find Us on the Map
        </h3>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5763.048786864224!2d81.61881041873617!3d28.059247147781633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998671beed48441%3A0xeee48c12c19f2206!2sGVN%20Secondary%20School!5e0!3m2!1sen!2snp!4v1741672618033!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold">Visit Our Campus</h2>
        <p className="mt-2">
          Schedule a tour and experience our top-notch facilities firsthand.
        </p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
          Book a Campus Tour
        </button>
      </div>
    </div>
  );
};

export default Facilities;
