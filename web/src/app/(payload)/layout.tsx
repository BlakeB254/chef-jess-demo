import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import { ReactNode } from 'react'
import { importMap } from './admin/[[...segments]]/importMap'

type Args = {
  children: ReactNode
}

const Layout = ({ children }: Args) => (
  // @ts-expect-error - importMap is internal property not in public types
  <RootLayout config={config} importMap={importMap} serverFunction="http://localhost:3000/api/payload">
    {children}
  </RootLayout>
)

export default Layout
