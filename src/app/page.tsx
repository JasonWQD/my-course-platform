// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold">My Course Platform</h1>
        <nav>
          <a href="/courses" className="mr-4 hover:text-blue-600">Courses</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Learn, Grow, Succeed</h2>
        <p className="text-lg mb-6">Explore our courses and take your skills to the next level.</p>
        <a href="/courses" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">Browse Courses</a>
      </section>

      {/* Courses Preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">React Basics</h4>
            <p className="text-gray-600">Get started with React and build dynamic web apps.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Next.js Advanced</h4>
            <p className="text-gray-600">Master server-side rendering and the App Router.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Data Science 101</h4>
            <p className="text-gray-600">Learn Python, statistics, and machine learning basics.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        &copy; 2025 My Course Platform. All rights reserved.
      </footer>
    </main>
  );
}
