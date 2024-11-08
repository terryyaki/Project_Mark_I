'use client'

import LoginButton from "@/components/auth/LoginButton"

type Props = {
  session: any
  dbUser: any
  error: any
}

export default function TestContent({ session, dbUser, error }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Auth Test Page</h1>
      
      <div className="mb-4">
        <LoginButton />
      </div>
      
      {error && (
        <div className="p-4 bg-red-500/10 rounded-lg mb-4">
          <h2 className="font-semibold mb-2 text-red-400">Error:</h2>
          <pre className="text-sm text-red-300">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      )}

      <div className="space-y-4">
        <div className="p-4 bg-white/5 rounded-lg">
          <h2 className="font-semibold mb-2 text-white">Session Data:</h2>
          <pre className="text-sm text-white/80">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        <div className="p-4 bg-white/5 rounded-lg">
          <h2 className="font-semibold mb-2 text-white">Database User:</h2>
          <pre className="text-sm text-white/80">
            {JSON.stringify(dbUser, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
} 