import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrasilClear - Sua Solução Definitiva',
  description: 'Descubra como milhares de brasileiros estão transformando seus resultados com nossa metodologia exclusiva.',
  openGraph: {
    title: 'BrasilClear - Sua Solução Definitiva',
    description: 'Descubra como milhares de brasileiros estão transformando seus resultados com nossa metodologia exclusiva.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}