import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Kavya Pratap Singh | Full Stack & Android Developer',
  description:
    'Portfolio of Kavya Pratap Singh — 5th semester B.Tech student at NIET Noida, passionate about Full Stack Web Development and Android Development.',
  keywords: [
    'Kavya Pratap Singh',
    'NIET Noida',
    'Full Stack Developer',
    'Android Developer',
    'React',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Kavya Pratap Singh' }],
  openGraph: {
    title: 'Kavya Pratap Singh | Developer Portfolio',
    description:
      'Full Stack & Android Developer · B.Tech CSE · NIET Noida',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
