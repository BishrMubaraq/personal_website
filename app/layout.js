import { Cairo } from "next/font/google";
import "./globals.css";

const fontCairo = Cairo({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "Bishr Mubaraq",
  description:
    "Welcome to the personal website of Bishr Mubaraq, showcasing software development projects and professional achievements.",
  keywords:
    "Bishr Mubaraq, Bishr, Bishr Mubarack, software developer,react developer,software engineer,personal website, portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${fontCairo.variable} antialiased min-h-screen bg-[#FEF3E2]`}
      >
        {children}
      </body>
    </html>
  );
}
