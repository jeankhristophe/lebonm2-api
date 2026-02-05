/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'
import type { ServerFunctionClient } from 'payload'
import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'LeBonM2 Admin',
  description: 'Panel administration LeBonM2',
}

const serverFunctions: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap} config={config} serverFunction={serverFunctions}>
    {children}
  </RootLayout>
)

export default Layout
