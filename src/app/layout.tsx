import './globals.css'
import NavBar from '@/components/navigation/NavBar'

export const metadata = {
  title: 'Super App',
  description: 'Your modular application platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}