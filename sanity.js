import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: process.env.API_VERSION,
    token: process.env.TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}