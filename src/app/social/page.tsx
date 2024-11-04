export default function SocialPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Social Feed</h1>
          
          {/* Post Creation */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <textarea 
              className="w-full p-2 border rounded-lg mb-2" 
              placeholder="What's on your mind?"
              rows={3}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Post
            </button>
          </div>
  
          {/* Sample Posts */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold mb-2">John Doe</div>
              <p className="text-gray-700">This is a sample post in our social media module!</p>
              <div className="mt-2 text-gray-500 text-sm">2 hours ago</div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="font-bold mb-2">Jane Smith</div>
              <p className="text-gray-700">Another sample post to show the layout.</p>
              <div className="mt-2 text-gray-500 text-sm">4 hours ago</div>
            </div>
          </div>
        </div>
      </main>
    )
  }