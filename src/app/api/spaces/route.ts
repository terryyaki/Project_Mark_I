import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 })
  }
  const json = await req.json()
  const space = await prisma.space.create({
    data: {
      name: json.name,
      description: json.description,
      userId: session.user.id
    }
  })

  return NextResponse.json(space)
} 