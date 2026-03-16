import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Марафон «Хакни пошук роботи в IT за 14 днів»",
  description:
    "Системно прокачай CV, LinkedIn і підготовку до співбесід – збільшуй свої шанси, щоб наступний лист від рекрутера став офером, а не відмовою.",
  keywords:
    "пошук роботи IT, робота програмістом, IT вакансії України, марафон пошуку роботи, як знайти роботу в IT, резюме програміста, співбесіда IT, junior developer, middle developer, senior developer, remote робота IT, фріланс програмування, IT рекрутинг, курси IT, навчання програмування",

  // Іконки
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  // Open Graph теги
  openGraph: {
    title: "Марафон «Хакни пошук роботи в IT за 14 днів»",
    description:
      "Системно прокачай CV, LinkedIn і підготовку до співбесід – збільшуй свої шанси, щоб наступний лист від рекрутера став офером, а не відмовою.",
    url: "https://offer.dpuchkov.com",
    siteName: "IT Job Marathon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Марафон пошуку роботи в IT - отримай офер за 14 днів",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },

  // Twitter теги
  twitter: {
    card: "summary_large_image",
    title: "Марафон «Хакни пошук роботи в IT за 14 днів»",
    description:
      "Системно прокачай CV, LinkedIn і підготовку до співбесід – збільшуй свої шанси, щоб наступний лист від рекрутера став офером, а не відмовою.",
    images: ["/twitter-image.jpg"],
    creator: "@your_twitter_handle",
  },

  // SEO налаштування
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://offer.dpuchkov.com",
    languages: {
      "uk-UA": "https://offer.dpuchkov.com",
    },
  },

  // Базова URL
  metadataBase: new URL("https://offer.dpuchkov.com"),

  // Додаткові SEO елементи
  authors: [{ name: "IT Job Marathon", url: "https://offer.dpuchkov.com" }],
  creator: "IT Job Marathon",
  publisher: "IT Job Marathon",

  // Налаштування виявлення форматів
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Верифікація пошукових систем
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Категоризація
  category: "education",
  classification: "IT career development",
  applicationName: "IT Job Marathon",

  // PWA налаштування
  manifest: "/manifest.json",

  // Apple Web App налаштування
  appleWebApp: {
    capable: true,
    title: "IT Job Marathon",
    statusBarStyle: "default",
  },

  // Додаткові метатеги для кращої індексації
  other: {
    "revisit-after": "7 days",
    "content-language": "uk-UA",
    distribution: "global",
    rating: "general",
    "geo.region": "UA",
    "geo.country": "Ukraine",
    "dc.language": "uk-UA",
    "dc.title": "Марафон «Хакни пошук роботи в IT за 14 днів»",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={roboto.variable}>
      <head>
        {/* Додаткові метатеги що не покриваються Metadata API */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
