import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Ageng_Personal Website",
  description: "UI/UX Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Pasang class font di body */}
      <body className={`${dmSans.variable} font-sans antialiased bg-[#02050A] text-white`}>
        {children}
      </body>
    </html>
  );
}