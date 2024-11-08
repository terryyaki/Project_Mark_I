import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import AuthProvider from "@/components/providers/SessionProvider"
import TestContent from "./TestContent"

export default async function TestPage() {
  const session = await getServerSession(authOptions)
  let dbUser = null
  let error = null
  
  try {
    if (session?.user?.email) {
      dbUser = await prisma.user.findUnique({
        where: { email: session.user.email }
      })
    }
  } catch (e) {
    error = e
    console.error('Error:', e)
  }

  return (
    <AuthProvider>
      <TestContent 
        session={session}
        dbUser={dbUser}
        error={error}
      />
    </AuthProvider>
  )
} 