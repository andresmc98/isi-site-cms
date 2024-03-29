import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Clubes from './collections/Clubes'
import Media from './collections/Media'
import Noticias from './collections/Noticias'
import Materias from './collections/Materias'
import Maestros from './collections/Maestros'
import Devs from './collections/Devs'
import Faqs from './collections/Faqs'
import Tags from './collections/Tags'
import Autores from './collections/Autores'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  cors: '*',
  //cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL],
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000,
    max: 100,
  },
  editor: slateEditor({}),
  collections: [
    Autores,
    Clubes,
    Devs,
    Faqs,
    Maestros,
    Materias,
    Media,
    Noticias,
    Tags,
    Users,

  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
