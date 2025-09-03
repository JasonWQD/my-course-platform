export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Learn Math & Finance Smarter 🎓
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Interactive online courses designed to make complex topics fun,
          practical, and empowering for students worldwide.
        </p>
        <div className="space-x-4">
          <a
            href="/courses"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100"
          >
            Explore Courses
          </a>
          <a
            href="/login"
            className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600"
          >
            Join Now
          </a>
        </div>
      </div>
    </main>
  );
}
