
"use client"
import './globals.css';

import {useEffect} from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import RequestForm from './components/common/RequestForm';


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  useEffect(() => {
    import('preline')
  }, [])
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <RequestForm/>
        </body>
    </html>
  )
}
