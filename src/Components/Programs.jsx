import { motion } from "framer-motion";
const programs = [
  {
    title: "Science Stream",
    description:
      "GVN offers Science Stream in Grade XI and XII with a package of pre-medical and pre-engineering classes to support student’s career in medical and engineering fields.",
    image: "https://www.premiercollege.edu.np/enroll/images/science.jpg",
  },
  {
    title: "Management Stream",
    description:
      "GVN offers Management Stream with ample exposures to the business environment through excursions, industrial visits, and practical training.",
    image: "https://www.premiercollege.edu.np/enroll/images/management.jpg",
  },
  {
    title: "Humanities Stream",
    description:
      "GVN offers Humanities and Social Science Stream with a wide range of choices in optional subjects and excursions to develop responsible citizens in the future.",
    image: "https://www.premiercollege.edu.np/enroll/images/humanities.jpg",
  },
];

const Programs = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start position (fade-in & slide-up)
              animate={{ opacity: 1, y: 0 }} // End position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delayed stagger effect
              whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="text-gray-700 mt-2">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
