import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="text-center p-8 bg-gray-100">
    <h2 className="text-4xl font-bold text-green-600 mb-4">
      Welcome to the Open Source App Store
    </h2>
    <p className="text-lg text-gray-600 mb-6">
      Your gateway to a world of free, open, and community-driven software.
    </p>
    <p className="text-lg text-gray-600 mb-6">
      Discover new apps, share your ideas, and contribute to projects.
    </p>
    <Link
      to="/explore"
      className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
    >
      Explore Now
    </Link>
  </section>
)

export default Hero
