export default function CoursesPage() {
  const courses = [
    { title: "Calculus I", desc: "Foundations of calculus for beginners" },
    { title: "Linear Algebra", desc: "Vectors, matrices, and real-world applications" },
    { title: "Corporate Finance", desc: "Understanding valuation and investments" },
    { title: "Statistics for Data Science", desc: "Probability, inference & data insights" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        🚀 Our Courses
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
              {course.title}
            </h2>
            <p className="text-gray-600">{course.desc}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              View Course
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
