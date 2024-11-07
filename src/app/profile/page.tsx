import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-white/90">Profile Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* User Info */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-white/90">User Information</h2>
          <div className="space-y-4 text-white/70">
            <div>
              <label className="block text-sm text-white/50 mb-1">Name</label>
              <p>{session.user.name}</p>
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-1">Email</label>
              <p>{session.user.email}</p>
            </div>
          </div>
        </div>

        {/* Theme Preference */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-6 text-white/90">Theme Preference</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/50 mb-2">App Theme</label>
              <select 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-white/80"
                defaultValue="dark"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 