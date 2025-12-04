import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp' // Default export

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'media',
      upload: {
        staticDir: path.resolve(dirname, '../public/assets'),
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'menu-items',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'price', type: 'number', required: true },
        { 
          name: 'category', 
          type: 'select', 
          options: ['Appetizers', 'Main Course', 'Desserts', 'Sides', 'Personal Chef', 'Cooking Class'],
          required: true
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'featured', type: 'checkbox', label: 'Featured on Home' },
      ],
    },
    {
      slug: 'orders',
      fields: [
        { name: 'customerName', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { 
          name: 'items', 
          type: 'array',
          fields: [
            { name: 'menuItem', type: 'relationship', relationTo: 'menu-items', required: true },
            { name: 'quantity', type: 'number', min: 1, required: true },
          ]
        },
        { name: 'total', type: 'number' },
        { name: 'status', type: 'select', options: ['pending', 'completed', 'cancelled'], defaultValue: 'pending' },
      ],
    },
  ],
  secret: 'demo-secret-key-123',
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: {
      url: 'file:' + path.resolve(dirname, 'payload.db'),
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})