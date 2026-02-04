/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'
import config from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap'
import { serverFunction } from './admin/actions'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'LeBonM2 Admin',
  description: 'Panel administration LeBonM2',
}

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={config} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
