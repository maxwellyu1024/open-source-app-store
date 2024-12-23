const DeveloperPortal = () => (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Developer Portal</h1>
      <p className="text-gray-600 text-center mb-6">
        Submit your applications, manage your projects, and contribute to the ecosystem.
      </p>
      <div className="flex justify-center">
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
          onClick={() => alert('Start Contributing')}
        >
          Start Contributing
        </button>
      </div>
    </div>
  );
  
  export default DeveloperPortal;
  