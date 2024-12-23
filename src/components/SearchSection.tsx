const SearchSection = () => (
    <section className="p-6 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Find the Perfect App</h2>
      <div className="flex justify-center items-center gap-4">
        <input
          type="text"
          className="p-3 border rounded w-2/3"
          placeholder="Search for apps..."
        />
        <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </section>
  );
  
  export default SearchSection;
  