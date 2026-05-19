import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Агентство Автопилот — автоматизация бизнеса на базе ИИ",
  description: "Автоматизируем рутину. Внедряем ИИ. Ты занимаешься главным.",
  openGraph: {
    title: "Агентство Автопилот",
    description: "Бизнес который работает без тебя.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
