import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer:
        "The admission requirements vary depending on the grade level. Please refer to the admission page for specific details.",
    },
    {
      question: "Is financial aid available?",
      answer:
        "Yes, financial aid is available for eligible students. Please contact the admissions office for more information.",
    },
    {
      question: "What extracurricular activities are offered?",
      answer:
        "We offer a variety of extracurricular activities, including sports, music, arts, and various clubs.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer:
        "Our student-to-teacher ratio is 15:1, ensuring personalized attention for every student.",
    },
    {
      question: "How can I schedule a campus tour?",
      answer:
        "You can schedule a campus tour by filling out the form on our website or by contacting the admissions office directly.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center"
              >
                <h3 className="text-1xl font-semibold">{faq.question}</h3>
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
