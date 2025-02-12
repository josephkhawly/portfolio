import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

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
      <body className={` h-screen`}>
        <div className='flex flex-col min-h-full'>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
