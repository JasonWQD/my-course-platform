export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          About FinMath
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We believe learning math and finance should be exciting, accessible,
          and relevant. Our platform combines high-quality lectures with
          interactive resources to make sure you’re not just memorizing formulas
          — you’re mastering concepts for real life.
        </p>
        <img
          src="/globe.svg"
          alt="Learning together"
          className="mx-auto w-64 opacity-80"
        />
      </div>
    </main>
  );
}
