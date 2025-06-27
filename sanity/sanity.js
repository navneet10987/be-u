import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ekdjn1ld', // ✅ Your actual Sanity project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})