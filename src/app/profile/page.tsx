import { UserPreferences } from '@/components/user/UserPreferences';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authConfig);
  
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Info */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">User Information</h2>
          <div className="space-y-2">
            <p>Name: {session.user.name}</p>
            <p>Email: {session.user.email}</p>
          </div>
        </div>

        {/* Preferences */}
        <UserPreferences />
      </div>
    </div>
  );
} 