import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_SC, Noto_Serif_SC, JetBrains_Mono } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-noto-serif-sc',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "欧壹 | AI驱动的增长黑客",
  description: "一个由AI驱动的增长黑客的个人博客，记录AI应用开发与SEO增长经验。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${notoSerifSC.variable} ${jetbrainsMono.variable}`}>
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="bg-editor-bg text-text-primary font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 