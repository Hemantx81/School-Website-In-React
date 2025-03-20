import { Helmet } from "react-helmet";

const notices = [
  {
    id: 1,
    date: "March 15, 2025",
    title: "Annual Examination Schedule Released",
    description:
      "The final examination schedule for all grades has been released. Check the notice board for detailed timetables.",
  },
  {
    id: 2,
    date: "March 10, 2025",
    title: "Admission Open for 2025",
    description:
      "Admissions for the academic year 2025 are now open. Apply before April 30, 2025, to secure your seat.",
  },
  {
    id: 3,
    date: "March 5, 2025",
    title: "School Picnic Announcement",
    description:
      "The school picnic is scheduled for March 25, 2025. Students are requested to submit their consent forms by March 18.",
  },
];

const Notice = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-0">
      {/* SEO Metadata */}
      <Helmet>
        <title>Notices | GVN Secondary School</title>
        <meta
          name="description"
          content="Stay updated with the latest school notices and announcements."
        />
      </Helmet>

      {/* Page Header */}
      <div className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">School Notices</h1>
        <p className="mt-2">Stay updated with the latest announcements</p>
      </div>

      {/* Notice List */}
      <div className="max-w-5xl mx-auto mt-8">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white shadow-md rounded-lg p-6 mb-6 transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {notice.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">{notice.date}</p>
            <p className="text-gray-800 mt-3">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
