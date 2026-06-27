import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

// Google Fonts
const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-rounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "はやぶさの里",
  description: "Falcon's Aerie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}
        <Script
          src="[https://www.googletagmanager.com/gtag/js?id=G-4BZNDPJN6H](https://www.googletagmanager.com/gtag/js?id=G-4BZNDPJN6H)"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4BZNDPJN6H');
          `}
        </Script>
      </head>
      <body className={mPlusRounded1c.variable}>
        {/* ヘッダー */}
        <header className="header">
          <div className="glowLayer"></div>
          <div className="highlightLayer"></div>
          <div className="topLine"></div>
          <div className="subLine"></div>
          <div className="inner">
            <h1 className="title">はやぶさの里</h1>
            <nav className="nav">
              <Link href="/" className="navLink">ホーム</Link>
              <Link href="/activities" className="navLink">活動</Link>
              <Link href="/things" className="navLink">置き場</Link>
              <Link href="/blog" className="navLink">ブログ</Link>
              <Link href="/contact" className="navLink">お問い合わせ</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="glowLayer"></div>
          <div className="highlightLayer"></div>
          <div className="topLine"></div>
          <div className="subLine"></div>
          <div className="inner">
            <p>&copy; 2026 はやぶさの里. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
