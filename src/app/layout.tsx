import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arush",
  description: "I build scalable web & mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          expand={true}
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "rgb(23 23 23)",
              border: "1px solid rgb(38 38 38)",
              color: "rgb(250 250 250)",
            },
          }}
        />
      </body>
    </html>
  );
}
