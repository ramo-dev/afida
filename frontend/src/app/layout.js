import localFont from "next/font/local";
import { headers } from 'next/headers'
import { Providers } from "@/app/lib/providers";
import { cookieToInitialState } from 'wagmi'
import { config } from '@/app/lib/wagmi'
import "./assets/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Popup from "./components/Popup";



export const metadata = {
  title: "Afida Crowd funding",
  description: "Secure, Transparent and Reliable crowdFunding on Chain",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(
    config,
    headers().get('cookie'),
  )
  return (
    <html lang="en">
      <body className={`antialiased bg-black`}>

        <Providers initialState={initialState}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Popup />
      </body>
    </html>
  );
}
