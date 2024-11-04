export default function NavBar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Super App</div>
          <div className="space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/social" className="hover:text-gray-300">Social</a>
          </div>
        </div>
      </nav>
    )
  }