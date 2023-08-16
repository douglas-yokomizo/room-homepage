import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

const league = League_Spartan({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-league'
})

export const metadata: Metadata = {
  title: 'Room | Home',
  description: 'Room Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${league.variable} font-sans`}>{children}</body>
    </html>
  )
}
