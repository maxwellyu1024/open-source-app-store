import { Link } from 'react-router-dom';

const Community = () => (
  <section className="p-6 bg-white">
    <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Join the Community</h2>
    <p className="text-gray-600 text-center mb-6">
      Become part of our vibrant open-source community. Share your ideas, contribute to projects, and grow together.
    </p>
    <div className="text-center">
      <Link
        to="/learn-more"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Learn More
      </Link>
    </div>
  </section>
);

export default Community;
