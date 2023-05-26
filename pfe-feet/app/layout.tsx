import './globals.css'
import { Lato } from 'next/font/google'
const lato = Lato({ weight: '400', subsets: ['latin-ext'] })

export const metadata = {
  title: 'Feet',
  description: 'Feet, compagnon santé réflexo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
