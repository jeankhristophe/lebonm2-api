import type { Metadata } from 'next'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'LeBonM2 Admin',
  description: 'Panel administration LeBonM2',
}

const Layout = async ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap}>
    {children}
  </RootLayout>
)

export default Layout
