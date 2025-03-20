import React from "react";
import ModalImage from "react-modal-image";

const images = [
  { src: "/images/activity1.jpg", title: "Annual Sports Day" },
  { src: "/images/activity2.jpg", title: "Science Exhibition" },
  { src: "/images/activity3.jpg", title: "Art & Craft Workshop" },
  { src: "/images/activity4.jpg", title: "Cultural Festival" },
  { src: "/images/activity5.jpg", title: "Debate Competition" },
  { src: "/images/activity6.jpg", title: "Robotics Club Showcase" },
];

const Gallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">
          College Activities Gallery
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the vibrant activities and events held at our college.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <ModalImage
              small={image.src}
              large={image.src}
              alt={image.title}
              className="w-full h-60 object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
