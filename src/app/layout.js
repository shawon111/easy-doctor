import { Hanken_Grotesk, Inter, JetBrains_Mono, Manrope, Newsreader, Playfair_Display, Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { getMarketingBaseUrl } from "@/lib/seo/urls";
import { MARKETING_OG_IMAGE } from "@/lib/seo/marketing-metadata";

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
  metadataBase: getMarketingBaseUrl(),
  title: {
    default: "Docxio — Doctor Website Builder in Bangladesh",
    template: "%s | Docxio",
  },
  description:
    "Create your professional doctor website with Docxio. Showcase your qualifications, medical services and clinic information, improve your online presence, and receive appointment requests online.",
  openGraph: {
    type: "website",
    siteName: "Docxio",
    title: "Docxio — Doctor Website Builder in Bangladesh",
    description:
      "Create your professional doctor website with Docxio. Showcase your qualifications, medical services and clinic information, improve your online presence, and receive appointment requests online.",
    images: [
      {
        url: MARKETING_OG_IMAGE,
        alt: "Docxio — professional websites for doctors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [MARKETING_OG_IMAGE],
  },
  robots: { index: true, follow: true },
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
