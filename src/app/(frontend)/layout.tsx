import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LeBonM2 API',
  description: 'API LeBonM2 - Immobilier Antilles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
