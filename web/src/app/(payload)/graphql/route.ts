/* This file is required for Payload to work */
import config from '@payload-config'
import { GRAPHQL_POST } from '@payloadcms/next/routes'

export const POST = GRAPHQL_POST(config)