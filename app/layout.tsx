import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Moustafa El Mahdy - Data Scientist",
  description: "Data Scientist portfolio website for Moustafa El Mahdy. Specializing in analytics, machine learning, and data engineering with experience in financial and fintech problems.",
  keywords: ["Data Scientist", "Machine Learning", "Data Engineering", "Analytics", "Python", "TensorFlow", "Big Data"],
  authors: [{ name: "Moustafa El Mahdy" }],
  creator: "Moustafa El Mahdy",
  openGraph: {
    title: "Moustafa El Mahdy - Data Scientist",
    description: "Data Scientist portfolio website for Moustafa El Mahdy. Specializing in analytics, machine learning, and data engineering.",
    // TODO: Update this URL after deployment - use Vercel deployment URL initially, then custom domain when configured
    url: "https://moustafaelmahdy.com",
    siteName: "Moustafa El Mahdy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moustafa El Mahdy - Data Scientist",
    description: "Data Scientist portfolio website for Moustafa El Mahdy. Specializing in analytics, machine learning, and data engineering.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} font-sans bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}

