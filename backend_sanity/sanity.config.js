import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './schemas/schema'

export default defineConfig({
  title: 'MySite',
  projectId: 'u5wqh433',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
