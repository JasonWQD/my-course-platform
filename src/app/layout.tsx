import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FinMath - Learn Math & Finance Smarter",
  description:
    "Interactive courses in mathematics and finance for the next generation of learners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* 🌐 Navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-extrabold text-indigo-600">
              FinMath
            </Link>
            <div className="space-x-6 text-lg font-medium">
              <Link href="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
              <Link href="/courses" className="hover:text-indigo-600 transition">
                Courses
              </Link>
              <Link href="/about" className="hover:text-indigo-600 transition">
                About
              </Link>
              <Link
                href="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                Login
              </Link>
            </div>
          </nav>
        </header>

        {/* 📄 Page Content */}
        <main className="flex-grow">{children}</main>

        {/* ⚡ Footer */}
        <footer className="bg-indigo-600 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold">FinMath</h2>
              <p className="mt-2 text-sm text-indigo-200">
                Empowering students to master math and finance through engaging
                online learning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:underline">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Stay Connected</h3>
              <p className="mt-2 text-indigo-200">
                Follow us for updates and free resources.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-3">
                <a href="#" className="hover:text-yellow-300">
                  🐦 Twitter
                </a>
                <a href="#" className="hover:text-yellow-300">
                  📘 Facebook
                </a>
                <a href="#" className="hover:text-yellow-300">
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-indigo-200 text-sm mt-6">
            © {new Date().getFullYear()} FinMath. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
