import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Your personal website description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex h-full bg-background text-foreground`}>
        <div className="flex flex-grow">
          <main className="flex-grow overflow-auto">
            <ContentArea>{children}</ContentArea>
          </main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
