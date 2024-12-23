const Header = () => (
  <header className="w-screen bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 relative">
    <div className="absolute top-4 right-4 bg-red-500 rounded-full px-3 py-1 text-sm font-bold">
      WIP
    </div>
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
)

export default Header
