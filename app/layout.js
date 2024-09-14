import { Cairo } from "next/font/google";
import "./globals.css";



const fontCairo = Cairo({
  subsets:["latin"],
  weight: ["700", "600", "500", "400"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "Bishr Mubaraq",
  description: "Bishr Mubaraq personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontCairo.variable} antialiased min-h-screen bg-[#FEF3E2]`}
      >
        {children}
      </body>
    </html>
  );
}
