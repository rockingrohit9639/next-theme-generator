import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './_components/navbar'
import ThemeProvider from './_components/theme-provider'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Next Theme Generator',
  description: 'Seamless Theme Customization for Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
