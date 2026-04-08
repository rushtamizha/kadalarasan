import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutoSlidingGallery from "@/components/Gallery";
import ContactButton from "@/components/WhatsAppButton";
import SpecialOfferPopup from "@/components/SpecialOfferPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// High-Ranking SEO Metadata
export const metadata = {
  title: "Kadal Arasan Tours & Travels | Best Andaman Honeymoon & Tour Packages",
  description: "Book your dream Andaman holiday with Kadal Arasan Tours. Exclusive packages for Havelock, Neil Island, and Port Blair. Best price guaranteed.",
  keywords: ["Andaman tour packages", "Kadal Arasan", "Honeymoon in Andaman", "Havelock Island ferry", "Sri Vijayapuram tours"],
  metadataBase: new URL('https://kadal-arasan.in'),
  icons: {
    icon: '/logo.jpg', // Standard favicon
    apple: '/logo.jpg', // For iPhone home screens
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: "Kadal Arasan Tours & Travels | Andaman Island Experts",
    description: "Premium Andaman Tour Operator. Experience luxury and adventure.",
    url: 'https://kadal-arasan.in',
    siteName: 'Kadal Arasan Tours',
    images: [{ url: '/banner.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  // Local Business Schema for Google Maps/Search ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Kadal Arasan Tours & Travels",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fisheries Colony, Junglighat",
      "addressLocality": "Sri Vijayapuram",
      "addressRegion": "South Andaman",
      "postalCode": "744101",
      "addressCountry": "IN"
    },
    "telephone": "+918056625577",
    "url": "https://kadal-arasan.in"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
        <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head> 
      <body className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white">
        <Navbar />
        {/* main ensures Google sees the central content correctly */}
        <main className="flex-grow">
          {children}
        </main>
        <AutoSlidingGallery/>
        <ContactButton/>
        <SpecialOfferPopup/>
        <Footer />
      </body>
    </html>
  );
}