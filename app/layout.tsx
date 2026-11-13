import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdant Finance — Financial Wellness for Every Employee",
  description: "Verdant Finance is an AI-powered financial wellness platform that helps companies support their employees' financial security, confidence, and long-term wellbeing.",
  keywords: "employee financial wellness, financial wellbeing, workplace financial benefits, AI financial advisor, employee benefits, financial security",
  openGraph: {
    title: "Verdant Finance — Financial Wellness for Every Employee",
    description: "AI-powered financial wellness that meets employees where they are. Budgeting, planning, investing — one platform for every financial journey.",
    siteName: "Verdant Finance",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
