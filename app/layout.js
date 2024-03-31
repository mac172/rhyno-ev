import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Poppins({ subsets: ["latin"], weight: '200' });

export const metadata = {
  title: "Rhyno EV", 
  description: "Enter the future of electric vehicles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='black' className="w-full h-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png"  />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
