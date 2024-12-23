const Features = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
      Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-500">Open Source</h3>
        <p className="text-gray-600">
          All apps are open-source, ensuring transparency and community support.
        </p>
      </div>
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-500">Secure</h3>
        <p className="text-gray-600">
          Verified applications to keep your devices safe and secure.
        </p>
      </div>
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-500">
          Community Driven
        </h3>
        <p className="text-gray-600">
          Built by developers and supported by a vibrant community.
        </p>
      </div>
    </div>
  </section>
)

export default Features
