import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';

const DefaultLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Navbar />
   
    <main className="flex-grow">

      <Outlet />
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
