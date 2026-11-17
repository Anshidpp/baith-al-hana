import type { Metadata } from "next";
import { Nunito, Inter, Cairo } from "next/font/google";
import Prefs from "@/components/Prefs";
import "./globals.css";

const display = Nunito({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const arabic = Cairo({ subsets: ["arabic", "latin"], variable: "--font-ar", weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Baith Al Hana Trading Center | Cleaning, Plastic, Paper & Household Supplies",
  description: "Retail and wholesale cleaning, plastic, paper and household products from Baith Al Hana Trading Center.",
  openGraph: { title: "Baith Al Hana Trading Center", description: "Retail and wholesale household supplies.", type: "website" },
};

// Sets saved theme/direction before first paint to avoid a flash.
const init = `try{var d=document.documentElement,l=localStorage.getItem('bah-lang'),t=localStorage.getItem('bah-theme');if(l==='ar'){d.lang='ar';d.dir='rtl'}if(!t&&matchMedia('(prefers-color-scheme: dark)').matches)t='dark';if(t==='dark')d.dataset.theme='dark'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: init }} /></head>
      <body><Prefs>{children}</Prefs></body>
    </html>
  );
}
