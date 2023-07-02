import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Providers from "@/app/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DotePeack',
  description: 'My next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Providers>
      <Header/>

      { children }
      </Providers>
      </body>
    </html>
  )
}
