export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back 👋
        </h1>
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
