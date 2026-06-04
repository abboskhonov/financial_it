import type { Metadata } from "next";
import { Libre_Baskerville, Inter, Lora } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/config";
import { ThemeProvider } from "@/components/theme-provider";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "News, analysis and insights on technology, finance, and the digital economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.variable, libre.variable, lora.variable)}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body">
        <Script id="theme-init" strategy="beforeInteractive">{
          `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`
        }</Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
