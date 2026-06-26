import { Geist, Geist_Mono, Shippori_Mincho, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const shipporiMincho = Shippori_Mincho({
  weight: "400",
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});
