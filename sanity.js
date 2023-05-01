import { SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'q26fw7hl',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-30',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}