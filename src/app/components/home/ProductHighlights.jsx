export default function ProductHighlights() {
  const highlights = [
    {
      title: "Easy Product Management",
      description:
        "Add, edit, and manage your products effortlessly in one dashboard.",
      icon: "📦",
    },
    {
      title: "Secure & Reliable",
      description:
        "Your data is safe with NextAuth and our secure backend handling.",
      icon: "🔒",
    },
    {
      title: "Analytics & Insights",
      description:
        "Track performance and get insights into your product growth.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-yellow-500">ProductHub?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Manage all your products in one place with powerful features that save you time.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
