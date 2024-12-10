import type { 
  Metadata, 
  Viewport 
} from 'next';
import localFont from 'next/font/local';
import "./globals.tailwind.css";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'SILVIC •🌍',
  applicationName: 'silvic-initiative',
  description: 
    `This project is a Progressive Web Application (PWA) designed to crowdsource real-time data on Unidentified Aerial Phenomena (UAPs) and other spatial anomalies. Using decentralized technologies like WebRTC, Helia/IPFS, and IndexedDB, the app ensures data integrity and accessibility while thwarting attempts at centralized disruption.`,
  alternates: {
    canonical: 'https://nlucis/github.io/SILVIC',
  },
  authors: [
    {
      name: 'Artevyx Zon', 
      url: 'nlucis@tuta.io'
    },
  ],
  assets: [],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon.ico',
    },
  },
  keywords: [],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 2.0,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: {
    media: '(prefers-color-scheme: dark)',
    color: '#10F5CC',
  },
  viewportFit: 'contain',
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <main id='app' className={ 'w-full h-full' }>
          {children}
        </main>
      </body>
    </html>
  );
}
