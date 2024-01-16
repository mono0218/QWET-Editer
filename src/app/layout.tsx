import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "../lib/providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <html lang="en" className={"dark w-full h-full"}>
          <body className={inter.className}>
          <NextAuthProvider>
              {children}
          </NextAuthProvider>
          </body>
        </html>
  )
}
