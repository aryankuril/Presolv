 import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import localFont from 'next/font/local';

// Load Futura font files
const futuraBold = localFont({
  src: '../../public/fonts/Futura-Bold.woff2',
  variable: '--font-futura-bold',
});

const futuraHvBT = localFont({
  src: '../../public/fonts/FuturaHv-BT.woff2',
  variable: '--font-futura-hv-bt',
});

const futuraMdBT = localFont({
  src: '../../public/fonts/FuturaMd-BT.woff2',
  variable: '--font-futura-md-bt',
});

const futuraBkBT = localFont({
  src: '../../public/fonts/FuturaBK-BT.woff2',
  variable: '--font-futura-bk-bt',
});

export const metadata: Metadata = {
  title: "Presolv360",
  description: "Online Dispute Resolution Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://firebaseapp.com" />
        <link rel="dns-prefetch" href="https://firebaseapp.com" />
      </head>
      <body className={`
        ${futuraBold.variable} 
        ${futuraHvBT.variable}
        ${futuraMdBT.variable}
        ${futuraBkBT.variable}
        antialiased min-h-screen bg-[#0A0A0A] text-white
      `}>
        <AuthProvider>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
