import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./contexts/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CPRG 306 Demos",
  description: "Winter 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* TODO: ADD CONTEXT AROUND THE CHILDREN PROP */}
        <UserProvider>
          {/* Site Header Here */}
          {/* Side menu that's always available */}
          {children}
          {/* Site footer */}
        </UserProvider>
      </body>
    </html>
  );
}
