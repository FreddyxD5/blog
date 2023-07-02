import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,500;1,400&display=swap" rel="stylesheet"/>
    </head>      
      <body className="layout">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
