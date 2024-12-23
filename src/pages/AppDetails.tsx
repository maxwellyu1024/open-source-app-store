import { useParams } from 'react-router-dom';

const AppDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">App Details</h1>
      <p className="text-gray-600 text-center mb-6">
        Detailed information about app with ID: {id}.
      </p>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">App Name</h2>
        <p>Description of the app goes here...</p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition mt-4">
          Install App
        </button>
      </div>
    </div>
  );
};

export default AppDetails;
