'use server'

import config from '@payload-config'
import { handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap'

export const serverFunction = handleServerFunctions({
  config,
  importMap,
})
