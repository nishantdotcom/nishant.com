import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nishant",
  description:
    "Welcome to Nishant's portfolio. Explore my projects and skills.",
  keywords: "portfolio, projects, skills, web development, Nishant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
