import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Testing Patterns',
  description: 'A nice project to practice testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar title="UnoBooks"/>
        {children}
        <div className='text-center my-8'>
          Resources: <a className='link' href="https://github.com/mauzip/nextjs-testing-patterns" target='_blank' rel='noopener'>
            https://github.com/mauzip/nextjs-testing-patterns
          </a>
        </div>
      </body>
    </html>
  )
}
