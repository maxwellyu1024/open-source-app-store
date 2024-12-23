const Header = () => (
  // <header className="w-screen bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 text-center">
  //   <h1 className="text-3xl font-bold">Open Source App Store</h1>
  //   <p className="text-lg">Discover, explore, and install the best open-source applications</p>
  // </header>
  // <header className="w-screen bg-gradient-to-r from-green-500 to-blue-500 text-white p-4">
  //   <div className="container mx-auto flex justify-between items-center">
  //     <div className="text-2xl font-bold">
  //       <img src="/logo.jpg" alt="Logo" className="h-8 inline-block mr-2" />
  //       Open Source App Store
  //     </div>
  //   </div>
  // </header>
  <header className="w-screen bg-gradient-to-r from-green-500 to-blue-500 text-white p-4">
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-2xl font-bold flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-8 inline-block mr-2" />
        Open Source App Store
      </div>
      <p className="text-sm sm:text-base mt-2 text-center">
        Discover, explore, and install the best open-source applications
      </p>
    </div>
  </header>
);

export default Header;
