import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fiyel Bet - Goat House | Authentic Ethiopian Cuisine',
  description: 'Experience authentic Ethiopian grilled goat meat (Tibs) at Fiyel Bet. Fresh, sizzling, and full of flavor.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

