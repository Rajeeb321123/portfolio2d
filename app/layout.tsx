import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins, Sora, Nabla } from 'next/font/google'

import Nav from './components/navbar/Nav'
import Header from './components/Header'
import TopLeftImage from './components/TopLeftImage'
import PageTransition from './components/PageTransition'

const poppins = Poppins({
  weight:["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const nabla = Nabla({
  weight:["400"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nabla',
});

const sora = Sora({
  weight:["100","200","300","400", "500", "600", "700", "800"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rajeeb | Portfolio',
  description: 'Rajeeb Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nabla.variable} ${sora.variable}`}>
      <body className={inter.className}>
        <div className='page text-white  font-sora relative '>
          <TopLeftImage />
          <Nav />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </div>
        </body>
    </html>
  )
}
