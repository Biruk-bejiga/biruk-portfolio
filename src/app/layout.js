import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Import the Navbar component
import { ThemeProvider } from "@/components/ThemeProvider"; // Import the ThemeProvider
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biruk's Portfolio", // Updated title
  description: "Modern Portfolio built with Next.js and Tailwind CSS", // Updated description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar /> {/* Render the Navbar */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
