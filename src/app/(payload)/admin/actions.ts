'use server'

import config from '@payload-config'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const serverFunction = (handleServerFunctions as any)({
  config,
  importMap,
})
