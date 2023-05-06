import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {PROJECT_ID, TOKEN} from './alternative_env'

export const client = createClient({
    projectId: PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-04-30',
    token: TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}