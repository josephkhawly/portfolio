import './globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Joseph Khawly',
  description:
    "Hi, I'm Joseph. I'm a full-stack developer building websites with Django and React.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='synthwave'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased h-screen`}>
        <div className='flex min-h-screen items-center justify-center bg-linear-to-br from-gray-950 via-gray-900 to-gray-800'>
          <main className='w-full max-w-3xl px-8 py-20 sm:px-16'>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
