import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-mantra.vercel.app"),
  title: {
    default: "AI Mantra — Build Smarter. Grow Faster.",
    template: "%s | AI Mantra",
  },
  description:
    "AI Mantra builds premium websites, AI solutions, automations, and custom software for ambitious businesses.",
  keywords: ["AI solutions", "website development", "custom software", "AI automation", "AI Mantra"],
  openGraph: {
    title: "AI Mantra — Build Smarter. Grow Faster.",
    description: "Premium websites, AI solutions, automation, and custom software for ambitious businesses.",
    type: "website",
    siteName: "AI Mantra",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
