import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import ClientProviders from "../components/ClientProviders";
import ChatWidget from "../components/ChatWidget";
import FloatingFeedbackButton from "../components/FloatingFeedbackButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Axle Towing & Impound - Client Dashboard",
  description: "Your digital growth dashboard powered by AI Acrobatics",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc]`}>
        <ClientProviders>
          <Sidebar />
          <main className="lg:ml-64 min-h-screen pb-20 lg:pb-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          <ChatWidget />
          <FloatingFeedbackButton />
        </ClientProviders>
      </body>
    </html>
  );
}
