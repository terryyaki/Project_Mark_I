export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Super App</h1>
      <p className="text-xl mb-12">Your modular application platform</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard
          title="Social Media"
          description="Connect with friends and share updates"
          href="/social"
        />
        
        <ModuleCard
          title="Spaces OS"
          description="Your collaborative virtual workspace"
          href="/spaces"
        />

        <ModuleCard
          title="Document Creator"
          description="Create and edit documents easily"
          href="/docs"
        />
      </div>
    </main>
  );
}

function ModuleCard({ title, description, href }: { 
  title: string; 
  description: string; 
  href: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </a>
  );
}