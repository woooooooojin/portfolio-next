import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Woooooojin's Portfolio",
  description: 'portfolio nextJS ver',
}

export default function RootLayout({ children }) {
  return (
        <html lang="ko" suppressHydrationWarning>
          <body className={inter.className}>
            <Providers>
               <Header/>
              {children}
              <Footer/>
            </Providers>
          </body>
       </html>
      
  )
   
}
