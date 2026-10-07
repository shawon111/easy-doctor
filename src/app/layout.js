import { Hanken_Grotesk, Inter, JetBrains_Mono, Manrope, Newsreader, Playfair_Display, Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_DOMAIN || "docxio.site"}`),
  title: {
    default: "Docxio | Professional Doctor Website Builder",
    template: "%s | Docxio",
  },
  description:
    "Create a professional doctor website with Docxio. Choose a medical website template, add your practice details, and help patients find your clinic and booking information.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${newsreader.variable} ${inter.variable} ${playfairDisplay.variable} ${manrope.variable} ${syne.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="material-symbols-loader" strategy="afterInteractive">
          {`(() => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
            document.head.appendChild(link);
          })();`}
        </Script>
        <ToasterProvider />
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
