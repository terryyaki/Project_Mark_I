export default function Home() {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Super App</h1>
          <p className="text-xl text-gray-600">Your modular application platform</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Social Media</h2>
              <p className="text-gray-600">Connect with friends and share updates</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Document Creator</h2>
              <p className="text-gray-600">Create and edit documents easily</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
              <p className="text-gray-600">More modules on the way!</p>
            </div>
          </div>
        </div>
      </main>
    )
  }