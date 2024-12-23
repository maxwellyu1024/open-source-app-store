import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full bg-white shadow p-4">
    <div className="container mx-auto flex justify-center space-x-6">
      <Link to="/" className="text-gray-700 hover:text-blue-500 font-semibold">Home</Link>
      <Link to="/explore" className="text-gray-700 hover:text-blue-500 font-semibold">Explore</Link>
      <Link to="/community" className="text-gray-700 hover:text-blue-500 font-semibold">Community</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-semibold">Contact</Link>
      <Link to="/developer" className="text-gray-700 hover:text-blue-500 font-semibold">Developer</Link>
      <Link to="/help" className="text-gray-700 hover:text-blue-500 font-semibold">Help</Link>
    </div>
  </nav>
);

export default Navbar;
