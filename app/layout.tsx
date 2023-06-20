import Header from "@/components/layout/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
