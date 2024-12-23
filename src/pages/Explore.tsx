const Explore = () => (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Explore Apps</h1>
      <p className="text-center text-gray-600 mb-6">Browse through categories, popular apps, and discover something new!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example cards, replace with dynamic data */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="p-4 border rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">App {item}</h2>
            <p className="text-gray-600">Description of app {item} goes here...</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Explore;
  