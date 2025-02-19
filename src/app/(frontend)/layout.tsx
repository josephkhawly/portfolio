import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joseph Khawly',
  description:
    "Hi, I'm Joseph. I'm a full-stack developer building websites with Django and React.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='synthwave' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='min-h-screen bg-background'>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
